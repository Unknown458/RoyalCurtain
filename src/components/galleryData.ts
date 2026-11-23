// ─── Royal Curtains & Blinds - Comprehensive Gallery & Product Catalog ───
export type ProductCategory =
  | 'all'
  | 'curtains'
  | 'blinds'
  | 'videos'
  | 'lounge'
  | 'bedroom'
  | 'dining'
  | 'kitchen'
  | 'studio'

export type GalleryItem = {
  id: number
  code: string
  cat: ProductCategory
  type: 'Curtain' | 'Blind' | 'Motorized'
  mediaType?: 'image' | 'video'
  duration?: string
  videoSrc?: string
  title: string
  subtitle: string
  img: string
  description: string
  fabric: string
  room: string
  light: string
  privacy: string
  care: string
  headingStyles?: string[]
  motorizedAvailable: boolean
  featured?: boolean
}

export const WHATSAPP_NUMBER = '27825996651'
export const PHONE_LANDLINE = '+27 11 492 2368'
export const PHONE_MOBILE = '+27 82 599 6651'
export const EMAIL_ADDRESS = 'RoyalCurtaining@gmail.com'
export const SHOWROOM_ADDRESS = 'Shop No: N38, Gate No.1 Oriental Plaza, Fordsburg, Johannesburg'
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`

const imgBase = '/images/'

export const allGalleryItems: GalleryItem[] = [
  // Lounge
  {
    id: 1,
    code: 'RC-LNG-01',
    cat: 'lounge',
    type: 'Curtain',
    title: 'Verdant Wave-Fold Lounge Drapery',
    subtitle: 'Double-track flowing wave-fold drapes in warm ivory and deep forest olive',
    img: imgBase + 'lounge_verdant.jpg',
    description:
      'A majestic floor-to-ceiling wave fold drape tailored with generous fullness and weighted hems. Specially designed for expansive living room windows, providing an ambient diffuse glow while insulating your living space against heat and cold.',
    fabric: 'Heavyweight Belgian Linen & Poly Blend',
    room: 'Lounge / Living Room',
    light: 'Light Filtering · Soft Ambient Glow',
    privacy: 'High Privacy · Day & Night',
    care: 'Dry clean recommended or gentle steam',
    headingStyles: ['Wave Fold (S-Fold)', 'Double Pinch Pleat', 'Eyelet Header'],
    motorizedAvailable: true,
    featured: true,
  },
  {
    id: 2,
    code: 'RC-LNG-02',
    cat: 'lounge',
    type: 'Curtain',
    title: 'Emerald Palace Crushed Velvet',
    subtitle: 'Rich olive emerald velvet with thermal acoustic lining',
    img: imgBase + 'hero_verdant.jpg',
    description:
      'Opulent heavyweight crushed velvet in rich emerald green. Handcrafted with dense blackout acoustic interlining that reduces room echo and frames formal living areas with unmistakable royal majesty.',
    fabric: 'Premium Crushed Silk Velvet',
    room: 'Formal Lounge & Grand Reception',
    light: 'Dim-Out (85% Light Reduction)',
    privacy: 'Maximum 100% Privacy',
    care: 'Professional dry clean only',
    headingStyles: ['Triple French Pinch Pleat', 'Goblet Pleat', 'Wave Fold'],
    motorizedAvailable: true,
    featured: true,
  },
  {
    id: 3,
    code: 'RC-LNG-03',
    cat: 'lounge',
    type: 'Curtain',
    title: 'Champagne & Terracotta Dual Drapery',
    subtitle: 'Mediterranean two-tone panel with sheer underlay',
    img: imgBase + 'lounge_3.png',
    description:
      'An artistic dual-panel arrangement pairing sun-kissed terracotta with delicate champagne voile sheer. Offers full flexibility to transition between gentle daytime daylight and cozy evening seclusion.',
    fabric: 'Textured Cotton-Linen & Voile Sheer',
    room: 'Lounge / Sunroom',
    light: 'Dual: Sheer (Day) + Filtered (Evening)',
    privacy: 'Adjustable Day/Night Privacy',
    care: 'Delicate machine wash at 30°',
    headingStyles: ['Double Track Wave & Sheer', 'Pinch Pleat'],
    motorizedAvailable: true,
  },

  // Bedroom
  {
    id: 4,
    code: 'RC-BED-01',
    cat: 'bedroom',
    type: 'Curtain',
    title: 'Verdant Suite Master Blackout & Sheer',
    subtitle: 'Olive velvet blackout drapes with sheer champagne morning voile',
    img: imgBase + 'bedroom_verdant.jpg',
    description:
      'Boutique suite master bedroom drapes pairing lush olive velvet blackout curtains with ethereal champagne voile. Traps natural morning light in a soft, dreamlike haze while ensuring total blackout rest when closed.',
    fabric: 'Ultra-Fine Voile Sheer + Thermal Velvet Blackout',
    room: 'Master Bedroom & Guest Suite',
    light: 'Dual: 100% Blackout or Diffused Sheer',
    privacy: 'Absolute Privacy',
    care: 'Dry clean recommended',
    headingStyles: ['Wave Fold', 'Pencil Pleat', 'Double Pinch Pleat'],
    motorizedAvailable: true,
    featured: true,
  },
  {
    id: 5,
    code: 'RC-BED-02',
    cat: 'bedroom',
    type: 'Curtain',
    title: 'Midnight Royal Blackout Drapes',
    subtitle: 'Triple-weave thermal blackout in deep sapphire navy',
    img: imgBase + 'bedroom_2.png',
    description:
      'Engineered for ultimate restorative sleep. Featuring a triple-weave woven blackout barrier that blocks 100% of morning sunlight, ambient streetlights, and external traffic noise while keeping room temperatures balanced.',
    fabric: 'Triple-Weave Bonded Thermal Blackout',
    room: 'Master Bedroom / Nursery',
    light: '100% Total Darkness Blackout',
    privacy: 'Absolute 100% Privacy',
    care: 'Cold gentle wash, hang to dry',
    headingStyles: ['Pinch Pleat', 'Wave Fold', 'Eyelet Header'],
    motorizedAvailable: true,
    featured: false,
  },
  {
    id: 6,
    code: 'RC-BED-03',
    cat: 'bedroom',
    type: 'Curtain',
    title: 'Cashmere Sage Relaxed Linen',
    subtitle: 'Earthy organic texture for modern serene bedroom sanctuaries',
    img: imgBase + 'bedroom_3.png',
    description:
      'Natural washed linen in tranquil sage green. Embraces a relaxed luxury drape that elevates minimalist and contemporary bedrooms with breathable, hypoallergenic comfort.',
    fabric: '100% Pre-Washed Organic Linen',
    room: 'Bedroom / Private Suite',
    light: 'Soft Filtered Sunlight',
    privacy: 'High Privacy',
    care: 'Dry clean recommended or steam refresh',
    headingStyles: ['Wave Fold', 'Hidden Tab Header', 'Double Pinch Pleat'],
    motorizedAvailable: false,
  },

  // Dining
  {
    id: 7,
    code: 'RC-DIN-01',
    cat: 'dining',
    type: 'Curtain',
    title: 'Stately Neoclassical Dining Velvet',
    subtitle: 'Deep forest green velvet drapery framing tall arched windows',
    img: imgBase + 'dining_verdant.jpg',
    description:
      'Tailored to enrich grand dining areas. Puddling slightly on dark herringbone floors, hanging from solid brushed gold rods with minimalist brass finials, softening dinner acoustics.',
    fabric: 'Opulent Silk-Lustre Forest Green Velvet',
    room: 'Dining Room & Banquet Hall',
    light: 'Heavy Dim-Out · Intimate Ambient Mood',
    privacy: '100% Privacy',
    care: 'Dry clean only',
    headingStyles: ['French Triple Pinch Pleat', 'Double Pinch Pleat', 'Wave Fold'],
    motorizedAvailable: true,
    featured: true,
  },
  {
    id: 8,
    code: 'RC-DIN-02',
    cat: 'dining',
    type: 'Curtain',
    title: 'Royal Burgundy Velvet Banquet Panel',
    subtitle: 'Dramatic deep wine velvet for stately entertaining spaces',
    img: imgBase + 'dining_2.png',
    description:
      'Rich wine burgundy velvet drapes that catch candlelight and ambient chandeliers with magnificent shimmer. Features reinforced buckram headers and custom tie-backs with antique gold tassels.',
    fabric: 'Heavy Silk-Touch Velvet',
    room: 'Dining Room & Formal Salon',
    light: 'Heavy Dim-Out',
    privacy: '100% Privacy',
    care: 'Dry clean only',
    headingStyles: ['French Triple Pleat', 'Goblet Pleat'],
    motorizedAvailable: true,
  },
  {
    id: 9,
    code: 'RC-DIN-03',
    cat: 'dining',
    type: 'Curtain',
    title: 'Gilded Damask Gold Dining Panel',
    subtitle: 'Intricate jacquard damask woven with metallic gold thread',
    img: imgBase + 'dining_3.png',
    description:
      'A masterpiece of textile artistry. Woven with subtle metallic gold threads in classical floral arabesques, creating an authentic palatial setting for distinguished dining spaces.',
    fabric: 'Jacquard Woven Brocade Damask',
    room: 'Dining Room / Villa Hall',
    light: 'Medium Light Filtering with Warm Gold Tone',
    privacy: 'High Privacy',
    care: 'Dry clean only',
    headingStyles: ['Double Pinch Pleat', 'Cartridge Pleat'],
    motorizedAvailable: true,
  },

  // Blinds & Modern Coverings
  {
    id: 10,
    code: 'RC-BLN-01',
    cat: 'blinds',
    type: 'Blind',
    title: 'Architectural Basswood & Sunscreen Blinds',
    subtitle: '50mm precision timber venetian blinds with motorized sunscreen rollers',
    img: imgBase + 'blinds_verdant.jpg',
    description:
      'Finely crafted from sustainable premium basswood seasoned for South African sunlight. Casts clean, architectural linear light shadows while blocking harsh UV rays and heat in modern studios and living spaces.',
    fabric: '50mm Natural Basswood + Commercial 5% Screen',
    room: 'Executive Studio, Office & Living Rooms',
    light: 'Precision Adjustable Slats (0° to 180°)',
    privacy: 'Variable Dynamic Privacy',
    care: 'Feather duster or light wipe',
    headingStyles: ['Wide Ribbon Tape Header', 'Concealed Bracket'],
    motorizedAvailable: true,
    featured: true,
  },
  {
    id: 11,
    code: 'RC-BLN-02',
    cat: 'blinds',
    type: 'Blind',
    title: 'Motorized Architectural Roller Screens',
    subtitle: 'Sleek motorized sunscreen roller blinds with smart app control',
    img: imgBase + 'kitchen.png',
    description:
      'High-performance roller blinds featuring micro-weave sunscreen fabric that blocks 95% of UV glare while maintaining crystal-clear garden and skyline views. Fully compatible with Somfy, Tuya, and RF remote motors.',
    fabric: 'Commercial 5% Openness Screen Fabric',
    room: 'Kitchen, Studio, Office & Living Rooms',
    light: 'Glare Control with Exterior View',
    privacy: 'Daytime Privacy with Anti-Glare',
    care: 'Wipe clean with damp cloth',
    headingStyles: ['Cassette Enclosure', 'Exposed Roll', 'Dual Bracket'],
    motorizedAvailable: true,
    featured: false,
  },
  {
    id: 12,
    code: 'RC-BLN-03',
    cat: 'blinds',
    type: 'Blind',
    title: 'Dual Zebra Vision Day & Night Blinds',
    subtitle: 'Alternating transparent and blackout bands for seamless light control',
    img: imgBase + 'blinds_verdant.jpg',
    description:
      'The modern marvel of window fashion. Sliding translucent and solid bands allow you to switch effortlessly from gentle diffused daylight to complete room privacy with a single pull or remote tap.',
    fabric: 'Precision Laser-Cut Poly Weave',
    room: 'Lounge, Kitchen, Bedroom & Office',
    light: 'Smooth Gradient from Sheer to Blockout',
    privacy: 'Dynamic Instant Privacy Control',
    care: 'Vacuum with brush attachment or damp wipe',
    headingStyles: ['Deluxe Aluminum Cassette with Fabric Inlay'],
    motorizedAvailable: true,
    featured: false,
  },

  // Kitchen
  {
    id: 13,
    code: 'RC-KTC-01',
    cat: 'kitchen',
    type: 'Blind',
    title: 'Moisture-Guard Textured Kitchen Blinds',
    subtitle: 'Water-resistant, wipe-clean designer roller and faux-wood solutions',
    img: imgBase + 'kitchen.png',
    description:
      'Engineered specifically for kitchen and pantry moisture zones. Resistant to steam, oil splatters, and humidity, easy to wipe pristine with a damp cloth while filtering beautiful daylight over worktops.',
    fabric: 'Anti-Bacterial PVC / Faux-Wood Composite',
    room: 'Kitchen & Scullery',
    light: 'Light Filtering & Heat Repelling',
    privacy: 'Total Privacy When Closed',
    care: '100% Washable & Wipe-Clean',
    headingStyles: ['Compact Slimline Bracket', 'Enclosed Cassette'],
    motorizedAvailable: false,
  },

  // Studio / Office
  {
    id: 14,
    code: 'RC-STU-01',
    cat: 'studio',
    type: 'Motorized',
    title: 'Smart Motorized Studio Track System',
    subtitle: 'Whisper-quiet motorized tracks controlled via smartphone and voice',
    img: imgBase + 'studio.png',
    description:
      'Transform your home studio or boardroom with automated luxury. Our whisper-quiet smart motor tracks glide effortlessly on schedule, with wireless wall switches, smartphone apps, or voice commands (Alexa / Google Home).',
    fabric: 'Commercial Heavy Acoustic Velvet / Blockout',
    room: 'Studio, Home Cinema & Executive Boardrooms',
    light: 'Variable Precision Position Control',
    privacy: 'Instant One-Touch Privacy',
    care: 'Zero maintenance motorized pulley system',
    headingStyles: ['Concealed Ceiling Recessed Track', 'Surface Mounted Track'],
    motorizedAvailable: true,
    featured: false,
  },

  // Motion Video Showcases (Interactive In-Action Demonstrations)
  {
    id: 101,
    code: 'RC-VID-01',
    cat: 'videos',
    type: 'Motorized',
    mediaType: 'video',
    duration: '0:48',
    videoSrc: '/videos/motorized-lounge.mp4',
    title: 'Whisper-Quiet Motorized Wave-Fold Tracks',
    subtitle: 'Lounge Penthouse Suite · Silent Somfy Automated Glide',
    img: imgBase + 'lounge_verdant.jpg',
    description:
      'Experience the effortless elegance of motorized wave-fold drapes with whisper-quiet acceleration and deceleration, perfect uniform S-fold ripples, and seamless smart control via handheld remote, smartphone app, or home automation.',
    fabric: 'Heavy Belgian Linen & Ethereal Voile Sheer',
    room: 'Lounge & Penthouse Living',
    light: 'Motorized Precision Daylight Control',
    privacy: 'Dual-Layer Complete Privacy',
    care: 'Zero maintenance motorized Somfy pulley',
    headingStyles: ['Recessed Ceiling S-Fold Track', 'Surface Mounted Somfy Rail'],
    motorizedAvailable: true,
    featured: true,
  },
  {
    id: 102,
    code: 'RC-VID-02',
    cat: 'videos',
    type: 'Curtain',
    mediaType: 'video',
    duration: '0:36',
    videoSrc: '/videos/blackout-voile.mp4',
    title: 'Dual-Track Daylight Voile to 100% Velvet Blackout',
    subtitle: 'Master Sanctuary · Total Privacy & Daylight Filtration',
    img: imgBase + 'bedroom_verdant.jpg',
    description:
      'Witness the transformation from a sun-drenched morning sanctuary to complete darkness. The ethereal champagne voile filters harsh Gauteng sunlight, while the forest olive velvet drape provides 100% blackout and thermal insulation.',
    fabric: '100% Thermal Velvet + Voile Sheer',
    room: 'Master Bedroom Suite',
    light: '100% Total Darkness Blackout',
    privacy: 'Absolute Day & Night Privacy',
    care: 'Dry clean recommended or gentle steam',
    headingStyles: ['Double Ceiling Wave Track', 'Double Pinch Pleat'],
    motorizedAvailable: true,
    featured: true,
  },
  {
    id: 103,
    code: 'RC-VID-03',
    cat: 'videos',
    type: 'Blind',
    mediaType: 'video',
    duration: '0:42',
    videoSrc: '/videos/basswood-blinds.mp4',
    title: '50mm Basswood Timber Tilt & Motorized Sunscreens',
    subtitle: 'Executive Penthouse Study · Precision Angle & Glare Control',
    img: imgBase + 'blinds_verdant.jpg',
    description:
      'See natural timber craftsmanship and modern solar shading work in harmony. Authentic 50mm kiln-dried basswood slats adjust light angles with precision, complemented by automated sunscreen roller blinds that reduce heat and UV glare.',
    fabric: '50mm Kiln-Dried Natural Timber & UV Sunscreen',
    room: 'Executive Study & Boardroom',
    light: 'Precision Micro-Angle Slats',
    privacy: 'Adjustable Directional Privacy',
    care: 'Dust with microfiber cloth or wipe clean',
    headingStyles: ['Standard Enclosed Cassette', 'Motorized Wand Tilt'],
    motorizedAvailable: true,
    featured: true,
  },
  {
    id: 104,
    code: 'RC-VID-04',
    cat: 'videos',
    type: 'Curtain',
    mediaType: 'video',
    duration: '1:05',
    videoSrc: '/videos/atelier-tailoring.mp4',
    title: 'Master Atelier Tailoring, Weighted Hems & Steam Dressing',
    subtitle: 'Oriental Plaza Workshop · Behind The Craftsmanship',
    img: imgBase + 'dining_verdant.jpg',
    description:
      'Step inside our dedicated Oriental Plaza workshop. See our master tailors meticulously align fabric grains, insert precision corner weights into bottom hems, and vertical-steam each drape so it arrives at your home in immaculate royal perfection.',
    fabric: 'Hand-Cut Pure Damask, Linen & Crushed Velvet',
    room: 'Showroom & Workshop Atelier',
    light: 'Full Custom Lining Thicknesses',
    privacy: 'Weighted Drape Hanging Perfection',
    care: 'Professional White-Glove Installation',
    headingStyles: ['Hand-Sewn Weighted Corners', 'Invisible French Seams'],
    motorizedAvailable: true,
    featured: true,
  },
]

export const filterTabs = [
  { slug: 'all', label: 'All Collections' },
  { slug: 'curtains', label: 'Bespoke Curtains' },
  { slug: 'blinds', label: 'Designer Blinds' },
  { slug: 'videos', label: '🎬 Motion Videos' },
  { slug: 'lounge', label: 'Lounge Curtains' },
  { slug: 'bedroom', label: 'Master Bedroom' },
  { slug: 'dining', label: 'Royal Dining' },
  { slug: 'kitchen', label: 'Kitchen Blinds' },
  { slug: 'studio', label: 'Studio & Office' },
]

export function buildWhatsAppLink(productTitle?: string, productCode?: string) {
  let text = `Hi Royal Curtains & Blinds! 👋%0A%0AI visited your website and would like an inquiry/quote.`
  if (productTitle) {
    text += `%0A%0A*Item:* ${encodeURIComponent(productTitle)}`
  }
  if (productCode) {
    text += `%0A*Code:* ${encodeURIComponent(productCode)}`
  }
  text += `%0A%0APlease let me know available fabrics, pricing, and how to book a measurement.`
  return `${WHATSAPP_BASE_URL}?text=${text}`
}
