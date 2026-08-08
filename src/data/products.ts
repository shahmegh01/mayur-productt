export type Product = {
  id: number;
  name: string;
  category: string;
  gradient: string;
  image: string;
  description: string;
  features: string[];
  packs: { size: string }[];
};

export const CATEGORIES = [
  "All", "Glass", "Bathroom", "Personal Care", "Laundry", "Floor Care", "Kitchen"
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Mayur Glass Cleaner",
    category: "Glass",
    gradient: "from-cyan-400 to-sky-600",
    image: "/products/glass-cleaner.jpg",
    description: "Premium 10x formula glass cleaner that leaves windows, mirrors and glass surfaces spotlessly clean with zero streaks. Fast-drying spray that delivers crystal clear results every time.",
    features: ["10x Formulation — powerful streak-free action", "Works on glass, mirrors & windshields", "Fast drying, no residue left behind", "Safe for all glass surfaces"],
    packs: [{ size: "500ml" }, { size: "1L" }, { size: "5L" }],
  },
  {
    id: 2,
    name: "Mayur Bathroom Cleaner",
    category: "Bathroom",
    gradient: "from-rose-500 to-red-600",
    image: "/products/bathroom-cleaner.jpg",
    description: "Original premium bathroom cleaner with 5-action formula that kills 99% germs, removes tough stains, eliminates odour and leaves your bathroom fresh and hygienic.",
    features: ["5-Action Formula — kills 99% germs", "Removes tough stains & limescale", "Eliminates bad odour instantly", "Anti-fungal & anti-bacterial action"],
    packs: [{ size: "500ml" }, { size: "1L" }, { size: "5L" }],
  },
  {
    id: 3,
    name: "Mayur Hand Wash",
    category: "Personal Care",
    gradient: "from-blue-400 to-indigo-600",
    image: "/products/handwash.jpg",
    description: "Premium organic hand wash with 100% moisturizing ingredients. Available in multiple fragrances — keeps hands clean, soft and healthy with every wash.",
    features: ["Organic ingredients — gentle on skin", "100% moisturizing formula", "Available in 4 fresh fragrances", "pH balanced for daily use"],
    packs: [{ size: "500ml" }, { size: "1L" }, { size: "5L" }],
  },
  {
    id: 4,
    name: "Mayur Liquid Detergent",
    category: "Laundry",
    gradient: "from-sky-500 to-blue-700",
    image: "/products/liquid-detergent.jpg",
    description: "Clean Touch Wash — premium liquid detergent with fresh fragrance. 99% clean cloth formula compatible with both top load and front load washing machines.",
    features: ["99% clean cloth guarantee", "Works on Top Load & Front Load machines", "Fresh long-lasting fragrance", "Gentle on fabric, tough on stains"],
    packs: [{ size: "500ml" }, { size: "1L" }, { size: "5L" }],
  },
  {
    id: 5,
    name: "Mayur Floor Cleaner (Conc.)",
    category: "Floor Care",
    gradient: "from-green-500 to-emerald-700",
    image: "/products/floor-cleaner.jpg",
    description: "Extra strong concentrated floor cleaner with powerful deodorizer (Phenyle). Removes bad smell instantly and cleans deeply. Best for homes, hospitals and offices.",
    features: ["Extra strong concentrate formula", "Powerful deodorizer — removes bad smell", "Best for home, hospital & office use", "Hard fresh & fast fragrance action"],
    packs: [{ size: "500ml" }, { size: "1L" }, { size: "5L" }],
  },
  {
    id: 6,
    name: "Mayur Xpert Dish Wash",
    category: "Kitchen",
    gradient: "from-yellow-400 to-orange-500",
    image: "/products/dish-wash.jpg",
    description: "Mayur Xpert dish wash with Power of Lemon — cuts through grease and tough food residue effortlessly. Leaves utensils sparkling clean with a fresh lemon fragrance.",
    features: ["Power of Lemon — cuts grease instantly", "Removes tough food residue easily", "Leaves utensils sparkling clean", "Fresh lemon fragrance after every wash"],
    packs: [{ size: "500ml" }, { size: "1L" }, { size: "5L" }],
  },
];
