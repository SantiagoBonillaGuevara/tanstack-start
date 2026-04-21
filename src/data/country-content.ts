import type { CountryKey } from "./countries";

export interface Bullet {
  bold?: string;
  text: string;
}
export interface Section {
  title: string;
  intro?: string;
  bullets?: Bullet[];
}
export interface CountryContent {
  sections: Section[];
}

export const COUNTRY_CONTENT: Record<CountryKey, CountryContent> = {
  usa: {
    sections: [
      {
        title: "Market Overview",
        intro:
          "The goal is to solidify Juan Valdez's presence in the United States through an entry model based on cultural identity and premium quality. Unlike a mass-market entry focused solely on price, the brand will position itself as a superior product, leveraging the 'nostalgic connection' of the Latino community and the curiosity of local consumers.",
      },
      {
        title: "Retail and Distribution Strategy (Sales Channels)",
        intro:
          "To achieve effective but segmented national coverage, three large chains representing different consumer profiles have been selected:",
        bullets: [
          { bold: "Target", text: "Focus on the young and trendy segment (students and professionals), prioritizing design and brand experience." },
          { bold: "Publix", text: "A strategic channel to reach the family unit and the Latino community in the Southeast and Texas." },
          { bold: "Walmart", text: "A massive reach channel to ensure volume and national visibility." },
        ],
      },
      {
        title: "Shelf Investment (Slotting Fees)",
        bullets: [
          { text: "Minimize risks by initially entering with the 3–4 most successful SKUs (e.g., Volcano, Summit, Freeze-dried)." },
          { text: "Ensure eye-level locations in the specialty coffee section." },
        ],
      },
      {
        title: "Strategic Geographic Focus",
        intro: "The entry will be concentrated in geographic nodes with a high density of Colombian and Latin American population, acting as early adoption centers:",
        bullets: [
          { bold: "New York / New Jersey", text: "The main hub of the Colombian diaspora in the Northeast." },
          { bold: "Houston (Texas)", text: "Key logistics center with a high-income Latino community and high population growth." },
        ],
      },
      {
        title: "Segmentation and Product",
        bullets: [
          { bold: "University Segment", text: "Convenience and speed — freeze-dried coffee sticks, on-the-go formats, ready-to-drink coffee." },
          { bold: "Families Segment", text: "Tradition and home consumption — whole bean and ground coffee in 12oz packages and XL formats for warehouse clubs." },
        ],
      },
      {
        title: "Marketing & Communication — Cascading Ambassadors",
        bullets: [
          { bold: "Phase 1 (Nostalgia)", text: "Collaboration with Colombian content creators to mobilize the local community." },
          { bold: "Phase 2 (Expansion)", text: "Partnerships with Latino micro-influencers in the U.S. that integrate Juan Valdez into the American lifestyle." },
          { bold: "Ambassador Package", text: "A fixed program of public figures who represent the brand's values (sustainability and origin)." },
        ],
      },
      {
        title: "Strategic Pillars (Differentiators)",
        bullets: [
          { bold: "Price Positioning", text: "Maintain a premium/middle-high pricing structure to protect brand value and cover import operating costs." },
          { bold: "Sustainability", text: "Origin of the brand (owned by coffee growers) communicated as the central focus of social responsibility." },
          { bold: "Logistical Advantage", text: "Selected geographical points (especially Houston) as logistics bases to reduce delivery times." },
          { bold: "Legal Compliance", text: "Constant monitoring of FDA regulations and trade regulations to ensure a frictionless operation." },
        ],
      },
    ],
  },

  uk: {
    sections: [
      {
        title: "Strategic Vision: The Leap into the European Market",
        intro:
          "Unlike the mass distribution model in US retail, in the UK the brand will position itself through an experiential retail model. The aim is to compete in the specialty coffee segment, shifting the perception of coffee from a commodity to an accessible luxury experience with guaranteed origin.",
      },
      {
        title: "Business Model: Experience Stores and Franchises",
        bullets: [
          { bold: "Flagship Stores", text: "Opening our own stores in iconic locations in London (e.g., near Covent Garden or Soho) to set the brand standard." },
          { bold: "Franchise Model", text: "Expansion into other key cities (Manchester, Birmingham) under a scheme of local partners who understand British cultural management." },
          { bold: "Operational Glocalization", text: "Adapting the portfolio to the local palate, incorporating British pastry options and 'To-Go' formats while maintaining the Colombian DNA." },
        ],
      },
      {
        title: "Sustainability Pillar and Certifications",
        intro: "For British consumers, ethics are as important as taste.",
        bullets: [
          { bold: "High-Impact Certifications", text: "Implementation and active communication of B Corp and Rainforest Alliance, justifying the premium price for consumers who demand full traceability." },
          { bold: "Social Commitment", text: "Highlighting Juan Valdez's unique model where profits directly benefit coffee farmers, aligning with 'Fair Trade' trends highly valued in Europe." },
        ],
      },
      {
        title: "Product and Service Innovation",
        intro: "The focus is not just on the coffee beans, but on barista culture:",
        bullets: [
          { bold: "Specialized Training", text: "Baristas trained as 'Coffee Ambassadors', able to explain washing, drying processes and cup profiles from different regions of Colombia." },
          { bold: "Drinks by Trend", text: "A dynamic menu with seasonal drinks (nitrogenated cold brews, premium plant-based milk options)." },
        ],
      },
      {
        title: "Segmentation: Generation Z and Digital Nomads",
        bullets: [
          { bold: "Digital Infrastructure", text: "Stores designed as informal 'co-working' spaces, with high connectivity and an industrial-modern aesthetic that promotes organic content on social networks." },
          { bold: "Experiential Marketing (Coffee Parties)", text: "Pop-up events and private tastings that act both as marketing tools and as testing grounds for new products." },
        ],
      },
      {
        title: "Location and Demographic Focus",
        intro: "London is strategically divided to cover two fronts:",
        bullets: [
          { bold: "Nostalgia / Trust Niche", text: "Areas with high density of Latin and Colombian population (e.g., Elephant & Castle), validators of the product's authenticity." },
          { bold: "Status Niche", text: "Financial and tourist centers where the customer seeks a premium alternative to large traditional chains." },
        ],
      },
      {
        title: "Competitive Differentiation",
        bullets: [
          { bold: "Premium Pricing", text: "Low prices will not be the entry point. Value perceived through exclusivity of origin and quality of preparation." },
          { bold: "Logistical Advantage", text: "Direct supply chain from Colombia to guarantee freshness and avoid prolonged storage that degrades sensory profile." },
        ],
      },
    ],
  },

  korea: {
    sections: [
      {
        title: "Market Overview: The Asian Coffee Giant",
        intro:
          "South Korea represents one of Juan Valdez's most aggressive growth opportunities due to its very high consumption culture. The goal is to position itself as the benchmark for single-origin coffee in a market that consumes, on average, 405 cups per person per year, far exceeding the global average.",
      },
      {
        title: "Competitive Advantages and Legal Framework",
        bullets: [
          { bold: "Free Trade Agreement (FTA)", text: "Tariff benefits between Colombia and South Korea allow importing green and processed coffee at competitive costs, allowing reinvestment of that margin in marketing and expansion." },
          { bold: "Attracting Investors", text: "Designed to attract local capital (Venture Capital or Korean strategic partners) seeking to diversify into luxury brands with proven social impact." },
        ],
      },
      {
        title: "Market Penetration Strategy",
        intro: "A validation phase will be implemented before mass scaling:",
        bullets: [
          { bold: "Pilot Store (Concept Store)", text: "Opening of a flagship store to observe the Korean consumer, taste preferences (more acidic or chocolatey profiles) and in-store stay habits." },
          { bold: "Location in Seoul", text: "Areas balancing commercial and tourist traffic (e.g., Myeong-dong, Gangnam or Hongdae) for immediate visibility." },
          { bold: "Final Location Pending", text: "Geomarketing analysis to identify the exact point with the highest density of 'heavy users' of coffee." },
        ],
      },
      {
        title: "Consumer Segmentation and Behavior",
        bullets: [
          { bold: "Premium Mass Consumption", text: "High volume of cups; Korean customer willing to pay a premium for specialty coffee and 'third space' experiences." },
          { bold: "Technological Innovation", text: "Advanced digital payment systems and gamified loyalty programs, fundamental to Seoul's hyper-connected lifestyle." },
        ],
      },
      {
        title: "Operational and Marketing Pillars",
        bullets: [
          { bold: "Origin Marketing", text: "Use the figure of the coffee farmer and Colombian biodiversity as an exotic differentiator vs. local (Ediya Coffee) and global (Starbucks) chains." },
          { bold: "Menu Glocalization", text: "Innovative cold drinks and snacks/pastries that fuse Korean ingredients with Colombian coffee to generate curiosity." },
          { bold: "Logistics Efficiency", text: "Using the port of Busan as a gateway for agile distribution to the Seoul metropolitan area." },
        ],
      },
    ],
  },

  saudi: {
    sections: [
      {
        title: "Strategic Vision: Luxury and Arab Hospitality",
        intro:
          "The Saudi Arabian market will be approached with an ultra-premium concept. Given that coffee (Gahwa) is a symbol of generosity in their culture, Juan Valdez will be positioned not just as a beverage, but as a status symbol and a high-end sensory experience.",
      },
      {
        title: "Entry Model and Financial Structure",
        intro: "Unlike other markets, here the figure of the investor is the central focus:",
        bullets: [
          { bold: "Seeking Local Investors", text: "Lack of an FTA with Colombia requires local strategic partners to navigate tariff and bureaucratic barriers." },
          { bold: "Barrier Analysis", text: "In-depth study of import costs and local regulations (Halal certifications, Arabic labeling) to ensure profitability despite tariffs." },
          { bold: "Infrastructure Investment", text: "Capital used to create venues that compete with the most luxurious architecture in the world." },
        ],
      },
      {
        title: "Distribution Channels: Stores and Hypermarkets",
        bullets: [
          { bold: "Flagship Stores", text: "Located in luxury shopping malls in Riyadh and Jeddah, designed to offer a complete 'Premium Experience'." },
          { bold: "Luxury Hypermarkets", text: "Presence in high-level retail chains (Manuel Market, Tamimi Markets) through exclusive gondolas highlighting the history of Colombian coffee." },
        ],
      },
      {
        title: "Customer Experience: The Tasting Ritual",
        intro: "To differentiate the brand from fast-food chains, the Coffee Tasting concept will be implemented:",
        bullets: [
          { bold: "Origin Ritual", text: "Dedicated spaces within stores where customers learn to distinguish cup profiles from Huila, Santander, Sierra Nevada." },
          { bold: "Cultural Pairing", text: "Fusion of fine Colombian pastry with dates and local sweets to adapt the experience to the Saudi palate." },
        ],
      },
      {
        title: "Segmentation and Marketing",
        bullets: [
          { bold: "High Purchasing Power Target", text: "Consumer who values exclusivity, brand history and packaging design (gift formats)." },
          { bold: "Prestige Marketing", text: "Collaborations with local lifestyle and business influencers to position Juan Valdez as the coffee of choice for high-level meetings." },
          { bold: "Presence at Events", text: "Sponsorship of cultural and business events within Saudi Arabia's 'Vision 2030', associating the brand with progress and modernity." },
        ],
      },
      {
        title: "Competitive Differentiation",
        bullets: [
          { bold: "Origin Status", text: "While competitors mix beans from various countries, Juan Valdez sells the pride of being 100% Colombian origin coffee — a guarantee of quality that resonates with the Saudi consumer." },
          { bold: "Exceptional Service", text: "In-store hospitality emulating five-star hotel service, aligning with local expectations." },
        ],
      },
    ],
  },

  mexico: {
    sections: [
      {
        title: "Overview: Consolidation in a Sister Market",
        intro:
          "Mexico is a mature market with a growing coffee culture. Juan Valdez's goal is to position itself as the leading specialty coffee option, differentiating itself from local and global chains through the superior quality of Colombian coffee beans and the in-store experience.",
      },
      {
        title: "Competitive Advantages and Commercial Framework",
        bullets: [
          { bold: "Free Trade Agreement (FTA)", text: "Tariff preferences (Pacific Alliance / G3) allow importing coffee at reduced costs, facilitating a competitive price structure within the premium segment." },
          { bold: "Logistical Proximity", text: "Shorter transit times compared to markets in Asia or Europe, guaranteeing optimal product freshness." },
        ],
      },
      {
        title: "Presence Model: Flagship Stores in Mexico City",
        bullets: [
          { bold: "Flagship Store in Mexico City", text: "Locations in high-profile areas (Polanco, Reforma, Condesa) to attract both the executive and the lifestyle consumer." },
          { bold: "In-Store Experience", text: "Stores designed to encourage customers to linger, functioning as meeting points for the community." },
        ],
      },
      {
        title: "Marketing Strategy: Coffee Party and Community",
        intro: "Unlike other markets, in Mexico the aim is to create a social movement around the brand:",
        bullets: [
          { bold: "Coffee Parties for Colombians", text: "Events for the Colombian community residing in Mexico, who act as the brand's first advocates and attract the local audience through authenticity." },
          { bold: "Nostalgia and Pride Marketing", text: "Campaigns that highlight the brotherhood between both countries through the excellence of coffee." },
          { bold: "Brand Activations", text: "Tastings open to the public to educate about the difference between commercial coffee and Juan Valdez's selected origin coffee." },
        ],
      },
      {
        title: "Segmentation and Product",
        bullets: [
          { bold: "Urban Consumer", text: "Young professionals and students seeking a higher quality alternative to traditional options." },
          { bold: "Adapted Portfolio", text: "Freeze-dried formats and premium ground coffee for home consumption, taking advantage of the high purchase frequency in major cities." },
        ],
      },
      {
        title: "Differentiation and Operation",
        bullets: [
          { bold: "Personalized Service", text: "Warm and expert service model that reflects Colombian friendliness." },
          { bold: "Price Positioning", text: "Price reflecting the status of specialty coffee — avoiding price wars and focusing on the added value of the brand." },
        ],
      },
    ],
  },
};
