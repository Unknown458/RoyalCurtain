import { useEffect, useState, useRef } from 'react'
import type { GalleryItem } from './galleryData'
import { buildWhatsAppLink, PHONE_LANDLINE } from './galleryData'

interface ImageModalProps {
  item: GalleryItem | null
  onClose: () => void
}

export default function ImageModal({ item, onClose }: ImageModalProps) {
  const [isZoomed, setIsZoomed] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [videoProgress, setVideoProgress] = useState(0)
  const [hasRealVideo, setHasRealVideo] = useState(false)

  const videoRef = useRef<HTMLVideoElement | null>(null)
  const timerRef = useRef<number | null>(null)

  const isVideo = item?.mediaType === 'video' || item?.cat === 'videos'

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (item) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
      setIsZoomed(false)
      setIsPlaying(isVideo) // auto-start motion if video
      setVideoProgress(0)
      setHasRealVideo(false)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [item, onClose, isVideo])

  // Simulated progress timer for motion demo
  useEffect(() => {
    if (isVideo && isPlaying && !hasRealVideo) {
      timerRef.current = window.setInterval(() => {
        setVideoProgress((prev) => (prev >= 100 ? 0 : prev + 2.5))
      }, 1000)
    } else {
      if (timerRef.current) clearInterval(timerRef.current)
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isVideo, isPlaying, hasRealVideo])

  if (!item) return null

  const waQuoteUrl = buildWhatsAppLink(item.title, item.code)

  const toggleVideoPlayback = () => {
    if (videoRef.current && hasRealVideo) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
      }
    } else {
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="royal-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="royal-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="royal-modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="royal-modal-grid">
          {/* ─── LEFT: Full-Bleed Media (Image or Video) ─── */}
          <div className="royal-modal-visual">
            {isVideo ? (
              /* Video Player on the Left Side */
              <div className="modal-video-wrapper">
                {item.videoSrc && (
                  <video
                    ref={videoRef}
                    src={item.videoSrc}
                    poster={item.img}
                    playsInline
                    muted={isMuted}
                    onLoadedData={() => setHasRealVideo(true)}
                    onEnded={() => setIsPlaying(false)}
                    className={`modal-native-video ${hasRealVideo && isPlaying ? 'active' : 'hidden'}`}
                  />
                )}

                {/* Poster / Motion Canvas */}
                {(!hasRealVideo || !isPlaying) && (
                  <div className="modal-poster-holder" onClick={toggleVideoPlayback}>
                    <img
                      src={item.img}
                      alt={item.title}
                      className={`modal-poster-img ${isPlaying ? 'motion-pan' : ''}`}
                    />
                    <div className="modal-video-vignette"></div>

                    {/* Central Play Button */}
                    {!isPlaying && (
                      <div className="modal-center-play">
                        <span className="modal-play-arrow">▶</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Video Badges */}
                <div className="modal-video-top-badge">
                  <span>🎬 Motion Video Reel</span>
                  {item.duration && <span className="modal-dur-badge">⏱ {item.duration}</span>}
                </div>

                {/* Bottom Video Controls */}
                <div className="modal-video-bottom-controls">
                  <div className="modal-video-progress-bar">
                    <div
                      className="modal-progress-fill"
                      style={{ width: `${videoProgress}%` }}
                    ></div>
                  </div>
                  <div className="modal-video-btns-row">
                    <button className="modal-ctrl-btn" onClick={toggleVideoPlayback}>
                      {isPlaying ? '⏸ Pause' : '▶ Play Motion'}
                    </button>
                    <button
                      className="modal-ctrl-btn"
                      onClick={() => {
                        setIsMuted(!isMuted)
                        if (videoRef.current) videoRef.current.muted = !isMuted
                      }}
                    >
                      {isMuted ? '🔇 Muted' : '🔊 Sound'}
                    </button>
                    <span className="modal-video-status">
                      {isPlaying ? '● Playing Demonstration' : 'Click to Play'}
                    </span>
                  </div>
                </div>

                {/* Item ref badge overlaid on video */}
                <div className="royal-modal-code-badge">Item Ref: {item.code}</div>
              </div>
            ) : (
              /* Standard High-Res Image with Zoom */
              <>
                <div
                  className={`royal-modal-img-wrapper ${isZoomed ? 'zoomed' : ''}`}
                  onClick={() => setIsZoomed(!isZoomed)}
                  title="Click to zoom"
                >
                  <img src={item.img} alt={item.title} />
                  <div className="royal-zoom-hint">
                    <span>{isZoomed ? '🔍 Click to Reset' : '🔍 Hover / tap to zoom'}</span>
                  </div>
                </div>
                {/* Item ref badge overlaid on image */}
                <div className="royal-modal-code-badge">Item Ref: {item.code}</div>
              </>
            )}
          </div>

          {/* ─── RIGHT: Product Details ─── */}
          <div className="royal-modal-info">
            <div className="royal-modal-tagline">
              <span className="royal-pill-badge">{item.type}</span>
              <span className="royal-pill-badge outline">{item.room}</span>
              {item.motorizedAvailable && (
                <span className="royal-pill-badge gold">⚡ Motorization Ready</span>
              )}
              {isVideo && <span className="royal-pill-badge video-pill">📹 Video In Action</span>}
            </div>

            <h2 className="royal-modal-title">{item.title}</h2>
            <p className="royal-modal-subtitle">{item.subtitle}</p>

            <div className="royal-divider-gold"></div>

            <p className="royal-modal-desc">{item.description}</p>

            {/* Specifications Matrix */}
            <div className="royal-specs-grid">
              <div className="royal-spec-item">
                <span className="spec-label">Fabric / Material</span>
                <span className="spec-val">{item.fabric}</span>
              </div>
              <div className="royal-spec-item">
                <span className="spec-label">Light Filtration</span>
                <span className="spec-val">{item.light}</span>
              </div>
              <div className="royal-spec-item">
                <span className="spec-label">Privacy Level</span>
                <span className="spec-val">{item.privacy}</span>
              </div>
              <div className="royal-spec-item">
                <span className="spec-label">Maintenance &amp; Care</span>
                <span className="spec-val">{item.care}</span>
              </div>
            </div>

            {/* Heading Options */}
            {item.headingStyles && item.headingStyles.length > 0 && (
              <div className="royal-modal-headings">
                <span className="headings-title">Available Heading &amp; Track Finishes:</span>
                <div className="heading-chips">
                  {item.headingStyles.map((style) => (
                    <span key={style} className="heading-chip">
                      ✦ {style}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Consultation CTAs */}
            <div className="royal-modal-actions">
              <a
                href={waQuoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-royal-primary"
              >
                💬 Ask on WhatsApp for {item.code}
              </a>
              <a href={`tel:${PHONE_LANDLINE.replace(/\s+/g, '')}`} className="btn-royal-outline">
                📞 Call Showroom ({PHONE_LANDLINE})
              </a>
            </div>

            <p className="royal-modal-guarantee">
              ✓ All curtains custom-made to your measurements · Free in-home consultation across
              Gauteng.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
