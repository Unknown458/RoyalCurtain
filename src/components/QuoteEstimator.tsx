import { useState } from 'react'
import { WHATSAPP_BASE_URL } from './galleryData'

export default function QuoteEstimator() {
  const [productType, setProductType] = useState<'Curtains' | 'Blinds' | 'Both'>('Curtains')
  const [room, setRoom] = useState('Lounge / Living Room')
  const [stylePreference, setStylePreference] = useState('Wave Fold (S-Fold)')
  const [windowCount, setWindowCount] = useState(2)
  const [widthMeters, setWidthMeters] = useState('2.5')
  const [heightMeters, setHeightMeters] = useState('2.8')
  const [isMotorized, setIsMotorized] = useState(false)

  const handleGenerateQuote = () => {
    const message = `Hi Royal Curtains & Blinds! 👋%0A%0A*Online Estimate & Inquiry Request:*%0A-------------------------------%0A• *Product:* ${encodeURIComponent(productType)}%0A• *Room:* ${encodeURIComponent(room)}%0A• *Style/Heading:* ${encodeURIComponent(stylePreference)}%0A• *Number of Windows:* ${windowCount}%0A• *Estimated Size:* ${widthMeters}m Wide × ${heightMeters}m Drop%0A• *Motorization:* ${isMotorized ? 'Yes, Motorized Track/Blind' : 'Standard Manual'}%0A-------------------------------%0APlease provide fabric recommendations and an estimate for our home! Thank you.`

    window.open(`${WHATSAPP_BASE_URL}?text=${message}`, '_blank')
  }

  return (
    <div className="royal-estimator-card">
      <div className="estimator-header">
        <span className="section-eyebrow">Interactive Estimator</span>
        <h3 className="estimator-title">Instant Window Project Calculator</h3>
        <p className="estimator-subtitle">
          Configure your window styling below to get an instant estimate &amp; personalized advice directly on WhatsApp.
        </p>
      </div>

      <div className="estimator-form-grid">
        {/* Step 1: Product Selection */}
        <div className="estimator-field">
          <label>1. Window Covering Type</label>
          <div className="estimator-toggle-group">
            {(['Curtains', 'Blinds', 'Both'] as const).map((type) => (
              <button
                type="button"
                key={type}
                className={`estimator-toggle-btn ${productType === type ? 'active' : ''}`}
                onClick={() => {
                  setProductType(type)
                  if (type === 'Blinds') setStylePreference('Motorized Roller Blinds')
                  if (type === 'Curtains') setStylePreference('Wave Fold (S-Fold)')
                  if (type === 'Both') setStylePreference('Curtain & Blind Combination')
                }}
              >
                {type === 'Curtains' && '✨ Bespoke Curtains'}
                {type === 'Blinds' && '🪟 Custom Blinds'}
                {type === 'Both' && '👑 Curtains + Blinds Dual'}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Room */}
        <div className="estimator-field">
          <label>2. Room / Space</label>
          <select
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            className="estimator-select"
          >
            <option value="Lounge / Living Room">Lounge / Living Room</option>
            <option value="Master Bedroom">Master Bedroom Suite</option>
            <option value="Dining Room">Royal Dining Room</option>
            <option value="Kitchen / Pantry">Kitchen / Scullery</option>
            <option value="Home Office / Studio">Home Office / Executive Studio</option>
            <option value="Whole Residence / Villa">Entire House / Luxury Apartment</option>
          </select>
        </div>

        {/* Step 3: Style Preference */}
        <div className="estimator-field">
          <label>3. Heading Style / Mechanism</label>
          <select
            value={stylePreference}
            onChange={(e) => setStylePreference(e.target.value)}
            className="estimator-select"
          >
            {productType !== 'Blinds' && (
              <>
                <option value="Wave Fold (S-Fold)">Wave Fold (S-Fold) — Ultra Modern</option>
                <option value="Double Pinch Pleat">Double Pinch Pleat — Timeless Elegance</option>
                <option value="Triple French Pleat">Triple French Pleat — Formal Classic</option>
                <option value="Eyelet Modern Ring Header">Eyelet Ring Header — Relaxed Casual</option>
                <option value="Sheer + Blackout Dual Track">Dual Track (Sheer Voile + Heavy Blackout)</option>
              </>
            )}
            {productType !== 'Curtains' && (
              <>
                <option value="Motorized Roller Blinds">Motorized Roller Blinds (Sunscreen/Blockout)</option>
                <option value="Basswood Venetian 50mm Blinds">50mm Natural Basswood Venetian Blinds</option>
                <option value="Zebra Vision Day & Night Blinds">Zebra Vision Dual Day &amp; Night Blinds</option>
                <option value="Roman Fabric Tailored Blinds">Roman Fabric Tailored Blinds</option>
                <option value="Moisture-Resistant Kitchen Blinds">Moisture-Resistant Kitchen Blinds</option>
              </>
            )}
          </select>
        </div>

        {/* Step 4: Dimensions & Windows */}
        <div className="estimator-dimensions-row">
          <div className="estimator-field">
            <label>Approx. Width (m)</label>
            <input
              type="number"
              step="0.1"
              min="0.5"
              max="20"
              value={widthMeters}
              onChange={(e) => setWidthMeters(e.target.value)}
              className="estimator-input"
            />
          </div>
          <div className="estimator-field">
            <label>Approx. Height (m)</label>
            <input
              type="number"
              step="0.1"
              min="0.5"
              max="10"
              value={heightMeters}
              onChange={(e) => setHeightMeters(e.target.value)}
              className="estimator-input"
            />
          </div>
          <div className="estimator-field">
            <label>Windows Count</label>
            <div className="number-stepper">
              <button
                type="button"
                onClick={() => setWindowCount((prev) => Math.max(1, prev - 1))}
              >
                -
              </button>
              <span>{windowCount}</span>
              <button
                type="button"
                onClick={() => setWindowCount((prev) => prev + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Step 5: Motorization Option */}
        <div className="estimator-checkbox-field">
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={isMotorized}
              onChange={(e) => setIsMotorized(e.target.checked)}
            />
            <span className="checkmark"></span>
            <span className="checkbox-text">
              Include Whisper-Quiet Smart Motorization (Remote / App / Alexa / Google Home)
            </span>
          </label>
        </div>
      </div>

      {/* Result Box & Send to WhatsApp */}
      <div className="estimator-summary-box">
        <div className="summary-left">
          <div className="summary-badge">Summary Configuration</div>
          <h4>
            {windowCount}x {productType} · {room}
          </h4>
          <p>
            Style: <strong>{stylePreference}</strong> | Dimensions: ~{widthMeters}m × {heightMeters}m
            {isMotorized ? ' (Motorized)' : ''}
          </p>
        </div>
        <button
          type="button"
          className="btn-royal-whatsapp-submit"
          onClick={handleGenerateQuote}
        >
          <span>💬 Send Spec to WhatsApp for Exact Price</span>
        </button>
      </div>
    </div>
  )
}
