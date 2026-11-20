import { useEffect, useState } from 'react'
import type { GalleryItem } from './galleryData'
import { buildWhatsAppLink, PHONE_LANDLINE } from './galleryData'

interface ImageModalProps {
  item: GalleryItem | null
  onClose: () => void
}

export default function ImageModal({ item, onClose }: ImageModalProps) {
  const [isZoomed, setIsZoomed] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (item) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [item, onClose])

  if (!item) return null

  const waQuoteUrl = buildWhatsAppLink(item.title, item.code)

  return (
    <div className="royal-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="royal-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="royal-modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="royal-modal-grid">
          {/* ─── LEFT: Full-Bleed Image (Flipkart / MeemCurtain style) ─── */}
          <div className="royal-modal-visual">
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
            {/* Item ref badge — overlaid on image, bottom-left */}
            <div className="royal-modal-code-badge">Item Ref: {item.code}</div>
          </div>

          {/* ─── RIGHT: Product Details ─── */}
          <div className="royal-modal-info">
            <div className="royal-modal-tagline">
              <span className="royal-pill-badge">{item.type}</span>
              <span className="royal-pill-badge outline">{item.room}</span>
              {item.motorizedAvailable && (
                <span className="royal-pill-badge gold">⚡ Motorization Ready</span>
              )}
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
                💬 Ask on WhatsApp
              </a>
              <a href={`tel:${PHONE_LANDLINE.replace(/\s+/g, '')}`} className="btn-royal-outline">
                📞 Send Inquiry
              </a>
            </div>

            <p className="royal-modal-guarantee">
              ✓ All curtains custom-made to your measurements · Free consultation
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
