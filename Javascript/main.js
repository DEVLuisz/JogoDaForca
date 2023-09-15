const word = document.querySelector(".word");
const wrongLettersBox = document.querySelector(".wrong-letters");
const playButton = document.querySelector("button");
const popup = document.querySelector(".popup");
const notification = document.querySelector(".notification");
const message = document.querySelector(".message");
const revealWord = document.querySelector(".reveal-word");
const themeHint = document.querySelector(".theme-hint");
const themeLength = document.querySelector(".theme-length"); 
const parts = document.querySelectorAll(".part");
const acertos = document.querySelector(".acertos");
let acertou = 0;

const wordThemes = {
  musica: [
     "Que que a Gente faz com a Gente", "Pirulito Vermelho", "Ela Pirou na Dodge Ram", "Chapeu Preto"
  ],
  objeto: [
   "Daguerrotipo", "Estetoscópio"
  ],
  cantor: [
     "Luan Pereira", 
  ],
  ingredientes: [
    "Vinagre de Vinho Branco", "Semente de Girassol", "Farinha de Centeio", "Cramberry Desidratado"
  ],
  materia: [
   "Analise Sensorial dos Alimentos", "Terapia Nutricional em Geriatria"
  ]
};

function selectRandomTheme() {
  const themes = Object.keys(wordThemes);
  return themes[Math.floor(Math.random() * themes.length)];
}

function selectRandomWord(theme) {
  const themeWords = wordThemes[theme];
  return themeWords[Math.floor(Math.random() * themeWords.length)].toUpperCase();
}

let selectedTheme = selectRandomTheme();
let selectedWord = selectRandomWord(selectedTheme).toUpperCase();
themeHint.textContent = selectedTheme.toUpperCase();
themeLength.textContent = `Letras: ${selectedWord.replace(/ /g, "").length}`;

let playable = true;
const correctLetters = [];
const wrongLetters = [];

function displayWord() {
  const lettersWithSpaces = selectedWord.split("");
  const correctlyGuessedLetters = lettersWithSpaces.filter((letter) =>
    correctLetters.includes(letter) || letter === " "
  );

  word.innerHTML = lettersWithSpaces
    .map((letter) => {
      if (letter === " ") {
        return '<span class="space">-</span>';
      } else {
        return `
              <span class="letter">
                  ${correctLetters.includes(letter) ? letter : ""}
              </span>
          `;
      }
    })
    .join("");

  if (correctlyGuessedLetters.length === lettersWithSpaces.length) {
    message.textContent = "Você Ganhou!";
    revealWord.textContent = "";
    popup.style.display = "flex";
    acertou = acertou+1;
    acertos.textContent = `Acertos: ${acertou}`

    playable = false;
  }
}

function updateWrongLettersBox() {
  wrongLettersBox.innerHTML = `
        ${wrongLetters.map((letter) => `<span>${letter}</span>`)}
    `;

  parts.forEach((part, index) => {
    const errors = wrongLetters.length;

    index < errors
      ? (part.style.display = "block")
      : (part.style.display = "none");
  });

  if (wrongLetters.length === parts.length) {
    message.textContent = "Você Perdeu!";
    revealWord.textContent = `Palavra Correta: ${selectedWord}`;
    popup.style.display = "flex";

    playable = false;
  }
}

function showNotification() {
  notification.classList.add("show");

  const timer = setTimeout(() => {
    notification.classList.remove("show");
    clearTimeout(timer);
  }, 2000);
}

document.addEventListener("keydown", (e) => {
  if (playable) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      const letter = e.key.toUpperCase();

      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          correctLetters.push(letter);

          displayWord();
        } else {
          showNotification();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);

          updateWrongLettersBox();
        } else {
          showNotification();
        }
      }
    }
  }
});

playButton.addEventListener("click", () => {
  playable = true;

  correctLetters.length = 0;
  wrongLetters.length = 0;

  selectedTheme = selectRandomTheme(); // Atualiza o tema selecionado
  selectedWord = selectRandomWord(selectedTheme).toUpperCase(); // Seleciona uma palavra aleatória do novo tema
  themeHint.textContent = selectedTheme.toUpperCase(); // Atualiza o tema exibido como dica
  themeLength.textContent = `Letras: ${selectedWord.replace(/ /g, "").length}`; // Atualiza a contagem de letras

  displayWord();
  updateWrongLettersBox();

  popup.style.display = "none";
});

displayWord();