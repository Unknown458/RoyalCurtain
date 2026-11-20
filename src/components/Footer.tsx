import { Link } from 'react-router-dom'
import {
  EMAIL_ADDRESS,
  PHONE_LANDLINE,
  PHONE_MOBILE,
  SHOWROOM_ADDRESS,
  WHATSAPP_BASE_URL,
} from './galleryData'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="royal-footer">
      <div className="royal-footer-top-accent"></div>
      <div className="container">
        <div className="royal-footer-grid">
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-brand-logo">
              <img
                src="/royal-logo.svg"
                alt="Royal Curtains and Blinds"
                className="footer-logo-img"
              />
            </Link>
            <p className="footer-legal-name">
              <strong>S and N Curtains CC</strong>
              <br />
              Trading As: <em>Royal Curtains and Blinds</em>
            </p>
            <p className="footer-desc">
              Johannesburg's premier bespoke window styling atelier located at Oriental Plaza.
              We specialize in custom hand-sewn luxury drapes, motorized tracks, and architectural
              designer blinds engineered to elevate residential estates and luxury living spaces.
            </p>
            <div className="footer-cert-badges">
              <span className="cert-pill">✓ 15+ Years Excellence</span>
              <span className="cert-pill">✓ Oriental Plaza Gate 1</span>
              <span className="cert-pill">✓ Made to Measure</span>
            </div>
          </div>

          {/* Curtains Collections */}
          <div className="footer-col">
            <h4 className="footer-heading">Curtain Collections</h4>
            <ul className="footer-nav-list">
              <li>
                <Link to="/gallery?cat=lounge">Wave Fold Lounge Drapes</Link>
              </li>
              <li>
                <Link to="/gallery?cat=bedroom">100% Thermal Blackouts</Link>
              </li>
              <li>
                <Link to="/gallery?cat=bedroom">Golden Voile &amp; Sheers</Link>
              </li>
              <li>
                <Link to="/gallery?cat=dining">Banquet Velvet Drapery</Link>
              </li>
              <li>
                <Link to="/gallery?cat=dining">Gilded Damask Brocades</Link>
              </li>
              <li>
                <Link to="/gallery?cat=curtains">Double Track Systems</Link>
              </li>
            </ul>
          </div>

          {/* Blinds Collections */}
          <div className="footer-col">
            <h4 className="footer-heading">Custom Blinds</h4>
            <ul className="footer-nav-list">
              <li>
                <Link to="/gallery?cat=blinds">Motorized Roller Blinds</Link>
              </li>
              <li>
                <Link to="/gallery?cat=blinds">50mm Basswood Venetians</Link>
              </li>
              <li>
                <Link to="/gallery?cat=blinds">Zebra Vision Day &amp; Night</Link>
              </li>
              <li>
                <Link to="/gallery?cat=kitchen">Wipe-Clean Kitchen Blinds</Link>
              </li>
              <li>
                <Link to="/gallery?cat=studio">Architectural Studio Screens</Link>
              </li>
              <li>
                <Link to="/gallery?cat=blinds">Roman Tailored Shades</Link>
              </li>
            </ul>
          </div>

          {/* Showroom & Contact Details */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">Showroom &amp; Inquiries</h4>
            <div className="footer-contact-block">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Oriental Plaza Showroom</strong>
                  <p>{SHOWROOM_ADDRESS}</p>
                  <small style={{ color: 'var(--gold-light)' }}>
                    Gate No. 1 Entrance (Adjacent to Safe Parking)
                  </small>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Telephone Line:</strong>
                  <p>
                    <a href={`tel:${PHONE_LANDLINE.replace(/\s+/g, '')}`}>{PHONE_LANDLINE}</a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <strong>WhatsApp &amp; Mobile:</strong>
                  <p>
                    <a
                      href={`${WHATSAPP_BASE_URL}?text=Hi%20Royal%20Curtains%20%26%20Blinds!`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {PHONE_MOBILE} (Instant Chat)
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <strong>Email Inquiries:</strong>
                  <p>
                    <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <div>
                  <strong>Showroom Trading Hours:</strong>
                  <p>Mon – Fri: 09:00 – 17:00</p>
                  <p>Saturday: 09:00 – 15:00</p>
                  <small style={{ color: 'var(--text-muted)' }}>
                    Sunday &amp; Public Holidays: Closed
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="royal-footer-bottom">
          <p className="copyright-text">
            © {currentYear} <strong>S and N Curtains CC</strong> T/A Royal Curtains and Blinds. All
            rights reserved. Oriental Plaza, Fordsburg, Johannesburg.
          </p>
          <div className="footer-bottom-links">
            <Link to="/">Home</Link>
            <span>•</span>
            <Link to="/gallery">Gallery</Link>
            <span>•</span>
            <Link to="/contact">Contact</Link>
            <span>•</span>
            <a
              href={`${WHATSAPP_BASE_URL}?text=Hi%20Royal%20Curtains%20%26%20Blinds!`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
