import Home from "@/components/Home/Home";

// ─── SCHEMA MARKUP ────────────────────────────────────────────────────────────
// LocalBusiness + Service schemas for plumbing, electrical & woodwork
// Targets: "best plumbing repair Hyderabad", "electrical repair Hyderabad",
//          "woodwork Hyderabad", "home inspection Hyderabad"
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [

    // ── 1. LocalBusiness Schema ──────────────────────────────────────────────
    {
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": "https://hitquality.in/#business",
      name: "HitQuality Home Inspection",
      alternateName: "MyHomeCheckup",
      description:
        "Hyderabad's best certified home inspection company. Expert plumbing repair checks, electrical safety inspections, woodwork assessments & full property inspections with 100+ point checklists.",
      url: "https://hitquality.in",
      telephone: "+918019500400",
      email: "hitworkhub@gmail.com",
      foundingDate: "2022",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Hyderabad",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "17.3850",
        longitude: "78.4867",
      },
      areaServed: [
        { "@type": "City", name: "Hyderabad" },
        { "@type": "City", name: "Secunderabad" },
        { "@type": "Neighborhood", name: "Gachibowli" },
        { "@type": "Neighborhood", name: "Kondapur" },
        { "@type": "Neighborhood", name: "Banjara Hills" },
        { "@type": "Neighborhood", name: "Jubilee Hills" },
        { "@type": "Neighborhood", name: "Hitech City" },
        { "@type": "Neighborhood", name: "Madhapur" },
        { "@type": "Neighborhood", name: "Kukatpally" },
        { "@type": "Neighborhood", name: "Miyapur" },
        { "@type": "Neighborhood", name: "Manikonda" },
        { "@type": "Neighborhood", name: "Bachupally" },
        { "@type": "Neighborhood", name: "Kompally" },
        { "@type": "Neighborhood", name: "Nallagandla" },
      ],
      priceRange: "$$",
      image: "https://hitquality.in/images/Hero2.png",
      logo: "https://hitquality.in/images/WL2.png",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "500",
        bestRating: "5",
        worstRating: "1",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Home Inspection & Repair Check Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Complete Home Inspection Hyderabad",
              description: "100+ point comprehensive inspection covering civil, electrical, plumbing, structural and pest control checks in Hyderabad.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Plumbing Inspection & Repair Check Hyderabad",
              description: "Best plumbing repair inspection in Hyderabad. Faucets, drains, valves, water pressure, seepage & leakage detection by certified inspectors.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Electrical Inspection & Safety Check Hyderabad",
              description: "Best electrical repair inspection in Hyderabad. Sockets, wiring, earthing, panel safety, SLD verification & fault detection.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Woodwork Inspection Hyderabad",
              description: "Best woodwork inspection in Hyderabad. Cabinet quality, door & frame fits, hardware, finish quality checks by certified inspectors.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Seepage & Dampness Inspection Hyderabad",
              description: "Thermographic camera-assisted seepage, dampness and water leakage detection in Hyderabad homes.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Pre-Handover Inspection Hyderabad",
              description: "Inspection before builder handover to verify all specifications, RERA area compliance, and workmanship quality.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Resale Home Inspection Hyderabad",
              description: "Detailed property assessment for resale homes in Hyderabad to uncover hidden defects before purchase.",
            },
          },
        ],
      },
    },

    // ── 2. Service Schema — Plumbing ─────────────────────────────────────────
    // Targets: "best plumbing repair in Hyderabad", "plumbing near me Hyderabad"
    {
      "@type": "Service",
      "@id": "https://hitquality.in/#plumbing-service",
      name: "Best Plumbing Repair Inspection in Hyderabad",
      alternateName: "Plumbing Check Hyderabad",
      description:
        "Certified plumbing repair inspection in Hyderabad covering faucets, closets, drains, valves, water pressure, seepage detection and leakage checks using moisture meters and thermographic cameras.",
      provider: { "@id": "https://hitquality.in/#business" },
      areaServed: { "@type": "City", name: "Hyderabad" },
      serviceType: "Plumbing Inspection",
      category: "Home Inspection",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        areaServed: "Hyderabad, Telangana, India",
        url: "https://hitquality.in/#all-services",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Plumbing Inspection Checks",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Faucet & Fixture Inspection" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drain Flow & Blockage Check" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Water Pressure Testing" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pipe Leakage Detection" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Seepage & Dampness Scan" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Valve & Guard Inspection" } },
        ],
      },
    },

    // ── 3. Service Schema — Electrical ───────────────────────────────────────
    // Targets: "best electrical repair in Hyderabad", "electrical services near me"
    {
      "@type": "Service",
      "@id": "https://hitquality.in/#electrical-service",
      name: "Best Electrical Repair Inspection in Hyderabad",
      alternateName: "Electrical Safety Check Hyderabad",
      description:
        "Certified electrical repair inspection in Hyderabad. Covers sockets, switches, earthing, load distribution, SLD verification, panel checks and electrical fault detection for home safety compliance.",
      provider: { "@id": "https://hitquality.in/#business" },
      areaServed: { "@type": "City", name: "Hyderabad" },
      serviceType: "Electrical Inspection",
      category: "Home Inspection",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        areaServed: "Hyderabad, Telangana, India",
        url: "https://hitquality.in/#all-services",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Electrical Inspection Checks",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Socket & Switch Testing" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Earthing & Grounding Check" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "SLD Verification" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Panel & MCB Inspection" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Load Distribution Analysis" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electrical Fault Detection" } },
        ],
      },
    },

    // ── 4. Service Schema — Woodwork ─────────────────────────────────────────
    // Targets: "best woodwork in Hyderabad", "woodwork services near me Hyderabad"
    {
      "@type": "Service",
      "@id": "https://hitquality.in/#woodwork-service",
      name: "Best Woodwork Inspection in Hyderabad",
      alternateName: "Woodwork Quality Check Hyderabad",
      description:
        "Certified woodwork inspection in Hyderabad. Covers cabinet quality, cupboard finish, door & frame alignment, hardware durability, surface finish quality checks before possession.",
      provider: { "@id": "https://hitquality.in/#business" },
      areaServed: { "@type": "City", name: "Hyderabad" },
      serviceType: "Woodwork Inspection",
      category: "Home Inspection",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        areaServed: "Hyderabad, Telangana, India",
        url: "https://hitquality.in/#all-services",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Woodwork Inspection Checks",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cabinet & Cupboard Quality Check" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Door & Frame Alignment Check" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hardware Durability Inspection" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wood Finish Quality Assessment" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wardrobe & Joinery Inspection" } },
        ],
      },
    },

    // ── 5. FAQ Schema ─────────────────────────────────────────────────────────
    // Captures featured snippet / People Also Ask positions on Google
    {
      "@type": "FAQPage",
      "@id": "https://hitquality.in/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the best home inspection service in Hyderabad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HitQuality is Hyderabad's #1 certified home inspection service, offering 100+ point inspections covering plumbing, electrical, woodwork, civil, structural, and pest control checks with detailed digital reports.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I get the best plumbing repair inspection in Hyderabad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HitQuality provides the best plumbing repair inspection in Hyderabad, covering faucets, drains, valves, seepage detection, water pressure tests and pipe leakage checks using advanced moisture meters and thermal cameras.",
          },
        },
        {
          "@type": "Question",
          name: "Who offers the best electrical repair inspection in Hyderabad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HitQuality offers certified electrical repair inspections in Hyderabad, checking sockets, wiring, earthing, SLD verification, panel safety and fault detection before you take possession of your home.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find the best woodwork inspection in Hyderabad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HitQuality provides the best woodwork inspection in Hyderabad, assessing cabinet quality, door & frame fits, hardware durability and finish quality to ensure your builder delivered what was promised.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a home inspection cost in Hyderabad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HitQuality offers competitive home inspection pricing in Hyderabad based on property size and scope. Contact us at +918019500400 or book a free consultation via our website to get a custom quote.",
          },
        },
        {
          "@type": "Question",
          name: "What areas in Hyderabad do you cover for home inspection?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HitQuality covers all major areas in Hyderabad including Gachibowli, Kondapur, Banjara Hills, Jubilee Hills, Hitech City, Madhapur, Kukatpally, Miyapur, Manikonda, Bachupally, Kompally and Secunderabad.",
          },
        },
      ],
    },

    // ── 6. WebSite Schema ─────────────────────────────────────────────────────
    {
      "@type": "WebSite",
      "@id": "https://hitquality.in/#website",
      url: "https://hitquality.in",
      name: "HitQuality Home Inspection Hyderabad",
      description:
        "Best home inspection, plumbing repair checks, electrical inspections & woodwork assessments in Hyderabad.",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://hitquality.in/?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

const HomePage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Home />
    </>
  );
};

export default HomePage;
