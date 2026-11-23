import { useState, useRef, useEffect } from 'react'
import {
  allGalleryItems,
  WHATSAPP_BASE_URL,
  type GalleryItem,
} from './galleryData'
import ImageModal from './ImageModal'

export default function VideoSection() {
  const videoItems = allGalleryItems.filter(
    (item) => item.mediaType === 'video' || item.cat === 'videos'
  )

  // Top featured player: keeps 1 default video
  const defaultVideo: GalleryItem = videoItems[0] || allGalleryItems[0]

  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [isMuted, setIsMuted] = useState<boolean>(true)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [hasRealVideo, setHasRealVideo] = useState<boolean>(false)

  // Dialog state: when user clicks any video card in the list below, open dialog
  const [modalVideoItem, setModalVideoItem] = useState<GalleryItem | null>(null)

  const videoElementRef = useRef<HTMLVideoElement | null>(null)
  const progressTimerRef = useRef<number | null>(null)

  const defaultTotalSeconds = 48 // 0:48

  useEffect(() => {
    if (isPlaying && !hasRealVideo) {
      progressTimerRef.current = window.setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= defaultTotalSeconds) {
            setIsPlaying(false)
            return 0
          }
          return prev + 1
        })
      }, 1000)
    } else {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current)
    }

    return () => {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current)
    }
  }, [isPlaying, hasRealVideo])

  const togglePlay = () => {
    if (videoElementRef.current && hasRealVideo) {
      if (isPlaying) {
        videoElementRef.current.pause()
        setIsPlaying(false)
      } else {
        videoElementRef.current.play()
        setIsPlaying(true)
      }
    } else {
      setIsPlaying(!isPlaying)
    }
  }

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60)
    const s = Math.floor(secs % 60)
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }

  const progressPercent = Math.min(100, (currentTime / defaultTotalSeconds) * 100)

  return (
    <section className="royal-video-showcase-section" id="videos">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header-center">
          <span className="section-eyebrow">LIVING AMBIANCE IN MOTION</span>
          <h2 className="section-title">Experience the Grace of Movement</h2>
          <p className="section-lead">
            Curtains and architectural blinds are living elements of interior design. Watch our
            whisper-quiet motorized wave tracks, fluid sheer transitions, and precision timber tilts
            glide in real-world residences across Gauteng.
          </p>
        </div>

        {/* ─── Top: Big Featured Video Player (One Default Video) ─── */}
        <div className={`royal-cinema-player-card ${isPlaying ? 'is-playing' : ''}`}>
          <div className="cinema-screen-container">
            {/* Native Video Element if file exists */}
            {defaultVideo.videoSrc && (
              <video
                ref={videoElementRef}
                src={defaultVideo.videoSrc}
                poster={defaultVideo.img}
                playsInline
                muted={isMuted}
                onLoadedData={() => setHasRealVideo(true)}
                onTimeUpdate={() => {
                  if (videoElementRef.current) {
                    setCurrentTime(videoElementRef.current.currentTime)
                  }
                }}
                onEnded={() => setIsPlaying(false)}
                className={`native-video-player ${hasRealVideo && isPlaying ? 'active' : 'hidden'}`}
              />
            )}

            {/* Poster & Motion Simulation */}
            {(!hasRealVideo || !isPlaying) && (
              <div className="cinema-poster-wrapper">
                <img
                  src={defaultVideo.img}
                  alt={defaultVideo.title}
                  className={`cinema-poster-img ${isPlaying ? 'motion-playing' : ''}`}
                />
                <div className="cinema-vignette-overlay"></div>
              </div>
            )}

            {/* Top Info Bar Over Video */}
            <div className="cinema-top-bar">
              <div className="cinema-badges">
                <span className="badge-category">✦ {defaultVideo.type}</span>
                <span className="badge-resolution">4K UHD</span>
                <span className="badge-duration">⏱ {defaultVideo.duration || '0:48'}</span>
              </div>
              <button
                className="btn-theatre-toggle"
                onClick={() => setModalVideoItem(defaultVideo)}
                title="Open Detailed Modal"
              >
                ⛶ Open Detailed View
              </button>
            </div>

            {/* Center Play/Pause Pulsing Trigger */}
            {!isPlaying && (
              <div className="cinema-center-trigger" onClick={togglePlay}>
                <div className="play-pulse-aura"></div>
                <div className="play-btn-circle">
                  <span className="play-icon-arrow">▶</span>
                </div>
                <span className="play-btn-label">
                  Watch Featured Motion Demo ({defaultVideo.duration || '0:48'})
                </span>
              </div>
            )}

            {/* Bottom Cinematic Control Bar */}
            <div className="cinema-control-bar">
              {/* Progress Scrubber */}
              <div
                className="cinema-progress-track"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const clickX = e.clientX - rect.left
                  const newPercent = clickX / rect.width
                  const newTime = newPercent * defaultTotalSeconds
                  setCurrentTime(newTime)
                  if (videoElementRef.current && hasRealVideo) {
                    videoElementRef.current.currentTime = newTime
                  }
                }}
              >
                <div
                  className="cinema-progress-fill"
                  style={{ width: `${progressPercent}%` }}
                ></div>
                <div
                  className="cinema-progress-handle"
                  style={{ left: `${progressPercent}%` }}
                ></div>
              </div>

              {/* Controls Row */}
              <div className="cinema-controls-row">
                <div className="controls-left">
                  <button className="ctrl-btn play-pause-btn" onClick={togglePlay}>
                    {isPlaying ? '⏸ Pause' : '▶ Play'}
                  </button>

                  <button
                    className="ctrl-btn mute-btn"
                    onClick={() => {
                      setIsMuted(!isMuted)
                      if (videoElementRef.current) {
                        videoElementRef.current.muted = !isMuted
                      }
                    }}
                  >
                    {isMuted ? '🔇 Muted' : '🔊 Sound'}
                  </button>

                  <div className="timecode-display">
                    <span>{formatTime(currentTime)}</span>
                    <span className="timecode-divider">/</span>
                    <span>{defaultVideo.duration || '0:48'}</span>
                  </div>
                </div>

                <div className="controls-right">
                  <a
                    href={`${WHATSAPP_BASE_URL}?text=Hi%20Royal%20Curtains%20%26%20Blinds!%20I%20watched%20your%20featured%20video%20(${encodeURIComponent(
                      defaultVideo.title
                    )})%20and%20would%20like%20a%20quote.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-video-wa-inquire"
                  >
                    💬 Inquire on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Video Details Footer */}
          <div className="cinema-details-footer">
            <div className="details-col-text">
              <span className="active-tagline">{defaultVideo.subtitle}</span>
              <h3 className="active-video-title">{defaultVideo.title}</h3>
              <p className="active-video-desc">{defaultVideo.description}</p>
            </div>

            <div className="details-col-highlights">
              <span className="highlights-title">ENGINEERED SPECIFICATIONS:</span>
              <ul className="highlights-pills-list">
                <li className="highlight-pill">✦ Fabric: {defaultVideo.fabric}</li>
                <li className="highlight-pill">✦ Light Control: {defaultVideo.light}</li>
                <li className="highlight-pill">✦ Privacy Level: {defaultVideo.privacy}</li>
                <li className="highlight-pill">✦ Room Suitability: {defaultVideo.room}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ─── Downside: Small Video List (Clicking Opens Dialog Like Photos) ─── */}
        <div className="video-playlist-container">
          <div className="playlist-header">
            <h4>Curated Motion Library ({videoItems.length} Video Demonstrations)</h4>
            <span className="playlist-hint">Click any video to open full details &amp; player</span>
          </div>

          <div className="video-playlist-grid">
            {videoItems.map((item) => (
              <div
                key={item.id}
                className="playlist-card"
                onClick={() => setModalVideoItem(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setModalVideoItem(item)
                  }
                }}
              >
                <div className="playlist-thumb-box">
                  <img src={item.img} alt={item.title} className="playlist-thumb-img" />
                  <span className="playlist-duration-badge">{item.duration || '0:48'}</span>
                  <div className="playlist-play-overlay">
                    <span className="playlist-play-icon">▶</span>
                  </div>
                  <span className="playlist-type-pill">🎬 {item.type}</span>
                </div>

                <div className="playlist-card-info">
                  <span className="playlist-item-cat">{item.room}</span>
                  <h5 className="playlist-item-title">{item.title}</h5>
                  <p className="playlist-item-sub">{item.subtitle}</p>
                  <div className="playlist-card-action">
                    <span className="playlist-open-link">
                      Open Video &amp; Specs <span>→</span>
                    </span>
                    <span className="playlist-item-code">{item.code}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Modal Dialog: Opens when any video item is clicked ─── */}
      {modalVideoItem && (
        <ImageModal item={modalVideoItem} onClose={() => setModalVideoItem(null)} />
      )}
    </section>
  )
}
