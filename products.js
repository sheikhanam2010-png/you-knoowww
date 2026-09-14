const products = [

  // 01
  {
    id: "nike-air-force-1-07",
    name: "Nike Air Force 1 '07",
    brand: "Nike",
    category: "Footwear",
    image: "",
    description: "Classic low-top sneaker with basketball roots and everyday streetwear appeal.",
    overview: "The Air Force 1 '07 keeps the original court-inspired shape while using a clean low-top design suited to casual wear.",
    keyFeatures: [
      "Low-top construction",
      "Classic perforated toe area",
      "Padded collar",
      "Cupsole-style profile",
      "Traditional lace closure"
    ],
    material: "Common versions use leather or synthetic upper panels with a rubber outsole.",
    sizeVariants: "Available in multiple adult sizes with men's and women's variants depending on the release.",
    merits: [
      "Easy to style with casual clothing",
      "Recognizable classic silhouette",
      "Structured upper"
    ],
    demerits: [
      "Can feel comparatively firm for long walks",
      "White versions may show dirt easily"
    ],
    bestFor: "Everyday casual wear, streetwear and short-to-moderate walking.",
    thingsToConsider: "Check the exact version because upper materials and fit can differ between releases.",
    similarProducts: ["Nike Dunk Low Retro", "Nike Court Vision Low"],
    compareThisProduct: "Compare court heritage, upper construction, weight and everyday comfort."
  },

  // 02
  {
    id: "nike-dunk-low-retro",
    name: "Nike Dunk Low Retro",
    brand: "Nike",
    category: "Footwear",
    image: "",
    description: "Retro low-top sneaker inspired by classic basketball footwear.",
    overview: "The Dunk Low Retro combines a low-profile court shape with layered panels and a casual lifestyle focus.",
    keyFeatures: [
      "Low-cut collar",
      "Layered upper panels",
      "Traditional tongue",
      "Flat-profile outsole",
      "Lace-up closure"
    ],
    material: "Many versions use leather or synthetic upper panels with rubber on the outsole.",
    sizeVariants: "Produced in multiple adult sizes and numerous colorways; exact availability changes by release.",
    merits: [
      "Versatile low-top shape",
      "Large range of color options",
      "Easy casual styling"
    ],
    demerits: [
      "Less running-focused than performance trainers",
      "Some versions may require break-in"
    ],
    bestFor: "Casual daily wear and sneaker collections.",
    thingsToConsider: "Check the specific colorway because material composition can vary.",
    similarProducts: ["Nike Air Force 1 '07", "adidas Forum Low"],
    compareThisProduct: "Compare low-profile court styling, upper material and casual comfort."
  },

  // 03
  {
    id: "nike-air-max-90",
    name: "Nike Air Max 90",
    brand: "Nike",
    category: "Footwear",
    image: "",
    description: "Retro runner with visible Air cushioning and a distinctive Waffle outsole.",
    overview: "The Air Max 90 blends classic running heritage with a lifestyle build centered on visible Air cushioning.",
    keyFeatures: [
      "Visible Air cushioning",
      "Waffle outsole pattern",
      "Layered upper construction",
      "Padded low collar",
      "Retro runner shape"
    ],
    material: "Versions commonly combine mesh with leather, suede or synthetic overlays.",
    sizeVariants: "Available across multiple adult sizes and many seasonal colorways.",
    merits: [
      "Strong retro identity",
      "Good everyday versatility",
      "Distinctive cushioning unit"
    ],
    demerits: [
      "Chunkier than slim casual sneakers",
      "Less suitable for serious running"
    ],
    bestFor: "Everyday casual wear and lifestyle use.",
    thingsToConsider: "The mixed-material upper may require more cleaning than a simple canvas shoe.",
    similarProducts: ["Nike Air Max 1", "Nike Air Max 95"],
    compareThisProduct: "Compare visible Air design, profile, upper materials and lifestyle use."
  },

  // 04
  {
    id: "nike-air-max-270",
    name: "Nike Air Max 270",
    brand: "Nike",
    category: "Footwear",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/air-max-270.png",
    description: "Lifestyle sneaker recognized for its large heel Air cushioning unit.",
    overview: "The Air Max 270 is a lifestyle-focused Air Max model built around a prominent heel Air unit and a modern upper.",
    keyFeatures: [
      "Large heel Air unit",
      "Low-top design",
      "Padded collar",
      "Breathable upper areas",
      "Rubber outsole sections"
    ],
    material: "Upper construction varies by version and may combine mesh, textile and synthetic components.",
    sizeVariants: "Available in multiple adult sizes with different colorways and seasonal editions.",
    merits: [
      "Distinctive heel cushioning design",
      "Modern visual profile",
      "Works well with casual outfits"
    ],
    demerits: [
      "Primarily a lifestyle model",
      "Large heel unit changes the shoe's visual and underfoot feel"
    ],
    bestFor: "Casual everyday wear and lifestyle outfits.",
    thingsToConsider: "Choose size based on the exact version because fit can differ between releases.",
    similarProducts: ["Nike Air Max 90", "Nike Air Max Dn8"],
    compareThisProduct: "Compare heel cushioning design, upper construction and lifestyle use."
  },

  // 05
  {
    id: "nike-air-max-97",
    name: "Nike Air Max 97",
    brand: "Nike",
    category: "Footwear",
    image: "",
    description: "Streamlined Air Max sneaker known for flowing layered upper lines.",
    overview: "The Air Max 97 carries a distinctive wave-like upper inspired by the original model's futuristic running aesthetic.",
    keyFeatures: [
      "Layered wave-style panels",
      "Visible Air cushioning",
      "Low-top profile",
      "Padded collar",
      "Rubber outsole"
    ],
    material: "Common versions combine mesh or textile sections with synthetic or leather-like overlays.",
    sizeVariants: "Available in several adult size ranges and frequent colorway variations.",
    merits: [
      "Distinctive design",
      "Recognizable Air Max heritage",
      "Strong lifestyle appeal"
    ],
    demerits: [
      "More structured than minimalist casual shoes",
      "Not intended as a current high-level racing shoe"
    ],
    bestFor: "Lifestyle wear and casual streetwear.",
    thingsToConsider: "Consider upper layering and personal preference for a more structured fit.",
    similarProducts: ["Nike Air Max 90", "Nike Air Max 95"],
    compareThisProduct: "Compare layered upper design, visible Air setup and overall profile."
  },

  // 06
  {
    id: "nike-cortez",
    name: "Nike Cortez",
    brand: "Nike",
    category: "Footwear",
    image: "",
    description: "Classic low-profile sneaker with long-running retro sports heritage.",
    overview: "The Cortez uses a simple low-profile shape that connects early Nike running history with modern casual styling.",
    keyFeatures: [
      "Low-cut profile",
      "Simple layered upper",
      "Classic side branding",
      "Traditional lace-up design",
      "Slim-looking outsole"
    ],
    material: "Materials differ by release and may include leather, textile, synthetic or mixed upper panels.",
    sizeVariants: "Sold in multiple adult size ranges and seasonal editions.",
    merits: [
      "Simple classic silhouette",
      "Easy to pair with casual clothing",
      "Light visual footprint"
    ],
    demerits: [
      "Less cushioned than modern running shoes",
      "Not designed for technical sports"
    ],
    bestFor: "Casual wear and retro-inspired outfits.",
    thingsToConsider: "Check the exact material version and intended everyday use.",
    similarProducts: ["adidas Gazelle", "PUMA Palermo"],
    compareThisProduct: "Compare low-profile shape, materials and casual styling."
  },

  // 07
  {
    id: "adidas-samba-og",
    name: "adidas Samba OG",
    brand: "adidas",
    category: "Footwear",
    image: "",
    description: "Low-profile classic blending terrace heritage with everyday lifestyle styling.",
    overview: "The Samba OG retains the familiar slim shape, suede detailing and gum-style outsole associated with the classic model.",
    keyFeatures: [
      "Slim low-top silhouette",
      "Suede detailing",
      "Classic three-stripe branding",
      "Gum-style outsole",
      "Lace-up closure"
    ],
    material: "Common versions use leather or synthetic uppers with suede sections and a rubber outsole.",
    sizeVariants: "Multiple adult sizes and frequent colorway changes are available.",
    merits: [
      "Strong terrace heritage",
      "Low-profile appearance",
      "Easy casual styling"
    ],
    demerits: [
      "Less cushioned than modern trainers",
      "Slim shape may not suit every foot"
    ],
    bestFor: "Casual outfits, everyday city wear and retro styling.",
    thingsToConsider: "Pay attention to the exact material blend and width before choosing your usual size.",
    similarProducts: ["adidas Handball Spezial", "adidas Gazelle"],
    compareThisProduct: "Compare silhouette, suede use, outsole style and overall casual feel."
  },

  // 08
  {
    id: "adidas-gazelle",
    name: "adidas Gazelle",
    brand: "adidas",
    category: "Footwear",
    image: "",
    description: "Classic suede-forward lifestyle sneaker with recognizable three-stripe styling.",
    overview: "The Gazelle is a long-standing adidas lifestyle model built around a simple low-top shape and strong retro character.",
    keyFeatures: [
      "Suede-focused upper on many versions",
      "Low profile",
      "Three-stripe branding",
      "Textile or synthetic lining",
      "Rubber outsole"
    ],
    material: "Typical versions use suede or synthetic upper materials with rubber outsole construction.",
    sizeVariants: "Offered across multiple adult sizes and many color combinations.",
    merits: [
      "Strong retro versatility",
      "Simple everyday design",
      "Wide range of color choices"
    ],
    demerits: [
      "Suede can require careful cleaning",
      "Not a technical sports shoe"
    ],
    bestFor: "Lifestyle wear and casual outfits.",
    thingsToConsider: "Material and fit can differ by Gazelle version.",
    similarProducts: ["adidas Samba OG", "PUMA Palermo"],
    compareThisProduct: "Compare suede treatment, outsole style and overall retro profile."
  },

  // 09
  {
    id: "adidas-superstar",
    name: "adidas Superstar",
    brand: "adidas",
    category: "Footwear",
    image: "",
    description: "Iconic shell-toe sneaker with basketball heritage and everyday appeal.",
    overview: "The Superstar combines its distinctive shell toe with a low-top lifestyle construction.",
    keyFeatures: [
      "Shell-toe front",
      "Low-top collar",
      "Three-stripe branding",
      "Flat-looking outsole",
      "Lace-up closure"
    ],
    material: "Many releases use leather or synthetic upper construction with rubber outsole components.",
    sizeVariants: "Available in numerous adult sizes and a broad range of colorways.",
    merits: [
      "Recognizable shell-toe design",
      "Versatile casual shape",
      "Strong heritage"
    ],
    demerits: [
      "Firm compared with heavily cushioned trainers",
      "Not intended for modern performance sports"
    ],
    bestFor: "Casual wear and classic streetwear.",
    thingsToConsider: "Choose the exact version carefully because construction can vary.",
    similarProducts: ["adidas Forum Low", "Nike Air Force 1 '07"],
    compareThisProduct: "Compare shell-toe construction, upper material and casual profile."
  },

  // 10
  {
    id: "adidas-campus-00s",
    name: "adidas Campus 00s",
    brand: "adidas",
    category: "Footwear",
    image: "",
    description: "Chunkier reinterpretation of the classic Campus lifestyle silhouette.",
    overview: "Campus 00s updates the original Campus visual language with a broader and more substantial streetwear shape.",
    keyFeatures: [
      "Chunkier profile",
      "Wide-looking tongue",
      "Three-stripe side branding",
      "Low-top construction",
      "Rubber outsole"
    ],
    material: "Many versions feature suede or synthetic upper construction with textile lining.",
    sizeVariants: "Sold in various adult sizes with changing seasonal colorways.",
    merits: [
      "Strong streetwear appearance",
      "Classic branding",
      "More substantial visual shape"
    ],
    demerits: [
      "Chunkier than the original Campus",
      "Not a performance running shoe"
    ],
    bestFor: "Casual streetwear and everyday outfits.",
    thingsToConsider: "The broad construction can feel different from slimmer adidas lifestyle models.",
    similarProducts: ["adidas Gazelle", "PUMA Suede XL"],
    compareThisProduct: "Compare overall volume, upper material and retro styling."
  },

  // 11
  {
    id: "puma-suede-classic",
    name: "PUMA Suede Classic",
    brand: "PUMA",
    category: "Footwear",
    image: "",
    description: "Classic suede lifestyle sneaker with strong streetwear heritage.",
    overview: "The Suede Classic uses a simple low-top shape centered on the brand's long-running suede identity.",
    keyFeatures: [
      "Suede upper on common versions",
      "Classic Formstrip",
      "Low collar",
      "Rubber outsole",
      "Traditional lacing"
    ],
    material: "Suede or suede-like upper with synthetic or textile lining and rubber outsole.",
    sizeVariants: "Multiple adult sizes and frequent colorway editions.",
    merits: [
      "Simple timeless design",
      "Easy casual use",
      "Strong PUMA heritage"
    ],
    demerits: [
      "Suede needs care",
      "Limited technical cushioning"
    ],
    bestFor: "Casual outfits and streetwear.",
    thingsToConsider: "Check cleaning requirements and exact material version.",
    similarProducts: ["PUMA Suede XL", "adidas Gazelle"],
    compareThisProduct: "Compare upper material, sole thickness and lifestyle styling."
  },

  // 12
  {
    id: "puma-palermo",
    name: "PUMA Palermo",
    brand: "PUMA",
    category: "Footwear",
    image: "",
    description: "Terrace-inspired lifestyle sneaker with a classic low-profile shape.",
    overview: "The Palermo draws from PUMA's terrace-era designs and keeps a clean low-top construction.",
    keyFeatures: [
      "Low-profile shape",
      "Formstrip branding",
      "Terrace-inspired upper",
      "Rubber outsole",
      "Lace-up closure"
    ],
    material: "Versions commonly use leather, synthetic or textile upper combinations.",
    sizeVariants: "Available in multiple adult size ranges and seasonal colorways.",
    merits: [
      "Distinct terrace character",
      "Easy everyday styling",
      "Numerous versions"
    ],
    demerits: [
      "Limited performance use",
      "Material feel changes by version"
    ],
    bestFor: "Casual city wear and retro outfits.",
    thingsToConsider: "Look at the exact Palermo variant because materials can differ.",
    similarProducts: ["adidas Samba OG", "PUMA Easy Rider"],
    compareThisProduct: "Compare terrace styling, material mix and outsole profile."
  },

  // 13
  {
    id: "puma-ca-pro",
    name: "PUMA CA Pro",
    brand: "PUMA",
    category: "Footwear",
    image: "",
    description: "Modern court-inspired lifestyle sneaker with layered upper details.",
    overview: "The CA Pro adapts classic court styling into a more contemporary everyday silhouette.",
    keyFeatures: [
      "Layered upper",
      "Court-inspired shape",
      "Padded collar",
      "Rubber outsole",
      "Lace closure"
    ],
    material: "Common editions combine leather, synthetic or textile upper components.",
    sizeVariants: "Produced in several adult sizes with multiple seasonal variants.",
    merits: [
      "Clean court styling",
      "Easy daily use",
      "Modern interpretation"
    ],
    demerits: [
      "Can feel more structured than knit casual shoes",
      "Not designed for high-performance court play"
    ],
    bestFor: "Lifestyle wear and casual outfits.",
    thingsToConsider: "Check the specific upper composition.",
    similarProducts: ["PUMA Clyde", "adidas Forum Low"],
    compareThisProduct: "Compare upper layering, court heritage and sole construction."
  },

  // 14
  {
    id: "puma-clyde",
    name: "PUMA Clyde",
    brand: "PUMA",
    category: "Footwear",
    image: "",
    description: "Classic basketball-derived sneaker with a low-profile casual shape.",
    overview: "The Clyde connects PUMA basketball heritage with a streamlined lifestyle silhouette.",
    keyFeatures: [
      "Basketball heritage",
      "Low-top shape",
      "PUMA Formstrip",
      "Simple lace closure",
      "Rubber outsole"
    ],
    material: "Versions vary, often using leather, suede or synthetic upper materials.",
    sizeVariants: "Available in adult sizes and special editions.",
    merits: [
      "Strong heritage",
      "Clean low-profile shape",
      "Versatile casual use"
    ],
    demerits: [
      "Not a current technical basketball shoe",
      "Material care depends on the version"
    ],
    bestFor: "Casual wear and retro basketball styling.",
    thingsToConsider: "Check construction when choosing between leather and suede editions.",
    similarProducts: ["PUMA CA Pro", "adidas Superstar"],
    compareThisProduct: "Compare court heritage, shape and upper materials."
  },

  // 15
  {
    id: "new-balance-574",
    name: "New Balance 574",
    brand: "New Balance",
    category: "Footwear",
    image: "",
    description: "Versatile retro runner known for its familiar everyday silhouette.",
    overview: "The 574 blends classic running-inspired lines with a lifestyle-oriented construction.",
    keyFeatures: [
      "Retro runner shape",
      "Layered upper panels",
      "Padded collar",
      "Lace closure",
      "Rubber outsole"
    ],
    material: "Common versions mix suede, mesh and synthetic materials.",
    sizeVariants: "Wide size and width availability varies by market and version.",
    merits: [
      "Versatile everyday shape",
      "Strong heritage",
      "Many color options"
    ],
    demerits: [
      "Mixed materials require more cleaning",
      "Not built for modern racing"
    ],
    bestFor: "Daily casual wear and walking.",
    thingsToConsider: "Width options can vary by region.",
    similarProducts: ["New Balance 327", "ASICS GEL-1130"],
    compareThisProduct: "Compare cushioning feel, upper layering and retro styling."
  },

  // 16
  {
    id: "new-balance-327",
    name: "New Balance 327",
    brand: "New Balance",
    category: "Footwear",
    image: "",
    description: "Retro-inspired lifestyle sneaker with an oversized N logo.",
    overview: "The 327 takes inspiration from vintage running shoes while using a more exaggerated modern lifestyle shape.",
    keyFeatures: [
      "Large side N logo",
      "Retro running inspiration",
      "Low-top construction",
      "Textured outsole",
      "Layered upper"
    ],
    material: "Common versions combine suede, mesh, textile or synthetic panels.",
    sizeVariants: "Multiple adult sizes and color combinations are offered.",
    merits: [
      "Distinctive branding",
      "Strong casual character",
      "Light visual profile"
    ],
    demerits: [
      "Outsole texture can collect debris",
      "Not intended for technical running"
    ],
    bestFor: "Lifestyle wear and casual walking.",
    thingsToConsider: "Check the exact material mix of the colorway.",
    similarProducts: ["New Balance 574", "PUMA Future Rider"],
    compareThisProduct: "Compare outsole pattern, upper layering and retro styling."
  },

  // 17
  {
    id: "new-balance-550",
    name: "New Balance 550",
    brand: "New Balance",
    category: "Footwear",
    image: "",
    description: "Low-top lifestyle sneaker based on a classic basketball silhouette.",
    overview: "The 550 brings an old-school basketball-inspired shape into modern casual footwear.",
    keyFeatures: [
      "Low-top court profile",
      "Perforated paneling",
      "Large side branding",
      "Structured upper",
      "Rubber outsole"
    ],
    material: "Many versions use leather or synthetic panels with perforated sections.",
    sizeVariants: "Multiple adult sizes and seasonal colorways.",
    merits: [
      "Strong basketball influence",
      "Easy casual styling",
      "Structured look"
    ],
    demerits: [
      "More structured than lightweight running shoes",
      "Not designed for modern court performance"
    ],
    bestFor: "Casual outfits and retro basketball styling.",
    thingsToConsider: "Consider the structured upper if you prefer softer footwear.",
    similarProducts: ["adidas Forum Low", "Nike Dunk Low Retro"],
    compareThisProduct: "Compare court shape, structure and everyday styling."
  },

  // 18
  {
    id: "converse-chuck-taylor-all-star",
    name: "Converse Chuck Taylor All Star",
    brand: "Converse",
    category: "Footwear",
    image: "",
    description: "Classic canvas sneaker recognized by its simple high-top and low-top versions.",
    overview: "The Chuck Taylor All Star uses a simple canvas construction and rubber toe-cap design.",
    keyFeatures: [
      "Canvas upper",
      "Rubber toe cap",
      "Metal eyelets",
      "Classic side patch on high-top versions",
      "Vulcanized-style outsole"
    ],
    material: "Common versions use canvas, rubber and textile lining.",
    sizeVariants: "Available in multiple adult sizes and both high-top and low-top forms.",
    merits: [
      "Iconic design",
      "Lightweight construction",
      "Easy casual styling"
    ],
    demerits: [
      "Limited cushioning compared with modern trainers",
      "Canvas can mark easily"
    ],
    bestFor: "Casual wear and everyday fashion.",
    thingsToConsider: "Choose high-top or low-top based on the preferred silhouette.",
    similarProducts: ["Converse Chuck 70", "Vans Authentic"],
    compareThisProduct: "Compare canvas construction, cushioning and collar height."
  },

  // 19
  {
    id: "converse-chuck-70",
    name: "Converse Chuck 70",
    brand: "Converse",
    category: "Footwear",
    image: "",
    description: "Heritage-focused version of the classic Chuck design.",
    overview: "The Chuck 70 keeps the familiar Converse shape while using more substantial construction details.",
    keyFeatures: [
      "Canvas upper",
      "Rubber toe cap",
      "Heritage-inspired detailing",
      "High-top and low-top versions",
      "Vulcanized-style sole"
    ],
    material: "Primarily canvas with rubber and textile components.",
    sizeVariants: "Available in multiple adult size ranges and different collar heights.",
    merits: [
      "Classic styling",
      "More substantial feel than basic canvas models",
      "Strong heritage"
    ],
    demerits: [
      "Still less cushioned than modern trainers",
      "Canvas needs regular cleaning"
    ],
    bestFor: "Casual outfits and heritage sneaker collections.",
    thingsToConsider: "Consider the additional structure if you prefer a softer minimalist shoe.",
    similarProducts: ["Converse Chuck Taylor All Star", "Vans Authentic"],
    compareThisProduct: "Compare construction, cushioning and heritage details."
  },

  // 20
  {
    id: "vans-old-skool",
    name: "Vans Old Skool",
    brand: "Vans",
    category: "Footwear",
    image: "",
    description: "Classic skate-inspired sneaker recognized by its signature side stripe.",
    overview: "The Old Skool combines a low-top skate silhouette with durable-looking upper paneling.",
    keyFeatures: [
      "Signature side stripe",
      "Low-top shape",
      "Lace closure",
      "Padded collar",
      "Rubber outsole"
    ],
    material: "Common versions combine canvas with suede or synthetic overlays.",
    sizeVariants: "Offered in many adult sizes, widths and colorways depending on the market.",
    merits: [
      "Strong skate heritage",
      "Versatile streetwear shape",
      "Recognizable design"
    ],
    demerits: [
      "Less cushioning than modern running shoes",
      "Mixed-material versions need more care"
    ],
    bestFor: "Casual wear, skate-inspired looks and everyday use.",
    thingsToConsider: "Check material and width differences between versions.",
    similarProducts: ["Vans Authentic", "Converse Chuck 70"],
    compareThisProduct: "Compare skate heritage, upper structure and sole profile."
  },

  // 21
  {
    id: "vans-authentic",
    name: "Vans Authentic",
    brand: "Vans",
    category: "Footwear",
    image: "",
    description: "Simple low-top canvas sneaker with classic skate styling.",
    overview: "The Authentic uses a straightforward canvas upper and low-profile vulcanized-style construction.",
    keyFeatures: [
      "Canvas upper",
      "Low-top collar",
      "Metal eyelets",
      "Lace closure",
      "Rubber outsole"
    ],
    material: "Canvas upper with rubber and textile components.",
    sizeVariants: "Commonly available across adult size ranges and many colorways.",
    merits: [
      "Simple design",
      "Light visual profile",
      "Easy everyday styling"
    ],
    demerits: [
      "Limited cushioning",
      "Canvas can stain or crease"
    ],
    bestFor: "Casual wear and minimalist streetwear.",
    thingsToConsider: "Consider whether the simple sole is comfortable enough for your walking needs.",
    similarProducts: ["Converse Chuck Taylor All Star", "Vans Old Skool"],
    compareThisProduct: "Compare sole thickness, canvas construction and overall simplicity."
  },

  // 22
  {
    id: "reebok-club-c-85",
    name: "Reebok Club C 85",
    brand: "Reebok",
    category: "Footwear",
    image: "",
    description: "Clean low-top tennis-inspired sneaker with understated styling.",
    overview: "The Club C 85 keeps a simple court-derived shape suited to everyday casual wear.",
    keyFeatures: [
      "Low-top construction",
      "Clean panel layout",
      "Padded collar",
      "Classic branding",
      "Rubber outsole"
    ],
    material: "Many editions use leather or synthetic upper materials.",
    sizeVariants: "Multiple adult sizes and seasonal colorways are available.",
    merits: [
      "Minimal appearance",
      "Easy to coordinate",
      "Classic court heritage"
    ],
    demerits: [
      "Limited athletic use",
      "Leather versions require cleaning"
    ],
    bestFor: "Casual daily wear and simple outfits.",
    thingsToConsider: "Check material differences between Club C editions.",
    similarProducts: ["Reebok Classic Leather", "adidas Stan Smith"],
    compareThisProduct: "Compare court heritage, upper material and visual simplicity."
  },

  // 23
  {
    id: "nike-pegasus-42",
    name: "Nike Pegasus 42",
    brand: "Nike",
    category: "Footwear",
    image: "",
    description: "Road-running shoe designed for regular training and everyday mileage.",
    overview: "The Pegasus line is aimed at everyday road running, balancing cushioning with a responsive ride.",
    keyFeatures: [
      "Road-running platform",
      "Foam-based cushioning",
      "Breathable upper construction",
      "Rubber road outsole",
      "Traditional lace closure"
    ],
    material: "Engineered mesh or textile upper with foam cushioning and rubber outsole components.",
    sizeVariants: "Available in adult running sizes with men's and women's versions.",
    merits: [
      "Versatile daily trainer",
      "Suitable for varied running sessions",
      "Familiar running geometry"
    ],
    demerits: [
      "Less specialized than racing shoes",
      "Exact feel depends on version"
    ],
    bestFor: "Everyday road running and training.",
    thingsToConsider: "Choose based on preferred cushioning firmness and running fit.",
    similarProducts: ["adidas Supernova Rise", "ASICS GEL-CUMULUS 27"],
    compareThisProduct: "Compare cushioning response, weight, drop and daily-training purpose."
  },

  // 24
  {
    id: "nike-vomero-18",
    name: "Nike Vomero 18",
    brand: "Nike",
    category: "Footwear",
    image: "",
    description: "Highly cushioned road-running shoe focused on everyday comfort.",
    overview: "The Vomero 18 emphasizes soft cushioning for regular road miles rather than aggressive racing.",
    keyFeatures: [
      "Cushioned road platform",
      "Soft underfoot focus",
      "Breathable upper",
      "Padded collar",
      "Road-oriented rubber outsole"
    ],
    material: "Engineered mesh or textile upper with foam cushioning and rubber outsole.",
    sizeVariants: "Adult running sizes with separate men's and women's versions.",
    merits: [
      "Comfort-oriented design",
      "Suitable for daily mileage",
      "Cushioned feel"
    ],
    demerits: [
      "More comfort-focused than speed-focused",
      "Soft cushioning may not suit every runner"
    ],
    bestFor: "Comfortable daily road running and walking.",
    thingsToConsider: "Compare softness with firmer daily trainers before choosing.",
    similarProducts: ["Nike Structure 26", "ASICS GEL-NIMBUS 27"],
    compareThisProduct: "Compare cushioning softness, stability and intended daily mileage."
  },

  // 25
  {
    id: "nike-pegasus-premium",
    name: "Nike Pegasus Premium",
    brand: "Nike",
    category: "Footwear",
    image: "",
    description: "Performance running shoe combining ZoomX foam with full-length Air Zoom technology.",
    overview: "Pegasus Premium uses a more advanced cushioning setup aimed at a lively road-running experience.",
    keyFeatures: [
      "ZoomX foam",
      "Full-length Air Zoom element",
      "ReactX components",
      "Engineered mesh upper",
      "Road traction outsole"
    ],
    material: "Engineered mesh upper with foam, Air-based cushioning elements and rubber outsole sections.",
    sizeVariants: "Available in adult performance-running sizes.",
    merits: [
      "Advanced cushioning platform",
      "Performance-focused construction",
      "Suitable for training"
    ],
    demerits: [
      "More specialized than basic lifestyle footwear",
      "Complex cushioning system may not suit everyone"
    ],
    bestFor: "Road training and runners seeking a lively ride.",
    thingsToConsider: "Compare the ride with simpler daily trainers.",
    similarProducts: ["adidas Adizero Boston 13", "ASICS SUPERBLAST 2"],
    compareThisProduct: "Compare cushioning technology, weight and training purpose."
  },

  // 26
  {
    id: "nike-free-metcon-7",
    name: "Nike Free Metcon 7",
    brand: "Nike",
    category: "Footwear",
    image: "",
    description: "Training shoe balancing flexibility with stability for gym workouts.",
    overview: "The Free Metcon range is designed around mixed training movements rather than straight-line road running.",
    keyFeatures: [
      "Flexible forefoot concept",
      "Stable heel area",
      "Training-focused outsole",
      "Breathable upper",
      "Secure lace closure"
    ],
    material: "Textile or mesh upper with foam-based midsole and rubber outsole sections.",
    sizeVariants: "Adult training sizes in men's and women's versions.",
    merits: [
      "Useful for varied gym sessions",
      "More training-oriented than lifestyle shoes",
      "Combination of flexibility and stability"
    ],
    demerits: [
      "Not optimized for long-distance running",
      "Training geometry may feel firm"
    ],
    bestFor: "Gym training, strength work and mixed workouts.",
    thingsToConsider: "Do not choose it solely for road-running mileage.",
    similarProducts: ["Reebok Nano X5", "Nike Pegasus 42"],
    compareThisProduct: "Compare heel stability, forefoot flexibility and training purpose."
  },

  // 27
  {
    id: "nike-promina",
    name: "Nike Promina",
    brand: "Nike",
    category: "Footwear",
    image: "",
    description: "Everyday walking-oriented shoe built around comfortable movement.",
    overview: "Promina is positioned as an accessible everyday movement shoe rather than a high-performance racing model.",
    keyFeatures: [
      "Comfort-oriented cushioning",
      "Walking-friendly construction",
      "Low-top collar",
      "Textile upper",
      "Flexible-looking outsole profile"
    ],
    material: "Textile or mesh upper with foam cushioning and rubber outsole elements.",
    sizeVariants: "Available in adult everyday footwear sizing.",
    merits: [
      "Simple everyday use",
      "Comfort-oriented purpose",
      "Suitable for light movement"
    ],
    demerits: [
      "Not intended for demanding sport",
      "Less specialized than technical trainers"
    ],
    bestFor: "Walking and everyday casual movement.",
    thingsToConsider: "Choose a dedicated running shoe for regular running.",
    similarProducts: ["Skechers GO WALK 7", "On Cloud 5"],
    compareThisProduct: "Compare walking comfort, cushioning and intended activity."
  },

  // 28
  {
    id: "adidas-ultraboost-5",
    name: "adidas Ultraboost 5",
    brand: "adidas",
    category: "Footwear",
    image: "",
    description: "Cushioned running model designed for regular road training.",
    overview: "Ultraboost 5 focuses on a comfortable, responsive running experience with an emphasis on cushioning.",
    keyFeatures: [
      "Boost cushioning platform",
      "Running-focused upper",
      "Heel support structure",
      "Road outsole",
      "Lace closure"
    ],
    material: "Engineered textile upper with foam cushioning and rubber outsole components.",
    sizeVariants: "Men's and women's running sizes with multiple colorways.",
    merits: [
      "Cushioned ride",
      "Versatile training use",
      "Established running platform"
    ],
    demerits: [
      "Bulkier than lightweight race shoes",
      "Not the most minimalist option"
    ],
    bestFor: "Daily road running and comfortable training.",
    thingsToConsider: "Compare cushioning preference with lighter daily trainers.",
    similarProducts: ["Nike Vomero 18", "New Balance Fresh Foam X 880v15"],
    compareThisProduct: "Compare cushioning feel, weight and everyday running purpose."
  },

  // 29
  {
    id: "adidas-supernova-rise",
    name: "adidas Supernova Rise",
    brand: "adidas",
    category: "Footwear",
    image: "",
    description: "Daily road-running shoe focused on balanced cushioning.",
    overview: "Supernova Rise is designed for runners wanting a straightforward daily trainer for regular road sessions.",
    keyFeatures: [
      "Daily-training geometry",
      "Foam cushioning",
      "Breathable upper",
      "Supportive heel area",
      "Road rubber outsole"
    ],
    material: "Textile or engineered upper with foam midsole and rubber outsole.",
    sizeVariants: "Available in adult running sizes and multiple colorways.",
    merits: [
      "Versatile daily trainer",
      "Straightforward design",
      "Useful for regular mileage"
    ],
    demerits: [
      "Less race-specific than Adizero models",
      "Not intended for technical trails"
    ],
    bestFor: "Everyday road training.",
    thingsToConsider: "Compare cushioning character with Pegasus or Cumulus models.",
    similarProducts: ["Nike Pegasus 42", "ASICS GEL-CUMULUS 27"],
    compareThisProduct: "Compare cushioning, stability and daily mileage use."
  },

  // 30
  {
    id: "adidas-adizero-boston-13",
    name: "adidas Adizero Boston 13",
    brand: "adidas",
    category: "Footwear",
    image: "",
    description: "Fast road-running shoe built around Lightstrike cushioning and ENERGYRODS.",
    overview: "The Boston 13 targets faster road running and training with a more performance-oriented geometry.",
    keyFeatures: [
      "Lightstrike cushioning system",
      "Lightstrike Pro elements",
      "ENERGYRODS",
      "Lightweight mesh upper",
      "Road traction outsole"
    ],
    material: "Engineered mesh upper with foam cushioning and rubber outsole.",
    sizeVariants: "Available in adult performance-running sizes.",
    merits: [
      "Speed-oriented design",
      "Useful for workouts",
      "Performance-focused construction"
    ],
    demerits: [
      "Less relaxed than comfort-first trainers",
      "Performance geometry may not suit casual walking"
    ],
    bestFor: "Tempo runs, faster training and road racing preparation.",
    thingsToConsider: "Compare with softer daily trainers for easy-run use.",
    similarProducts: ["Nike Pegasus Premium", "Saucony Endorphin Speed 4"],
    compareThisProduct: "Compare propulsion, cushioning and speed-training purpose."
  },

  // 31
  {
    id: "puma-deviate-nitro-3",
    name: "PUMA Deviate NITRO 3",
    brand: "PUMA",
    category: "Footwear",
    image: "",
    description: "Propulsive running shoe with NITROFOAM cushioning and carbon PWRPLATE.",
    overview: "The Deviate NITRO 3 is positioned as a faster road-running model combining foam cushioning with a plate-assisted platform.",
    keyFeatures: [
      "Dual-layer NITROFOAM",
      "PWRPLATE",
      "PUMAGRIP outsole",
      "Engineered mesh upper",
      "Performance road geometry"
    ],
    material: "Engineered mesh upper with foam midsole and rubber outsole.",
    sizeVariants: "Adult running sizes with multiple colorways.",
    merits: [
      "Propulsive platform",
      "Good for faster sessions",
      "Strong road traction"
    ],
    demerits: [
      "More specialized than basic daily trainers",
      "Plate feel may not suit every runner"
    ],
    bestFor: "Fast training, tempo sessions and road running.",
    thingsToConsider: "Compare plate feel with non-plated trainers.",
    similarProducts: ["adidas Adizero Boston 13", "Saucony Endorphin Speed 4"],
    compareThisProduct: "Compare plate assistance, cushioning and speed focus."
  },

  // 32
  {
    id: "puma-velocity-nitro-3",
    name: "PUMA Velocity NITRO 3",
    brand: "PUMA",
    category: "Footwear",
    image: "",
    description: "Daily running shoe built for comfortable and responsive road training.",
    overview: "Velocity NITRO 3 is a straightforward road trainer intended for regular training rather than specialized racing.",
    keyFeatures: [
      "NITROFOAM cushioning",
      "Road-running geometry",
      "Engineered upper",
      "Rubber traction",
      "Traditional lacing"
    ],
    material: "Textile or mesh upper with foam cushioning and rubber outsole.",
    sizeVariants: "Adult running sizes and seasonal colorways.",
    merits: [
      "Suitable for regular training",
      "Responsive foam platform",
      "Everyday versatility"
    ],
    demerits: [
      "Less specialized than plated racers",
      "Not designed for trail terrain"
    ],
    bestFor: "Daily road running.",
    thingsToConsider: "Choose a more specialized model for racing-focused use.",
    similarProducts: ["Nike Pegasus 42", "ASICS DYNABLAST 6"],
    compareThisProduct: "Compare daily-training cushioning, weight and outsole traction."
  },

  // 33
  {
    id: "puma-foreverrun-nitro",
    name: "PUMA ForeverRun NITRO",
    brand: "PUMA",
    category: "Footwear",
    image: "",
    description: "Stability-focused road shoe designed to support regular runners.",
    overview: "ForeverRun NITRO uses a stability-oriented design intended for supportive everyday running.",
    keyFeatures: [
      "NITROFOAM cushioning",
      "RUNGUIDE SYSTEM",
      "PUMAGRIP outsole",
      "Engineered mesh upper",
      "Support-oriented geometry"
    ],
    material: "Engineered textile or mesh upper with foam and rubber outsole.",
    sizeVariants: "Available in adult running sizes with multiple widths or colorways depending on market.",
    merits: [
      "Supportive road-running design",
      "Traction-focused outsole",
      "Good for regular training"
    ],
    demerits: [
      "More structured than neutral trainers",
      "May feel different from flexible lifestyle footwear"
    ],
    bestFor: "Support-oriented everyday road running.",
    thingsToConsider: "Compare stability needs before choosing between support and neutral models.",
    similarProducts: ["ASICS GEL-KAYANO 32", "PUMA ForeverRun NITRO 2"],
    compareThisProduct: "Compare stability systems, cushioning and intended running style."
  },

  // 34
  {
    id: "asics-gel-kayano-32",
    name: "ASICS GEL-KAYANO 32",
    brand: "ASICS",
    category: "Footwear",
    image: "",
    description: "Stability road-running shoe built for cushioned everyday training.",
    overview: "The GEL-KAYANO line focuses on supportive road running with cushioning and stability-oriented geometry.",
    keyFeatures: [
      "GEL cushioning technology",
      "Stability-focused design",
      "Road-running platform",
      "Engineered upper",
      "Rubber outsole"
    ],
    material: "Engineered mesh or textile upper with foam midsole and rubber outsole.",
    sizeVariants: "Adult running sizes with multiple men's and women's versions.",
    merits: [
      "Supportive design",
      "Cushioned daily-trainer role",
      "Established stability heritage"
    ],
    demerits: [
      "Heavier-feeling than lightweight trainers",
      "More structured than neutral models"
    ],
    bestFor: "Runners wanting a stability-focused daily trainer.",
    thingsToConsider: "Compare neutral and stability options based on personal fit and running needs.",
    similarProducts: ["PUMA ForeverRun NITRO", "Brooks Adrenaline GTS 25"],
    compareThisProduct: "Compare support geometry, cushioning and daily-run comfort."
  },

  // 35
  {
    id: "asics-gel-nimbus-27",
    name: "ASICS GEL-NIMBUS 27",
    brand: "ASICS",
    category: "Footwear",
    image: "",
    description: "Highly cushioned neutral trainer designed for comfortable road running.",
    overview: "The GEL-NIMBUS 27 is aimed at soft, comfortable road mileage for runners seeking a plush feel.",
    keyFeatures: [
      "GEL cushioning",
      "Soft foam platform",
      "Engineered upper",
      "Neutral running design",
      "Road rubber outsole"
    ],
    material: "Engineered textile upper with foam, GEL elements and rubber outsole.",
    sizeVariants: "Adult running sizes in multiple versions and colorways.",
    merits: [
      "Comfort-first design",
      "Cushioned road platform",
      "Suitable for longer easy runs"
    ],
    demerits: [
      "Less speed-focused",
      "Bulkier than lightweight trainers"
    ],
    bestFor: "Easy running, comfort-focused mileage and walking.",
    thingsToConsider: "Compare softness with firmer daily trainers.",
    similarProducts: ["Nike Vomero 18", "HOKA Bondi 9"],
    compareThisProduct: "Compare softness, cushioning depth and overall weight."
  },

  // 36
  {
    id: "asics-superblast-2",
    name: "ASICS SUPERBLAST 2",
    brand: "ASICS",
    category: "Footwear",
    image: "",
    description: "High-performance trainer designed for energetic and versatile running.",
    overview: "SUPERBLAST 2 is a performance-focused trainer suited to a range of running speeds.",
    keyFeatures: [
      "Advanced foam cushioning",
      "High-energy ride",
      "Lightweight-oriented build",
      "Engineered upper",
      "Road traction"
    ],
    material: "Engineered textile upper with performance foam and rubber outsole components.",
    sizeVariants: "Adult performance-running sizes.",
    merits: [
      "Versatile for faster running",
      "High-energy cushioning concept",
      "Useful as a premium training shoe"
    ],
    demerits: [
      "More specialized than basic daily trainers",
      "Not designed as a trail shoe"
    ],
    bestFor: "Versatile performance training and faster road sessions.",
    thingsToConsider: "Compare the ride with plated racing models.",
    similarProducts: ["Nike Pegasus Premium", "adidas Adizero Boston 13"],
    compareThisProduct: "Compare cushioning response, versatility and speed orientation."
  },

  // 37
  {
    id: "asics-gt-2000-13",
    name: "ASICS GT-2000 13",
    brand: "ASICS",
    category: "Footwear",
    image: "",
    description: "Supportive road-running model intended for everyday training.",
    overview: "GT-2000 13 combines cushioning with a stability-oriented construction for regular road runs.",
    keyFeatures: [
      "Stability geometry",
      "GEL cushioning",
      "Road-running platform",
      "Engineered upper",
      "Rubber traction"
    ],
    material: "Engineered textile upper with foam, GEL components and rubber outsole.",
    sizeVariants: "Adult running sizes and market-specific colorways.",
    merits: [
      "Support-oriented design",
      "Everyday running focus",
      "Balanced cushioning"
    ],
    demerits: [
      "More structured than neutral trainers",
      "Not intended for track racing"
    ],
    bestFor: "Daily training with a stability focus.",
    thingsToConsider: "Compare against neutral models before choosing.",
    similarProducts: ["ASICS GEL-KAYANO 32", "Brooks Adrenaline GTS 25"],
    compareThisProduct: "Compare support features, cushioning and running geometry."
  },

  // 38
  {
    id: "asics-novablast-5",
    name: "ASICS NOVABLAST 5",
    brand: "ASICS",
    category: "Footwear",
    image: "",
    description: "Springy neutral trainer built for lively everyday road running.",
    overview: "NOVABLAST 5 uses a bouncy cushioning concept aimed at energetic daily running.",
    keyFeatures: [
      "FF BLAST MAX cushioning",
      "Neutral geometry",
      "Responsive ride",
      "Breathable upper",
      "Rubber outsole"
    ],
    material: "Textile upper with foam midsole and rubber outsole.",
    sizeVariants: "Adult running sizes in multiple colorways.",
    merits: [
      "Lively ride",
      "Versatile daily trainer",
      "Suitable for different running paces"
    ],
    demerits: [
      "Bouncy feel is personal-preference dependent",
      "Not a dedicated stability shoe"
    ],
    bestFor: "Neutral daily running and faster everyday sessions.",
    thingsToConsider: "Compare with softer or more stable trainers if required.",
    similarProducts: ["ASICS SUPERBLAST 2", "Nike Pegasus 42"],
    compareThisProduct: "Compare bounce, stability and everyday running versatility."
  },

  // 39
  {
    id: "asics-trabuco-max-4",
    name: "ASICS TRABUCO MAX 4",
    brand: "ASICS",
    category: "Footwear",
    image: "",
    description: "Max-cushion trail shoe designed for off-road running.",
    overview: "TRABUCO MAX 4 combines substantial cushioning with a trail-focused outsole for outdoor terrain.",
    keyFeatures: [
      "Trail-oriented outsole",
      "High-cushioning concept",
      "Protective upper",
      "Outdoor traction",
      "Lace closure"
    ],
    material: "Textile or mesh upper with protective overlays, foam midsole and rubber outsole.",
    sizeVariants: "Adult trail-running sizes.",
    merits: [
      "Designed for off-road terrain",
      "Cushioning for longer outings",
      "Trail-focused outsole"
    ],
    demerits: [
      "Too specialized for simple casual wear",
      "Trail outsole can feel unnecessary on smooth roads"
    ],
    bestFor: "Trail running and outdoor paths.",
    thingsToConsider: "Choose based on terrain rather than appearance alone.",
    similarProducts: ["Salomon XT-6", "HOKA Clifton 10"],
    compareThisProduct: "Compare outsole grip, cushioning and trail capability."
  },

  // 40
  {
    id: "new-balance-fresh-foam-x-1080v14",
    name: "New Balance Fresh Foam X 1080v14",
    brand: "New Balance",
    category: "Footwear",
    image: "",
    description: "Soft daily road-running shoe built around Fresh Foam X cushioning.",
    overview: "The 1080v14 focuses on comfortable road mileage through a cushioned neutral platform.",
    keyFeatures: [
      "Fresh Foam X cushioning",
      "Neutral running design",
      "Engineered upper",
      "Road outsole",
      "Everyday trainer geometry"
    ],
    material: "Engineered textile upper with Fresh Foam X midsole and rubber outsole.",
    sizeVariants: "Multiple adult sizes and width choices depending on region.",
    merits: [
      "Soft cushioning",
      "Daily-training versatility",
      "Multiple fit options in some markets"
    ],
    demerits: [
      "Less race-focused",
      "Soft ride may not suit everyone"
    ],
    bestFor: "Comfortable road running and longer easy sessions.",
    thingsToConsider: "Check available widths when selecting the right fit.",
    similarProducts: ["New Balance Fresh Foam X 880v15", "ASICS GEL-NIMBUS 27"],
    compareThisProduct: "Compare cushioning softness, width options and daily mileage role."
  },

  // 41
  {
    id: "nike-lebron-xxii",
    name: "Nike LeBron XXII",
    brand: "Nike",
    category: "Footwear",
    image: "",
    description: "Basketball shoe built around cushioning, traction and midfoot support.",
    overview: "LeBron XXII is designed for modern basketball movement with a supportive setup for court play.",
    keyFeatures: [
      "Midfoot saddle",
      "Cushlon-based cushioning",
      "Zoom cushioning elements",
      "Court traction zones",
      "Supportive upper"
    ],
    material: "Textile and synthetic upper components with foam cushioning and rubber outsole.",
    sizeVariants: "Adult basketball sizes in multiple editions.",
    merits: [
      "Court-focused traction",
      "Strong cushioning setup",
      "Supportive construction"
    ],
    demerits: [
      "More specialized than lifestyle shoes",
      "Basketball build may feel structured for casual use"
    ],
    bestFor: "Basketball and court movement.",
    thingsToConsider: "Choose basketball shoes based on court needs rather than appearance alone.",
    similarProducts: ["Nike KD 18", "adidas Harden Volume 9"],
    compareThisProduct: "Compare court traction, cushioning and containment."
  },

  // 42
  {
    id: "nike-giannis-immortality-4",
    name: "Nike Giannis Immortality 4",
    brand: "Nike",
    category: "Footwear",
    image: "",
    description: "Lightweight basketball model designed for movement and multi-surface traction.",
    overview: "Immortality 4 is designed for quick basketball movement while keeping the construction relatively lightweight.",
    keyFeatures: [
      "Two-layer foam setup",
      "Breathable mesh",
      "Hidden harness",
      "Heel padding",
      "Rubber traction wrap"
    ],
    material: "Mesh or textile upper with foam and rubber court outsole.",
    sizeVariants: "Adult basketball sizes and multiple releases.",
    merits: [
      "Movement-oriented design",
      "Court traction",
      "Supportive lockdown elements"
    ],
    demerits: [
      "Not intended for road running",
      "Court-focused structure"
    ],
    bestFor: "Basketball guards and active court movement.",
    thingsToConsider: "Consider court surface and fit around the heel.",
    similarProducts: ["Nike G.T. Cut 3", "PUMA All-Pro NITRO 2"],
    compareThisProduct: "Compare traction, cushioning and lockdown."
  },

  // 43
  {
    id: "nike-kd-18",
    name: "Nike KD 18",
    brand: "Nike",
    category: "Footwear",
    image: "",
    description: "Basketball shoe combining cushioning, containment and court traction.",
    overview: "KD 18 uses a supportive midfoot system and responsive cushioning aimed at modern court play.",
    keyFeatures: [
      "Midfoot cage",
      "TPU shank",
      "Cushlon 3.0 insole",
      "Forefoot Air Zoom",
      "Court traction"
    ],
    material: "Textile or mesh upper with TPU support, foam cushioning and rubber outsole.",
    sizeVariants: "Adult basketball sizing across various editions.",
    merits: [
      "Containment-focused construction",
      "Responsive cushioning elements",
      "Designed for court play"
    ],
    demerits: [
      "Specialized basketball build",
      "May feel firm for casual walking"
    ],
    bestFor: "Basketball players needing support and court responsiveness.",
    thingsToConsider: "Compare lockdown and court feel with other basketball models.",
    similarProducts: ["Nike LeBron XXII", "Nike G.T. Cut 3"],
    compareThisProduct: "Compare midfoot support, cushioning response and traction."
  },

  // 44
  {
    id: "nike-gt-cut-3",
    name: "Nike G.T. Cut 3",
    brand: "Nike",
    category: "Footwear",
    image: "",
    description: "Low-profile basketball shoe designed for quick cuts and movement.",
    overview: "The G.T. Cut 3 focuses on fast court movement through a lightweight upper and responsive cushioning platform.",
    keyFeatures: [
      "Full-length ZoomX cushioning",
      "Flywire support",
      "TPU sidewall",
      "Modified herringbone traction",
      "Lightweight textile upper"
    ],
    material: "Textile upper with Flywire, foam cushioning and rubber outsole.",
    sizeVariants: "Adult basketball sizes and special colorways.",
    merits: [
      "Quick-movement focus",
      "Responsive cushioning",
      "Strong court-oriented traction"
    ],
    demerits: [
      "Highly specialized for basketball",
      "Low-profile feel may not suit everyone"
    ],
    bestFor: "Basketball players who make frequent cuts.",
    thingsToConsider: "Compare traction and stability on your usual court surface.",
    similarProducts: ["Nike Giannis Immortality 4", "adidas Dame 9"],
    compareThisProduct: "Compare traction pattern, cushioning response and court movement."
  },

  // 45
  {
    id: "adidas-harden-volume-9",
    name: "adidas Harden Volume 9",
    brand: "adidas",
    category: "Footwear",
    image: "",
    description: "Basketball shoe focused on grip, support and controlled movement.",
    overview: "Harden Volume 9 is designed for basketball with a performance-oriented court platform.",
    keyFeatures: [
      "Court traction outsole",
      "Cushioned midsole",
      "Supportive upper",
      "Lace-based lockdown",
      "Basketball geometry"
    ],
    material: "Textile or mesh upper with foam cushioning and rubber outsole.",
    sizeVariants: "Adult basketball sizes with multiple editions.",
    merits: [
      "Court-specific traction",
      "Stable feel",
      "Designed for basketball movement"
    ],
    demerits: [
      "Not an everyday lifestyle shoe",
      "Can feel structured off court"
    ],
    bestFor: "Basketball training and matches.",
    thingsToConsider: "Consider playing style and court surface.",
    similarProducts: ["Nike KD 18", "adidas Dame 9"],
    compareThisProduct: "Compare stability, traction and cushioning response."
  },

  // 46
  {
    id: "adidas-dame-9",
    name: "adidas Dame 9",
    brand: "adidas",
    category: "Footwear",
    image: "",
    description: "Basketball sneaker designed for traction, cushioning and guard-style movement.",
    overview: "Dame 9 is built around court movement with cushioning and traction suited to fast play.",
    keyFeatures: [
      "Court traction",
      "Cushioned platform",
      "Supportive heel construction",
      "Textile or mesh upper",
      "Lace closure"
    ],
    material: "Textile or mesh upper with synthetic support elements and rubber outsole.",
    sizeVariants: "Adult basketball sizes in several releases.",
    merits: [
      "Movement-oriented design",
      "Court traction",
      "Useful for guard-style play"
    ],
    demerits: [
      "Not designed for road running",
      "Structured for sports use"
    ],
    bestFor: "Basketball and quick court movement.",
    thingsToConsider: "Compare fit and traction with other guard-focused models.",
    similarProducts: ["Nike G.T. Cut 3", "adidas Harden Volume 9"],
    compareThisProduct: "Compare court movement, traction and support."
  },

  // 47
  {
    id: "puma-all-pro-nitro-2",
    name: "PUMA All-Pro NITRO 2",
    brand: "PUMA",
    category: "Footwear",
    image: "",
    description: "Performance basketball shoe using NITRO SQD cushioning.",
    overview: "All-Pro NITRO 2 combines basketball cushioning with a supportive upper and court-focused outsole.",
    keyFeatures: [
      "NITRO SQD cushioning",
      "PWR Print upper",
      "Cord-lock lacing",
      "Regular fit",
      "Rubber outsole"
    ],
    material: "Textile and synthetic upper components with foam and rubber outsole.",
    sizeVariants: "Adult basketball sizes with multiple colorways.",
    merits: [
      "Court-focused cushioning",
      "Supportive upper",
      "Traction-oriented design"
    ],
    demerits: [
      "Specialized sports shoe",
      "Not intended as a casual walking model"
    ],
    bestFor: "Basketball training and court play.",
    thingsToConsider: "Check fit and court traction before selecting a performance basketball shoe.",
    similarProducts: ["Nike Giannis Immortality 4", "ASICS NOVA SURGE LOW 2"],
    compareThisProduct: "Compare cushioning, upper support and court traction."
  },

  // 48
  {
    id: "asics-court-ff-3",
    name: "ASICS COURT FF 3",
    brand: "ASICS",
    category: "Footwear",
    image: "",
    description: "High-performance court shoe designed for tennis movement and stability.",
    overview: "COURT FF 3 is built for tennis with support systems that help during rapid multidirectional play.",
    keyFeatures: [
      "TWISTRUSS technology",
      "MONO-SOCK construction",
      "FLYTEFOAM cushioning",
      "Forefoot GEL",
      "PGUARD protection"
    ],
    material: "Textile and synthetic upper with foam, GEL and rubber outsole components.",
    sizeVariants: "Adult court-shoe sizing with different versions for court surfaces.",
    merits: [
      "Strong tennis orientation",
      "Supportive construction",
      "Court-focused traction"
    ],
    demerits: [
      "Highly specialized",
      "Not suitable as a road-running replacement"
    ],
    bestFor: "Tennis and demanding court movement.",
    thingsToConsider: "Choose the outsole version suited to the court surface.",
    similarProducts: ["ASICS POWERBREAK FF", "ASICS NOVA SURGE LOW 2"],
    compareThisProduct: "Compare court support, outsole design and movement control."
  },

  // 49
  {
    id: "asics-powerbreak-ff",
    name: "ASICS POWERBREAK FF",
    brand: "ASICS",
    category: "Footwear",
    image: "",
    description: "Indoor court shoe designed for stable support during quick movement.",
    overview: "POWERBREAK FF is designed for indoor court sports with emphasis on support and stability.",
    keyFeatures: [
      "STABLETRUSS technology",
      "Wider outsole concept",
      "Supportive upper",
      "Indoor court geometry",
      "Rubber traction"
    ],
    material: "Synthetic and textile upper with foam midsole and indoor rubber outsole.",
    sizeVariants: "Adult indoor-court sizes.",
    merits: [
      "Stability-focused construction",
      "Indoor court traction",
      "Support during lateral movement"
    ],
    demerits: [
      "Not intended for road use",
      "Specialized court build"
    ],
    bestFor: "Indoor volleyball and similar court sports.",
    thingsToConsider: "Use on the court type for which the outsole was designed.",
    similarProducts: ["ASICS COURT FF 3", "PUMA All-Pro NITRO 2"],
    compareThisProduct: "Compare stability, indoor traction and upper support."
  },

  // 50
  {
    id: "asics-nova-surge-low-2",
    name: "ASICS NOVA SURGE LOW 2",
    brand: "ASICS",
    category: "Footwear",
    image: "",
    description: "Low-cut basketball shoe combining cushioning with a supportive sole platform.",
    overview: "NOVA SURGE LOW 2 is a basketball model using a lower-cut profile and cushioning-oriented construction.",
    keyFeatures: [
      "Low-cut basketball profile",
      "FF BLAST PLUS cushioning",
      "TPU sidewall",
      "Wider sole platform",
      "Heel-lock loop"
    ],
    material: "Textile or mesh upper with foam and rubber court outsole.",
    sizeVariants: "Adult basketball sizes and seasonal editions.",
    merits: [
      "Low-cut movement feel",
      "Cushioning-focused setup",
      "Court-oriented sole design"
    ],
    demerits: [
      "Specialized basketball shoe",
      "Low collar may not be preferred by every player"
    ],
    bestFor: "Basketball and quick court movement.",
    thingsToConsider: "Compare collar height and lateral support with other basketball shoes.",
    similarProducts: ["Nike Giannis Immortality 4", "PUMA All-Pro NITRO 2"],
    compareThisProduct: "Compare collar height, cushioning and court traction."
  },

  // 51
  {
    id: "adidas-handball-spezial",
    name: "adidas Handball Spezial",
    brand: "adidas",
    category: "Footwear",
    image: "",
    description: "Classic terrace sneaker originally created for indoor handball.",
    overview: "Handball Spezial carries its original indoor-sport heritage into modern lifestyle footwear.",
    keyFeatures: [
      "Low-profile shape",
      "Suede detailing",
      "Textile or synthetic lining",
      "Gum-style outsole",
      "Lace closure"
    ],
    material: "Common versions use suede and textile or synthetic components.",
    sizeVariants: "Multiple adult sizes and many colorways.",
    merits: [
      "Strong terrace heritage",
      "Slim profile",
      "Easy casual styling"
    ],
    demerits: [
      "Not a technical handball shoe today",
      "Suede needs maintenance"
    ],
    bestFor: "Casual wear and terrace-inspired outfits.",
    thingsToConsider: "Treat suede carefully and check the exact colorway construction.",
    similarProducts: ["adidas Samba OG", "PUMA Palermo"],
    compareThisProduct: "Compare terrace heritage, suede content and outsole design."
  },

  // 52
  {
    id: "adidas-forum-low",
    name: "adidas Forum Low",
    brand: "adidas",
    category: "Footwear",
    image: "",
    description: "Low-top lifestyle sneaker rooted in classic basketball design.",
    overview: "The Forum Low adapts the original Forum basketball visual language for casual everyday wear.",
    keyFeatures: [
      "Basketball-inspired shape",
      "Low-top construction",
      "Strap detail on many versions",
      "Layered upper",
      "Rubber outsole"
    ],
    material: "Common versions use leather or synthetic materials with textile lining.",
    sizeVariants: "Multiple adult sizes and seasonal editions.",
    merits: [
      "Recognizable court heritage",
      "Structured everyday fit",
      "Strong casual styling"
    ],
    demerits: [
      "More structured than lightweight sneakers",
      "Not designed as a current basketball performance shoe"
    ],
    bestFor: "Casual streetwear and classic court-inspired outfits.",
    thingsToConsider: "Check whether the chosen version has a strap and how it fits.",
    similarProducts: ["New Balance 550", "adidas Superstar"],
    compareThisProduct: "Compare court styling, upper structure and closure details."
  },

  // 53
  {
    id: "puma-speedcat-og",
    name: "PUMA Speedcat OG",
    brand: "PUMA",
    category: "Footwear",
    image: "",
    description: "Slim racing-inspired sneaker with strong motorsport and streetwear heritage.",
    overview: "Speedcat OG uses a low-slung shape influenced by motorsport footwear and adapted for street style.",
    keyFeatures: [
      "Very low-profile shape",
      "Motorsport heritage",
      "OrthoLite insole on versions that include it",
      "IMEVA cushioning",
      "Rubber outsole"
    ],
    material: "Many versions use leather, textile or synthetic upper materials.",
    sizeVariants: "Multiple adult sizes and seasonal colorways.",
    merits: [
      "Distinctive slim appearance",
      "Strong racing heritage",
      "Light visual profile"
    ],
    demerits: [
      "Low profile may not suit everyone",
      "Not a running shoe"
    ],
    bestFor: "Lifestyle wear and motorsport-inspired outfits.",
    thingsToConsider: "The slim shape can feel very different from running trainers.",
    similarProducts: ["PUMA Palermo", "PUMA Easy Rider"],
    compareThisProduct: "Compare profile height, motorsport styling and cushioning."
  },

  // 54
  {
    id: "puma-easy-rider",
    name: "PUMA Easy Rider",
    brand: "PUMA",
    category: "Footwear",
    image: "",
    description: "Retro runner-inspired sneaker blending vintage styling with everyday wearability.",
    overview: "Easy Rider connects late-1970s running heritage with modern casual footwear.",
    keyFeatures: [
      "Retro running shape",
      "Low-top collar",
      "PROFOAM cushioning on relevant versions",
      "Textured rubber outsole",
      "Layered upper"
    ],
    material: "Common versions mix nylon, suede and synthetic components.",
    sizeVariants: "Multiple adult sizes and seasonal colorways.",
    merits: [
      "Strong vintage aesthetic",
      "Comfortable everyday role",
      "Distinctive retro shape"
    ],
    demerits: [
      "Mixed materials require more care",
      "Not intended for modern performance running"
    ],
    bestFor: "Casual wear and retro running-inspired outfits.",
    thingsToConsider: "Check the upper composition of the exact version.",
    similarProducts: ["PUMA Future Rider", "New Balance 574"],
    compareThisProduct: "Compare upper materials, outsole texture and retro shape."
  },

  // 55
  {
    id: "asics-gel-1130",
    name: "ASICS GEL-1130",
    brand: "ASICS",
    category: "Footwear",
    image: "",
    description: "Retro running-inspired sneaker carrying GEL cushioning heritage.",
    overview: "GEL-1130 adapts an early-2000s running aesthetic into a modern lifestyle sneaker.",
    keyFeatures: [
      "Retro running construction",
      "GEL cushioning heritage",
      "Layered upper",
      "Low-top profile",
      "Rubber outsole"
    ],
    material: "Common versions combine mesh with synthetic or textile overlays.",
    sizeVariants: "Multiple adult lifestyle sizes and colorways.",
    merits: [
      "Distinct retro appearance",
      "Comfort-oriented lifestyle use",
      "Easy everyday styling"
    ],
    demerits: [
      "Not a current performance racer",
      "Layered design can be harder to clean"
    ],
    bestFor: "Everyday casual use.",
    thingsToConsider: "Choose based on lifestyle fit rather than assuming it is a modern running shoe.",
    similarProducts: ["ASICS GEL-KAYANO 14", "New Balance 1906R"],
    compareThisProduct: "Compare retro construction, cushioning heritage and upper layering."
  },

  // 56
  {
    id: "asics-gel-kayano-14",
    name: "ASICS GEL-KAYANO 14",
    brand: "ASICS",
    category: "Footwear",
    image: "",
    description: "2000s-inspired lifestyle sneaker based on ASICS running heritage.",
    overview: "GEL-KAYANO 14 brings a performance-running aesthetic into modern lifestyle footwear.",
    keyFeatures: [
      "2000s running-inspired shape",
      "GEL technology heritage",
      "Layered synthetic panels",
      "Low-top collar",
      "Rubber outsole"
    ],
    material: "Mesh combined with synthetic or metallic-look overlays on many versions.",
    sizeVariants: "Multiple adult lifestyle sizes and colorways.",
    merits: [
      "Distinctive retro-tech look",
      "Strong lifestyle versatility",
      "Recognizable ASICS design"
    ],
    demerits: [
      "Layered upper can need extra care",
      "Not intended for current racing"
    ],
    bestFor: "Casual wear and retro-tech styling.",
    thingsToConsider: "Upper materials vary by release.",
    similarProducts: ["ASICS GEL-1130", "New Balance 1906R"],
    compareThisProduct: "Compare upper layering, silhouette and retro-tech character."
  },

  // 57
  {
    id: "new-balance-9060",
    name: "New Balance 9060",
    brand: "New Balance",
    category: "Footwear",
    image: "",
    description: "Chunky lifestyle sneaker influenced by New Balance performance design language.",
    overview: "The 9060 mixes modern proportions with visual references to the brand's running heritage.",
    keyFeatures: [
      "Chunky silhouette",
      "Layered upper",
      "Large N branding",
      "Sculpted midsole",
      "Rubber outsole"
    ],
    material: "Common editions combine mesh, suede and synthetic overlays.",
    sizeVariants: "Multiple adult sizes and colorways.",
    merits: [
      "Distinctive chunky design",
      "Strong streetwear presence",
      "Layered visual detail"
    ],
    demerits: [
      "Large profile",
      "Not a technical running shoe"
    ],
    bestFor: "Lifestyle wear and streetwear.",
    thingsToConsider: "Consider the larger visual and physical profile.",
    similarProducts: ["New Balance 2002R", "ASICS GEL-NYC"],
    compareThisProduct: "Compare profile size, cushioning structure and upper layering."
  },

  // 58
  {
    id: "new-balance-2002r",
    name: "New Balance 2002R",
    brand: "New Balance",
    category: "Footwear",
    image: "",
    description: "Retro-performance-inspired lifestyle shoe with layered technical styling.",
    overview: "The 2002R borrows design cues from performance running shoes while functioning primarily as a lifestyle sneaker.",
    keyFeatures: [
      "Layered upper",
      "Performance-inspired sole",
      "Large N branding",
      "Low-top construction",
      "Rubber outsole"
    ],
    material: "Common versions use mesh, suede and synthetic overlays.",
    sizeVariants: "Multiple adult sizes and wide-ranging colorways.",
    merits: [
      "Comfort-oriented lifestyle platform",
      "Strong retro-tech look",
      "Versatile casual use"
    ],
    demerits: [
      "Bulky compared with slim lifestyle models",
      "Material mix needs care"
    ],
    bestFor: "Everyday casual wear and streetwear.",
    thingsToConsider: "Check the upper mix and desired level of cushioning.",
    similarProducts: ["New Balance 9060", "New Balance 1906R"],
    compareThisProduct: "Compare cushioning structure, upper layers and visual volume."
  },

  // 59
  {
    id: "skechers-go-walk-7",
    name: "Skechers GO WALK 7",
    brand: "Skechers",
    category: "Footwear",
    image: "",
    description: "Walking shoe designed around lightweight comfort and everyday mobility.",
    overview: "GO WALK 7 focuses on walking comfort rather than technical sports performance.",
    keyFeatures: [
      "Walking-oriented design",
      "Lightweight construction",
      "Breathable upper",
      "Cushioned midsole",
      "Flexible outsole"
    ],
    material: "Textile or engineered mesh upper with synthetic and rubber components.",
    sizeVariants: "Available in adult walking-shoe sizes with multiple fit options depending on market.",
    merits: [
      "Comfort-first purpose",
      "Good for everyday walking",
      "Easy casual styling"
    ],
    demerits: [
      "Not designed for competitive running",
      "Support profile depends on the exact version"
    ],
    bestFor: "Walking and everyday mobility.",
    thingsToConsider: "Choose the exact GO WALK version based on fit and support needs.",
    similarProducts: ["Nike Promina", "On Cloud 5"],
    compareThisProduct: "Compare walking comfort, flexibility and cushioning."
  },

  // 60
  {
    id: "puma-easy-rider-leather",
    name: "PUMA Easy Rider Leather",
    brand: "PUMA",
    category: "Footwear",
    image: "",
    description: "Leather-built interpretation of the classic Easy Rider silhouette.",
    overview: "Easy Rider Leather keeps the retro runner profile while using a leather-focused upper construction.",
    keyFeatures: [
      "Leather upper",
      "Retro runner profile",
      "EVA midsole",
      "Rubber outsole",
      "Low-top construction"
    ],
    material: "Leather-focused upper with EVA cushioning and rubber outsole.",
    sizeVariants: "Adult lifestyle sizes across multiple colorways.",
    merits: [
      "Premium-looking upper",
      "Classic retro profile",
      "Versatile casual use"
    ],
    demerits: [
      "Leather needs care",
      "Less breathable than open mesh"
    ],
    bestFor: "Casual wear and retro styling.",
    thingsToConsider: "Choose leather when structured material is preferred over breathability.",
    similarProducts: ["PUMA Easy Rider", "PUMA Future Rider"],
    compareThisProduct: "Compare leather construction, breathability and retro profile."
  },

  // 61
  {
    id: "nike-air-jordan-1-low",
    name: "Nike Air Jordan 1 Low",
    brand: "Nike",
    category: "Footwear",
    image: "",
    description: "Low-top lifestyle sneaker based on the iconic Jordan 1 shape.",
    overview: "The Air Jordan 1 Low adapts Jordan's basketball heritage into a lower-profile casual silhouette.",
    keyFeatures: [
      "Low-top construction",
      "Jordan wing branding",
      "Layered upper",
      "Padded collar",
      "Rubber outsole"
    ],
    material: "Common versions use leather, synthetic or textile upper combinations.",
    sizeVariants: "Multiple adult sizes and many colorways.",
    merits: [
      "Strong basketball heritage",
      "Easy low-top styling",
      "Large color selection"
    ],
    demerits: [
      "Not a current technical basketball shoe",
      "Structured upper may feel firm"
    ],
    bestFor: "Casual wear and Jordan-inspired streetwear.",
    thingsToConsider: "Exact materials and fit change by edition.",
    similarProducts: ["Nike Air Jordan 1 Mid", "Nike Dunk Low Retro"],
    compareThisProduct: "Compare collar height, upper structure and basketball heritage."
  },

  // 62
  {
    id: "nike-air-jordan-1-mid",
    name: "Nike Air Jordan 1 Mid",
    brand: "Nike",
    category: "Footwear",
    image: "",
    description: "Mid-top lifestyle sneaker inspired by classic Jordan basketball design.",
    overview: "The Air Jordan 1 Mid sits between low and high silhouettes while retaining familiar Jordan design cues.",
    keyFeatures: [
      "Mid-top collar",
      "Layered upper panels",
      "Jordan branding",
      "Padded collar",
      "Rubber outsole"
    ],
    material: "Leather, synthetic or textile combinations depending on release.",
    sizeVariants: "Available in adult sizes and many colorways.",
    merits: [
      "Iconic shape",
      "More collar coverage than low-top versions",
      "Strong streetwear appeal"
    ],
    demerits: [
      "Heavier visual profile",
      "Not designed as a modern performance basketball shoe"
    ],
    bestFor: "Casual wear and streetwear.",
    thingsToConsider: "Consider collar height and upper stiffness.",
    similarProducts: ["Nike Air Jordan 1 Low", "Nike Dunk Low Retro"],
    compareThisProduct: "Compare collar height, structure and lifestyle use."
  },

  // 63 REPLACEMENT
  {
    id: "nike-air-max-95",
    name: "Nike Air Max 95",
    brand: "Nike",
    category: "Footwear",
    image: "",
    description: "Iconic Air Max model inspired by the human body and layered construction.",
    overview: "Air Max 95 combines distinctive layered side panels with visible Air cushioning and a bold lifestyle profile.",
    keyFeatures: [
      "Layered upper panels",
      "Visible Air cushioning",
      "Forefoot Air heritage",
      "Mesh sections",
      "Textured outsole"
    ],
    material: "Common versions combine mesh, synthetic or leather-like layered panels.",
    sizeVariants: "Available in multiple adult sizes and numerous colorways.",
    merits: [
      "Distinctive layered design",
      "Strong Air Max heritage",
      "Bold streetwear presence"
    ],
    demerits: [
      "More substantial than slim sneakers",
      "Layered upper requires extra cleaning"
    ],
    bestFor: "Lifestyle wear and streetwear.",
    thingsToConsider: "Consider the larger silhouette if you prefer minimalist shoes.",
    similarProducts: ["Nike Air Max 90", "Nike Air Max 97"],
    compareThisProduct: "Compare layered construction, Air cushioning and silhouette size."
  },

  // 64
  {
    id: "adidas-sl-72-rs",
    name: "adidas SL 72 RS",
    brand: "adidas",
    category: "Footwear",
    image: "",
    description: "Low-profile retro model inspired by adidas track footwear.",
    overview: "SL 72 RS combines a slim retro runner shape with modern lifestyle construction.",
    keyFeatures: [
      "Low-profile shape",
      "Track-inspired silhouette",
      "Light cushioning",
      "Textured outsole",
      "Three-stripe branding"
    ],
    material: "Textile, suede or synthetic panels depending on the version.",
    sizeVariants: "Multiple adult sizes and colorways.",
    merits: [
      "Slim retro look",
      "Easy casual styling",
      "Distinct track heritage"
    ],
    demerits: [
      "Less cushioned than modern trainers",
      "Not intended for performance running"
    ],
    bestFor: "Casual wear and vintage sports styling.",
    thingsToConsider: "Choose it for lifestyle use rather than modern running.",
    similarProducts: ["adidas Samba OG", "PUMA Easy Rider"],
    compareThisProduct: "Compare profile height, cushioning and retro track influence."
  },

  // 65 REPLACEMENT
  {
    id: "saucony-jazz-original",
    name: "Saucony Jazz Original",
    brand: "Saucony",
    category: "Footwear",
    image: "",
    description: "Classic retro running-inspired lifestyle sneaker from Saucony.",
    overview: "Jazz Original uses a simple vintage runner shape intended for casual everyday wear.",
    keyFeatures: [
      "Retro running silhouette",
      "Layered upper",
      "Low-top collar",
      "Lace closure",
      "Rubber outsole"
    ],
    material: "Common versions combine nylon or textile mesh with suede or synthetic overlays.",
    sizeVariants: "Multiple adult lifestyle sizes and seasonal colorways.",
    merits: [
      "Light retro profile",
      "Easy everyday styling",
      "Distinct Saucony heritage"
    ],
    demerits: [
      "Not intended for serious running",
      "Mixed materials require cleaning"
    ],
    bestFor: "Casual wear and vintage running-inspired outfits.",
    thingsToConsider: "Check exact material mix before cleaning.",
    similarProducts: ["PUMA Easy Rider", "New Balance 574"],
    compareThisProduct: "Compare upper layering, visual weight and retro character."
  },

  // 66
  {
    id: "puma-suede-xl",
    name: "PUMA Suede XL",
    brand: "PUMA",
    category: "Footwear",
    image: "",
    description: "Chunkier modern interpretation of the classic PUMA Suede.",
    overview: "Suede XL enlarges the traditional Suede silhouette with more padding and a broader sole shape.",
    keyFeatures: [
      "Suede upper",
      "Leather Formstrip",
      "Padded collar",
      "Padded tongue",
      "Chunkier sole"
    ],
    material: "Suede upper with leather or synthetic branding details, textile lining and rubber components.",
    sizeVariants: "Adult lifestyle sizes and multiple colorways.",
    merits: [
      "Modern chunky profile",
      "Soft-looking padded construction",
      "Strong streetwear appeal"
    ],
    demerits: [
      "Bulkier than classic Suede",
      "Suede needs care"
    ],
    bestFor: "Streetwear and casual outfits.",
    thingsToConsider: "Consider the increased volume compared with the original Suede.",
    similarProducts: ["PUMA Suede Classic", "adidas Campus 00s"],
    compareThisProduct: "Compare padding, sole volume and upper material."
  },

  // 67 REPLACEMENT
  {
    id: "asics-gel-lyte-iii",
    name: "ASICS GEL-LYTE III",
    brand: "ASICS",
    category: "Footwear",
    image: "",
    description: "Retro lifestyle sneaker known for its distinctive split-tongue design.",
    overview: "GEL-LYTE III brings a recognizable retro-running shape into lifestyle footwear with the model's characteristic split tongue.",
    keyFeatures: [
      "Split-tongue design",
      "GEL cushioning heritage",
      "Retro running shape",
      "Layered upper",
      "Rubber outsole"
    ],
    material: "Common versions combine suede, mesh and synthetic overlays.",
    sizeVariants: "Multiple adult lifestyle sizes and colorways.",
    merits: [
      "Distinctive split tongue",
      "Strong retro identity",
      "Comfort-oriented lifestyle design"
    ],
    demerits: [
      "Layered upper requires care",
      "Not a current technical running shoe"
    ],
    bestFor: "Casual wear and retro sneaker collections.",
    thingsToConsider: "The split tongue gives it a different entry and fit feel from standard tongues.",
    similarProducts: ["ASICS GEL-1130", "ASICS GEL-KAYANO 14"],
    compareThisProduct: "Compare tongue design, upper layering and retro cushioning."
  },

  // 68 REPLACEMENT
  {
    id: "reebok-premier-road-plus-vi",
    name: "Reebok Premier Road Plus VI",
    brand: "Reebok",
    category: "Footwear",
    image: "",
    description: "Retro-inspired running-style sneaker built for casual everyday wear.",
    overview: "Premier Road Plus VI uses a technical-looking layered upper and substantial midsole styling.",
    keyFeatures: [
      "Retro running shape",
      "Layered upper",
      "Cushioned midsole",
      "Padded collar",
      "Rubber outsole"
    ],
    material: "Textile mesh with synthetic or suede-style overlays depending on the version.",
    sizeVariants: "Adult lifestyle sizes with seasonal editions.",
    merits: [
      "Distinct retro-tech look",
      "More substantial cushioning feel",
      "Casual versatility"
    ],
    demerits: [
      "Chunkier than minimalist shoes",
      "Not designed as a current race model"
    ],
    bestFor: "Casual wear and retro running-inspired outfits.",
    thingsToConsider: "Compare the larger midsole shape with slimmer lifestyle models.",
    similarProducts: ["New Balance 574", "Reebok Classic Leather"],
    compareThisProduct: "Compare profile bulk, upper layering and cushioning."
  },

  // 69
  {
    id: "new-balance-1906r",
    name: "New Balance 1906R",
    brand: "New Balance",
    category: "Footwear",
    image: "",
    description: "Retro running-inspired sneaker with layered technical-looking details.",
    overview: "1906R brings a technical running aesthetic into modern lifestyle footwear.",
    keyFeatures: [
      "Layered mesh upper",
      "Technical overlays",
      "Retro runner geometry",
      "Supportive heel area",
      "Rubber outsole"
    ],
    material: "Mesh combined with synthetic overlays and rubber outsole components.",
    sizeVariants: "Multiple adult lifestyle sizes and colorways.",
    merits: [
      "Strong retro-tech appearance",
      "Breathable mesh sections",
      "Versatile casual use"
    ],
    demerits: [
      "Visually complex",
      "Not intended as a current racing shoe"
    ],
    bestFor: "Lifestyle wear and streetwear.",
    thingsToConsider: "Consider the layered design if easy cleaning is important.",
    similarProducts: ["New Balance 2002R", "ASICS GEL-KAYANO 14"],
    compareThisProduct: "Compare upper complexity, cushioning structure and visual profile."
  },

  // 70
  {
    id: "skechers-uno",
    name: "Skechers Uno",
    brand: "Skechers",
    category: "Footwear",
    image: "",
    description: "Casual sneaker combining everyday styling with visible cushioning elements.",
    overview: "Uno is a lifestyle-oriented sneaker with a modern streetwear shape and cushioning-focused construction.",
    keyFeatures: [
      "Low-top silhouette",
      "Visible cushioning element",
      "Padded collar",
      "Lace-up closure",
      "Rubber outsole"
    ],
    material: "Synthetic or textile upper options with foam-based cushioning and rubber outsole.",
    sizeVariants: "Adult casual sizes with multiple colorways.",
    merits: [
      "Modern casual appearance",
      "Comfort-oriented design",
      "Easy everyday use"
    ],
    demerits: [
      "Not a technical sports model",
      "Some versions have a relatively substantial sole"
    ],
    bestFor: "Casual everyday wear and walking.",
    thingsToConsider: "Choose based on comfort and preferred sole height.",
    similarProducts: ["Skechers D'Lites", "Skechers GO WALK 7"],
    compareThisProduct: "Compare sole height, cushioning and lifestyle styling."
  },

  // 71
  {
    id: "nike-vomero-plus",
    name: "Nike Vomero Plus",
    brand: "Nike",
    category: "Footwear",
    image: "",
    description: "Highly cushioned running model aimed at soft everyday road comfort.",
    overview: "Vomero Plus emphasizes a soft, cushioned road-running experience for everyday miles.",
    keyFeatures: [
      "High-cushioning platform",
      "Road-running geometry",
      "Breathable upper",
      "Padded collar",
      "Rubber outsole"
    ],
    material: "Textile or mesh upper with foam cushioning and rubber outsole components.",
    sizeVariants: "Adult road-running sizes with men's and women's versions.",
    merits: [
      "Comfort-focused cushioning",
      "Good for easy mileage",
      "Suitable for walking too"
    ],
    demerits: [
      "Not designed primarily for speed sessions",
      "Soft ride may not suit every runner"
    ],
    bestFor: "Comfortable daily running and walking.",
    thingsToConsider: "Compare with firmer trainers if you prefer more ground response.",
    similarProducts: ["Nike Vomero 18", "HOKA Bondi 9"],
    compareThisProduct: "Compare cushioning softness, stability and running purpose."
  },

  // 72
  {
    id: "nike-air-max-dn8",
    name: "Nike Air Max Dn8",
    brand: "Nike",
    category: "Footwear",
    image: "",
    description: "Modern lifestyle sneaker built around Dynamic Air cushioning.",
    overview: "Air Max Dn8 uses a modern Air Max platform focused on visible cushioning technology and lifestyle movement.",
    keyFeatures: [
      "Dynamic Air concept",
      "Multiple Air tubes",
      "Breathable upper",
      "Modern sculpted profile",
      "Rubber outsole"
    ],
    material: "Textile or mesh upper with foam and Air cushioning components.",
    sizeVariants: "Adult lifestyle sizes with multiple colorways.",
    merits: [
      "Modern visual design",
      "Distinctive cushioning technology",
      "Strong streetwear presence"
    ],
    demerits: [
      "Not designed for serious running",
      "More complex silhouette"
    ],
    bestFor: "Lifestyle wear and casual urban use.",
    thingsToConsider: "Choose based on lifestyle comfort rather than performance-running requirements.",
    similarProducts: ["Nike Air Max 270", "Nike Air Max 90"],
    compareThisProduct: "Compare Air setup, sole shape and lifestyle profile."
  },

  // 73
  {
    id: "new-balance-530",
    name: "New Balance 530",
    brand: "New Balance",
    category: "Footwear",
    image: "",
    description: "Retro runner-inspired everyday sneaker with a classic 1990s feel.",
    overview: "The 530 carries a traditional running-inspired upper into modern casual fashion.",
    keyFeatures: [
      "Retro runner shape",
      "Layered upper",
      "Mesh sections",
      "Large N branding",
      "Rubber outsole"
    ],
    material: "Common versions use mesh, synthetic and textile overlays.",
    sizeVariants: "Multiple adult sizes and seasonal colorways.",
    merits: [
      "Breathable-looking upper",
      "Strong retro style",
      "Easy everyday use"
    ],
    demerits: [
      "Not for technical running",
      "Layered upper needs maintenance"
    ],
    bestFor: "Casual wear and everyday walking.",
    thingsToConsider: "Consider fit and width availability by region.",
    similarProducts: ["New Balance 574", "ASICS GEL-1130"],
    compareThisProduct: "Compare upper breathability, silhouette and cushioning."
  },

  // 74
  {
    id: "asics-gel-nyc",
    name: "ASICS GEL-NYC",
    brand: "ASICS",
    category: "Footwear",
    image: "",
    description: "Lifestyle sneaker blending archival running influences with modern layering.",
    overview: "GEL-NYC combines multiple ASICS design references into a contemporary chunky lifestyle shape.",
    keyFeatures: [
      "Layered technical upper",
      "GEL cushioning heritage",
      "Retro-running influence",
      "Low-top shape",
      "Rubber outsole"
    ],
    material: "Mesh with synthetic or suede-style overlays on many versions.",
    sizeVariants: "Multiple adult lifestyle sizes and colorways.",
    merits: [
      "Distinctive modern-retro appearance",
      "Good streetwear versatility",
      "Strong visual detail"
    ],
    demerits: [
      "Chunkier than slim retro sneakers",
      "Complex upper takes more cleaning"
    ],
    bestFor: "Lifestyle wear and streetwear.",
    thingsToConsider: "Consider the larger footprint and layered materials.",
    similarProducts: ["New Balance 9060", "ASICS GEL-KAYANO 14"],
    compareThisProduct: "Compare silhouette bulk, upper layers and cushioning feel."
  },

  // 75
  {
    id: "skechers-dlites",
    name: "Skechers D'Lites",
    brand: "Skechers",
    category: "Footwear",
    image: "",
    description: "Chunky lifestyle sneaker focused on cushioned everyday comfort.",
    overview: "D'Lites uses a substantial lifestyle shape and comfort-oriented construction.",
    keyFeatures: [
      "Chunky sole",
      "Air-Cooled Memory Foam on common versions",
      "Leather or mesh upper",
      "Supportive midsole",
      "Flexible rubber outsole"
    ],
    material: "Leather, synthetic or mesh upper depending on the edition.",
    sizeVariants: "Multiple adult casual sizes and colorways.",
    merits: [
      "Cushion-oriented comfort",
      "Distinct chunky style",
      "Suitable for everyday wear"
    ],
    demerits: [
      "Large visual profile",
      "Not a performance running model"
    ],
    bestFor: "Casual walking and lifestyle use.",
    thingsToConsider: "Consider sole volume if you prefer low-profile footwear.",
    similarProducts: ["Skechers D'Lites 4", "Skechers Uno"],
    compareThisProduct: "Compare sole thickness, upper materials and cushioning."
  },

  // 76
  {
    id: "hoka-clifton-10",
    name: "HOKA Clifton 10",
    brand: "HOKA",
    category: "Footwear",
    image: "",
    description: "Cushioned everyday road-running shoe built for regular mileage.",
    overview: "Clifton 10 is designed around HOKA's cushioned running philosophy for everyday road training.",
    keyFeatures: [
      "High-cushioning design",
      "Rocker-style geometry",
      "Breathable upper",
      "Road-running platform",
      "Rubber traction"
    ],
    material: "Engineered textile upper with foam midsole and rubber outsole sections.",
    sizeVariants: "Adult running sizes with men's and women's versions.",
    merits: [
      "Comfort-oriented ride",
      "Suitable for everyday mileage",
      "Distinctive rocker geometry"
    ],
    demerits: [
      "Higher profile than many classic sneakers",
      "Not designed primarily for track racing"
    ],
    bestFor: "Daily road running and comfortable walking.",
    thingsToConsider: "Consider the higher sole profile and rocker feel.",
    similarProducts: ["HOKA Bondi 9", "New Balance Fresh Foam X 1080v14"],
    compareThisProduct: "Compare cushioning level, rocker feel and overall weight."
  },

  // 77
  {
    id: "brooks-ghost-17",
    name: "Brooks Ghost 17",
    brand: "Brooks",
    category: "Footwear",
    image: "",
    description: "Neutral road-running shoe designed for smooth everyday training.",
    overview: "Ghost 17 is a daily trainer centered on balanced cushioning and regular road-running use.",
    keyFeatures: [
      "Neutral support",
      "Cushioned heel and forefoot",
      "Air mesh upper",
      "Road outsole",
      "Traditional lace closure"
    ],
    material: "Engineered or air-mesh upper with foam cushioning and rubber outsole.",
    sizeVariants: "Adult sizes with multiple widths depending on market.",
    merits: [
      "Balanced everyday design",
      "Useful for regular training",
      "Multiple width options in some markets"
    ],
    demerits: [
      "Less specialized for speed",
      "Not intended for trails"
    ],
    bestFor: "Daily road running and walking.",
    thingsToConsider: "Check width choices if your foot shape needs extra room.",
    similarProducts: ["New Balance Fresh Foam X 880v15", "Nike Pegasus 42"],
    compareThisProduct: "Compare support, cushioning and width availability."
  },

  // 78
  {
    id: "on-cloud-5",
    name: "On Cloud 5",
    brand: "On",
    category: "Footwear",
    image: "",
    description: "Lightweight lifestyle and everyday shoe using CloudTec cushioning.",
    overview: "Cloud 5 combines a compact lifestyle shape with On's CloudTec cushioning platform.",
    keyFeatures: [
      "CloudTec cushioning",
      "Lightweight-oriented design",
      "Updated Speedboard",
      "Molded heel",
      "Breathable mesh"
    ],
    material: "Textile or mesh upper with foam cushioning and rubber outsole components.",
    sizeVariants: "Adult lifestyle sizes with men's and women's versions.",
    merits: [
      "Light visual profile",
      "Everyday versatility",
      "Distinct cushioning system"
    ],
    demerits: [
      "Not as heavily cushioned as max-cushion running shoes",
      "Not intended for technical trails"
    ],
    bestFor: "Daily casual wear, walking and light running.",
    thingsToConsider: "Compare its compact ride with softer high-stack trainers.",
    similarProducts: ["Nike Promina", "Skechers GO WALK 7"],
    compareThisProduct: "Compare cushioning structure, weight and intended activity."
  },

  // 79
  {
    id: "reebok-classic-leather",
    name: "Reebok Classic Leather",
    brand: "Reebok",
    category: "Footwear",
    image: "",
    description: "Low-profile heritage sneaker with a clean classic leather look.",
    overview: "Classic Leather has been a core Reebok lifestyle silhouette since the early 1980s.",
    keyFeatures: [
      "Low-profile shape",
      "Leather upper on classic versions",
      "Foam-covered sockliner",
      "Two-piece midsole",
      "Rubber outsole"
    ],
    material: "Leather or synthetic upper depending on edition, with textile and rubber components.",
    sizeVariants: "Multiple adult sizes and colorways.",
    merits: [
      "Simple timeless styling",
      "Easy casual wear",
      "Strong heritage"
    ],
    demerits: [
      "Limited performance use",
      "Leather versions need care"
    ],
    bestFor: "Casual everyday wear.",
    thingsToConsider: "Check whether the chosen version uses leather or synthetic materials.",
    similarProducts: ["Reebok Club C 85", "adidas Stan Smith"],
    compareThisProduct: "Compare upper material, sole profile and visual simplicity."
  },

  // 80
  {
    id: "skechers-dlites-4",
    name: "Skechers D'Lites 4",
    brand: "Skechers",
    category: "Footwear",
    image: "",
    description: "Chunky everyday sneaker featuring cushioned comfort and retro styling.",
    overview: "D'Lites 4 continues the chunky D'Lites shape with a comfort-focused casual construction.",
    keyFeatures: [
      "Air-Cooled Memory Foam on relevant versions",
      "Chunky sole",
      "Lace-up construction",
      "Low-top profile",
      "Flexible rubber outsole"
    ],
    material: "Leather, synthetic and textile versions are available depending on the release.",
    sizeVariants: "Adult casual sizes and multiple colorways.",
    merits: [
      "Cushioned casual feel",
      "Strong chunky aesthetic",
      "Everyday versatility"
    ],
    demerits: [
      "Bulky appearance",
      "Not intended for serious running"
    ],
    bestFor: "Casual wear and everyday walking.",
    thingsToConsider: "Check exact upper material and sole thickness.",
    similarProducts: ["Skechers D'Lites", "Skechers Uno"],
    compareThisProduct: "Compare sole volume, cushioning and upper construction."
  },

  // 81
  {
    id: "nike-air-max-1",
    name: "Nike Air Max 1",
    brand: "Nike",
    category: "Footwear",
    image: "",
    description: "Foundational Air Max lifestyle sneaker featuring visible heel Air cushioning.",
    overview: "Air Max 1 introduced visible Air to the line and remains a major lifestyle silhouette.",
    keyFeatures: [
      "Visible heel Air",
      "Waffle-inspired outsole",
      "Foam midsole",
      "Padded low collar",
      "Layered upper"
    ],
    material: "Common versions combine mesh, leather, suede or synthetic overlays.",
    sizeVariants: "Multiple adult sizes and numerous seasonal editions.",
    merits: [
      "Strong heritage",
      "Versatile profile",
      "Visible cushioning"
    ],
    demerits: [
      "Not a modern performance runner",
      "Mixed materials need care"
    ],
    bestFor: "Lifestyle wear and casual streetwear.",
    thingsToConsider: "Check the exact material mix of the release.",
    similarProducts: ["Nike Air Max 90", "Nike Air Max 95"],
    compareThisProduct: "Compare Air unit placement, upper layers and outsole style."
  },

  // 82
  {
    id: "adidas-stan-smith",
    name: "adidas Stan Smith",
    brand: "adidas",
    category: "Footwear",
    image: "",
    description: "Minimalist tennis-inspired sneaker with a clean low-profile design.",
    overview: "Stan Smith uses a simple tennis-derived shape and understated three-stripe perforation.",
    keyFeatures: [
      "Minimal low-top shape",
      "Perforated three stripes",
      "Clean heel tab",
      "Flat-looking outsole",
      "Lace closure"
    ],
    material: "Leather, synthetic or recycled-content materials vary by edition.",
    sizeVariants: "Multiple adult sizes and different versions.",
    merits: [
      "Minimalist styling",
      "Easy to coordinate",
      "Strong tennis heritage"
    ],
    demerits: [
      "Limited technical cushioning",
      "Clean upper can show marks quickly"
    ],
    bestFor: "Minimal casual outfits and everyday wear.",
    thingsToConsider: "Check the exact upper material because newer editions differ.",
    similarProducts: ["Reebok Classic Leather", "Reebok Club C 85"],
    compareThisProduct: "Compare minimal styling, upper material and sole profile."
  },

  // 83 REPLACEMENT
  {
    id: "hoka-mach-6",
    name: "HOKA Mach 6",
    brand: "HOKA",
    category: "Footwear",
    image: "",
    description: "Lightweight road-running shoe built for quick everyday runs and faster efforts.",
    overview: "Mach 6 is positioned as a versatile performance trainer with a lighter, faster character than HOKA's max-cushion models.",
    keyFeatures: [
      "Lightweight-oriented build",
      "Responsive foam cushioning",
      "Rocker-style geometry",
      "Breathable upper",
      "Road traction"
    ],
    material: "Engineered textile upper with foam midsole and rubber outsole sections.",
    sizeVariants: "Adult running sizes with men's and women's versions.",
    merits: [
      "Suitable for faster training",
      "Lighter feel",
      "Versatile road use"
    ],
    demerits: [
      "Less plush than max-cushion HOKA models",
      "Speed-oriented geometry may not suit every walker"
    ],
    bestFor: "Daily runs, tempo work and faster road sessions.",
    thingsToConsider: "Compare cushioning softness with Clifton or Bondi models.",
    similarProducts: ["Saucony Endorphin Speed 4", "adidas Adizero Boston 13"],
    compareThisProduct: "Compare weight, responsiveness and speed-training role."
  },

  // 84
  {
    id: "asics-gel-quantum-180",
    name: "ASICS GEL-QUANTUM 180",
    brand: "ASICS",
    category: "Footwear",
    image: "",
    description: "Lifestyle sneaker combining sporty styling with GEL cushioning elements.",
    overview: "GEL-QUANTUM 180 uses ASICS performance-inspired design language for everyday lifestyle use.",
    keyFeatures: [
      "GEL cushioning heritage",
      "Sport-inspired upper",
      "Layered construction",
      "Low-top profile",
      "Rubber outsole"
    ],
    material: "Mesh or textile upper with synthetic overlays and rubber outsole.",
    sizeVariants: "Adult lifestyle sizes with multiple colorways.",
    merits: [
      "Sporty visual design",
      "Casual versatility",
      "ASICS cushioning heritage"
    ],
    demerits: [
      "Not a technical running shoe",
      "Layered upper needs care"
    ],
    bestFor: "Casual wear and everyday walking.",
    thingsToConsider: "Choose based on lifestyle fit rather than performance expectations.",
    similarProducts: ["ASICS GEL-NYC", "ASICS GEL-1130"],
    compareThisProduct: "Compare upper complexity, cushioning and lifestyle silhouette."
  },

  // 85
  {
    id: "skechers-arch-fit",
    name: "Skechers Arch Fit",
    brand: "Skechers",
    category: "Footwear",
    image: "",
    description: "Comfort-focused walking shoe built around the Arch Fit insole system.",
    overview: "Arch Fit models are designed around an insole system intended to provide structured arch support for walking.",
    keyFeatures: [
      "Arch Fit insole system",
      "Removable insole on relevant models",
      "Engineered mesh or knit options",
      "Walking-focused cushioning",
      "Flexible traction outsole"
    ],
    material: "Mesh, knit, synthetic or mixed upper materials depending on the version.",
    sizeVariants: "Adult sizes with different fits and widths depending on market.",
    merits: [
      "Walking-focused design",
      "Structured insole system",
      "Multiple upper options"
    ],
    demerits: [
      "Not intended as a race shoe",
      "Arch feel is personal and fit-dependent"
    ],
    bestFor: "Everyday walking and comfort-focused casual use.",
    thingsToConsider: "Check the exact Arch Fit model and fit before choosing.",
    similarProducts: ["Skechers GO WALK 7", "Nike Promina"],
    compareThisProduct: "Compare insole design, flexibility and walking purpose."
  },

  // 86
  {
    id: "reebok-nano-x5",
    name: "Reebok Nano X5",
    brand: "Reebok",
    category: "Footwear",
    image: "",
    description: "Cross-training shoe designed to balance stable support with forefoot flexibility.",
    overview: "Nano X5 is built for mixed training movements including gym, conditioning and strength work.",
    keyFeatures: [
      "Dual-response EVA cushioning",
      "Stable heel area",
      "Flexible forefoot",
      "Grippy rubber outsole",
      "Breathable upper"
    ],
    material: "Textile or mesh upper with EVA-based cushioning and rubber outsole.",
    sizeVariants: "Adult training sizes in several colorways.",
    merits: [
      "Versatile training role",
      "Stable heel",
      "Flexible front section"
    ],
    demerits: [
      "Not optimized for long-distance running",
      "Training geometry may feel firm for casual wear"
    ],
    bestFor: "Gym training, strength sessions and cross-training.",
    thingsToConsider: "Choose a running shoe for consistent road mileage.",
    similarProducts: ["Nike Free Metcon 7", "Reebok Nano X5"],
    compareThisProduct: "Compare heel stability, forefoot flexibility and training use."
  },

  // 87
  {
    id: "hoka-bondi-9",
    name: "HOKA Bondi 9",
    brand: "HOKA",
    category: "Footwear",
    image: "",
    description: "Max-cushioned road-running model designed for comfortable daily use.",
    overview: "Bondi 9 sits at the plush end of HOKA's road-running range, emphasizing underfoot cushioning.",
    keyFeatures: [
      "Max-cushion design",
      "Rocker-style geometry",
      "High-profile midsole",
      "Breathable upper",
      "Road rubber outsole"
    ],
    material: "Textile upper with substantial foam midsole and rubber outsole sections.",
    sizeVariants: "Adult sizes in men's and women's versions.",
    merits: [
      "Strong cushioning focus",
      "Suitable for easy mileage",
      "Comfortable walking role"
    ],
    demerits: [
      "Large sole profile",
      "Less suited to lightweight speed work"
    ],
    bestFor: "Comfort-focused running, walking and long easy outings.",
    thingsToConsider: "Compare the high stack with lower-profile trainers.",
    similarProducts: ["ASICS GEL-NIMBUS 27", "Nike Vomero Plus"],
    compareThisProduct: "Compare cushioning level, stack height and running pace focus."
  },

  // 88
  {
    id: "puma-future-rider",
    name: "PUMA Future Rider",
    brand: "PUMA",
    category: "Footwear",
    image: "",
    description: "Retro-inspired lifestyle runner with a vintage casual look.",
    overview: "Future Rider uses a retro runner silhouette adapted for everyday streetwear.",
    keyFeatures: [
      "Retro runner profile",
      "Low-top shape",
      "Textured outsole",
      "Cushioned midsole",
      "Layered upper"
    ],
    material: "Textile, suede or synthetic panels depending on the edition.",
    sizeVariants: "Adult lifestyle sizes with various colorways.",
    merits: [
      "Vintage styling",
      "Casual versatility",
      "Distinctive outsole shape"
    ],
    demerits: [
      "Not intended for technical running",
      "Material mix needs care"
    ],
    bestFor: "Casual wear and retro outfits.",
    thingsToConsider: "Check upper materials and preferred level of cushioning.",
    similarProducts: ["PUMA Easy Rider", "New Balance 327"],
    compareThisProduct: "Compare silhouette, upper materials and retro character."
  },

  // 89 REPLACEMENT
  {
    id: "saucony-endorphin-speed-4",
    name: "Saucony Endorphin Speed 4",
    brand: "Saucony",
    category: "Footwear",
    image: "",
    description: "Versatile performance trainer designed for speed sessions and daily running.",
    overview: "Endorphin Speed 4 sits between ordinary daily trainers and dedicated race shoes, making it suited to faster training.",
    keyFeatures: [
      "Performance-oriented foam",
      "Speed-focused geometry",
      "Supportive upper",
      "Road traction",
      "Flexible performance platform"
    ],
    material: "Engineered mesh or textile upper with performance foam and rubber outsole.",
    sizeVariants: "Adult performance-running sizes.",
    merits: [
      "Useful for speed training",
      "Can cover multiple running sessions",
      "Performance-oriented platform"
    ],
    demerits: [
      "More specialized than comfort-first trainers",
      "Fast geometry may not suit casual walking"
    ],
    bestFor: "Tempo runs, intervals and faster road training.",
    thingsToConsider: "Compare with a softer daily trainer for easy mileage.",
    similarProducts: ["adidas Adizero Boston 13", "PUMA Deviate NITRO 3"],
    compareThisProduct: "Compare speed geometry, cushioning response and training versatility."
  },

  // 90 REPLACEMENT
  {
    id: "new-balance-fresh-foam-x-880v15",
    name: "New Balance Fresh Foam X 880v15",
    brand: "New Balance",
    category: "Footwear",
    image: "",
    description: "Cushioned neutral road runner designed for everyday runs and long runs.",
    overview: "Fresh Foam X 880v15 is designed as a dependable everyday road trainer with soft Fresh Foam X cushioning.",
    keyFeatures: [
      "Fresh Foam X midsole",
      "Structured breathable upper",
      "Neutral support",
      "Traditional lace closure",
      "Road outsole"
    ],
    material: "Structured engineered mesh or synthetic upper with Fresh Foam X cushioning and rubber outsole.",
    sizeVariants: "Available in many adult sizes and multiple widths depending on market.",
    merits: [
      "Daily-training versatility",
      "Soft cushioning",
      "Multiple width options in some markets"
    ],
    demerits: [
      "Less race-focused",
      "Soft ride may not suit every runner"
    ],
    bestFor: "Everyday running and long road runs.",
    thingsToConsider: "Width availability is useful when standard fits are not enough.",
    similarProducts: ["Brooks Ghost 17", "New Balance Fresh Foam X 1080v14"],
    compareThisProduct: "Compare cushioning softness, width options and daily-run role."
  },

  // 91
  {
    id: "nike-structure-26",
    name: "Nike Structure 26",
    brand: "Nike",
    category: "Footwear",
    image: "",
    description: "Supportive road-running shoe designed for stable daily training.",
    overview: "Structure 26 uses a support-focused geometry alongside ReactX cushioning for regular road running.",
    keyFeatures: [
      "Full-length ReactX cushioning",
      "Midfoot support",
      "Engineered mesh",
      "Road traction",
      "10 mm-class drop depending on version"
    ],
    material: "Engineered mesh upper with foam cushioning and rubber outsole components.",
    sizeVariants: "Adult road-running sizes in men's and women's versions.",
    merits: [
      "Support-oriented build",
      "Useful for daily runs",
      "Breathable upper"
    ],
    demerits: [
      "More structured than neutral trainers",
      "Not aimed at racing speed"
    ],
    bestFor: "Support-oriented daily road running.",
    thingsToConsider: "Compare with neutral trainers if you prefer a less structured ride.",
    similarProducts: ["ASICS GT-2000 13", "Brooks Adrenaline GTS 25"],
    compareThisProduct: "Compare support geometry, cushioning and daily-training role."
  },

  // 92 REPLACEMENT
  {
    id: "asics-gel-cumulus-27",
    name: "ASICS GEL-CUMULUS 27",
    brand: "ASICS",
    category: "Footwear",
    image: "",
    description: "Neutral everyday running shoe with soft cushioning for regular road training.",
    overview: "GEL-CUMULUS 27 is a versatile daily trainer designed around comfortable neutral road running.",
    keyFeatures: [
      "FF BLAST PLUS cushioning",
      "PureGEL technology",
      "FLUIDRIDE outsole transition",
      "Engineered mesh upper",
      "Neutral running platform"
    ],
    material: "Engineered mesh upper with foam cushioning and rubber outsole components.",
    sizeVariants: "Adult running sizes with men's and women's versions; exact range depends on market.",
    merits: [
      "Balanced everyday trainer",
      "Soft but versatile cushioning",
      "Useful for regular road mileage"
    ],
    demerits: [
      "Not a specialized race shoe",
      "Neutral construction may not suit people seeking stability-focused shoes"
    ],
    bestFor: "Everyday road running and comfortable training.",
    thingsToConsider: "Compare neutral and stability options based on your needs.",
    similarProducts: ["Nike Pegasus 42", "New Balance Fresh Foam X 880v15"],
    compareThisProduct: "Compare cushioning, support type and everyday mileage purpose."
  },

  // 93 REPLACEMENT
  {
    id: "puma-foreverrun-nitro-2",
    name: "PUMA ForeverRun NITRO 2",
    brand: "PUMA",
    category: "Footwear",
    image: "",
    description: "Stability road-running shoe designed for supportive everyday cushioning.",
    overview: "ForeverRun NITRO 2 builds on PUMA's stability-running approach with cushioning and guidance features.",
    keyFeatures: [
      "NITROFOAM cushioning",
      "RUNGUIDE SYSTEM",
      "PUMAGRIP outsole",
      "Engineered mesh upper",
      "Support-oriented geometry"
    ],
    material: "Engineered textile or mesh upper with foam and rubber outsole components.",
    sizeVariants: "Adult running sizes, with fit and width offerings varying by market.",
    merits: [
      "Stability-focused design",
      "Road traction",
      "Suitable for regular training"
    ],
    demerits: [
      "More structured than neutral trainers",
      "Not intended as a race-day specialist"
    ],
    bestFor: "Support-oriented everyday road running.",
    thingsToConsider: "Compare stability requirements with neutral trainers before choosing.",
    similarProducts: ["PUMA ForeverRun NITRO", "ASICS GEL-KAYANO 32"],
    compareThisProduct: "Compare guidance system, cushioning and stability."
  },

  // 94 REPLACEMENT
  {
    id: "under-armour-hovr-infinite-6",
    name: "Under Armour HOVR Infinite 6",
    brand: "Under Armour",
    category: "Footwear",
    image: "",
    description: "Cushioned road-running shoe designed for regular training and mileage.",
    overview: "HOVR Infinite 6 is built as an everyday road-running option centered on HOVR cushioning.",
    keyFeatures: [
      "HOVR cushioning",
      "Road-running platform",
      "Breathable upper",
      "Traditional lace system",
      "Rubber traction outsole"
    ],
    material: "Textile or mesh upper with foam/HOVR cushioning and rubber outsole.",
    sizeVariants: "Adult running sizes with colorway variations.",
    merits: [
      "Daily-running focus",
      "Cushioned platform",
      "Useful for regular road miles"
    ],
    demerits: [
      "Less specialized for racing",
      "Not intended for technical trails"
    ],
    bestFor: "Everyday road running and training.",
    thingsToConsider: "Compare the cushioning feel with other daily trainers before choosing.",
    similarProducts: ["Brooks Ghost 17", "New Balance Fresh Foam X 880v15"],
    compareThisProduct: "Compare cushioning, support and daily mileage role."
  },

  // 95 REPLACEMENT
  {
    id: "mizuno-wave-rider-29",
    name: "Mizuno Wave Rider 29",
    brand: "Mizuno",
    category: "Footwear",
    image: "",
    description: "Neutral daily running shoe designed for smooth road-running comfort.",
    overview: "Wave Rider 29 continues Mizuno's long-running neutral road-training line with a balance of cushioning and response.",
    keyFeatures: [
      "Wave cushioning platform",
      "Neutral running geometry",
      "Breathable upper",
      "Road rubber outsole",
      "Traditional lace closure"
    ],
    material: "Engineered textile or mesh upper with foam cushioning and rubber outsole.",
    sizeVariants: "Adult road-running sizes with men's and women's versions.",
    merits: [
      "Established daily-trainer role",
      "Balanced feel",
      "Versatile road use"
    ],
    demerits: [
      "Less specialized for racing",
      "Ride preference varies between runners"
    ],
    bestFor: "Daily road running and training.",
    thingsToConsider: "Compare cushioning character with other neutral trainers.",
    similarProducts: ["Nike Pegasus 42", "ASICS GEL-CUMULUS 27"],
    compareThisProduct: "Compare cushioning response, stability and training versatility."
  },

  // 96
  {
    id: "skechers-go-run-razor-5",
    name: "Skechers GO RUN Razor 5",
    brand: "Skechers",
    category: "Footwear",
    image: "",
    description: "Lightweight performance running shoe designed for faster running.",
    overview: "GO RUN Razor 5 is positioned as a performance-oriented road shoe for runners seeking a faster feel.",
    keyFeatures: [
      "HYPER BURST PRO cushioning",
      "HYPER ARC geometry",
      "Carbon-infused plate",
      "Goodyear rubber outsole",
      "Engineered mesh"
    ],
    material: "Engineered mesh upper with performance foam and rubber outsole.",
    sizeVariants: "Adult performance-running sizes.",
    merits: [
      "Lightweight performance focus",
      "Fast-running orientation",
      "High-grip outsole"
    ],
    demerits: [
      "Less suitable for casual walking",
      "Performance geometry may feel specialized"
    ],
    bestFor: "Fast road running and performance training.",
    thingsToConsider: "Compare plate feel with non-plated trainers.",
    similarProducts: ["Saucony Endorphin Speed 4", "adidas Adizero Boston 13"],
    compareThisProduct: "Compare plate assistance, cushioning response and speed focus."
  },

  // 97
  {
    id: "brooks-adrenaline-gts-25",
    name: "Brooks Adrenaline GTS 25",
    brand: "Brooks",
    category: "Footwear",
    image: "",
    description: "Support-focused road-running shoe built for everyday training.",
    overview: "Adrenaline GTS 25 is designed around supportive daily road running with a structured guidance approach.",
    keyFeatures: [
      "GuideRails support concept",
      "Road-running cushioning",
      "Breathable upper",
      "Traditional lace closure",
      "Rubber outsole"
    ],
    material: "Textile or mesh upper with foam cushioning and rubber outsole.",
    sizeVariants: "Adult sizes with multiple widths depending on market.",
    merits: [
      "Supportive daily design",
      "Suitable for regular training",
      "Width choices in some markets"
    ],
    demerits: [
      "More structured than neutral trainers",
      "Not designed for race-specific speed"
    ],
    bestFor: "Support-oriented daily road running.",
    thingsToConsider: "Compare its guidance system with other stability trainers.",
    similarProducts: ["ASICS GEL-KAYANO 32", "Nike Structure 26"],
    compareThisProduct: "Compare support systems, cushioning and fit options."
  },

  // 98 REPLACEMENT
  {
    id: "salomon-xt-6",
    name: "Salomon XT-6",
    brand: "Salomon",
    category: "Footwear",
    image: "",
    description: "Trail-inspired technical lifestyle shoe with a rugged outdoor design.",
    overview: "XT-6 originated in Salomon's trail-oriented footwear family and is widely used today as a technical lifestyle shoe.",
    keyFeatures: [
      "Trail-inspired construction",
      "Technical lace system on relevant versions",
      "Protective upper elements",
      "Aggressive-looking outsole",
      "Outdoor-oriented platform"
    ],
    material: "Mesh or textile upper with synthetic reinforcement and rubber outsole.",
    sizeVariants: "Adult lifestyle sizes and multiple colorways.",
    merits: [
      "Strong outdoor aesthetic",
      "Distinctive technical design",
      "Suitable for casual outdoor use"
    ],
    demerits: [
      "More specialized than simple sneakers",
      "Outsole profile is more technical-looking"
    ],
    bestFor: "Outdoor-inspired lifestyle wear and casual trail environments.",
    thingsToConsider: "Choose based on terrain and fit rather than appearance alone.",
    similarProducts: ["ASICS TRABUCO MAX 4", "PUMA Speedcat OG"],
    compareThisProduct: "Compare outsole character, upper protection and outdoor orientation."
  },

  // 99
  {
    id: "asics-dynablast-6",
    name: "ASICS DYNABLAST 6",
    brand: "ASICS",
    category: "Footwear",
    image: "",
    description: "Daily running shoe designed around responsive cushioning and easy movement.",
    overview: "DYNABLAST 6 is positioned as a versatile road trainer with an energetic cushioning feel.",
    keyFeatures: [
      "Responsive foam platform",
      "Road-running geometry",
      "Breathable upper",
      "Flexible forefoot",
      "Rubber outsole"
    ],
    material: "Textile or mesh upper with foam cushioning and rubber outsole.",
    sizeVariants: "Adult running sizes and multiple colorways.",
    merits: [
      "Useful everyday trainer",
      "Responsive cushioning",
      "Flexible running feel"
    ],
    demerits: [
      "Less protective than max-cushion trainers",
      "Not designed for technical trails"
    ],
    bestFor: "Daily road running and light training sessions.",
    thingsToConsider: "Compare cushioning amount with GEL-NIMBUS or Bondi-style models.",
    similarProducts: ["ASICS NOVABLAST 5", "PUMA Velocity NITRO 3"],
    compareThisProduct: "Compare responsiveness, cushioning depth and daily use."
  },

  // 100
  {
    id: "adidas-adizero-adios-pro-4",
    name: "adidas Adizero Adios Pro 4",
    brand: "adidas",
    category: "Footwear",
    image: "",
    description: "High-performance road-racing shoe designed for fast marathon-focused running.",
    overview: "Adios Pro 4 is built for high-level road racing with a highly performance-oriented construction.",
    keyFeatures: [
      "Race-focused geometry",
      "Energy-return cushioning",
      "ENERGYRODS concept",
      "Lightweight upper",
      "High-grip racing outsole"
    ],
    material: "Lightweight textile or mesh upper with performance foam and rubber outsole.",
    sizeVariants: "Adult performance-running sizes.",
    merits: [
      "Purpose-built for racing",
      "Fast-running orientation",
      "Advanced performance platform"
    ],
    demerits: [
      "Specialized rather than versatile",
      "Race geometry may not suit easy walking"
    ],
    bestFor: "Road racing and high-speed running.",
    thingsToConsider: "Compare with training shoes before using it for everyday mileage.",
    similarProducts: ["adidas Adizero Boston 13", "Nike Pegasus Premium"],
    compareThisProduct: "Compare racing geometry, cushioning response and training versatility."
  }
];

/* =========================================================
   DATABASE SAFETY CHECKS
   ========================================================= */

const normalizedNames = products.map(product =>
  product.name.trim().toLowerCase()
);

const uniqueNames = new Set(normalizedNames);

if (products.length !== 100) {
  throw new Error(
    `you knoowww requires exactly 100 products. Found ${products.length}.`
  );
}

if (uniqueNames.size !== 100) {
  const duplicates = normalizedNames.filter(
    (name, index) => normalizedNames.indexOf(name) !== index
  );

  throw new Error(
    `Duplicate product found: ${[...new Set(duplicates)].join(", ")}`
  );
}

/* Make the database available to the other HTML pages */
window.products = products;
