// Shared Flashcard App Utilities

// Parse emoji field that may contain text (e.g., "😴 unaveny")
const parseEmoji = (emojiStr) => {
  const match = emojiStr.match(/^(\p{Emoji}[\p{Emoji}\uFE0F\u200D]*)\s*(.*)$/u);
  if (match && match[2]) {
    return { emoji: match[1], text: match[2] };
  }
  return { emoji: emojiStr, text: null };
};

// Generate front content HTML for a card
const generateFrontContent = (item) => {
  const { emoji, text } = parseEmoji(item.emoji);
  if (text) {
    return `${emoji}<span class="emoji-text">${text}</span>`;
  }
  return emoji;
};

// Shuffle array utility
const shuffleArray = (arr) => {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Text-to-speech pronunciation
const pronounce = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-UK';
  speechSynthesis.speak(utterance);
};

// Create a flashcard element
const createFlashcard = (item, options = {}) => {
  const { onClick } = options;
  
  const card = document.createElement('div');
  card.className = 'flashcard';
  
  const frontContent = generateFrontContent(item);
  
  card.innerHTML = `
    <div class="inner">
      <div class="front">${frontContent}</div>
      <div class="back">${item.name}</div>
    </div>
  `;

  if (onClick) {
    card.addEventListener('click', () => onClick(card, item));
  } else {
    // Default click behavior: flip and pronounce
    card.addEventListener('click', () => {
      const isFlipped = card.classList.contains('flip');
      
      if (!isFlipped) {
        pronounce(item.name);
        card.classList.add('flip');
      } else {
        card.classList.remove('flip');
      }
    });
  }

  return card;
};

// Load categories from JSON file
const loadCategories = async () => {
  const response = await fetch('./categories.json');
  return response.json();
};

// Populate a select element with category options
const populateCategorySelect = (selectElement, categories) => {
  Object.entries(categories).forEach(([key, cat]) => {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = cat.label;
    selectElement.appendChild(option);
  });
};

// Export for use in other modules (if using ES modules)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    parseEmoji,
    generateFrontContent,
    shuffleArray,
    pronounce,
    createFlashcard,
    loadCategories,
    populateCategorySelect
  };
}
