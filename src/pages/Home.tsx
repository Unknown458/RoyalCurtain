import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  allGalleryItems,
  buildWhatsAppLink,
  WHATSAPP_BASE_URL,
} from '../components/galleryData'
import type { GalleryItem } from '../components/galleryData'
import ImageModal from '../components/ImageModal'
import QuoteEstimator from '../components/QuoteEstimator'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import '../styles/components.css'

export default function Home() {
  const scrollRef = useScrollAnimation()
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title =
      'Royal Curtains & Blinds | Luxury Made-to-Measure Window Atelier'
  }, [])

  const featuredItems = allGalleryItems.filter((i) => i.featured)

  return (
    <main className="royal-page-wrapper verdant-theme" ref={scrollRef}>
      {/* ─── Hero Section: Bold, Clear & Cinematic ─────────────────── */}
      <section className="royal-hero-cinematic">
        <div className="hero-cinematic-bg">
          <img
            src="/images/hero_verdant.jpg"
            alt="Royal Curtains and Blinds Luxury Interior"
            className="hero-main-img"
          />
          <div className="hero-cinematic-overlay"></div>
        </div>

        <div className="container hero-cinematic-container">
          <div className="hero-cinematic-content fade-up">
            <div className="hero-eyebrow-pill">
              <span className="pill-dot">✦</span>
              <span>ROYAL CURTAINS &amp; BLINDS ATELIER</span>
            </div>

            <h1 className="hero-cinematic-title">
              <span className="hero-sub-italic">Escape to</span>
              Timeless Luxury
            </h1>

            <p className="hero-cinematic-desc">
              Bespoke handcrafted curtains and architectural blinds tailored for living sanctuaries across Gauteng.
            </p>

            <div className="hero-cinematic-actions">
              <Link to="/gallery" className="btn-hero-verdant">
                Explore Collections <span>→</span>
              </Link>
              <a
                href={`${WHATSAPP_BASE_URL}?text=Hi%20Royal%20Curtains%20%26%20Blinds!%20I%20would%20like%20to%20inquire%20about%20your%20luxury%20curtains%20and%20blinds.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-glass"
              >
                💬 WhatsApp Showroom
              </a>
            </div>

            {/* Floating Glass Stats Bar */}
            <div className="hero-floating-stats">
              <div className="f-stat-item">
                <strong>15+</strong>
                <span>Years Atelier Mastery</span>
              </div>
              <div className="f-stat-divider"></div>
              <div className="f-stat-item">
                <strong>1,200+</strong>
                <span>Bespoke Residences</span>
              </div>
              <div className="f-stat-divider"></div>
              <div className="f-stat-item">
                <strong>500+</strong>
                <span>Global Fabric Swatches</span>
              </div>
              <div className="f-stat-divider"></div>
              <div className="f-stat-item">
                <strong>100%</strong>
                <span>Custom Measured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 2: Our Story (Inspired by The Verdant) ─────────── */}
      <section className="royal-story-section">
        <div className="container">
          <div className="story-grid">
            {/* Story Text */}
            <div className="story-col-text fade-left">
              <span className="section-eyebrow">OUR STORY</span>
              <h2 className="story-title">
                Where Royal Craftsmanship Meets Natural Beauty
              </h2>
              <p className="story-lead">
                Royal Curtains and Blinds is an atelier designed for those who seek more — more
                tactile fullness, richer woven textures, and spaces that breathe quiet elegance.
              </p>
              <p className="story-p">
                From our dedicated Oriental Plaza workshop, our master tailors craft every drape
                with weighted hems, invisible stitching, and precision wave folds that frame natural
                daylight like living artwork.
              </p>
              <div className="story-actions">
                <a href="#estimator" className="btn-royal-outline">
                  Calculate Project Estimate <span>→</span>
                </a>
              </div>
            </div>

            {/* Story Image Inset */}
            <div className="story-col-visual fade-up delay-1">
              <div className="story-img-frame">
                <img
                  src="/images/lounge_verdant.jpg"
                  alt="Architectural Wave Fold Drapery"
                  className="story-img"
                />
                <div className="story-img-badge">
                  <span>✦ Double-Track Wave Fold</span>
                </div>
              </div>
            </div>

            {/* Story Feature Icons */}
            <div className="story-col-features fade-right delay-2">
              <div className="story-feature-item">
                <div className="s-icon-box">🌿</div>
                <div>
                  <h4>Curated Natural Textures</h4>
                  <p>Belgian linens, pure silks, breathable voiles, and crushed velvet.</p>
                </div>
              </div>

              <div className="story-feature-item">
                <div className="s-icon-box">⚡</div>
                <div>
                  <h4>Smart Motorization</h4>
                  <p>Whisper-quiet Somfy and Tuya motorized tracks with app &amp; remote.</p>
                </div>
              </div>

              <div className="story-feature-item">
                <div className="s-icon-box">📏</div>
                <div>
                  <h4>Free In-Home Measurement</h4>
                  <p>Laser precision window assessments at your residence across Gauteng.</p>
                </div>
              </div>

              <div className="story-feature-item">
                <div className="s-icon-box">👑</div>
                <div>
                  <h4>White-Glove Installation</h4>
                  <p>Flawless fitting, steam dressing, and track mounting included.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 3: Signature Verdant Green Band ────────────────── */}
      <section className="royal-verdant-band">
        <div className="container">
          <div className="verdant-band-header">
            <div>
              <span className="section-eyebrow white">OUR COLLECTIONS</span>
              <h2 className="section-title text-white">
                Thoughtfully Tailored Window Formats
              </h2>
            </div>
            <Link to="/gallery" className="btn-verdant-outline-light">
              View All Collections ({allGalleryItems.length}) <span>→</span>
            </Link>
          </div>

          <div className="verdant-rooms-grid">
            {/* Card 1: Lounge */}
            <div
              className="verdant-room-card fade-up"
              onClick={() =>
                setActiveModalItem(allGalleryItems.find((i) => i.code === 'RC-LNG-01') || null)
              }
            >
              <div className="v-card-img-box">
                <img src="/images/lounge_verdant.jpg" alt="Lounge Drapery" loading="lazy" />
                <span className="v-tag">Signature Series</span>
              </div>
              <div className="v-card-body">
                <h3>Verdant Wave-Fold Lounge</h3>
                <p>Double-track sheer &amp; forest olive drape with architectural ceiling recess.</p>
                <div className="v-card-footer">
                  <span className="v-link">View Details →</span>
                  <span className="v-code">RC-LNG-01</span>
                </div>
              </div>
            </div>

            {/* Card 2: Bedroom */}
            <div
              className="verdant-room-card fade-up delay-1"
              onClick={() =>
                setActiveModalItem(allGalleryItems.find((i) => i.code === 'RC-BED-01') || null)
              }
            >
              <div className="v-card-img-box">
                <img src="/images/bedroom_verdant.jpg" alt="Master Suite Blackout" loading="lazy" />
                <span className="v-tag">Sleep Sanctuary</span>
              </div>
              <div className="v-card-body">
                <h3>Master Suite Blackout &amp; Sheer</h3>
                <p>Olive velvet blackout curtains paired with champagne morning voile.</p>
                <div className="v-card-footer">
                  <span className="v-link">View Details →</span>
                  <span className="v-code">RC-BED-01</span>
                </div>
              </div>
            </div>

            {/* Card 3: Blinds */}
            <div
              className="verdant-room-card fade-up delay-2"
              onClick={() =>
                setActiveModalItem(allGalleryItems.find((i) => i.code === 'RC-BLN-01') || null)
              }
            >
              <div className="v-card-img-box">
                <img src="/images/blinds_verdant.jpg" alt="Architectural Basswood Blinds" loading="lazy" />
                <span className="v-tag">Precision Shading</span>
              </div>
              <div className="v-card-body">
                <h3>Architectural Basswood Blinds</h3>
                <p>50mm natural timber venetian blinds with motorized sunscreen rollers.</p>
                <div className="v-card-footer">
                  <span className="v-link">View Details →</span>
                  <span className="v-code">RC-BLN-01</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Curtains vs Blinds Showcase ─────────────────────────────── */}
      <section className="royal-duo-showcase">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">TWO ATELIER FORMATS</span>
            <h2 className="section-title">Harmonizing Drapery &amp; Precision Blinds</h2>
            <p className="section-lead">
              Pair luxurious flowing curtains with architectural blinds to achieve unmatched light
              control and layered aesthetic depth.
            </p>
          </div>

          <div className="editorial-duo-container">
            {/* ─── Row 1: Curtains (Image Left, Editorial Right) ─── */}
            <div className="editorial-row fade-up">
              <div className="editorial-visual-col">
                <div className="editorial-img-frame">
                  <img
                    src="/images/lounge_verdant.jpg"
                    alt="Handcrafted Luxury Curtains"
                    className="editorial-main-img"
                    loading="lazy"
                  />
                  <div className="editorial-img-badge">
                    <span>✦ Bespoke Drapery Atelier</span>
                  </div>
                  <div className="editorial-floating-pill">
                    <span>Double-Track Wave Fold</span>
                  </div>
                </div>
              </div>

              <div className="editorial-text-col">
                <div className="editorial-index-pill">
                  <span className="index-num">01</span>
                  <span className="index-divider">/</span>
                  <span className="index-label">WINDOW ATELIER</span>
                </div>
                <h3 className="editorial-title">Handcrafted Luxury Curtains</h3>
                <p className="editorial-lead">
                  Lavish wave folds, double pinch pleats, and rich triple-weave blackout drapes,
                  custom-tailored with weighted hems and invisible stitching.
                </p>

                {/* Pill Spec Badges */}
                <div className="editorial-spec-chips">
                  <span className="spec-chip">✦ Belgian Linen</span>
                  <span className="spec-chip">✦ 100% Thermal Blackout</span>
                  <span className="spec-chip">✦ Ceiling Wave Tracks</span>
                  <span className="spec-chip">✦ Crushed Velvet</span>
                </div>

                {/* Specification Highlights */}
                <div className="editorial-highlights-list">
                  <div className="highlight-item">
                    <span className="h-dot">✦</span>
                    <div>
                      <strong>Architectural Wave Folds:</strong> Flows smoothly from floor to ceiling with perfect uniform ripples.
                    </div>
                  </div>
                  <div className="highlight-item">
                    <span className="h-dot">✦</span>
                    <div>
                      <strong>Dual-Track Layering:</strong> Pair sun-filtering daylight sheer voiles with complete nighttime privacy drapes.
                    </div>
                  </div>
                  <div className="highlight-item">
                    <span className="h-dot">✦</span>
                    <div>
                      <strong>Smart Motorization:</strong> Whisper-quiet Somfy tracks controlled by handheld remote, app, or voice.
                    </div>
                  </div>
                </div>

                <div className="editorial-actions">
                  <Link to="/gallery?cat=curtains" className="btn-royal-primary">
                    Explore Curtains Collection <span>→</span>
                  </Link>
                  <a
                    href={`${WHATSAPP_BASE_URL}?text=Hi%20Royal%20Curtains!%20I%20would%20like%20to%20inquire%20about%20custom%20curtains.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-royal-outline"
                  >
                    💬 Curtains WhatsApp Quote
                  </a>
                </div>
              </div>
            </div>

            {/* Subtle Atelier Divider */}
            <div className="editorial-divider">
              <span className="divider-line"></span>
              <span className="divider-icon">✦</span>
              <span className="divider-line"></span>
            </div>

            {/* ─── Row 2: Blinds (Editorial Left, Image Right - Alternated!) ─── */}
            <div className="editorial-row reverse fade-up">
              <div className="editorial-visual-col">
                <div className="editorial-img-frame">
                  <img
                    src="/images/blinds_verdant.jpg"
                    alt="Custom Designer Blinds"
                    className="editorial-main-img"
                    loading="lazy"
                  />
                  <div className="editorial-img-badge">
                    <span>✦ Architectural Shading</span>
                  </div>
                  <div className="editorial-floating-pill">
                    <span>50mm Timber &amp; Sunscreen</span>
                  </div>
                </div>
              </div>

              <div className="editorial-text-col">
                <div className="editorial-index-pill">
                  <span className="index-num">02</span>
                  <span className="index-divider">/</span>
                  <span className="index-label">PRECISION SHADING</span>
                </div>
                <h3 className="editorial-title">Custom Designer Blinds</h3>
                <p className="editorial-lead">
                  Clean architectural lines engineered for effortless light control, featuring kiln-dried
                  natural basswood timber, modern zebra day &amp; night blinds, and automated rollers.
                </p>

                {/* Pill Spec Badges */}
                <div className="editorial-spec-chips">
                  <span className="spec-chip">✦ 50mm Basswood Timber</span>
                  <span className="spec-chip">✦ Zebra Day &amp; Night</span>
                  <span className="spec-chip">✦ Motorized Sunscreen</span>
                  <span className="spec-chip">✦ Moisture Resistant</span>
                </div>

                {/* Specification Highlights */}
                <div className="editorial-highlights-list">
                  <div className="highlight-item">
                    <span className="h-dot">✦</span>
                    <div>
                      <strong>Kiln-Dried Natural Timber:</strong> Authentic basswood venetian blinds that resist warping and humidity.
                    </div>
                  </div>
                  <div className="highlight-item">
                    <span className="h-dot">✦</span>
                    <div>
                      <strong>Zebra Vision Stripes:</strong> Dual fabric bands glide smoothly to transition from gentle light diffusion to privacy.
                    </div>
                  </div>
                  <div className="highlight-item">
                    <span className="h-dot">✦</span>
                    <div>
                      <strong>Sunscreen Rollers:</strong> High-performance mesh that filters harsh African sun while maintaining outdoor garden views.
                    </div>
                  </div>
                </div>

                <div className="editorial-actions">
                  <Link to="/gallery?cat=blinds" className="btn-royal-primary">
                    Explore Blinds Collection <span>→</span>
                  </Link>
                  <a
                    href={`${WHATSAPP_BASE_URL}?text=Hi%20Royal%20Curtains!%20I%20would%20like%20to%20inquire%20about%20designer%20blinds.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-royal-outline"
                  >
                    💬 Blinds WhatsApp Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Interactive Window Estimator ───────────────────────────── */}
      <section className="royal-estimator-section" id="estimator">
        <div className="container">
          <QuoteEstimator />
        </div>
      </section>

      {/* ─── Featured Spotlight Showcase ────────────────────────────── */}
      <section className="royal-showcase-section">
        <div className="container">
          <div className="collections-header-row">
            <div>
              <span className="section-eyebrow">PORTFOLIO SPOTLIGHT</span>
              <h2 className="section-title">Recent Royal Masterpieces</h2>
            </div>
            <Link to="/gallery" className="btn-royal-link">
              Explore Full Gallery <span>→</span>
            </Link>
          </div>

          <div className="featured-items-grid">
            {featuredItems.map((item) => (
              <div
                key={item.id}
                className="featured-item-card fade-up"
                onClick={() => setActiveModalItem(item)}
              >
                <div className="item-img-container">
                  <img src={item.img} alt={item.title} loading="lazy" />
                  <div className="item-overlay">
                    <span className="view-detail-badge">🔍 View Specifications</span>
                  </div>
                  <span className="item-type-pill">{item.type}</span>
                </div>
                <div className="item-info">
                  <span className="item-code">{item.code}</span>
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-fabric">{item.fabric}</p>
                  <div className="item-footer">
                    <span className="item-room-label">📍 {item.room}</span>
                    <a
                      href={buildWhatsAppLink(item.title, item.code)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="item-wa-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      💬 WhatsApp Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ───────────────────────────────────────────── */}
      <section className="royal-testimonials-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">CLIENT PRAISE</span>
            <h2 className="section-title">Endorsed by Discerning Homeowners</h2>
            <p className="section-lead">
              Discover how Royal Curtains &amp; Blinds has elevated homes across Johannesburg,
              Sandton, Pretoria, and surrounding estates.
            </p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card fade-up">
              <div className="rating-stars">★★★★★</div>
              <p className="testimonial-quote">
                “We fitted our entire double-story home in Sandhurst with Royal Curtains. The wave
                folds fall with such majestic elegance and the motorized blackouts in our master
                bedroom make sleep an absolute dream. Exceptional craftsmanship from Oriental Plaza!”
              </p>
              <div className="testimonial-author">
                <strong>Zaheer &amp; Fatima M.</strong>
                <span>Sandhurst, Johannesburg</span>
              </div>
            </div>

            <div className="testimonial-card fade-up delay-1">
              <div className="rating-stars">★★★★★</div>
              <p className="testimonial-quote">
                “S and N Curtains CC have been our family's trusted curtain atelier for years. Their
                attention to detail, weighted hems, and beautiful basswood blinds are unmatched.
                Gate 1 at Oriental Plaza is always our first stop.”
              </p>
              <div className="testimonial-author">
                <strong>Rashid K.</strong>
                <span>Houghton Estate</span>
              </div>
            </div>

            <div className="testimonial-card fade-up delay-2">
              <div className="rating-stars">★★★★★</div>
              <p className="testimonial-quote">
                “As an interior architect, I demand perfection. Royal Curtains delivered flawless
                curved tracks and custom sheer drapes for our luxury penthouse project in Rosebank.
                Fast turnaround and white-glove installation.”
              </p>
              <div className="testimonial-author">
                <strong>Elena V.</strong>
                <span>Interior Designer, Rosebank</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <ImageModal item={activeModalItem} onClose={() => setActiveModalItem(null)} />
    </main>
  )
}
