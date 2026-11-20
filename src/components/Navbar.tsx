import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import {
  PHONE_LANDLINE,
  PHONE_MOBILE,
  WHATSAPP_BASE_URL,
} from './galleryData'
import { useNavScroll } from '../hooks/useScrollAnimation'
import '../styles/Navbar.css'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [curtainDropdown, setCurtainDropdown] = useState(false)
  const [blindDropdown, setBlindDropdown] = useState(false)

  useNavScroll()

  // Prevent scroll when mobile menu is active
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const closeAll = () => {
    setMobileMenuOpen(false)
    setCurtainDropdown(false)
    setBlindDropdown(false)
  }

  return (
    <>
      {/* Top Luxury Announcement Bar */}
      <div className="royal-topbar">
        <div className="container royal-topbar-inner">
          <div className="topbar-left">
            <span className="topbar-item">
              <span className="gold-icon">✨</span> Handcrafted Bespoke Curtains &amp; Designer Blinds
            </span>
            <span className="topbar-divider">|</span>
            <span className="topbar-item">
              <span className="gold-icon">✦</span> Free In-Home Consultation Across Gauteng
            </span>
          </div>
          <div className="topbar-right">
            <a href={`tel:${PHONE_LANDLINE.replace(/\s+/g, '')}`} className="topbar-contact">
              📞 {PHONE_LANDLINE}
            </a>
            <span className="topbar-divider">|</span>
            <a
              href={`${WHATSAPP_BASE_URL}?text=Hi%20Royal%20Curtains%20%26%20Blinds!`}
              target="_blank"
              rel="noopener noreferrer"
              className="topbar-whatsapp"
            >
              💬 WhatsApp: {PHONE_MOBILE}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <nav className="royal-navbar">
        <div className="container">
          <div className="royal-navbar-inner">
            {/* Logo */}
            <Link to="/" className="royal-navbar-brand" onClick={closeAll}>
              <img
                src="/royal-logo.svg"
                alt="Royal Curtains and Blinds Logo"
                className="royal-logo-img"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <ul className="royal-nav-links">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => `royal-nav-link ${isActive ? 'active' : ''}`}
                  end
                  onClick={closeAll}
                >
                  Home
                </NavLink>
              </li>

              {/* Curtains Dropdown */}
              <li
                className="royal-nav-item has-dropdown"
                onMouseEnter={() => setCurtainDropdown(true)}
                onMouseLeave={() => setCurtainDropdown(false)}
              >
                <NavLink
                  to="/gallery?cat=curtains"
                  className={({ isActive }) => `royal-nav-link ${isActive ? 'active' : ''}`}
                >
                  Curtains <span className="dropdown-caret">▾</span>
                </NavLink>
                {curtainDropdown && (
                  <div className="royal-dropdown-menu">
                    <div className="dropdown-header">Bespoke Curtains</div>
                    <Link to="/gallery?cat=lounge" onClick={closeAll}>
                      <span className="dropdown-bullet">◆</span> Lounge Curtains
                    </Link>
                    <Link to="/gallery?cat=bedroom" onClick={closeAll}>
                      <span className="dropdown-bullet">◆</span> Master Bedroom Blackouts
                    </Link>
                    <Link to="/gallery?cat=dining" onClick={closeAll}>
                      <span className="dropdown-bullet">◆</span> Royal Dining Drapery
                    </Link>
                    <Link to="/gallery?cat=curtains" onClick={closeAll}>
                      <span className="dropdown-bullet">◆</span> Wave Fold &amp; Pinch Pleat Styles
                    </Link>
                  </div>
                )}
              </li>

              {/* Blinds Dropdown */}
              <li
                className="royal-nav-item has-dropdown"
                onMouseEnter={() => setBlindDropdown(true)}
                onMouseLeave={() => setBlindDropdown(false)}
              >
                <NavLink
                  to="/gallery?cat=blinds"
                  className={({ isActive }) => `royal-nav-link ${isActive ? 'active' : ''}`}
                >
                  Blinds <span className="dropdown-caret">▾</span>
                </NavLink>
                {blindDropdown && (
                  <div className="royal-dropdown-menu">
                    <div className="dropdown-header">Designer Blinds</div>
                    <Link to="/gallery?cat=blinds" onClick={closeAll}>
                      <span className="dropdown-bullet">◆</span> Motorized Roller Blinds
                    </Link>
                    <Link to="/gallery?cat=blinds" onClick={closeAll}>
                      <span className="dropdown-bullet">◆</span> 50mm Basswood Venetian Blinds
                    </Link>
                    <Link to="/gallery?cat=blinds" onClick={closeAll}>
                      <span className="dropdown-bullet">◆</span> Zebra Dual Day &amp; Night Blinds
                    </Link>
                    <Link to="/gallery?cat=kitchen" onClick={closeAll}>
                      <span className="dropdown-bullet">◆</span> Kitchen Moisture-Resistant Blinds
                    </Link>
                  </div>
                )}
              </li>

              <li>
                <NavLink
                  to="/gallery"
                  className={({ isActive }) => `royal-nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeAll}
                >
                  Gallery &amp; Projects
                </NavLink>
              </li>

              <li>
                <a href="/#estimator" className="royal-nav-link" onClick={closeAll}>
                  Calculate Quote
                </a>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `royal-nav-link nav-highlight ${isActive ? 'active' : ''}`
                  }
                  onClick={closeAll}
                >
                  Contact Showroom
                </NavLink>
              </li>
            </ul>

            {/* Desktop Action CTAs */}
            <div className="royal-navbar-actions">
              <a
                href={`${WHATSAPP_BASE_URL}?text=Hi%20Royal%20Curtains%20%26%20Blinds!%20I%20would%20like%20to%20book%20a%20free%20measurement.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-royal-header-cta"
              >
                <span>💬 Quick WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Hamburger */}
            <button
              className={`royal-hamburger ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <div className={`royal-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <img src="/royal-logo.svg" alt="Royal Curtains" className="mobile-drawer-logo" />
          <button className="mobile-drawer-close" onClick={closeAll}>
            ✕
          </button>
        </div>

        <div className="mobile-drawer-content">
          <Link to="/" className="mobile-drawer-link" onClick={closeAll}>
            Home
          </Link>

          <div className="mobile-category-group">
            <span className="mobile-category-title">Curtain Collections</span>
            <Link to="/gallery?cat=curtains" onClick={closeAll}>
              All Curtains
            </Link>
            <Link to="/gallery?cat=lounge" onClick={closeAll}>
              Lounge Curtains
            </Link>
            <Link to="/gallery?cat=bedroom" onClick={closeAll}>
              Master Bedroom Blackouts
            </Link>
            <Link to="/gallery?cat=dining" onClick={closeAll}>
              Royal Dining Drapes
            </Link>
          </div>

          <div className="mobile-category-group">
            <span className="mobile-category-title">Blind Collections</span>
            <Link to="/gallery?cat=blinds" onClick={closeAll}>
              All Designer Blinds
            </Link>
            <Link to="/gallery?cat=blinds" onClick={closeAll}>
              Motorized Roller Blinds
            </Link>
            <Link to="/gallery?cat=blinds" onClick={closeAll}>
              Basswood Venetian Blinds
            </Link>
            <Link to="/gallery?cat=kitchen" onClick={closeAll}>
              Kitchen Blinds
            </Link>
          </div>

          <Link to="/gallery" className="mobile-drawer-link" onClick={closeAll}>
            Gallery &amp; Recent Projects
          </Link>
          <a href="/#estimator" className="mobile-drawer-link" onClick={closeAll}>
            Instant Quote Calculator
          </a>
          <Link to="/contact" className="mobile-drawer-link highlight" onClick={closeAll}>
            Contact &amp; Showroom
          </Link>

          <div className="mobile-drawer-contact-card">
            <h4>Royal Curtains &amp; Blinds</h4>
            <p>Bespoke Tailoring &amp; Designer Window Styling</p>
            <a
              href={`${WHATSAPP_BASE_URL}?text=Hi%20Royal%20Curtains%20%26%20Blinds!`}
              className="btn-royal-primary mobile-wa-btn"
              onClick={closeAll}
            >
              💬 WhatsApp Inquiry Now
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
