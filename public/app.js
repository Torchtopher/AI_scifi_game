const statements = [];

const totalRounds = statements.length;

const statementEl = document.getElementById("statement");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");
const streakEl = document.getElementById("streak");
const roundEl = document.getElementById("round");
const totalRoundsEl = document.getElementById("total-rounds");
const scienceBtn = document.getElementById("science-btn");
const scifiBtn = document.getElementById("scifi-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

let deck = [];
let round = 1;
let score = 0;
let streak = 0;
let current = null;
let answered = false;

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function setButtonsEnabled(enabled) {
  scienceBtn.disabled = !enabled;
  scifiBtn.disabled = !enabled;
}

function drawStatement() {
  if (totalRounds === 0) {
    showEmptyState();
    return;
  }

  if (round > totalRounds) {
    finishGame();
    return;
  }

  current = deck[round - 1];
  answered = false;
  statementEl.textContent = current.text;
  feedbackEl.textContent = "Make your best guess.";
  feedbackEl.className = "feedback";
  setButtonsEnabled(true);
  nextBtn.disabled = true;
  roundEl.textContent = String(round);
}

function handleGuess(guess) {
  if (answered) return;

  answered = true;
  const isCorrect = guess === current.answer;

  if (isCorrect) {
    score += 1;
    streak += 1;
    feedbackEl.className = "feedback correct";
    feedbackEl.textContent = `✅ Correct! ${current.explanation}`;
  } else {
    streak = 0;
    feedbackEl.className = "feedback incorrect";
    const label = current.answer === "science" ? "Real Science" : "Science Fiction";
    feedbackEl.textContent = `❌ Not quite. Correct answer: ${label}. ${current.explanation}`;
  }

  scoreEl.textContent = String(score);
  streakEl.textContent = String(streak);

  setButtonsEnabled(false);
  nextBtn.disabled = false;
}

function finishGame() {
  statementEl.textContent = "Game complete!";
  feedbackEl.className = "feedback correct";
  const pct = Math.round((score / totalRounds) * 100);
  feedbackEl.textContent = `Final score: ${score}/${totalRounds} (${pct}%). Hit Restart to play again.`;
  setButtonsEnabled(false);
  nextBtn.disabled = true;
}

function restartGame() {
  deck = shuffle(statements).slice(0, totalRounds);
  round = totalRounds === 0 ? 0 : 1;
  score = 0;
  streak = 0;
  current = null;
  answered = false;

  totalRoundsEl.textContent = String(totalRounds);
  scoreEl.textContent = "0";
  streakEl.textContent = "0";

  drawStatement();
}

function showEmptyState() {
  statementEl.textContent = "No prompts are currently loaded.";
  feedbackEl.textContent = "Add new real science and science fiction statements to play.";
  feedbackEl.className = "feedback";
  roundEl.textContent = "0";
  totalRoundsEl.textContent = "0";
  setButtonsEnabled(false);
  nextBtn.disabled = true;
}

scienceBtn.addEventListener("click", () => handleGuess("science"));
scifiBtn.addEventListener("click", () => handleGuess("scifi"));
nextBtn.addEventListener("click", () => {
  round += 1;
  drawStatement();
});
restartBtn.addEventListener("click", restartGame);

restartGame();
