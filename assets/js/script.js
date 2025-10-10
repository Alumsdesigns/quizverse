
const questions = [
  {
    question: "What is the longest-running TV soap opera in the UK?",
    choices: ["EastEnders", "Emmerdale", "Coronation Street", "Hollyoaks"],
    answer: "Coronation Street",
    correctQuote: "Coronation Street has been on air since 1960, making it the UK’s longest-running soap."
  },
  {
    question: "Who played Jack in Titanic?",
    choices: ["Leonardo DiCaprio", "Brad Pitt", "Johnny Depp", "Matt Damon"],
    answer: "Leonardo DiCaprio",
    correctQuote: "Leonardo DiCaprio stole hearts as Jack Dawson in the 1997 film Titanic."
  },
  {
    question: "What Netflix series features a character called Eleven?",
    choices: ["The Crown", "Black Mirror", "Stranger Things", "The Witcher"],
    answer: "Stranger Things",
    correctQuote: "Stranger Things features Eleven, a girl with telekinetic powers, played by Millie Bobby Brown."
  },
  {
    question: "Which actor played James Bond in Casino Royale?",
    choices: ["Pierce Brosnan", "Sean Connery", "Daniel Craig", "Roger Moore"],
    answer: "Daniel Craig",
    correctQuote: "Daniel Craig debuted as Bond in Casino Royale (2006), bringing grit to the iconic spy."
  },
  {
    question: "In which year was the first Star Wars film released?",
    choices: ["1975", "1977", "1980", "1983"],
    answer: "1977",
    correctQuote: "The galaxy far, far away began in 1977 with the release of Star Wars: A New Hope."
  },
  {
    question: "Which country has the most natural lakes?",
    choices: ["USA", "Canada", "Russia", "India"],
    answer: "Canada",
    correctQuote: "Canada has over 31,000 natural lakes – more than the rest of the world combined!"
  },
  {
    question: "What is the smallest country in the world by area?",
    choices: ["Monaco", "Nauru", "San Marino", "Vatican City"],
    answer: "Vatican City",
    correctQuote: "Vatican City is just 44 hectares – the world’s tiniest nation!"
  },
  {
    question: "What’s the capital of New Zealand?",
    choices: ["Auckland", "Wellington", "Christchurch", "Hamilton"],
    answer: "Wellington",
    correctQuote: "Wellington is the capital of New Zealand, known for its vibrant arts scene."
  },
  {
    question: "Mount Kilimanjaro is located in which country?",
    choices: ["Kenya", "Tanzania", "Uganda", "Ethiopia"],
    answer: "Tanzania",
    correctQuote: "Africa’s tallest peak, Mount Kilimanjaro, is located in Tanzania."
  },
  {
    question: "What river flows through Baghdad?",
    choices: ["Euphrates", "Jordan", "Tigris", "Nile"],
    answer: "Tigris",
    correctQuote: "The Tigris River runs through Baghdad, alongside the Euphrates in Mesopotamia."
  },
  {
    question: "Who wrote Pride and Prejudice?",
    choices: ["Charlotte Brontë", "Jane Austen", "Mary Shelley", "Emily Dickinson"],
    answer: "Jane Austen",
    correctQuote: "Jane Austen’s beloved novel Pride and Prejudice was first published in 1813."
  },
  {
    question: "What’s the longest word in the English dictionary that has no vowels (excluding 'y')?",
    choices: ["Rhythms", "Crypts", "Gypsy", "Lynx"],
    answer: "Rhythms",
    correctQuote: "'Rhythms' stands out for being long and vowel-free – at least when not counting 'y'."
  },
  {
    question: "What author created The Hunger Games trilogy?",
    choices: ["J.K. Rowling", "Suzanne Collins", "Veronica Roth", "Stephanie Meyer"],
    answer: "Suzanne Collins",
    correctQuote: "Suzanne Collins brought us Katniss Everdeen in the dystopian Hunger Games series."
  },
  {
    question: "What is the meaning of the word 'ephemeral'?",
    choices: ["Eternal", "Mysterious", "Short-lived", "Magical"],
    answer: "Short-lived",
    correctQuote: "Something ephemeral lasts only a short time – like a sunset or a shooting star."
  },
  {
    question: "Which Shakespeare play features the line 'To be or not to be'?",
    choices: ["Macbeth", "Romeo and Juliet", "Hamlet", "Othello"],
    answer: "Hamlet",
    correctQuote: "'To be or not to be' is the iconic soliloquy from Hamlet."
  },
  {
    question: "Who was known as the 'King of Pop'?",
    choices: ["Prince", "Michael Jackson", "Elvis Presley", "Stevie Wonder"],
    answer: "Michael Jackson",
    correctQuote: "Michael Jackson earned the title 'King of Pop' with hits like Thriller and Billie Jean."
  },
  {
    question: "What British band released the album A Night at the Opera?",
    choices: ["The Beatles", "Queen", "The Rolling Stones", "Pink Floyd"],
    answer: "Queen",
    correctQuote: "Queen’s 1975 album A Night at the Opera features the epic Bohemian Rhapsody."
  },
  {
    question: "Which artist sang Rolling in the Deep?",
    choices: ["Adele", "Beyoncé", "Amy Winehouse", "Taylor Swift"],
    answer: "Adele",
    correctQuote: "Rolling in the Deep was one of Adele’s biggest hits, from her album 21."
  },
  {
    question: "What instrument has 88 keys?",
    choices: ["Harp", "Organ", "Piano", "Synthesizer"],
    answer: "Piano",
    correctQuote: "A standard piano has 88 keys – 52 white and 36 black."
  },
  {
    question: "Who was the original lead singer of Queen?",
    choices: ["Roger Taylor", "Freddie Mercury", "Brian May", "John Deacon"],
    answer: "Freddie Mercury",
    correctQuote: "Freddie Mercury was Queen’s legendary frontman and vocal powerhouse."
  },
  {
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
    correctQuote: "Paris, the City of Light, has been France's capital since 987 AD."
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
    correctQuote: "Mars gets its red color from iron oxide (rust) on its surface."
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    choices: ["William Wordsworth", "William Shakespeare", "George Orwell", "Jane Austen"],
    answer: "William Shakespeare",
    correctQuote: "Shakespeare's Romeo and Juliet was written around 1595-1596."
  },
  {
    question: "What is the largest mammal in the world?",
    choices: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale",
    correctQuote: "Blue whales can grow up to 100 feet long and weigh 200 tons!"
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    choices: ["Oxygen", "Gold", "Silver", "Iron"],
    answer: "Oxygen",
    correctQuote: "Oxygen is essential for life and makes up about 21% of Earth's atmosphere."
  },
  {
    question: "How many continents are there on Earth?",
    choices: ["5", "6", "7", "8"],
    answer: "7",
    correctQuote: "The seven continents are: Asia, Africa, North America, South America, Antarctica, Europe, and Australia."
  },
  {
    question: "What year did World War II end?",
    choices: ["1945", "1939", "1918", "1950"],
    answer: "1945",
    correctQuote: "World War II ended in 1945 with the surrender of Germany in May and Japan in September."
  },
  {
    question: "Which language is the most spoken worldwide?",
    choices: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
    answer: "Mandarin Chinese",
    correctQuote: "Mandarin Chinese has over 1.1 billion native speakers worldwide."
  },
  {
    question: "What is the hardest natural substance on Earth?",
    choices: ["Gold", "Iron", "Diamond", "Quartz"],
    answer: "Diamond",
    correctQuote: "Diamond ranks 10 on the Mohs scale of mineral hardness."
  },
  {
    question: "Who painted the Mona Lisa?",
    choices: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
    answer: "Leonardo da Vinci",
    correctQuote: "Leonardo da Vinci painted the Mona Lisa between 1503 and 1519."
  }
];

let currentQuestionIndex = 0; 
let score = 0;                
let username = '';            
let timerInterval;            
const totalTimePerQuestion = 20; 
let timeRemaining = totalTimePerQuestion;

const progressBarContainer = document.getElementById('progress-bar-container');
const progressBar = document.getElementById('progress-bar');
const progressBarLabel = document.getElementById('progress-bar-label');

const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');
const closeQuizBtn = document.getElementById('closeQuizBtn');
const welcomeForm = document.getElementById('welcome-form');

const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const feedbackEl = document.getElementById('feedback');
const finalScoreEl = document.getElementById('finalScore');
const timerEl = document.getElementById('timer');
const progressEl = document.getElementById('progress');

startBtn.addEventListener('click', startQuiz);
if (welcomeForm) {
  welcomeForm.addEventListener('submit', function(e) {
    e.preventDefault();
    startQuiz();
  });
}

const usernameInput = document.getElementById('username');
const usernameError = document.getElementById('username-error');

if (usernameInput) {
  usernameInput.addEventListener('input', validateUsername);
  usernameInput.addEventListener('blur', validateUsername);
}

const VALIDATION_CONFIG = {
  MIN_LENGTH: 2,
  MAX_LENGTH: 50,
  PATTERNS: {
    VALID_NAME: /^[A-Za-zÀ-ÿ\s'-]+$/,
    SUSPICIOUS: [
      /script/i, /javascript/i, /on\w+\s*=/i, /<[^>]*>/i,
      /union/i, /select/i, /insert/i, /update/i, /delete/i, /drop/i,
      /exec/i, /eval/i, /alert/i, /confirm/i, /prompt/i,
      /document\./i, /window\./i, /location\./i, /history\./i
    ]
  },
  MESSAGES: {
    EMPTY: 'Please enter your name to continue.',
    TOO_SHORT: 'Name must be at least 2 characters long.',
    TOO_LONG: 'Name must be 50 characters or less.',
    INVALID_CHARS: 'Name can only contain letters, spaces, hyphens, and apostrophes.',
    INVALID_SPACES: 'Name cannot start or end with spaces, or have multiple consecutive spaces.',
    SUSPICIOUS: 'Please enter a valid name without special characters.',
    SUCCESS: 'Name looks good!'
  }
};

function validateUsername() {
  const input = usernameInput.value.trim();
  const errorElement = usernameError;
  
  clearValidationError(errorElement);
  
  try {
    if (!validateNotEmpty(input)) {
      showValidationError(errorElement, VALIDATION_CONFIG.MESSAGES.EMPTY);
      return false;
    }
    
    if (!validateLength(input)) {
      return false;
    }
    
    if (!validateCharacters(input)) {
      return false;
    }
    
    if (!validateSpacing(input)) {
      return false;
    }
    
    if (!validateSecurity(input)) {
      return false;
    }
    
    return true;
    
  } catch (error) {
    console.error('Validation error:', error);
    showValidationError(errorElement, 'An unexpected error occurred. Please try again.');
    return false;
  }
}

function validateNotEmpty(input) {
  return input.length > 0;
}

function validateLength(input) {
  if (input.length < VALIDATION_CONFIG.MIN_LENGTH) {
    showValidationError(usernameError, VALIDATION_CONFIG.MESSAGES.TOO_SHORT);
    return false;
  }
  
  if (input.length > VALIDATION_CONFIG.MAX_LENGTH) {
    showValidationError(usernameError, VALIDATION_CONFIG.MESSAGES.TOO_LONG);
    return false;
  }
  
  return true;
}

function validateCharacters(input) {
  if (!VALIDATION_CONFIG.PATTERNS.VALID_NAME.test(input)) {
    showValidationError(usernameError, VALIDATION_CONFIG.MESSAGES.INVALID_CHARS);
    return false;
  }
  return true;
}

function validateSpacing(input) {
  const hasLeadingTrailingSpaces = input.startsWith(' ') || input.endsWith(' ');
  const hasMultipleSpaces = input.includes('  ');
  
  if (hasLeadingTrailingSpaces || hasMultipleSpaces) {
    showValidationError(usernameError, VALIDATION_CONFIG.MESSAGES.INVALID_SPACES);
    return false;
  }
  return true;
}

function validateSecurity(input) {
  for (const pattern of VALIDATION_CONFIG.PATTERNS.SUSPICIOUS) {
    if (pattern.test(input)) {
      showValidationError(usernameError, VALIDATION_CONFIG.MESSAGES.SUSPICIOUS);
      return false;
    }
  }
  return true;
}

function clearValidationError(errorElement) {
  if (!errorElement) return;
  errorElement.textContent = '';
  errorElement.className = 'error-message';
  errorElement.style.display = '';
}

function showValidationError(errorElement, message) {
  if (!errorElement) return;
  errorElement.textContent = message;
  errorElement.className = 'error-message error-active';
  errorElement.style.display = 'block';
  errorElement.style.transform = 'translateX(5px)';
  setTimeout(() => {
    errorElement.style.transform = 'translateX(0)';
  }, 200);
}

function showValidationSuccess(errorElement) {
  if (!errorElement) return;
  errorElement.textContent = VALIDATION_CONFIG.MESSAGES.SUCCESS;
  errorElement.className = 'error-message success-message';
  setTimeout(() => {
    if (errorElement.textContent === VALIDATION_CONFIG.MESSAGES.SUCCESS) {
      clearValidationError(errorElement);
    }
  }, 2000);
}

function sanitizeInput(input) {
  return input
    .trim()
    .replace(/[<>]/g, '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

function startQuiz() {
  const nameInput = document.getElementById('username');
  const inputValue = nameInput.value.trim();
  
  if (!validateUsername()) {
    nameInput.focus();
    return;
  }
  
  username = sanitizeInput(inputValue);
  score = 0;
  currentQuestionIndex = 0;
  clearInterval(timerInterval);
  hideScreen(welcomeScreen);
  showScreen(quizScreen);
  if (closeQuizBtn) closeQuizBtn.style.display = 'flex';
  showQuestion();
  const firstFocusable = quizScreen.querySelector('input, button, [tabindex]:not([tabindex="-1"])');
  if (firstFocusable) firstFocusable.focus();
}

nextBtn.addEventListener('click', showNextQuestion);
restartBtn.addEventListener('click', resetQuiz);
if (closeQuizBtn) {
  closeQuizBtn.addEventListener('click', function() {
    const safeFocus = welcomeScreen.querySelector('input, button') || document.body;
    safeFocus.focus();
    hideScreen(quizScreen);
    showScreen(welcomeScreen);
    closeQuizBtn.style.display = 'none';
    feedbackEl.textContent = '';
    clearInterval(timerInterval);
    score = 0;
    currentQuestionIndex = 0;
    updateProgressBar();
  });
}

function showQuestion() {
  feedbackEl.textContent = '';
  nextBtn.classList.add('hidden');
  nextBtn.setAttribute('aria-disabled', 'true');
  if (closeQuizBtn) closeQuizBtn.style.display = 'flex';
  timeRemaining = totalTimePerQuestion;
  updateTimerDisplay();
  startTimer();
  const q = questions[currentQuestionIndex];
  questionEl.textContent = `Q${currentQuestionIndex + 1}: ${q.question}`;
  choicesEl.innerHTML = '';
  q.choices.forEach((choice, idx) => {
    const label = document.createElement('label');
    label.className = 'choice';
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'choice';
    radio.value = choice;
    radio.id = `choice-${idx}`;
    radio.setAttribute('aria-label', choice);
    radio.onclick = handleAnswer;
    label.setAttribute('for', `choice-${idx}`);
    label.appendChild(radio);
    label.appendChild(document.createTextNode(choice));
    choicesEl.appendChild(label);
  });
  updateProgress();
}

function handleAnswer() {
  clearInterval(timerInterval);
  timerEl.classList.remove('urgent');
  
  const selected = document.querySelector('input[name="choice"]:checked');
  if (!selected) return;
  const answer = selected.value;
  const correctAnswer = questions[currentQuestionIndex].answer;
  feedbackEl.classList.remove('correct', 'incorrect');
  if (answer === correctAnswer) {
    feedbackEl.textContent = `Correct! ${questions[currentQuestionIndex].correctQuote}`;
    feedbackEl.classList.add('correct');
    score++;
  } else {
    feedbackEl.textContent = `Incorrect! The correct answer is ${correctAnswer}.`;
    feedbackEl.classList.add('incorrect');
  }
  
  document.querySelectorAll('input[name="choice"]').forEach(input => {
    input.disabled = true;
    if (input.value === correctAnswer) {
      input.parentElement.style.backgroundColor = '#0aba83';
      input.parentElement.style.color = '#000'
      input.parentElement.style.width = '80vw'; 
    } else if (input.checked && input.value !== correctAnswer) {
    input.parentElement.style.backgroundColor = '#ff5858'; 
    input.parentElement.style.color = '#000';
    input.parentElement.style.textDecoration = 'line-through';
    input.parentElement.style.fontWeight = 'normal';
    input.parentElement.style.width = '80vw'; 
  }
  });
  nextBtn.classList.remove('hidden');
  nextBtn.setAttribute('aria-disabled', 'false');
  updateProgressBar();
}

function showNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  hideScreen(quizScreen);
  
  const percent = Math.round((score / questions.length) * 100);
  
  const congrats = document.getElementById('congrats');
  if (congrats) {
    if (score === questions.length) {
      const congratsText = congrats.querySelector('.congrats-text');
      if (congratsText) {
        congratsText.textContent = `${username}, your score is ${score} out of ${questions.length}, ${percent}%! Perfect! Ready for another round?`;
      }
      congrats.hidden = false;
      congrats.setAttribute('aria-live', 'polite');
    } else if (percent >= 80) {
      const congratsText = congrats.querySelector('.congrats-text');
      if (congratsText) {
        congratsText.textContent = `${username}, your score is ${score} out of ${questions.length}, ${percent}%! Try again for perfect?`;
      }
      congrats.hidden = false;
      congrats.setAttribute('aria-live', 'polite');
    } else if (percent >= 50) {
      const congratsText = congrats.querySelector('.congrats-text');
      if (congratsText) {
        congratsText.textContent = `${username}, your score is ${score} out of ${questions.length}, ${percent}%! Good effort! Keep practicing!`;
      }
      congrats.hidden = false;
      congrats.setAttribute('aria-live', 'polite');
    } else {
      const congratsText = congrats.querySelector('.congrats-text');
      if (congratsText) {
        congratsText.textContent = `${username}, your score is ${score} out of ${questions.length}, ${percent}%! Well done, practice makes perfect!`;
      }
      congrats.hidden = false;
      congrats.setAttribute('aria-live', 'polite');
    }
  }
  
  localStorage.setItem('lastScore', score);
  showScreen(resultScreen);
}

function resetQuiz() {
  hideScreen(resultScreen);
  showScreen(welcomeScreen);
  document.getElementById('username').value = '';
  if (usernameError) usernameError.textContent = '';
  feedbackEl.textContent = '';
  clearInterval(timerInterval);
  if (closeQuizBtn) closeQuizBtn.style.display = 'none';
  const congrats = document.getElementById('congrats');
  if (congrats) congrats.hidden = true;
  score = 0;
  currentQuestionIndex = 0;
  updateProgressBar();
}

function showScreen(screen) {
  if (!screen) return;
  screen.classList.remove('hidden');
  screen.setAttribute('aria-hidden', 'false');
  screen.removeAttribute('inert');
  const firstFocusable = screen.querySelector('input, button, [tabindex]:not([tabindex="-1"])');
  if (firstFocusable) firstFocusable.focus();
}

function hideScreen(screen) {
  if (!screen) return;
  screen.classList.add('hidden');
  screen.setAttribute('aria-hidden', 'true');
  screen.setAttribute('inert', ''); 
}

function startTimer() {
  timerEl.textContent = `${timeRemaining} remaining seconds`;
  timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      handleTimeout();
    }
  }, 1000);
}

function updateTimerDisplay() {
  timerEl.textContent = `${timeRemaining} remaining seconds`;
  
  if (timeRemaining <= 10) {
    timerEl.classList.add('urgent');
  } else {
    timerEl.classList.remove('urgent');
  }
}

function handleTimeout() {
  feedbackEl.textContent = `Time's up! The correct answer was ${questions[currentQuestionIndex].answer}.`;
  feedbackEl.classList.remove('correct');
  feedbackEl.classList.add('incorrect');
  feedbackEl.style.color = '#fff';

  document.querySelectorAll('input[name="choice"]').forEach(input => {
    input.disabled = true;
    if (input.value === questions[currentQuestionIndex].answer) {
      input.parentElement.style.backgroundColor = '#0aba83;';
      input.parentElement.style.width = '80vw'; 

    }
  });
  nextBtn.classList.remove('hidden');
  nextBtn.setAttribute('aria-disabled', 'false');
}

function updateProgress() {
  if (progressEl) {
    progressEl.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  }
}

function updateProgressBar() {
  const progressBarFill = document.querySelector('.progress-bar-fill');
  if (!progressBarContainer || !progressBar || !progressBarLabel || !progressBarFill) return;
  progressBarContainer.classList.remove('hidden');
  const percent = Math.round((score / questions.length) * 100);
  progressBar.setAttribute('aria-valuenow', percent);
  progressBarLabel.textContent = `${percent}% Correct`;
  progressBarFill.style.width = percent + '%';
  progressBar.setAttribute('aria-valuetext', `${percent}% correct answers`);
}
