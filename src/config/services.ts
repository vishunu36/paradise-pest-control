import { BUSINESS } from '../config/business';

export const SERVICES = [
  {
    id: 'termite-control',
    name: 'Termite Control',
    shortDesc:
      'Protect your home from the silent destroyer. Professional termite inspection and treatment services.',
    description:
      'Termites are among the most destructive pests, silently damaging wooden structures, furniture, and even the foundations of buildings. Our termite control service begins with a thorough inspection of the affected areas, followed by a targeted treatment plan suited to the severity and type of infestation.',
    signs: [
      'Hollow-sounding wood when tapped',
      'Mud tubes along walls, floors, or foundations',
      'Discarded termite wings near windows or doors',
      'Blistered or darkened wood surfaces',
      'Damage visible inside cupboards or wooden furniture',
    ],
    whatsappUrl: BUSINESS.whatsappTermite,
    image: '/images/termite-control.jpg',
    icon: '🪲',
  },
  {
    id: 'termite-cupboards',
    name: 'Termite Damage — Cupboards & Wooden Furniture',
    shortDesc:
      'Specialist inspection and treatment for termite damage inside wooden cupboards and furniture.',
    description:
      'Termites commonly attack wooden cupboards, almirahs, and furniture from the inside, making damage difficult to spot until it becomes serious. If your furniture surfaces appear blistered, show mud-filled galleries, or have hollowed sections, a professional inspection is recommended before the damage spreads further.',
    signs: [
      'Blistered or bubbled paint on wooden furniture',
      'Mud-packed tunnels visible inside cupboard panels',
      'Weakened or crumbling wood structure',
      'Fine dusty residue around furniture joints',
    ],
    whatsappUrl: BUSINESS.whatsappTermite,
    image: '/images/termite-cupboards.jpg',
    icon: '🪵',
  },
  {
    id: 'ground-foundation-treatment',
    name: 'Ground & Foundation Treatment',
    shortDesc:
      'Pre-construction and post-construction soil treatment to protect building foundations from subterranean termites.',
    description:
      'Subterranean termites enter buildings through the soil and can cause significant structural damage over time. Ground and foundation treatment involves applying a protective chemical barrier in the soil around and beneath the building, making it an essential preventive step — especially for new construction. Existing buildings can also be treated through drilling and injection techniques.',
    signs: [
      'Mud tubes rising from floor level or along external walls',
      'Termite activity near ground-level wood or masonry',
      'Swarmers (winged termites) emerging from floor cracks',
      'Previously untreated building undergoing renovation or extension',
    ],
    whatsappUrl: BUSINESS.whatsappTermite,
    image: '/images/ground-treatment.jpg',
    icon: '🏗️',
  },
  {
    id: 'termite-walls-frames',
    name: 'Termite Damage — Walls & Wooden Frames',
    shortDesc:
      'Identifying and treating termite activity in wall panels, door frames, and window frames.',
    description:
      'Termites frequently attack wooden door and window frames, skirting boards, and timber embedded in walls. Damaged areas may show discolouration, mud galleries, or hollow sections. Early identification and targeted treatment can stop the spread and help preserve the structure.',
    signs: [
      'Mud tubes along skirting boards or wall corners',
      'Peeling or discoloured paint near window/door frames',
      'Hollow-sounding wood around door or window surrounds',
      'Visible termite galleries on the surface of timber frames',
    ],
    whatsappUrl: BUSINESS.whatsappTermite,
    image: '/images/termite-walls.jpg',
    icon: '🚪',
  },
  {
    id: 'bed-bug-control',
    name: 'Bed Bug Control',
    shortDesc:
      'Targeted treatment for bed bug infestations in mattresses, furniture, and bedrooms.',
    description:
      'Bed bugs are small, nocturnal insects that feed on human blood, causing itchy bites and disturbed sleep. They hide in mattress seams, bed frames, headboards, and furniture crevices. Professional treatment involves a careful inspection followed by targeted application to affected areas, helping to reduce the infestation effectively.',
    signs: [
      'Red, itchy bite marks on skin in the morning',
      'Small dark spots (droppings) on mattress seams or bedding',
      'Tiny shed skins or eggs in bed frame joints',
      'Musty or sweet odour in the bedroom',
      'Visible bugs in mattress folds or headboard cracks',
    ],
    whatsappUrl: BUSINESS.whatsappBedBug,
    image: '/images/bed-bug-control.jpg',
    icon: '🛏️',
  },
];
