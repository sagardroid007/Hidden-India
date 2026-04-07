export interface Review {
  id: number
  name: string
  rating: number
  text: string
  date: string
}

export interface Location {
  id: string
  name: string
  state: string
  region: string
  image: string
  heroImage: string
  shortDescription: string
  fullDescription: string
  tags: string[]
  category: 'Nature' | 'Heritage' | 'Adventure' | 'Spiritual'
  rating: number
  reviewCount: number
  bestSeason: string
  howToReach: string[]
  thingsToDo: string[]
  tips: string[]
  reviews: Review[]
}

const locations: Location[] = [
  {
    id: 'chopta-uttarakhand',
    name: 'Chopta',
    state: 'Uttarakhand',
    region: 'North India',
    image: 'https://picsum.photos/seed/chopta/800/600',
    heroImage: 'https://picsum.photos/seed/chopta-hero/1400/700',
    shortDescription:
      'A serene meadow at 2,680m altitude often called the "Mini Switzerland of India", offering panoramic Himalayan views far from tourist crowds.',
    fullDescription:
      'Chopta is a pristine hamlet nestled in the Kedarnath Wildlife Sanctuary in Uttarakhand, standing at an altitude of 2,680 metres above sea level. Often referred to as the "Mini Switzerland of Uttarakhand", this enchanting destination is blanketed with lush alpine meadows, dense forests of oak, rhododendron, and pine, and offers jaw-dropping views of snow-capped peaks like Trishul, Nanda Devi, and Chaukhamba. Unlike its more famous counterparts Kedarnath and Badrinath, Chopta remains refreshingly uncrowded and unspoiled. The famous Tungnath temple — the highest Shiva temple in the world — sits just a 3.5 km trek away, and the Chandrashila peak above it rewards trekkers with a 360-degree panorama of the Himalayas. In winter, Chopta transforms into a snow-covered wonderland, accessible only by the hardiest of travelers.',
    tags: ['Nature', 'Trekking', 'Himalaya', 'Wildlife'],
    category: 'Nature',
    rating: 4.8,
    reviewCount: 124,
    bestSeason: 'April–June, September–November',
    howToReach: [
      'Nearest railway station: Haridwar (210 km) or Rishikesh (225 km)',
      'From Rishikesh, take a bus or shared taxi to Ukhimath, then drive to Chopta',
      'Nearest airport: Jolly Grant Airport, Dehradun (221 km)',
      'Self-drive via NH-58 through Devprayag and Rudraprayag is highly recommended',
    ],
    thingsToDo: [
      'Trek to Tungnath — the highest Shiva temple in the world (3,680m)',
      'Hike to Chandrashila Peak for panoramic Himalayan views',
      'Bird watching — over 200 species in Kedarnath Wildlife Sanctuary',
      'Stargazing on clear nights away from light pollution',
      'Photography of rhododendron forests in spring bloom',
      'Camping in the alpine meadows',
    ],
    tips: [
      'Acclimatize at Rishikesh or Haridwar for a day before heading up',
      'Carry woolen clothing even in summer — nights are cold',
      'The road to Chopta can be blocked by snow from December to March',
      'Homestays in nearby Ukhimath offer authentic local food',
      'Avoid peak winter (Dec–Feb) unless you are an experienced trekker',
    ],
    reviews: [
      {
        id: 1,
        name: 'Arjun Mehta',
        rating: 5,
        text: 'Absolutely breathtaking! We visited in October and the entire valley was golden. Almost no tourists — just us, the mountains, and complete silence.',
        date: '2024-10-12',
      },
      {
        id: 2,
        name: 'Priya Sharma',
        rating: 5,
        text: 'The trek to Tungnath at sunrise was spiritual beyond words. No crowds, just pure Himalayan magic. A must-visit for those tired of mainstream hill stations.',
        date: '2024-09-08',
      },
    ],
  },
  {
    id: 'dzukou-valley-nagaland',
    name: 'Dzukou Valley',
    state: 'Nagaland',
    region: 'Northeast India',
    image: 'https://picsum.photos/seed/dzukou/800/600',
    heroImage: 'https://picsum.photos/seed/dzukou-hero/1400/700',
    shortDescription:
      'The "Valley of Flowers of the Northeast" — a remote high-altitude valley carpeted in seasonal wildflowers, accessible only on foot.',
    fullDescription:
      'Dzukou Valley, straddling the border of Nagaland and Manipur at around 2,452 metres, is one of India\'s most spectacular and least-visited natural wonders. The valley gets its name from the Dzukou lily — a rare flower found nowhere else on earth — which blooms here in July and August, transforming the valley into an otherworldly carpet of white blossoms. Ringed by gentle rolling hills and fed by meandering streams, Dzukou feels like a landscape from another dimension. The only way in is by foot, via a steep 4–5 hour trek from Viswema village, which itself keeps the numbers low and the experience pristine. The valley has basic bamboo huts for overnight stays, allowing trekkers to wake up surrounded by mist and wildflowers. Local Naga guides offer an insight into the indigenous culture of the region that is just as rare and precious as the valley itself.',
    tags: ['Nature', 'Trekking', 'Northeast', 'Wildflowers'],
    category: 'Nature',
    rating: 4.9,
    reviewCount: 87,
    bestSeason: 'June–September (flowers), December–January (snow)',
    howToReach: [
      'Fly to Dimapur Airport (74 km from Kohima)',
      'Take a bus or taxi from Dimapur to Kohima',
      'From Kohima, drive to Viswema village (16 km)',
      'Trek 4–5 hours to the valley from Viswema base camp',
    ],
    thingsToDo: [
      'Trek through the blooming Dzukou lily fields in July–August',
      'Overnight camping in the valley with mountain views',
      'Photography of rare endemic flora and landscape',
      'Explore the Zakhama Forest Reserve on the way',
      'Visit Japfu Peak — the second highest peak in Nagaland',
    ],
    tips: [
      'Obtain an Inner Line Permit (ILP) before entering Nagaland',
      'Hire a local Naga guide — they know the trails and the valley intimately',
      'Carry all food and water; the valley has no shops',
      'The bamboo huts are basic — sleeping bags are essential',
      'Visit in July for peak flower bloom, but expect rain gear to be mandatory',
    ],
    reviews: [
      {
        id: 1,
        name: 'Rohan Das',
        rating: 5,
        text: 'Spent two nights here in August. The Dzukou lilies were in full bloom. There were maybe 15 other people in the entire valley. One of the most magical places on earth.',
        date: '2024-08-20',
      },
    ],
  },
  {
    id: 'gandikota-andhra-pradesh',
    name: 'Gandikota',
    state: 'Andhra Pradesh',
    region: 'South India',
    image: 'https://picsum.photos/seed/gandikota/800/600',
    heroImage: 'https://picsum.photos/seed/gandikota-hero/1400/700',
    shortDescription:
      'India\'s own "Grand Canyon" — a dramatic gorge carved by the Penna River, flanked by ancient fort ruins and terracotta cliffs.',
    fullDescription:
      'Gandikota is perhaps India\'s best-kept secret — a stunning gorge carved over millennia by the Penna River through the Erramala hills of Andhra Pradesh. Often called the "Grand Canyon of India", the gorge features towering red and ochre sandstone cliffs dropping sharply into the winding river below. Presiding over this dramatic landscape is the Gandikota Fort, a medieval stronghold of the Pemmasani Nayakas, whose ancient temples, mosque, and granary stand remarkably preserved amid the rocky plateau. At sunrise and sunset, the gorge lights up in shades of amber, crimson, and gold that would make any photographer weep with joy. The APTDC maintains basic camping facilities at the gorge edge, making it possible to wake up to one of the most spectacular views in all of India. Away from major tourist circuits, Gandikota receives a fraction of the visitors it deserves, ensuring a raw, authentic experience.',
    tags: ['Heritage', 'Canyon', 'Camping', 'Photography'],
    category: 'Heritage',
    rating: 4.7,
    reviewCount: 213,
    bestSeason: 'October–February',
    howToReach: [
      'Nearest railway station: Jammalamadugu (15 km) or Yerraguntla (49 km)',
      'From Bangalore: 310 km via NH-44; a direct overnight bus is available',
      'Nearest airport: Kurnool (120 km) or Kadapa (70 km)',
      'APSRTC buses run from Kurnool and Kadapa to Jammalamadugu',
    ],
    thingsToDo: [
      'Sunrise and sunset watching from the gorge viewpoint',
      'Explore Gandikota Fort — temples, mosque, granary and ramparts',
      'Kayaking and boating on the Penna River gorge',
      'Rock climbing on the sandstone cliffs',
      'Night sky photography — minimal light pollution',
      'Camp at the APTDC campsite on the gorge edge',
    ],
    tips: [
      'APTDC tents must be booked in advance, especially on weekends',
      'Carry sufficient food and water; options nearby are limited',
      'The fort is free to enter — take a local guide for historical context',
      'Avoid summer (March–June) as temperatures can exceed 40°C',
      'The road from Jammalamadugu is rough — an SUV or high-clearance vehicle is advisable',
    ],
    reviews: [
      {
        id: 1,
        name: 'Kavya Reddy',
        rating: 5,
        text: 'Camped at the gorge edge. Woke up at 5am to watch the sunrise light up the canyon walls. No words. Why is this place not on every travel list?',
        date: '2025-01-14',
      },
      {
        id: 2,
        name: 'Siddharth Nair',
        rating: 4,
        text: 'Fantastic place. The fort is genuinely impressive and the gorge views are surreal. Infrastructure is basic but that\'s part of the charm.',
        date: '2024-12-03',
      },
    ],
  },
  {
    id: 'mawlynnong-meghalaya',
    name: 'Mawlynnong',
    state: 'Meghalaya',
    region: 'Northeast India',
    image: 'https://picsum.photos/seed/mawlynnong/800/600',
    heroImage: 'https://picsum.photos/seed/mawlynnong-hero/1400/700',
    shortDescription:
      'Asia\'s cleanest village — a living root bridge hamlet in the misty Khasi Hills where community-led conservation meets extraordinary natural beauty.',
    fullDescription:
      'Mawlynnong, tucked in the East Khasi Hills of Meghalaya near the Bangladesh border, was declared Asia\'s cleanest village by Discover India magazine in 2003 — and it has held that title through sheer community pride ever since. Bamboo dustbins line every path, plastic is banned, and the entire village participates in daily sweeping. But Mawlynnong is more than a clean village — it is a window into the Khasi matrilineal culture, where women hold property rights and family lineage traces through the mother. The village is surrounded by dense subtropical forest, stunning waterfalls, and the extraordinary living root bridges — trees trained over generations by the Khasi people to grow into functional pedestrian bridges over streams. A sky walk platform built from bamboo offers views over the Bangladesh plains below. The pace of life here is gentle, hospitable, and entirely unlike anything in mainstream India.',
    tags: ['Nature', 'Culture', 'Village', 'Northeast'],
    category: 'Nature',
    rating: 4.6,
    reviewCount: 178,
    bestSeason: 'October–April (avoid monsoon)',
    howToReach: [
      'Nearest airport: Shillong (90 km) or Guwahati (180 km)',
      'Drive from Shillong via Cherrapunji (Sohra) — about 3 hours',
      'Shared taxis and sumo cabs run from Shillong to Mawlynnong',
      'Nearest railway: Guwahati station, then road journey',
    ],
    thingsToDo: [
      'Walk across the double-decker living root bridge',
      'Climb the bamboo sky walk for views over Bangladesh plains',
      'Visit the nearby Dawki river and emerald-green Umngot River',
      'Explore the community bamboo plantations',
      'Stay in a Khasi homestay and share a meal with locals',
      'Visit the Balancing Rock — a giant boulder perched on a small stone',
    ],
    tips: [
      'Stay in a village homestay rather than a hotel for authentic experience',
      'Carry cash — there are no ATMs in the village',
      'Respect local customs; the Khasi community is welcoming but private',
      'Combine with a visit to Dawki and Shillong for a longer Northeast itinerary',
      'October to March is the best window — rainy season makes trails slippery',
    ],
    reviews: [
      {
        id: 1,
        name: 'Ananya Bose',
        rating: 5,
        text: 'The cleanest, most serene village I have ever visited in India. The living root bridge is unbelievable. Stayed at a local homestay — the hosts were incredibly warm.',
        date: '2025-02-18',
      },
    ],
  },
  {
    id: 'khimsar-rajasthan',
    name: 'Khimsar',
    state: 'Rajasthan',
    region: 'North India',
    image: 'https://picsum.photos/seed/khimsar/800/600',
    heroImage: 'https://picsum.photos/seed/khimsar-hero/1400/700',
    shortDescription:
      'A forgotten desert village with a medieval fort-palace and pristine sand dunes, untouched by the Jaisalmer–Jodphur tourist trail.',
    fullDescription:
      'Khimsar sits quietly on the edge of the Thar Desert in Rajasthan, roughly halfway between Jodhpur and Jaisalmer, and remains one of the most atmospheric and overlooked desert destinations in India. Its centrepiece is the Khimsar Fort, a 15th-century fortress built by Rao Karamsiji — a scion of the Rathore clan — which has been converted into a heritage hotel without losing its medieval soul. Thick sandstone walls, ornate jharokhas, and hand-painted frescoes transport visitors back five centuries. But it is the dunes just outside the village that steal the show. Unlike the popular dunes at Sam near Jaisalmer, the Khimsar dunes are empty, silent, and stretch to the horizon without a camel tourist in sight. Sunsets here are an event in themselves, as the sky turns a dozen shades of violet and crimson over the golden sand. Village walks reveal a traditional Rajasthani lifestyle — potters, weavers, and herders going about centuries-old routines.',
    tags: ['Heritage', 'Desert', 'Fort', 'Offbeat'],
    category: 'Heritage',
    rating: 4.5,
    reviewCount: 156,
    bestSeason: 'October–March',
    howToReach: [
      'Nearest railway station: Nagaur (30 km) or Jodhpur (100 km)',
      'Drive from Jodhpur: 100 km on NH-65; about 2 hours',
      'From Jaisalmer: 170 km; about 3.5 hours',
      'Nearest airport: Jodhpur Airport (100 km)',
    ],
    thingsToDo: [
      'Sunset camel safari on the Khimsar dunes',
      'Explore the medieval Khimsar Fort',
      'Village walk to watch traditional Rajasthani crafts',
      'Star gazing on clear desert nights',
      'Jeep safari into the Thar dunes',
      'Photography of the fort illuminated at night',
    ],
    tips: [
      'Book the fort-hotel in advance for special heritage stay experience',
      'The dunes are best at sunrise and sunset — avoid midday in winter',
      'Carry a warm jacket for winter evenings — desert nights get cold',
      'The village market sells authentic local handicrafts at fair prices',
      'Combine with Nagaur Fort for a full Rajasthan heritage circuit',
    ],
    reviews: [
      {
        id: 1,
        name: 'Vikram Singh',
        rating: 5,
        text: 'Stayed at the Khimsar Fort Hotel. Woke up before dawn and walked to the dunes alone — not a single other person for miles. That is the real Rajasthan.',
        date: '2025-01-28',
      },
      {
        id: 2,
        name: 'Meera Joshi',
        rating: 4,
        text: 'Completely underrated. The fort is stunning, the dunes are pristine. Far less crowded than Jaisalmer. Will come back every year.',
        date: '2024-11-10',
      },
    ],
  },
  {
    id: 'tirthan-valley-himachal',
    name: 'Tirthan Valley',
    state: 'Himachal Pradesh',
    region: 'North India',
    image: 'https://picsum.photos/seed/tirthan/800/600',
    heroImage: 'https://picsum.photos/seed/tirthan-hero/1400/700',
    shortDescription:
      'A pristine Himalayan valley along the Great Himalayan National Park — the ideal base for trout fishing, wild swimming, and quiet forest walks.',
    fullDescription:
      'Tirthan Valley in Kullu district, Himachal Pradesh, is a jewel hidden in plain sight. The valley takes its name from the Tirthan River, a crystalline snow-fed stream that tumbles through ancient oak and deodar forests, carrying some of the most pristine trout fishing in India. The valley forms the gateway to the Great Himalayan National Park — a UNESCO World Heritage Site — making it a premier destination for wildlife spotting, birding, and high-altitude trekking. Unlike the crowded Manali–Kasol belt, Tirthan has deliberately avoided mass tourism, with accommodation limited to small eco-homestays and guesthouses run by local Himachali families. The pace is gentle: days are spent by the riverbank, evenings sipping local apple cider by a wood stove, and nights listening to the river in complete silence. It is the kind of place that travel writers protect jealously.',
    tags: ['Nature', 'Trekking', 'Wildlife', 'River'],
    category: 'Nature',
    rating: 4.8,
    reviewCount: 203,
    bestSeason: 'March–June, September–November',
    howToReach: [
      'Nearest airport: Bhuntar Airport, Kullu (65 km)',
      'Nearest railway station: Chandigarh (260 km)',
      'From Bhuntar: drive on NH-305 to Aut, then follow Tirthan River road',
      'Buses from Chandigarh to Aut, then local bus or taxi into the valley',
    ],
    thingsToDo: [
      'Trout fishing in the Tirthan River (with permit)',
      'Trek to Shilt Hut through the Great Himalayan National Park',
      'Bird watching — over 375 bird species in the GHNP',
      'Wild swimming in river pools and natural jacuzzis',
      'Village walk to Shangarh meadows',
      'Waterfall hike to Jalori Pass',
    ],
    tips: [
      'Get the GHNP entry permit from the park office in Gushaini',
      'Stay in local homestays rather than resorts — the hospitality is exceptional',
      'Carry cash; ATMs are scarce in the valley',
      'Monsoon (July–August) brings leeches on trails — plan accordingly',
      'The valley is best explored slowly — stay at least 4–5 days',
    ],
    reviews: [
      {
        id: 1,
        name: 'Aditya Kumar',
        rating: 5,
        text: 'Spent a week here doing nothing but reading by the river and going on forest walks. Completely unplugged and healed. This is what travel is supposed to feel like.',
        date: '2024-05-22',
      },
    ],
  },
  {
    id: 'majuli-assam',
    name: 'Majuli',
    state: 'Assam',
    region: 'Northeast India',
    image: 'https://picsum.photos/seed/majuli/800/600',
    heroImage: 'https://picsum.photos/seed/majuli-hero/1400/700',
    shortDescription:
      'The world\'s largest river island — a spiritual, cultural, and ecological marvel in the Brahmaputra where ancient Neo-Vaishnavite monasteries meet wetland biodiversity.',
    fullDescription:
      'Majuli is the world\'s largest freshwater river island, sitting in the middle of the mighty Brahmaputra in Assam. Accessible only by ferry from Jorhat, this 880 sq km island is a world unto itself — home to 22 Neo-Vaishnavite monasteries called Satras, founded in the 15th and 16th centuries by the saint-scholar Srimanta Sankardeva. These Satras are living institutions of Assamese music, dance, drama, and manuscript culture, producing artforms like Borgeet devotional songs and Sattriya classical dance. The island is also a critical wetland for migratory birds, with over 100 species arriving every winter. The landscape of Majuli is a visual poem — wide green fields, bamboo groves, thatched Mishing tribal villages built on stilts above flood level, and the enormous Brahmaputra stretching to every horizon. Tragically, Majuli is shrinking due to annual flooding and erosion — making a visit now more precious than ever.',
    tags: ['Culture', 'Spiritual', 'Northeast', 'Heritage'],
    category: 'Spiritual',
    rating: 4.7,
    reviewCount: 141,
    bestSeason: 'November–April',
    howToReach: [
      'Fly to Jorhat Airport, then drive 14 km to Nimati Ghat',
      'Take a ferry from Nimati Ghat to Majuli (duration: 1.5–2 hours)',
      'Nearest railway station: Jorhat Town station',
      'From Guwahati: 305 km by road + ferry',
    ],
    thingsToDo: [
      'Visit the ancient Satras (monasteries) — especially Kamalabari and Auniati',
      'Watch Sattriya dance rehearsals at the monasteries',
      'Explore Mishing tribal villages on stilts',
      'Birdwatching at Bengena Beel wetland',
      'Cycle across the island at dawn',
      'Attend the Raas festival if visiting in November',
    ],
    tips: [
      'The last ferry from Majuli to Nimati Ghat leaves around 3pm — do not miss it',
      'Stay at least 2 nights to absorb the island\'s pace',
      'Respect monastery customs — dress modestly when visiting Satras',
      'The island floods in monsoon (June–September) — avoid this period',
      'Hire a bicycle from your guesthouse — the best way to explore',
    ],
    reviews: [
      {
        id: 1,
        name: 'Pallavi Gogoi',
        rating: 5,
        text: 'I am Assamese and had never been here before. What a shame. The Satras, the river, the Mishing villages — it is a different world. Go before it disappears.',
        date: '2024-12-14',
      },
      {
        id: 2,
        name: 'Thomas Keller',
        rating: 5,
        text: 'Came from Germany specifically to visit Majuli after reading about the living manuscripts. Did not disappoint. The monks were generous with their time.',
        date: '2024-11-29',
      },
    ],
  },
  {
    id: 'hampi-karnataka',
    name: 'Hampi (Off-Season)',
    state: 'Karnataka',
    region: 'South India',
    image: 'https://picsum.photos/seed/hampi/800/600',
    heroImage: 'https://picsum.photos/seed/hampi-hero/1400/700',
    shortDescription:
      'The ruins of the Vijayanagara Empire spread across a surreal boulder-strewn landscape — spectacular even in the summer off-season when most tourists stay away.',
    fullDescription:
      'While Hampi appears on tourist maps, visiting outside the November–February peak season reveals an entirely different and more authentic experience. In the summer months, the boulderscape is bathed in a golden haze, the Tungabhadra River runs low and emerald-clear, and the temples are largely deserted. The UNESCO World Heritage Site encompasses 1,600 archaeological remains spread across 40 sq km of extraordinary landscape — massive granite boulders balanced improbably on hilltops, ancient aqueducts, and enormous temple complexes rising from the flat plains. The Virupaksha Temple has been in continuous worship for over a thousand years. Crossing the Tungabhadra by coracle to reach the Hippie Island of Virupapur Gaddi offers a quieter alternative to the main bazaar area. In early summer mornings, watching sunrise from Matanga Hill with mist in the valley and no other visitors, it is possible to feel the ghost of the great empire.',
    tags: ['Heritage', 'Ruins', 'Photography', 'Architecture'],
    category: 'Heritage',
    rating: 4.9,
    reviewCount: 412,
    bestSeason: 'October–February (peak), May–June (off-season, fewer crowds)',
    howToReach: [
      'Nearest railway station: Hospet (13 km)',
      'Trains from Bangalore (Yeshwanthpur) to Hospet take about 8 hours',
      'Direct overnight buses from Bangalore, Hyderabad, and Goa',
      'Nearest airport: Hubli (143 km) or Bangalore (350 km)',
    ],
    thingsToDo: [
      'Sunrise from Matanga Hill — 360° view of the boulderscape',
      'Explore Vittala Temple and the famous Stone Chariot',
      'Coracle ride across the Tungabhadra River',
      'Bicycle tour of the entire 40 sq km archaeological zone',
      'Evening aarti at the 1,000-year-old Virupaksha Temple',
      'Rock climbing on the granite boulders',
    ],
    tips: [
      'Hire a local guide — the history is layered and a good guide transforms the experience',
      'Off-season (April–June): the site is quieter, though hot; visit at dawn and dusk only',
      'The Archaeological Survey of India ticket covers most sites',
      'Stay on Virupapur Gaddi (the island) for the most atmospheric experience',
      'A bicycle is the best way to cover the vast site; rentals are cheap and plentiful',
    ],
    reviews: [
      {
        id: 1,
        name: 'Rishi Kapoor',
        rating: 5,
        text: 'Visited in May — a few tourists but the site to ourselves at dawn. The boulderscape at sunrise is one of those sights that stays with you forever.',
        date: '2024-05-08',
      },
    ],
  },
  {
    id: 'ziro-valley-arunachal',
    name: 'Ziro Valley',
    state: 'Arunachal Pradesh',
    region: 'Northeast India',
    image: 'https://picsum.photos/seed/ziro/800/600',
    heroImage: 'https://picsum.photos/seed/ziro-hero/1400/700',
    shortDescription:
      'A UNESCO tentative World Heritage landscape of pine forests and rice paddies, home to the indigenous Apatani tribe and their extraordinary face-tattooing traditions.',
    fullDescription:
      'Ziro Valley in Lower Subansiri district of Arunachal Pradesh is one of India\'s most culturally rich and visually spectacular destinations, yet remains almost entirely off the mainstream tourist radar. Set at 1,524 metres in a broad flat valley surrounded by pine-clad hills, the valley is the homeland of the Apatani tribe — one of the most sophisticated and ecologically aware indigenous communities in the world. Their system of wet rice cultivation, which integrates fish farming into the paddies without any chemicals, is under UNESCO tentative listing as a World Heritage Site. The Apatanis are known for their distinctive facial tattoos and nose plugs, traditions that were abolished in the 1970s but are still visible among elder women. The valley hosts the Ziro Festival of Music every September — a boutique outdoor music event featuring independent Indian artists against a backdrop of pine forest that has developed a quiet cult following.',
    tags: ['Culture', 'Tribal', 'Northeast', 'Nature'],
    category: 'Nature',
    rating: 4.7,
    reviewCount: 93,
    bestSeason: 'March–May, September–October',
    howToReach: [
      'Nearest airport: Lilabari Airport, North Lakhimpur (100 km)',
      'Nearest railway: North Lakhimpur station, then 3–4 hour drive',
      'From Itanagar (capital of Arunachal): 115 km by road',
      'Obtain Inner Line Permit (ILP) before entering Arunachal Pradesh',
    ],
    thingsToDo: [
      'Walk through the Apatani rice paddies and fish farms',
      'Visit traditional Apatani villages like Hong, Bamin, and Hari',
      'Attend the Ziro Music Festival (September)',
      'Trek through the surrounding pine forests',
      'Photography of elder Apatani women with traditional tattoos',
      'Visit the Talley Valley Wildlife Sanctuary',
    ],
    tips: [
      'An Inner Line Permit (ILP) is mandatory — get it online before travel',
      'Hire a local Apatani guide to visit villages respectfully',
      'The Ziro Music Festival requires advance booking months in advance',
      'The valley is cold year-round — carry layers even in summer',
      'Respect tribal customs and always ask before photographing people',
    ],
    reviews: [
      {
        id: 1,
        name: 'Nirmala Devi',
        rating: 5,
        text: 'The Ziro Music Festival was the best experience of my life. A world-class music event in the middle of a pine forest, with a culture unlike anywhere else in India.',
        date: '2024-09-25',
      },
    ],
  },
  {
    id: 'lepchajagat-west-bengal',
    name: 'Lepchajagat',
    state: 'West Bengal',
    region: 'East India',
    image: 'https://picsum.photos/seed/lepcha/800/600',
    heroImage: 'https://picsum.photos/seed/lepcha-hero/1400/700',
    shortDescription:
      'A tiny forest village at 7,000 feet in the Darjeeling Hills — where dense oak, rhododendron and fir forests harbour leopards, red pandas and absolute silence.',
    fullDescription:
      'Lepchajagat is a forest hamlet sitting at 2,134 metres in the Darjeeling district of West Bengal, just 19 km from Darjeeling town but worlds apart in character. Where Darjeeling is crowded, commercialised, and noisy, Lepchajagat is a sanctuary of old-growth forest, wooden cottages, and deep quiet. The village is surrounded on all sides by dense stands of oak, rhododendron, silver fir and magnolia, and lies within the buffer zone of the Senchal Wildlife Sanctuary, one of the highest wetlands in India. Red pandas have been spotted here by patient visitors, and the forest is alive with birds. On clear nights, Kangchenjunga fills the entire northern sky. The half-dozen homestays here are run by local Lepcha families, and meals are cooked on wood fires in kitchen gardens. Lepchajagat is the antithesis of the Darjeeling tourist experience — but it is only possible to appreciate it if you know it exists.',
    tags: ['Nature', 'Wildlife', 'Forest', 'Mountain'],
    category: 'Nature',
    rating: 4.8,
    reviewCount: 88,
    bestSeason: 'March–May (rhododendrons), October–December (clear Kangchenjunga views)',
    howToReach: [
      'Fly to Bagdogra Airport (90 km), then shared jeep to Darjeeling',
      'Nearest railway: Darjeeling (19 km) or New Jalpaiguri (82 km)',
      'From Darjeeling: hire a shared jeep or cab to Lepchajagat (30 min)',
      'Toy Train to Darjeeling, then taxi onward',
    ],
    thingsToDo: [
      'Dawn forest walk in Senchal Wildlife Sanctuary',
      'Red panda spotting with a local naturalist',
      'Kangchenjunga viewpoint at sunrise',
      'Bird watching — 100+ species including Himalayan Monal',
      'Photography of rhododendron blooms in April',
      'Read, rest, and do absolutely nothing — that is the point',
    ],
    tips: [
      'There are very few homestays — book months in advance for October–November',
      'Carry all medicines and essentials from Darjeeling',
      'The forest walk to the sanctuary requires a local guide',
      'Mobile networks are patchy — enjoy the digital detox',
      'April sees stunning rhododendron blooms along the forest paths',
    ],
    reviews: [
      {
        id: 1,
        name: 'Subhashis Banerjee',
        rating: 5,
        text: 'The most peaceful four days of my life. Sat on the porch every morning watching the clouds clear to reveal Kangchenjunga. There is no better therapy.',
        date: '2024-10-30',
      },
      {
        id: 2,
        name: 'Laura Chen',
        rating: 5,
        text: 'Came from Singapore for the rhododendron season. The forest walks were extraordinary. The homestay family treated us like relatives.',
        date: '2024-04-17',
      },
    ],
  },
]

export default locations
