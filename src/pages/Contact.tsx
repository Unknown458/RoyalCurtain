import { useState, useEffect } from 'react'
import type { FormEvent } from 'react'
import {
  EMAIL_ADDRESS,
  PHONE_LANDLINE,
  PHONE_MOBILE,
  SHOWROOM_ADDRESS,
  WHATSAPP_BASE_URL,
  WHATSAPP_NUMBER,
} from '../components/galleryData'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import '../styles/components.css'

export default function Contact() {
  const scrollRef = useScrollAnimation()

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'Luxury Curtains',
    room: 'Lounge / Living Room',
    windowsCount: '1-3 Windows',
    consultationType: 'Free In-Home Measurement',
    message: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeFaq, setActiveFaq] = useState<number | null>(0)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title =
      'Contact Royal Curtains & Blinds | S and N Curtains CC | Oriental Plaza, Johannesburg'
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // Build friendly WhatsApp message
    const waText = encodeURIComponent(
      `Hi Royal Curtains & Blinds! 👋 (Website Consultation Request)

*Client Details:*
• Name: ${formData.name}
• Phone: ${formData.phone}
• Email: ${formData.email || 'Not provided'}

*Window Project Details:*
• Service: ${formData.serviceType}
• Room: ${formData.room}
• Number of Windows: ${formData.windowsCount}
• Preference: ${formData.consultationType}

*Message / Notes:*
${formData.message || 'Looking for pricing and fabric options.'}

Thank you!`
    )

    setIsSubmitted(true)
    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`, '_blank')
    }, 500)
  }

  const faqs = [
    {
      q: 'How does the Free In-Home Consultation & Measurement work?',
      a: 'One of our expert window stylists visits your residence anywhere in Greater Johannesburg or Pretoria with physical fabric swatches, blind samples, and laser measuring tools. We assess window orientation, ceiling heights, and lighting conditions to provide an exact millimeter specification and quotation with zero obligation.',
    },
    {
      q: 'Where are you located in the Oriental Plaza?',
      a: 'We are located at Shop No: N38, Gate No. 1, Oriental Plaza, Fordsburg, Johannesburg. Entering through Gate No. 1 off Main Road gives you immediate access to safe, covered parking right next to our showroom entrance.',
    },
    {
      q: 'What is the turnaround time for custom curtains and blinds?',
      a: 'Standard bespoke tailored curtains and blinds are typically crafted, quality-inspected, and installed within 7 to 14 business days from fabric confirmation. For urgent move-in deadlines or staging, please notify us and we will accommodate expedited priority tailoring.',
    },
    {
      q: 'Can you motorize both curtains and blinds with smart home systems?',
      a: 'Yes, absolutely. We install whisper-quiet Somfy, Tuya, and RF motorized tracks and roller cassettes that can be operated via handheld remotes, wireless wall switches, smartphone apps, or automated voice commands through Amazon Alexa and Google Assistant.',
    },
    {
      q: 'Do you provide full track supply and professional installation?',
      a: 'Yes, Royal Curtains & Blinds offers comprehensive turnkey service. We manufacture and supply high-grade aluminum wave-tracks, ceiling-recessed tracks, double rods, pelmets, and provide professional white-glove installation including hanging and steaming.',
    },
    {
      q: 'Can I visit your showroom with my architectural plans or window photos?',
      a: 'Yes! We warmly welcome walk-ins at Shop N38, Gate 1, Oriental Plaza. Bring photos of your room, wall colors, or window dimensions, and our team will guide you through over 500+ luxury fabric rolls and working blind displays.',
    },
  ]

  return (
    <main className="royal-page-wrapper contact-page" ref={scrollRef}>
      {/* ─── Contact Hero ─────────────────────────────────────────── */}
      <section className="royal-interior-hero">
        <div className="royal-hero-overlay"></div>
        <div className="container interior-hero-content">
          <span className="section-eyebrow gold">Direct Atelier Inquiries</span>
          <h1 className="interior-hero-title">Connect with Royal Curtains &amp; Blinds</h1>
          <p className="interior-hero-desc">
            Visit our prestigious showroom at Oriental Plaza, Gate 1, Fordsburg, or schedule
            a complimentary in-home consultation across Johannesburg.
          </p>
        </div>
      </section>

      {/* ─── Main Contact Grid ────────────────────────────────────── */}
      <section className="royal-contact-section">
        <div className="container">
          <div className="contact-main-grid">
            {/* Left Column: Official Contact Channels & Showroom Info */}
            <div className="contact-info-column fade-left">
              <div className="business-credential-card">
                <div className="credential-badge">Official Business Profile</div>
                <h2 className="company-title">S and N Curtains CC</h2>
                <p className="trading-name">
                  Trading As: <strong>Royal Curtains and Blinds</strong>
                </p>
                <div className="royal-divider-gold"></div>
                <p className="company-summary">
                  South Africa's trusted curtain and blind destination for over 15 years.
                  Known for timeless drape fullness, impeccable hems, and motorized innovation.
                </p>
              </div>

              {/* Direct Channels Cards */}
              <div className="contact-channels-list">
                {/* WhatsApp Channel */}
                <a
                  href={`${WHATSAPP_BASE_URL}?text=Hi%20Royal%20Curtains!%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-card whatsapp-channel"
                >
                  <div className="channel-icon-box wa-box">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div className="channel-text">
                    <span className="channel-label">Instant WhatsApp Chat (Recommended)</span>
                    <strong className="channel-val">{PHONE_MOBILE}</strong>
                    <span className="channel-note">Click to open chat &amp; share photos →</span>
                  </div>
                </a>

                {/* Landline Channel */}
                <a
                  href={`tel:${PHONE_LANDLINE.replace(/\s+/g, '')}`}
                  className="channel-card phone-channel"
                >
                  <div className="channel-icon-box">📞</div>
                  <div className="channel-text">
                    <span className="channel-label">Showroom Telephone Line</span>
                    <strong className="channel-val">{PHONE_LANDLINE}</strong>
                    <span className="channel-note">Direct call to Oriental Plaza store</span>
                  </div>
                </a>

                {/* Email Channel */}
                <a href={`mailto:${EMAIL_ADDRESS}`} className="channel-card email-channel">
                  <div className="channel-icon-box">✉️</div>
                  <div className="channel-text">
                    <span className="channel-label">Official Email Correspondence</span>
                    <strong className="channel-val">{EMAIL_ADDRESS}</strong>
                    <span className="channel-note">Send blueprints, floor plans &amp; RFQs</span>
                  </div>
                </a>

                {/* Address & Parking Channel */}
                <div className="channel-card location-channel">
                  <div className="channel-icon-box">📍</div>
                  <div className="channel-text">
                    <span className="channel-label">Physical Showroom &amp; Atelier</span>
                    <strong className="channel-val">{SHOWROOM_ADDRESS}</strong>
                    <span className="channel-note">
                      🚗 Direct Gate No. 1 Entrance with dedicated parking
                    </span>
                  </div>
                </div>
              </div>

              {/* Operating Hours Card */}
              <div className="trading-hours-box">
                <h4>🕒 Showroom Trading Hours</h4>
                <div className="hours-row">
                  <span>Monday – Friday:</span>
                  <strong>09:00 AM – 05:00 PM</strong>
                </div>
                <div className="hours-row">
                  <span>Saturday:</span>
                  <strong>09:00 AM – 03:00 PM</strong>
                </div>
                <div className="hours-row closed">
                  <span>Sunday &amp; Public Holidays:</span>
                  <em>Closed (Online Inquiries Welcomed)</em>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Consultation Booking Form */}
            <div className="contact-form-column fade-right">
              <div className="contact-form-card">
                {isSubmitted ? (
                  <div className="form-success-state">
                    <div className="success-icon">✅</div>
                    <h3>Consultation Request Received!</h3>
                    <p>
                      Your WhatsApp has been initiated with your project specifications. Our master
                      consultant will review your details and respond promptly.
                    </p>
                    <div className="success-cta-box">
                      <p>Need immediate assistance right away?</p>
                      <a
                        href={`tel:${PHONE_MOBILE.replace(/\s+/g, '')}`}
                        className="btn-royal-primary"
                      >
                        📞 Call {PHONE_MOBILE} Directly
                      </a>
                    </div>
                    <button
                      type="button"
                      className="btn-royal-secondary"
                      onClick={() => setIsSubmitted(false)}
                      style={{ marginTop: '1.5rem' }}
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="form-header">
                      <span className="form-eyebrow">Book a Consultation</span>
                      <h3 className="form-title">Schedule a Measurement or Quote</h3>
                      <p className="form-desc">
                        Complete the form below — we'll tailor fabric samples and pricing specifically
                        for your space.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="royal-form">
                      <div className="form-row-two">
                        <div className="form-field">
                          <label htmlFor="name">Full Name *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="e.g. Imran Patel"
                            value={formData.name}
                            onChange={handleChange}
                            className="royal-input"
                          />
                        </div>

                        <div className="form-field">
                          <label htmlFor="phone">Phone / WhatsApp Number *</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            placeholder="e.g. 082 123 4567"
                            value={formData.phone}
                            onChange={handleChange}
                            className="royal-input"
                          />
                        </div>
                      </div>

                      <div className="form-row-two">
                        <div className="form-field">
                          <label htmlFor="email">Email Address (Optional)</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="e.g. name@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="royal-input"
                          />
                        </div>

                        <div className="form-field">
                          <label htmlFor="serviceType">Service Required *</label>
                          <select
                            id="serviceType"
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleChange}
                            className="royal-select"
                          >
                            <option value="Luxury Curtains">Luxury Handcrafted Curtains</option>
                            <option value="Custom Blinds">Designer Custom Blinds</option>
                            <option value="Both Curtains and Blinds">Both Curtains &amp; Blinds</option>
                            <option value="Motorized Smart Track Systems">
                              Motorized Smart Track Systems
                            </option>
                            <option value="Full House Turnkey Project">
                              Full Residence / Estate Turnkey
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="form-row-two">
                        <div className="form-field">
                          <label htmlFor="room">Primary Room / Area</label>
                          <select
                            id="room"
                            name="room"
                            value={formData.room}
                            onChange={handleChange}
                            className="royal-select"
                          >
                            <option value="Lounge / Living Room">Lounge / Living Room</option>
                            <option value="Master Bedroom">Master Bedroom Suite</option>
                            <option value="Dining Room">Royal Dining Room</option>
                            <option value="Kitchen / Pantry">Kitchen / Pantry</option>
                            <option value="Home Office / Studio">Home Office / Studio</option>
                            <option value="Entire Residence">Entire Home / Apartment</option>
                          </select>
                        </div>

                        <div className="form-field">
                          <label htmlFor="consultationType">Consultation Preference</label>
                          <select
                            id="consultationType"
                            name="consultationType"
                            value={formData.consultationType}
                            onChange={handleChange}
                            className="royal-select"
                          >
                            <option value="Free In-Home Measurement">
                              Free In-Home Measurement (Gauteng)
                            </option>
                            <option value="Visit Showroom at Oriental Plaza">
                              Visit Showroom at Oriental Plaza (Gate 1)
                            </option>
                            <option value="WhatsApp Video / Digital Estimate">
                              WhatsApp Video / Photo Estimate
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="form-field">
                        <label htmlFor="message">Project Details, Dimensions or Special Requests</label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          placeholder="Tell us about your window styles (e.g. high ceilings, wave fold preference, blackout requirements, motorized tracks, rough measurements)..."
                          value={formData.message}
                          onChange={handleChange}
                          className="royal-textarea"
                        ></textarea>
                      </div>

                      <button type="submit" className="btn-royal-submit-form">
                        <span>💬 Submit &amp; Connect on WhatsApp Instantly</span>
                      </button>

                      <div className="form-assurance">
                        <span>🔒 100% Confidential · No Spam · Direct Showroom Response</span>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Interactive Google Map & Location Guidance ─────────────── */}
      <section className="royal-map-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow gold">Find Our Showroom</span>
            <h2 className="section-title">Oriental Plaza, Gate 1, Johannesburg</h2>
            <p className="section-lead">
              Situated in the beating heart of Fordsburg's historic fabric &amp; textile district.
              Use Gate 1 off Main Road for direct access.
            </p>
          </div>

          <div className="map-container-card">
            {/* Embedded Google Map */}
            <div className="map-iframe-wrapper">
              <iframe
                title="Royal Curtains and Blinds - Oriental Plaza Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.8821997098254!2d28.02613107623594!3d-26.20050857707835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950ea95914d9e5%3A0x7d018029312217c2!2sOriental%20Plaza!5e0!3m2!1sen!2sza!4v1711000000000!5m2!1sen!2sza"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="map-info-footer">
              <div className="map-info-col">
                <strong>📍 Showroom Location:</strong>
                <p>Shop N38, Gate 1, Oriental Plaza, Fordsburg, Johannesburg</p>
              </div>
              <div className="map-info-col">
                <strong>🚗 Parking Guide:</strong>
                <p>Safe covered rooftop &amp; ground parking right beside Gate 1 entrance.</p>
              </div>
              <div className="map-info-col action-col">
                <a
                  href="https://maps.google.com/?q=Oriental+Plaza+Fordsburg+Johannesburg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-royal-outline"
                >
                  🗺️ Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Frequently Asked Questions (FAQ) Accordion ──────────────── */}
      <section className="royal-faq-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow gold">Help &amp; Insights</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-lead">
              Everything you need to know about our tailoring, measurements, materials, and installations.
            </p>
          </div>

          <div className="royal-faq-accordion">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index
              return (
                <div
                  key={index}
                  className={`faq-item-card ${isOpen ? 'open' : ''}`}
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                >
                  <div className="faq-question-header">
                    <h4>{faq.q}</h4>
                    <span className="faq-toggle-icon">{isOpen ? '−' : '+'}</span>
                  </div>
                  {isOpen && (
                    <div className="faq-answer-body">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
