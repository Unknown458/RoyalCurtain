import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import {
  allGalleryItems,
  filterTabs,
  buildWhatsAppLink,
  WHATSAPP_BASE_URL,
  type GalleryItem,
  type ProductCategory,
} from '../components/galleryData'
import ImageModal from '../components/ImageModal'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import '../styles/components.css'

export default function Gallery() {
  const [searchParams, setSearchParams] = useSearchParams()
  const scrollRef = useScrollAnimation()

  const catParam = (searchParams.get('cat') as ProductCategory) || 'all'
  const [activeCategory, setActiveCategory] = useState<ProductCategory>(catParam)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title =
      'Gallery & Collections | Royal Curtains & Blinds | Oriental Plaza, Johannesburg'
  }, [])

  useEffect(() => {
    setActiveCategory(catParam)
  }, [catParam])

  const handleTabChange = (slug: ProductCategory) => {
    setActiveCategory(slug)
    if (slug === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ cat: slug })
    }
  }

  // Filter items based on Category tab and Search Query
  const filteredItems = allGalleryItems.filter((item) => {
    // 1. Category check
    let matchesCategory = true
    if (activeCategory === 'curtains') {
      matchesCategory = item.type === 'Curtain'
    } else if (activeCategory === 'blinds') {
      matchesCategory = item.type === 'Blind' || item.cat === 'blinds'
    } else if (activeCategory === 'videos') {
      matchesCategory = item.mediaType === 'video' || item.cat === 'videos'
    } else if (activeCategory !== 'all') {
      matchesCategory = item.cat === activeCategory
    }

    // 2. Search query check
    let matchesSearch = true
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase()
      matchesSearch =
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.fabric.toLowerCase().includes(q) ||
        item.room.toLowerCase().includes(q) ||
        item.code.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q)
    }

    return matchesCategory && matchesSearch
  })

  return (
    <main className="royal-page-wrapper gallery-page" ref={scrollRef}>
      {/* ─── Gallery Hero ─────────────────────────────────────────── */}
      <section className="royal-interior-hero">
        <div className="royal-hero-overlay"></div>
        <div className="container interior-hero-content">
          <span className="section-eyebrow gold">The Royal Portfolio</span>
          <h1 className="interior-hero-title">Bespoke Gallery &amp; Collections</h1>
          <p className="interior-hero-desc">
            Explore our curated catalogue of handcrafted curtains, motorized tracks, and designer
            blinds. Each creation is custom made to measure for luxury residences.
          </p>
        </div>
      </section>

      {/* ─── Filter Bar & Search ──────────────────────────────────── */}
      <section className="royal-gallery-filter-section">
        <div className="container">
          {/* Search Input Bar */}
          <div className="gallery-search-bar">
            <div className="search-input-wrapper">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search styles, fabrics (e.g. velvet, blackout, motorized, linen, blinds, wave fold)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="royal-search-input"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setSearchQuery('')}
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="royal-filter-pills-row" role="group" aria-label="Filter collections">
            {filterTabs.map((tab) => (
              <button
                key={tab.slug}
                className={`filter-pill-btn ${activeCategory === tab.slug ? 'active' : ''}`}
                onClick={() => handleTabChange(tab.slug as ProductCategory)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Results Counter & Active Filter Info */}
          <div className="gallery-meta-bar">
            <span className="results-count">
              Showing <strong>{filteredItems.length}</strong> bespoke designs
              {activeCategory !== 'all' && (
                <span>
                  {' '}
                  in <em>{filterTabs.find((t) => t.slug === activeCategory)?.label}</em>
                </span>
              )}
              {searchQuery && <span> matching "{searchQuery}"</span>}
            </span>

            {(activeCategory !== 'all' || searchQuery) && (
              <button
                className="reset-filters-btn"
                onClick={() => {
                  setActiveCategory('all')
                  setSearchQuery('')
                  setSearchParams({})
                }}
              >
                Reset All Filters
              </button>
            )}
          </div>

          {/* ─── Gallery Grid ───────────────────────────────────────── */}
          {filteredItems.length === 0 ? (
            <div className="gallery-empty-state">
              <div className="empty-icon">🪟</div>
              <h3>No Designs Found Matching Your Filter</h3>
              <p>Try searching for a different fabric, room, or browse all collections.</p>
              <button
                className="btn-royal-primary"
                onClick={() => {
                  setActiveCategory('all')
                  setSearchQuery('')
                  setSearchParams({})
                }}
              >
                View All Collections
              </button>
            </div>
          ) : (
            <div className="royal-gallery-grid">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="gallery-card"
                  onClick={() => setActiveModalItem(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setActiveModalItem(item)
                    }
                  }}
                >
                  <div className="gallery-card-img-box">
                    <img src={item.img} alt={item.title} loading="eager" decoding="async" />
                    <div className="card-hover-overlay">
                      <span className="card-zoom-badge">
                        {item.mediaType === 'video'
                          ? '🎬 Watch Video Demonstration'
                          : '🔍 View Full Details'}
                      </span>
                    </div>
                    {item.mediaType === 'video' && (
                      <div className="gallery-card-play-btn">
                        <span className="play-triangle">▶</span>
                      </div>
                    )}
                    <div className="card-top-tags">
                      <span className="badge-type">{item.type}</span>
                      {item.mediaType === 'video' ? (
                        <span className="badge-video-reel">
                          🎬 Video Reel ({item.duration || '0:48'})
                        </span>
                      ) : item.motorizedAvailable ? (
                        <span className="badge-motor">⚡ Motorized</span>
                      ) : null}
                    </div>
                    <span className="card-code-tag">{item.code}</span>
                  </div>

                  <div className="gallery-card-info">
                    <span className="card-room-tag">{item.room}</span>
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-subtitle">{item.subtitle}</p>

                    <div className="card-spec-strip">
                      <span className="spec-bullet">✦ {item.fabric}</span>
                      <span className="spec-bullet">✦ {item.light}</span>
                    </div>

                    <div className="card-action-row">
                      <span className="view-link">Explore Specs →</span>
                      <a
                        href={buildWhatsAppLink(item.title, item.code)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="quick-wa-btn"
                        onClick={(e) => e.stopPropagation()}
                        title="Inquire directly on WhatsApp"
                      >
                        💬 Quote
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ─── Bottom Custom Consultation CTA Banner ──────────────── */}
          <div className="gallery-cta-card fade-up">
            <div className="cta-content">
              <span className="section-eyebrow gold">Have a Specific Design in Mind?</span>
              <h3>Custom Made-to-Measure Architectural Consultations</h3>
              <p>
                Have blueprints or room photos? Bring them to our Oriental Plaza showroom or send
                them to us on WhatsApp. Our master tailors will recommend exact fabric yardage,
                wave headings, and track fixtures.
              </p>
              <div className="cta-actions-row">
                <Link to="/contact" className="btn-royal-primary">
                  Book In-Home Consultation <span>→</span>
                </Link>
                <a
                  href={`${WHATSAPP_BASE_URL}?text=Hi%20Royal%20Curtains!%20I%20have%20photos%20of%20my%20windows%20and%20need%20a%20custom%20quote.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-royal-whatsapp"
                >
                  💬 Send Window Photos on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal Lightbox */}
      <ImageModal item={activeModalItem} onClose={() => setActiveModalItem(null)} />
    </main>
  )
}
