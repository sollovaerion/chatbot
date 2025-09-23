// Enhanced AI-like chatbot utilities
import { FAQ_DATA, findTopMatches, getCategories } from '../data/infraProjectFaq';

// Conversation context and memory
let conversationContext = {
  currentTopic: null,
  previousQuestions: [],
  userPreferences: {},
  conversationFlow: [],
  lastResponseTime: null
};

// Enhanced natural language processing
export const processUserInput = (userQuery) => {
  const query = userQuery.toLowerCase().trim();
  
  // Intent recognition
  const intent = recognizeIntent(query);
  
  // Context analysis
  const context = analyzeContext(query);
  
  // Sentiment analysis
  const sentiment = analyzeSentiment(query);
  
  // Extract entities (key information)
  const entities = extractEntities(query);
  
  return {
    originalQuery: userQuery,
    processedQuery: query,
    intent,
    context,
    sentiment,
    entities,
    timestamp: new Date()
  };
};

// Intent recognition using pattern matching
const recognizeIntent = (query) => {
  const intents = {
    greeting: /\b(përshëndetje|hello|hi|mirëdita|mirëmbrëma|hej)\b/i,
    pricing: /\b(çmim|qmim|kushton|tarifë|buxhet|ofertë|preventiv|kosto)\b/i,
    timeline: /\b(afat|kohë|kur|sa kohë|orar|kalendar)\b/i,
    service: /\b(shërbim|ndertim|asfaltim|renovim|menaxhim)\b/i,
    contact: /\b(kontakt|telefon|email|adresë|vizitë)\b/i,
    complaint: /\b(problem|ankesë|gabim|keq|i keq)\b/i,
    appreciation: /\b(faleminderit|të lutem|shumë mirë|bravo|përkrahje)\b/i,
    clarification: /\b(çfarë|si|pse|kur|ku|kush)\b/i,
    comparison: /\b(krahasim|ndryshim|më mirë|më keq|vs)\b/i,
    urgency: /\b(urgjent|shpejt|tani|menjëherë|asap)\b/i
  };
  
  for (const [intentType, pattern] of Object.entries(intents)) {
    if (pattern.test(query)) {
      return intentType;
    }
  }
  
  return 'general';
};

// Context analysis
const analyzeContext = (query) => {
  const context = {
    isFollowUp: conversationContext.previousQuestions.length > 0,
    relatedTopics: [],
    userExperience: 'new', // new, returning, expert
    urgency: 'normal'
  };
  
  // Check if it's a follow-up question
  if (conversationContext.currentTopic) {
    context.relatedTopics.push(conversationContext.currentTopic);
  }
  
  // Analyze user experience level
  if (conversationContext.previousQuestions.length > 3) {
    context.userExperience = 'returning';
  }
  
  // Check for urgency indicators
  if (/\b(urgjent|shpejt|tani|menjëherë)\b/i.test(query)) {
    context.urgency = 'high';
  }
  
  return context;
};

// Basic sentiment analysis
const analyzeSentiment = (query) => {
  const positiveWords = /\b(faleminderit|të lutem|shumë mirë|bravo|përkrahje|mrekulli|fantastike)\b/i;
  const negativeWords = /\b(problem|ankesë|gabim|keq|i keq|i pakënaqur|i mërzitur)\b/i;
  const neutralWords = /\b(pyetje|informacion|dëshiroj|mund)\b/i;
  
  if (positiveWords.test(query)) return 'positive';
  if (negativeWords.test(query)) return 'negative';
  if (neutralWords.test(query)) return 'neutral';
  
  return 'neutral';
};

// Extract key entities from the query
const extractEntities = (query) => {
  const entities = {
    services: [],
    locations: [],
    timeframes: [],
    numbers: [],
    contacts: []
  };
  
  // Service entities
  const servicePatterns = {
    'ndertim': /\b(ndertim|ndërtim|ndertoj|ndërtesë|shtëpi|objekt)\b/i,
    'asfaltim': /\b(asfaltim|asfalt|rrugë|rrugët|parking)\b/i,
    'renovim': /\b(renovim|renovoj|riparim|modernizim)\b/i,
    'menaxhim': /\b(menaxhim|menaxhoj|projekt|koordinim)\b/i
  };
  
  for (const [service, pattern] of Object.entries(servicePatterns)) {
    if (pattern.test(query)) {
      entities.services.push(service);
    }
  }
  
  // Location entities
  if (/\b(tiranë|tirana|durrës|durres|vlorë|vlora|shkodër|shkoder)\b/i.test(query)) {
    entities.locations.push('Albania');
  }
  
  // Timeframe entities
  if (/\b(javë|muaj|vit|ditë|orë)\b/i.test(query)) {
    entities.timeframes.push('timeframe_mentioned');
  }
  
  // Number entities
  const numbers = query.match(/\b\d+\b/g);
  if (numbers) {
    entities.numbers = numbers;
  }
  
  return entities;
};

// Generate AI-like responses
export const generateAIResponse = (processedInput) => {
  const { intent, context, sentiment, entities } = processedInput;
  
  // Update conversation context
  updateConversationContext(processedInput);
  
  // Find relevant FAQ matches
  const matches = findTopMatches(FAQ_DATA, processedInput.originalQuery, 5);
  const bestMatch = matches[0];
  
  // Generate contextual response
  let response = {
    type: 'ai_response',
    content: '',
    confidence: 0,
    suggestions: [],
    followUps: []
  };
  
  if (bestMatch && bestMatch.score > 0.15) {
    response = generateContextualAnswer(bestMatch, processedInput, matches);
  } else {
    response = generateIntelligentNoMatchResponse(processedInput);
  }
  
  return response;
};

// Generate contextual answers with AI-like intelligence
const generateContextualAnswer = (bestMatch, processedInput, allMatches) => {
  const { intent, context, sentiment, entities } = processedInput;
  const bestRecord = bestMatch.record;
  const confidence = Math.round(bestMatch.score * 100);
  
  // Personalized greeting based on context
  let personalizedGreeting = '';
  if (context.isFollowUp) {
    personalizedGreeting = '📋 Bazuar në pyetjen tuaj të mëparshme, ';
  } else if (sentiment === 'positive') {
    personalizedGreeting = '😊 Faleminderit për pyetjen! ';
  } else if (sentiment === 'negative') {
    personalizedGreeting = '🤝 Kuptoj shqetësimin tuaj. ';
  }
  
  // Enhanced answer with context
  let answerText = bestRecord.answer;
  
  // Add contextual information
  if (entities.services.length > 0) {
    answerText += `\n\n💡 Për shërbimet e ${entities.services.join(' dhe ')}, Infra Project ofron konsultime falas.`;
  }
  
  if (entities.timeframes.length > 0) {
    answerText += `\n\n⏰ Afatet specifike diskutohen gjatë konsultimit fillestar.`;
  }
  
  // Generate intelligent follow-ups
  const followUps = generateIntelligentFollowUps(bestRecord.category, entities, context);
  
  // Generate related suggestions
  const suggestions = generateRelatedSuggestions(allMatches.slice(1, 3));
  
  return {
    type: 'ai_response',
    content: {
      greeting: personalizedGreeting,
      question: bestRecord.question,
      answer: answerText,
      category: bestRecord.category,
      confidence: confidence
    },
    confidence: confidence,
    suggestions: suggestions,
    followUps: followUps
  };
};

// Generate intelligent no-match responses
const generateIntelligentNoMatchResponse = (processedInput) => {
  const { intent, context, sentiment, entities } = processedInput;
  
  let response = {
    type: 'no_match',
    content: '',
    suggestions: [],
    followUps: []
  };
  
  // Intent-specific responses
  switch (intent) {
    case 'greeting':
      response.content = '👋 Përshëndetje! Unë jam asistenti AI i Infra Project. Si mund t\'ju ndihmoj sot?';
      break;
    case 'pricing':
      response.content = '💰 Për informacion të saktë mbi çmimet, rekomandoj të kontaktoni ekipin tonë për një konsultim personalizuar.';
      response.followUps = ['A dëshironi të organizoj një konsultim falas?', 'A keni një projekt specifik në mendje?'];
      break;
    case 'complaint':
      response.content = '🤝 Kuptoj shqetësimin tuaj. Ekipi ynë i menaxhimit do t\'ju kontaktojë për të adresuar çdo problem.';
      response.followUps = ['A mund të përshkruani problemin më hollësisht?', 'A keni kontaktuar më parë ekipin tonë?'];
      break;
    default:
      response.content = '🤔 Kuptoj pyetjen tuaj, por kam nevojë për më shumë kontekst. Mund të më ndihmoni duke:';
      response.suggestions = [
        'Përdorimi fjalë-kyçe specifike (ndertim, asfaltim, çmim, afat)',
        'Përshkrimi më i detajuar i projektit tuaj',
        'Zgjedhja e një kategorie nga menuja anësore'
      ];
  }
  
  return response;
};

// Generate intelligent follow-up questions
const generateIntelligentFollowUps = (category, entities, context) => {
  const followUps = {
    'ndertim': [
      'A keni planimet e gatshme për projektin?',
      'Cili është buxheti i përafërt që keni në mendje?',
      'A keni nevojë për leje ndërtimi?'
    ],
    'asfaltim': [
      'Sa metra katrorë duhet të asfaltohen?',
      'A ka nevojë për përgatitje të veçantë të terrenit?',
      'A keni nevojë për sistem kanalizimi?'
    ],
    'cmimet': [
      'A keni një buxhet të përcaktuar?',
      'A dëshironi të diskutojmë opsionet e pagesës?',
      'A ka nevojë për financim të jashtëm?'
    ],
    'afatet': [
      'A keni një datë specifike për përfundim?',
      'A ka faktorë që mund të ndikojnë në afatin?',
      'A keni nevojë për koordinim me projekte të tjera?'
    ]
  };
  
  return followUps[category] || [
    'A ka diçka specifike që dëshironi të dini më shumë?',
    'A mund t\'ju ndihmoj me diçka tjetër?'
  ];
};

// Generate related suggestions
const generateRelatedSuggestions = (matches) => {
  return matches
    .filter(match => match.score > 0.2)
    .map(match => ({
      text: match.record.question,
      category: match.record.category,
      confidence: Math.round(match.score * 100)
    }));
};

// Update conversation context
const updateConversationContext = (processedInput) => {
  conversationContext.previousQuestions.push({
    query: processedInput.originalQuery,
    timestamp: processedInput.timestamp,
    intent: processedInput.intent
  });
  
  // Keep only last 10 questions
  if (conversationContext.previousQuestions.length > 10) {
    conversationContext.previousQuestions = conversationContext.previousQuestions.slice(-10);
  }
  
  // Update current topic based on entities
  if (processedInput.entities.services.length > 0) {
    conversationContext.currentTopic = processedInput.entities.services[0];
  }
  
  conversationContext.lastResponseTime = new Date();
};

// Get conversation summary for context
export const getConversationSummary = () => {
  return {
    totalQuestions: conversationContext.previousQuestions.length,
    currentTopic: conversationContext.currentTopic,
    recentIntents: conversationContext.previousQuestions.slice(-3).map(q => q.intent),
    conversationDuration: conversationContext.lastResponseTime ? 
      Math.round((new Date() - conversationContext.lastResponseTime) / 1000) : 0
  };
};

// Reset conversation context
export const resetConversationContext = () => {
  conversationContext = {
    currentTopic: null,
    previousQuestions: [],
    userPreferences: {},
    conversationFlow: [],
    lastResponseTime: null
  };
};
