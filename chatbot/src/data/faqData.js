// FAQ Data and Knowledge Base
export const STOP_WORDS = new Set("the a an and or to of for on in my is it this that do i you we are be with at as by from your".split(" "));

export const KEYWORDS = {
  tracking: ["track", "tracking", "where is my order", "wismo", "shipment", "shipping status", "package", "parcel", "delivery status"],
  delivery_time: ["delivery", "shipping time", "arrive", "how long", "when will", "days", "shipping speed"],
  refund_time: ["refund", "money back", "return money", "how long refund", "credit", "reimbursement"],
  duties_taxes: ["duties", "taxes", "customs", "vat", "import fee", "tax", "duty"],
  order_change: ["edit order", "change size", "change color", "modify order", "update order"],
  cancel_order: ["cancel order", "cancel my order", "stop order", "cancel"],
  address_change: ["change address", "wrong address", "update address", "shipping address"],
  lost_damaged: ["lost", "damaged", "broken", "missing item", "didn't arrive", "not received"],
  shipping_countries: ["ship to", "do you ship", "country", "international", "worldwide"],
  shipping_updates: ["sms", "email updates", "notifications", "alerts"],
  delivery_options: ["delivery time window", "schedule", "pickup point", "collect"],
  local_pickup: ["local pickup", "store pickup", "pickup in store", "in-store pickup"],
  product_material: ["material", "fabric", "made of", "composition", "ingredients"],
  product_features: ["feature", "specs", "size", "dimensions", "measurements", "specifications"],
  stock: ["in stock", "out of stock", "restock", "available", "inventory"],
  discounts: ["discount", "coupon", "promo", "code", "sale", "deal"],
  size_guide: ["size", "fit", "measurement", "how big", "how small", "sizing"],
  warranty: ["warranty", "guarantee", "repair", "defect", "coverage"],
  gift_options: ["gift", "gift wrap", "gift message", "present", "gift card"],
  subscriptions: ["subscribe", "subscription", "repeat order", "recurring"],
  sustainability: ["sustainable", "recycled", "eco", "environment", "green"],
  support: ["support", "contact", "help", "agent", "customer service"],
  b2b: ["bulk", "corporate", "invoice", "vat", "business"],
  privacy: ["privacy", "data", "gdpr", "personal information"],
  security: ["secure", "encryption", "payment security", "safe"],
  returns: ["return", "exchange", "send back", "refund policy"],
  payment: ["payment", "pay", "billing", "charge", "card", "paypal"],
  account: ["account", "profile", "login", "sign up", "register"],
  reviews: ["review", "rating", "feedback", "testimonial"],
  shipping_methods: ["express", "standard", "overnight", "ground", "air"],
  product_care: ["care", "wash", "clean", "maintenance", "instructions"],
  sizing_chart: ["size chart", "measurements", "fit guide", "sizing guide"]
};

export const FAQ_DATA = [
  // Tracking & Shipping
  {
    id: 1,
    category: 'tracking',
    question: 'How do I track my order?',
    answer: 'After your order ships, you\'ll receive a tracking link via email. You can also use our Track Order page with your order number.',
    keywords: ['track', 'tracking', 'order status', 'shipment']
  },
  {
    id: 2,
    category: 'tracking',
    question: 'My tracking hasn\'t updated—what should I do?',
    answer: 'Tracking can take 24–48 hours to update after a scan. If there\'s no change after 3 business days, please contact our support team.',
    keywords: ['tracking update', 'no update', 'stuck', 'delayed']
  },
  {
    id: 3,
    category: 'delivery_time',
    question: 'How long does shipping take?',
    answer: 'Standard shipping takes 3–7 business days; Express shipping takes 1–3 business days. Exact delivery times are shown at checkout.',
    keywords: ['shipping time', 'delivery time', 'how long', 'arrive']
  },
  {
    id: 4,
    category: 'delivery_time',
    question: 'Can I get same-day delivery?',
    answer: 'Same-day delivery is available in select metropolitan areas. Check availability at checkout or contact support for your location.',
    keywords: ['same day', 'today', 'urgent', 'rush']
  },
  {
    id: 5,
    category: 'shipping_countries',
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship to most countries worldwide. Duties and taxes will be shown at checkout when available for your location.',
    keywords: ['international', 'worldwide', 'overseas', 'global']
  },

  // Returns & Refunds
  {
    id: 6,
    category: 'returns',
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy for unused items in original packaging. Returns are free within the US.',
    keywords: ['return policy', '30 days', 'unused', 'original packaging']
  },
  {
    id: 7,
    category: 'refund_time',
    question: 'How long do refunds take?',
    answer: 'Refunds are processed 3–5 business days after we receive and inspect your return. You\'ll receive an email confirmation.',
    keywords: ['refund time', 'money back', 'how long', 'processed']
  },
  {
    id: 8,
    category: 'returns',
    question: 'Can I exchange instead of refund?',
    answer: 'Yes, you can request an exchange during the returns process when stock allows. Exchanges are processed faster than refunds.',
    keywords: ['exchange', 'swap', 'different size', 'different color']
  },
  {
    id: 9,
    category: 'lost_damaged',
    question: 'My order arrived damaged—what do I do?',
    answer: 'Please send photos of the damage and your order number to support within 7 days. We\'ll replace the item or provide a full refund.',
    keywords: ['damaged', 'broken', 'photos', 'replace']
  },

  // Order Management
  {
    id: 10,
    category: 'cancel_order',
    question: 'Can I cancel my order?',
    answer: 'We can cancel orders before they\'re packed and shipped. If already shipped, you can start a return after delivery.',
    keywords: ['cancel', 'stop order', 'before shipping']
  },
  {
    id: 11,
    category: 'order_change',
    question: 'Can I change my shipping address after ordering?',
    answer: 'If your order hasn\'t shipped yet, contact support immediately. After shipping, carrier intercept may be possible for a fee.',
    keywords: ['change address', 'wrong address', 'update address']
  },
  {
    id: 12,
    category: 'order_change',
    question: 'Can I change the size or color of my order?',
    answer: 'Size and color changes are possible before shipping. Contact support with your order number and desired changes.',
    keywords: ['change size', 'change color', 'modify order']
  },

  // Product Information
  {
    id: 13,
    category: 'product_features',
    question: 'Where can I find product specifications?',
    answer: 'Product specs are listed in the "Details" section on each product page. Contact us if you need additional information.',
    keywords: ['specifications', 'details', 'features', 'specs']
  },
  {
    id: 14,
    category: 'product_material',
    question: 'What materials are your products made from?',
    answer: 'Material composition is clearly listed on each product page. We use high-quality, sustainable materials whenever possible.',
    keywords: ['materials', 'fabric', 'made of', 'composition']
  },
  {
    id: 15,
    category: 'size_guide',
    question: 'How do I find my size?',
    answer: 'Use our detailed size guide on the product page. Compare your measurements with our size chart for the best fit.',
    keywords: ['size guide', 'measurements', 'fit', 'sizing']
  },
  {
    id: 16,
    category: 'size_guide',
    question: 'Do your shoes run true to size?',
    answer: 'Most of our shoes run true to size. Any fit notes or sizing recommendations are clearly marked on the product page.',
    keywords: ['true to size', 'fit', 'shoes', 'sizing']
  },
  {
    id: 17,
    category: 'stock',
    question: 'When will an out-of-stock item be back?',
    answer: 'Click "Notify me" on the product page for restock alerts. Restock times vary by item and demand.',
    keywords: ['out of stock', 'restock', 'notify me', 'back in stock']
  },

  // Discounts & Promotions
  {
    id: 18,
    category: 'discounts',
    question: 'Do you have discount codes?',
    answer: 'We run promotions year-round! Check our site banner, subscribe to our newsletter, or follow us on social media for the latest deals.',
    keywords: ['discount', 'coupon', 'promo code', 'sale']
  },
  {
    id: 19,
    category: 'discounts',
    question: 'Do you offer student discounts?',
    answer: 'Yes! Students get 15% off with a valid student ID. Contact support to verify your student status and get your discount code.',
    keywords: ['student discount', 'student', '15% off', 'education']
  },

  // Payment & Billing
  {
    id: 20,
    category: 'payment',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, Apple Pay, Google Pay, and select buy-now-pay-later options.',
    keywords: ['payment methods', 'credit card', 'paypal', 'apple pay']
  },
  {
    id: 21,
    category: 'payment',
    question: 'Why was my card declined?',
    answer: 'Try another card or contact your bank. You can also use wallet payments like PayPal or Apple Pay as alternatives.',
    keywords: ['card declined', 'payment failed', 'try another card']
  },
  {
    id: 22,
    category: 'duties_taxes',
    question: 'Are duties and taxes included in the price?',
    answer: 'Depending on your country, duties and taxes may be collected at checkout or upon import. This will be clearly shown during checkout.',
    keywords: ['duties', 'taxes', 'included', 'import fees']
  },

  // Customer Service
  {
    id: 23,
    category: 'support',
    question: 'How can I contact customer support?',
    answer: 'You can reach us via live chat, email at support@company.com, or reply to any order email. We typically respond within 2 hours.',
    keywords: ['contact support', 'customer service', 'help', 'live chat']
  },
  {
    id: 24,
    category: 'support',
    question: 'What are your support hours?',
    answer: 'Our support team is available Monday-Friday 9 AM - 6 PM EST, and Saturday 10 AM - 4 PM EST. Live chat is available 24/7.',
    keywords: ['support hours', 'business hours', 'when available']
  },
  {
    id: 25,
    category: 'account',
    question: 'How do I create an account?',
    answer: 'Click "Sign Up" in the top right corner, enter your email and create a password. You can also check out as a guest.',
    keywords: ['create account', 'sign up', 'register', 'new account']
  },

  // Gift & Special Services
  {
    id: 26,
    category: 'gift_options',
    question: 'Can I add a gift message or gift wrap?',
    answer: 'Gift messages are always free! Gift wrap is available in select regions. Both options appear at checkout.',
    keywords: ['gift message', 'gift wrap', 'present', 'gift']
  },
  {
    id: 27,
    category: 'gift_options',
    question: 'Do you sell gift cards?',
    answer: 'Yes! Digital gift cards are delivered instantly via email after purchase. Physical gift cards are also available.',
    keywords: ['gift card', 'digital gift card', 'present']
  },

  // Subscriptions
  {
    id: 28,
    category: 'subscriptions',
    question: 'How do subscriptions work?',
    answer: 'Choose your delivery frequency, and we\'ll automatically send your favorite items. You can pause, skip, or cancel anytime from your account.',
    keywords: ['subscription', 'repeat order', 'automatic delivery']
  },
  {
    id: 29,
    category: 'subscriptions',
    question: 'How do I change my subscription date?',
    answer: 'Manage your next delivery date from the Subscriptions section in your account. Changes must be made 3 days before your next delivery.',
    keywords: ['change delivery date', 'subscription date', 'next delivery']
  },

  // Warranty & Care
  {
    id: 30,
    category: 'warranty',
    question: 'Do you offer a warranty?',
    answer: 'We offer a 12-month warranty for manufacturing defects. Contact support with photos and your order number to start a claim.',
    keywords: ['warranty', 'guarantee', 'defect', '12 months']
  },
  {
    id: 31,
    category: 'product_care',
    question: 'How do I care for my product?',
    answer: 'Care instructions are included with each product and available on the product page. Follow the guidelines to maintain quality and warranty.',
    keywords: ['care instructions', 'how to care', 'maintenance', 'wash']
  },

  // Sustainability
  {
    id: 32,
    category: 'sustainability',
    question: 'Are your materials sustainable?',
    answer: 'We prioritize recycled and organic materials and work with responsible suppliers. Our sustainability efforts are detailed on our website.',
    keywords: ['sustainable', 'recycled', 'eco-friendly', 'organic']
  },
  {
    id: 33,
    category: 'sustainability',
    question: 'How do you minimize packaging waste?',
    answer: 'We use recycled or FSC-certified packaging and are transitioning to water-based inks. Most packaging is recyclable.',
    keywords: ['packaging waste', 'recyclable', 'eco packaging', 'minimal waste']
  },

  // Business & Privacy
  {
    id: 34,
    category: 'b2b',
    question: 'Do you offer bulk or corporate orders?',
    answer: 'Yes! Email sales@company.com with quantities, SKUs, and deadlines for bulk pricing and corporate accounts.',
    keywords: ['bulk orders', 'corporate', 'business', 'wholesale']
  },
  {
    id: 35,
    category: 'privacy',
    question: 'How is my personal data used?',
    answer: 'We only use your data to process orders, provide support, and improve our services. See our privacy policy for full details.',
    keywords: ['privacy', 'personal data', 'data usage', 'gdpr']
  },
  {
    id: 36,
    category: 'security',
    question: 'Is checkout secure?',
    answer: 'Yes! We use industry-standard encryption and never store your full card details. All payments are processed securely.',
    keywords: ['secure checkout', 'encryption', 'payment security', 'safe']
  }
];

// Utility functions for text processing and matching
export function tokenize(text) {
  return (text || "").toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(word => word && !STOP_WORDS.has(word));
}

export function jaccardSimilarity(a, b) {
  const setA = new Set(a);
  const setB = new Set(b);
  const intersection = [...setA].filter(x => setB.has(x)).length;
  const union = new Set([...a, ...b]).size || 1;
  return intersection / union;
}

export function levenshteinDistance(a, b) {
  const m = a.length;
  const n = b.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }
  return dp[m][n];
}

export function levenshteinSimilarity(a, b) {
  const maxLen = Math.max(a.length, b.length) || 1;
  return 1 - (levenshteinDistance(a, b) / maxLen);
}

export function getKeywordBoost(query, category) {
  const keywords = KEYWORDS[category] || [];
  const queryLower = query.toLowerCase();
  for (const keyword of keywords) {
    if (queryLower.includes(keyword)) return 0.2;
  }
  return 0;
}

export function calculateScore(query, record) {
  const queryTokens = tokenize(query);
  const recordTokens = tokenize(record.question + " " + record.answer + " " + record.category);
  
  const jaccard = jaccardSimilarity(queryTokens, recordTokens);
  const levenshtein = levenshteinSimilarity(query.toLowerCase(), record.question.toLowerCase());
  const exactMatch = record.question.toLowerCase().includes(query.toLowerCase()) ? 0.3 : 0;
  const keywordBoost = getKeywordBoost(query, record.category);
  
  // More lenient scoring - lower weights for better matching
  const score = (0.4 * jaccard) + (0.3 * levenshtein) + exactMatch + keywordBoost;
  return Math.min(1, score);
}

export function findTopMatches(faqData, query, limit = 3) {
  const scored = faqData.map(record => ({
    record,
    score: calculateScore(query, record)
  }));
  
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit);
}

export function getCategories(faqData) {
  const counts = {};
  for (const record of faqData) {
    counts[record.category] = (counts[record.category] || 0) + 1;
  }
  return Object.entries(counts).sort((a, b) => b[1] - a[1]);
}

export function getTopQuestions(faqData, categories, limit = 12) {
  const byCategory = {};
  for (const record of faqData) {
    (byCategory[record.category] ||= []).push(record);
  }
  
  return Object.entries(byCategory)
    .sort((a, b) => (categories.find(c => c[0] === b[0])?.[1] || 0) - (categories.find(c => c[0] === a[0])?.[1] || 0))
    .flatMap(([category, records]) => records.slice(0, 2))
    .slice(0, limit);
}
