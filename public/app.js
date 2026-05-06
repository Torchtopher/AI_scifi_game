const statements = [
  {
    text: "A spacecraft deliberately crashed into an asteroid moonlet and measurably changed its orbit.",
    answer: "science",
    explanation: "Real science: NASA's DART impact changed Dimorphos's orbit around Didymos."
  },
  {
    text: "Returned asteroid samples from Bennu contained amino acids and nucleobases used by life on Earth.",
    answer: "science",
    explanation: "Real science: OSIRIS-REx analyses found many organic compounds, including amino acids and DNA/RNA bases."
  },
  {
    text: "A rover on Mars made oxygen from the carbon dioxide in the Martian atmosphere.",
    answer: "science",
    explanation: "Real science: Perseverance's MOXIE instrument produced oxygen on Mars as a technology demonstration."
  },
  {
    text: "The James Webb Space Telescope detected carbon dioxide in the atmosphere of an exoplanet.",
    answer: "science",
    explanation: "Real science: Webb found a clear carbon dioxide signal in the atmosphere of WASP-39 b."
  },
  {
    text: "CERN released trapped antihydrogen and measured gravity pulling it like ordinary matter.",
    answer: "science",
    explanation: "Real science: ALPHA's result showed antihydrogen falls like ordinary matter within the experiment's precision."
  },
  {
    text: "A detector buried in Antarctic ice has found high-energy neutrinos coming from the Milky Way.",
    answer: "science",
    explanation: "Real science: IceCube reported evidence for neutrino emission from the galactic plane."
  },
  {
    text: "At NIF, fusion fuel capsules have yielded more fusion energy than the laser energy reaching the target.",
    answer: "science",
    explanation: "Real science: NIF achieved target-level fusion ignition, though not a total facility or electrical net gain."
  },
  {
    text: "Researchers have made time-crystal behavior on programmable quantum hardware.",
    answer: "science",
    explanation: "Real science: discrete time-crystal behavior has been observed in controlled quantum systems; it is not free energy."
  },
  {
    text: "Quantum teleportation has moved quantum information across tens of kilometers of optical fiber.",
    answer: "science",
    explanation: "Real science: this teleports a quantum state, not matter or a person."
  },
  {
    text: "NASA sent and received deep-space data using lasers across hundreds of millions of miles.",
    answer: "science",
    explanation: "Real science: the DSOC demonstration with Psyche tested optical communication over deep-space distances."
  },
  {
    text: "Living neurons grown on an electrode array adapted their activity in a simple Pong-like game.",
    answer: "science",
    explanation: "Real science: DishBrain linked living neurons to a simulated game environment and measured adaptive activity."
  },
  {
    text: "Tiny structures made from frog cells have moved on their own in lab experiments.",
    answer: "science",
    explanation: "Real science: xenobot studies used frog cells to create motile living constructs."
  },
  {
    text: "Scientists generate attosecond light pulses to study electron motion.",
    answer: "science",
    explanation: "Real science: attosecond pulses are short enough to probe electron dynamics."
  },
  {
    text: "The FDA approved a CRISPR-based treatment for sickle cell disease.",
    answer: "science",
    explanation: "Real science: Casgevy became an approved CRISPR gene-editing therapy."
  },
  {
    text: "A genetically edited pig kidney has been transplanted into a living human recipient.",
    answer: "science",
    explanation: "Real science: xenotransplantation trials have used genetically modified pig kidneys in human patients."
  },
  {
    text: "Brain-computer interfaces have let paralyzed people type by decoding neural activity.",
    answer: "science",
    explanation: "Real science: research systems can translate brain signals into cursor movement or text."
  },
  {
    text: "Scientists have stored digital data in synthesized DNA molecules.",
    answer: "science",
    explanation: "Real science: DNA data storage encodes bits into nucleotide sequences, though it is not consumer storage."
  },
  {
    text: "A global telescope array produced images of black hole shadows.",
    answer: "science",
    explanation: "Real science: the Event Horizon Telescope imaged shadow structures around M87* and Sagittarius A*."
  },
  {
    text: "Casimir-force experiments measure attraction caused by quantum vacuum fluctuations.",
    answer: "science",
    explanation: "Real science: the Casimir effect is a measured nanoscale quantum phenomenon."
  },
  {
    text: "Some superconductors can levitate magnets by expelling and pinning magnetic fields.",
    answer: "science",
    explanation: "Real science: the Meissner effect and flux pinning can produce stable levitation."
  },
  {
    text: "Personalized mRNA cancer vaccines can be designed around mutations found in a patient's tumor.",
    answer: "science",
    explanation: "Real science: clinical trials are testing mRNA vaccines targeted to tumor neoantigens."
  },
  {
    text: "Stem cells have self-organized into embryo-like structures that model early human development without sperm or eggs.",
    answer: "science",
    explanation: "Real science: embryo models are used for early-development research under strict limits."
  },
  {
    text: "AlphaFold-style AI systems can predict many protein structures with high accuracy.",
    answer: "science",
    explanation: "Real science: AI protein-structure prediction has become a major tool in biology."
  },
  {
    text: "Mitochondrial replacement can produce children with nuclear DNA from two parents and donor mitochondria.",
    answer: "science",
    explanation: "Real science: the technique aims to prevent some mitochondrial diseases."
  },
  {
    text: "Lab-grown organoids can reproduce selected features of human tissue development and disease.",
    answer: "science",
    explanation: "Real science: organoids model simplified features of organs, not full conscious organs."
  },
  {
    text: "Some materials become superconducting near room temperature only under enormous pressure.",
    answer: "science",
    explanation: "Real science: high-pressure hydrides can show superconductivity far above traditional temperatures."
  },
  {
    text: "A spacecraft has used ion propulsion for long-duration deep-space travel.",
    answer: "science",
    explanation: "Real science: missions such as Dawn used ion engines for efficient long-duration thrust."
  },
  {
    text: "Astronomers have detected thousands of planets outside the solar system, including rocky worlds.",
    answer: "science",
    explanation: "Real science: exoplanet surveys have confirmed thousands of planets."
  },
  {
    text: "Genetically engineered bacteria have been designed to sense disease-related molecules.",
    answer: "science",
    explanation: "Real science: synthetic biology can program microbes as biosensors in research settings."
  },
  {
    text: "Optogenetic therapy has partly restored light perception in a blind patient in a clinical study.",
    answer: "science",
    explanation: "Real science: optogenetics can make targeted cells light-sensitive, though results remain limited."
  },
  {
    text: "The James Webb Space Telescope identified a repeating industrial pollutant pattern in an exoplanet atmosphere.",
    answer: "scifi",
    explanation: "Science fiction: Webb can analyze some atmospheres, but no industrial technosignature has been confirmed."
  },
  {
    text: "NASA's DART mission moved an asteroid into a stable parking orbit for mining.",
    answer: "scifi",
    explanation: "Science fiction: DART changed an orbit slightly; it did not capture or park an asteroid."
  },
  {
    text: "MOXIE produced enough oxygen on Mars to support an astronaut for a full day.",
    answer: "scifi",
    explanation: "Science fiction: MOXIE made small experimental amounts, not life-support quantities."
  },
  {
    text: "A commercial CRISPR clinic can safely rewrite an adult's eye color throughout the body.",
    answer: "scifi",
    explanation: "Science fiction: approved CRISPR therapies are narrow medical treatments, not whole-body cosmetic rewrites."
  },
  {
    text: "Quantum teleportation has transported a living bacterium through fiber-optic cable.",
    answer: "scifi",
    explanation: "Science fiction: experiments teleport quantum states, not living organisms."
  },
  {
    text: "A fusion facility has generated net electricity for a city grid.",
    answer: "scifi",
    explanation: "Science fiction: fusion ignition experiments are not yet grid power plants."
  },
  {
    text: "An AI system has kept a commercial fusion reactor's burning plasma stable for an entire day.",
    answer: "scifi",
    explanation: "Science fiction: AI has helped control research plasmas, but this commercial milestone has not happened."
  },
  {
    text: "A time-crystal device has stored retrievable quantum information indefinitely at room temperature.",
    answer: "scifi",
    explanation: "Science fiction: time-crystal behavior is real in controlled systems, but this practical memory device does not exist."
  },
  {
    text: "The Bennu asteroid sample contained a dormant microbe that revived in a clean room.",
    answer: "scifi",
    explanation: "Science fiction: Bennu samples contain organic chemistry, not confirmed living organisms."
  },
  {
    text: "CERN measured antihydrogen falling about 10% slower than hydrogen in Earth's gravity.",
    answer: "scifi",
    explanation: "Science fiction: ALPHA saw antihydrogen fall like ordinary matter within current precision."
  },
  {
    text: "A prototype neutrino link has transmitted image data through Earth's diameter at internet-like speeds.",
    answer: "scifi",
    explanation: "Science fiction: neutrino communication is far too limited for practical high-speed data links."
  },
  {
    text: "A stem-cell embryo model was grown into a healthy human baby without sperm or an egg.",
    answer: "scifi",
    explanation: "Science fiction: embryo models are research models and are not viable human pregnancies."
  },
  {
    text: "A brain organoid connected to electrodes recognized spoken words at the level of a small speech model.",
    answer: "scifi",
    explanation: "Science fiction: organoids and neuron cultures are far from robust speech recognition systems."
  },
  {
    text: "Xenobots have been approved to repair spinal cord injuries inside human patients.",
    answer: "scifi",
    explanation: "Science fiction: xenobots remain experimental lab constructs, not approved clinical tools."
  },
  {
    text: "A late-stage personalized mRNA vaccine trial proved recurrence prevention across most tested tumor types.",
    answer: "scifi",
    explanation: "Science fiction: mRNA cancer vaccines are promising, but this broad late-stage result has not been shown."
  },
  {
    text: "A brain-computer interface reconstructed a remembered childhood scene as a detailed video clip.",
    answer: "scifi",
    explanation: "Science fiction: BCIs can decode limited signals, not replay detailed autobiographical memories."
  },
  {
    text: "Astronomers confirmed oxygen and artificial radio traffic from an inhabited exoplanet.",
    answer: "scifi",
    explanation: "Science fiction: no confirmed inhabited exoplanet or alien technosignature has been found."
  },
  {
    text: "NASA's laser communications experiment removed the light-time delay from a deep-space video stream.",
    answer: "scifi",
    explanation: "Science fiction: optical links can raise bandwidth, but they cannot remove light-travel delay."
  },
  {
    text: "A public quantum computer has broken RSA-2048 encryption.",
    answer: "scifi",
    explanation: "Science fiction: large-scale cryptographically relevant quantum computers do not exist yet."
  },
  {
    text: "DNA data storage has been implanted into human neurons to add searchable digital memory.",
    answer: "scifi",
    explanation: "Science fiction: DNA can store data in molecules, but it is not a brain memory upgrade."
  },
  {
    text: "A chromosome-scale dinosaur genome has been assembled from amber-preserved tissue.",
    answer: "scifi",
    explanation: "Science fiction: dinosaur DNA is far too degraded for a complete recovered genome."
  },
  {
    text: "An artificial womb has grown a human from fertilization to birth outside the body.",
    answer: "scifi",
    explanation: "Science fiction: artificial womb research is limited and has not replaced full human pregnancy."
  },
  {
    text: "A room-temperature, ambient-pressure superconductor has been independently verified in bulk samples.",
    answer: "scifi",
    explanation: "Science fiction: no ambient-condition bulk superconductor has been reliably verified."
  },
  {
    text: "A laboratory antimatter thruster has produced spacecraft-scale thrust in a vacuum test.",
    answer: "scifi",
    explanation: "Science fiction: antimatter propulsion remains speculative and far beyond practical fuel production."
  },
  {
    text: "An interferometer experiment detected a microscopic warp bubble that displaced a laser pulse.",
    answer: "scifi",
    explanation: "Science fiction: warp-drive ideas are theoretical; no working warp bubble has been detected."
  },
  {
    text: "A broad-spectrum antiviral has been approved that clears influenza, HIV, and coronaviruses with one regimen.",
    answer: "scifi",
    explanation: "Science fiction: approved antivirals are still virus-specific or class-limited."
  },
  {
    text: "A particle collider created a microscopic black-hole candidate that decayed by Hawking radiation.",
    answer: "scifi",
    explanation: "Science fiction: colliders have not produced confirmed microscopic black holes."
  },
  {
    text: "Engineered Mars soil farms now convert the Martian atmosphere into breathable air at settlement scale.",
    answer: "scifi",
    explanation: "Science fiction: Mars oxygen production has only been demonstrated at small experimental scale."
  },
  {
    text: "A laptop-sized fusion module has delivered net electrical output for hours.",
    answer: "scifi",
    explanation: "Science fiction: compact net-electric fusion modules have not been demonstrated."
  },
  {
    text: "A woolly mammoth calf has already been born from CRISPR-edited elephant cells.",
    answer: "scifi",
    explanation: "Science fiction: de-extinction work is ongoing, but no mammoth calf has been born."
  }
];

const roundCount = 30;
const totalRounds = Math.min(roundCount, statements.length);

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

function buildDeck() {
  const science = shuffle(statements.filter((statement) => statement.answer === "science"));
  const scifi = shuffle(statements.filter((statement) => statement.answer === "scifi"));
  const perCategory = Math.floor(totalRounds / 2);
  const balanced = [
    ...science.slice(0, perCategory),
    ...scifi.slice(0, perCategory)
  ];

  if (balanced.length < totalRounds) {
    const remaining = shuffle(statements.filter((statement) => !balanced.includes(statement)));
    balanced.push(...remaining.slice(0, totalRounds - balanced.length));
  }

  return shuffle(balanced);
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
    feedbackEl.textContent = `Correct. ${current.explanation}`;
  } else {
    streak = 0;
    feedbackEl.className = "feedback incorrect";
    const label = current.answer === "science" ? "Real Science" : "Science Fiction";
    feedbackEl.textContent = `Not quite. Correct answer: ${label}. ${current.explanation}`;
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
  deck = buildDeck();
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
