const quizSections = [
  {
    id: "section-1",
    title: "Economics Quiz - Section 1",
    eyebrow: "Revision sprint",
    description:
      "Questions 1 a 10 issues de ton premier quiz, avec correction immediate, score live, progression, navigation arriere et sauvegarde automatique.",
    questions: [
      {
        shortLabel: "1",
        group: "Section 1",
        meta: "Question 1",
        prompt: "Select the correct statement:",
        options: [
          {
            text: "Economic theory assumes that firms maximize their profits and all empirical studies confirm this.",
            correct: false
          },
          {
            text: "Economyc theory assumes that firms maximize their revenues and all empirical studies confirm this.",
            correct: false
          },
          {
            text: "Economic theory assumes that firms maximize their profits but this is not always the case in reality.",
            correct: true
          }
        ]
      },
      {
        shortLabel: "2",
        group: "Section 1",
        meta: "Question 2",
        prompt: "A carbon tax of EUR 100 per ton of CO2:",
        options: [
          {
            text: "Would very heavily penalize any transport af raw materials by sea.",
            correct: false
          },
          {
            text: "Would have a low impact on the cost of transporting cotton between China and France by sea.",
            correct: true
          },
          {
            text: "Is lower than the amout of the carbon tax currently applicable in France.",
            correct: false
          }
        ]
      },
      {
        shortLabel: "3",
        group: "Section 1",
        meta: "Question 3",
        prompt: "Select the correct statement:",
        options: [
          {
            text: "If a firm is a price taker, marginal revenue is constant.",
            correct: true
          },
          {
            text: "If a firm is a price maker, marginal revenue is increasing.",
            correct: false
          },
          {
            text: "If a firm is a price taker, marginal revenue is decreasing.",
            correct: false
          }
        ]
      },
      {
        shortLabel: "4",
        group: "Section 1",
        meta: "Question 4",
        prompt: "In his 2006 article published in the Journal of Political Economy, David Romer:",
        options: [
          {
            text: "Studied all decisions of American sports companies.",
            correct: false
          },
          {
            text: "Studied some strategic decisions of American football teams.",
            correct: true
          },
          {
            text: "Studied sports betting to see if bettors are maximizing their profits.",
            correct: false
          }
        ]
      },
      {
        shortLabel: "5",
        group: "Section 1",
        meta: "Question 5",
        prompt: "The more a firm produces and sells:",
        options: [
          {
            text: "The lower the average cost.",
            correct: false
          },
          {
            text: "The higher the profits.",
            correct: false
          },
          {
            text: "The higher the revenue.",
            correct: true
          }
        ]
      },
      {
        shortLabel: "6",
        group: "Section 1",
        meta: "Question 6",
        prompt: "Select the correct statement:",
        options: [
          {
            text: "Accounting costs and economic costs are synonymous.",
            correct: false
          },
          {
            text: "Opportunity costs must be included in economic reasoning.",
            correct: true
          },
          {
            text: "Opportunity costs are always more important than accounting costs.",
            correct: false
          }
        ]
      },
      {
        shortLabel: "7",
        group: "Section 1",
        meta: "Question 7",
        prompt: "In a situation of diseconomies of scale:",
        options: [
          {
            text: "The marginal cost and the average cost are increasing.",
            correct: true
          },
          {
            text: "The marginal cost is increasing and the average cost is decreasing.",
            correct: false
          },
          {
            text: "Variable cost and marginal cost are decreasing.",
            correct: false
          }
        ]
      },
      {
        shortLabel: "8",
        group: "Section 1",
        meta: "Question 8",
        prompt: "Select the correct statement:",
        options: [
          {
            text: "The variable cost curve, in its descending part, gives the firm's demand curve.",
            correct: false
          },
          {
            text: "The marginal cost curve, in its rising part, gives the firm's supply curve.",
            correct: true
          },
          {
            text: "The profit curve indicates for any price, the quantity produced by the firm.",
            correct: false
          }
        ]
      },
      {
        shortLabel: "9",
        group: "Section 1",
        meta: "Question 9",
        prompt: "Select the correct statement:",
        options: [
          {
            text: "In the short run, when the fixed costs are sunk, it is sometimes necessary to produce even if the profit is negative.",
            correct: true
          },
          {
            text: "In the long run, when the fixed costs are not sunk, it is sometimes necessary to produce even if the profit is negative.",
            correct: false
          },
          {
            text: "In the long run, equalizing marginal cost and marginal revenue ensures a positive profit.",
            correct: false
          }
        ]
      },
      {
        shortLabel: "10",
        group: "Section 1",
        meta: "Question 10",
        prompt: "Select the correct statement:",
        options: [
          {
            text: "Variable costs are independent of the quantity produced.",
            correct: false
          },
          {
            text: "Marginal cost is constant for a price-taking firm.",
            correct: false
          },
          {
            text: "The average variable cost is equal to the variable costs divided by the quantity produced.",
            correct: true
          }
        ]
      }
    ]
  },
  {
    id: "lab",
    title: "Economics Quiz - Lab Section",
    eyebrow: "Labs",
    description:
      "20 questions originales, 2 par lab, construites a partir des supports fournis et ordonnees module par module pour viser les points les plus probables au partiel.",
    questions: [
      {
        shortLabel: "1A",
        group: "Lab 1 - Production and firms",
        meta: "Module 1",
        prompt: "In the lab, if the extra EUR 5,000 cost is still avoidable and every production level yields a negative profit, what is the profit-maximizing decision?",
        options: [
          {
            text: "Produce 3,000 units, because this gives the smallest loss among positive outputs.",
            correct: false
          },
          {
            text: "Produce 4,000 units, because revenue is highest there.",
            correct: false
          },
          {
            text: "Produce nothing, because the true maximum profit is zero.",
            correct: true
          }
        ]
      },
      {
        shortLabel: "1B",
        group: "Lab 1 - Production and firms",
        meta: "Module 1",
        prompt: "If the EUR 5,000 has already been spent and is sunk, what is the best decision in the lab?",
        options: [
          {
            text: "Produce 3,000 units to minimize the loss.",
            correct: true
          },
          {
            text: "Produce nothing, because sunk costs should always be recovered first.",
            correct: false
          },
          {
            text: "Produce 4,000 units, because sunk costs make marginal cost irrelevant.",
            correct: false
          }
        ]
      },
      {
        shortLabel: "2A",
        group: "Lab 2 - Consumption and behavior",
        meta: "Module 2",
        prompt: "In Experiment 1, the first question about paying EUR 1 or EUR 1,000 mainly affected the second answer because of:",
        options: [
          {
            text: "the anchor effect.",
            correct: true
          },
          {
            text: "the sunk cost effect.",
            correct: false
          },
          {
            text: "adverse selection.",
            correct: false
          }
        ]
      },
      {
        shortLabel: "2B",
        group: "Lab 2 - Consumption and behavior",
        meta: "Module 2",
        prompt: "In the dinnerware experiment, why was the 24-piece intact set often valued more than the 40-piece set with some broken pieces?",
        options: [
          {
            text: "Because people focused on average quality in separate evaluation.",
            correct: true
          },
          {
            text: "Because 24 pieces always provide more utility than 40 pieces.",
            correct: false
          },
          {
            text: "Because the larger set had a higher storage cost.",
            correct: false
          }
        ]
      },
      {
        shortLabel: "3A",
        group: "Lab 3 - Strategic interactions",
        meta: "Module 3",
        prompt: "In the two-thirds beauty contest, what is the Nash equilibrium if everyone reasons all the way through the game?",
        options: [
          {
            text: "50",
            correct: false
          },
          {
            text: "33",
            correct: false
          },
          {
            text: "0",
            correct: true
          }
        ]
      },
      {
        shortLabel: "3B",
        group: "Lab 3 - Strategic interactions",
        meta: "Module 3",
        prompt: "When the winners shared a prize proportional to the average chosen number, what happened to the Nash equilibrium?",
        options: [
          {
            text: "It moved up because everyone wanted a larger prize.",
            correct: false
          },
          {
            text: "It remained at 0.",
            correct: true
          },
          {
            text: "It depended entirely on whether players could communicate.",
            correct: false
          }
        ]
      },
      {
        shortLabel: "4A",
        group: "Lab 4 - Industrial organization",
        meta: "Module 4",
        prompt: "In the simultaneous quantity game of the lab, what is the Cournot duopoly equilibrium?",
        options: [
          {
            text: "Each firm produces 3.",
            correct: false
          },
          {
            text: "Each firm produces 4.",
            correct: true
          },
          {
            text: "Firm A produces 6 and Firm B produces 3.",
            correct: false
          }
        ]
      },
      {
        shortLabel: "4B",
        group: "Lab 4 - Industrial organization",
        meta: "Module 4",
        prompt: "In the sequential game, what Stackelberg outcome did the lab identify?",
        options: [
          {
            text: "Firm A chooses 6 and Firm B chooses 3.",
            correct: true
          },
          {
            text: "Both firms choose 4.",
            correct: false
          },
          {
            text: "Both firms choose 3 after communicating.",
            correct: false
          }
        ]
      },
      {
        shortLabel: "5A",
        group: "Lab 5 - Incentives",
        meta: "Module 5",
        prompt: "With a single full-insurance contract priced at the average fair premium of 3 points, what problem appears in the lab?",
        options: [
          {
            text: "Moral hazard only.",
            correct: false
          },
          {
            text: "Adverse selection: mainly high-loss players buy insurance.",
            correct: true
          },
          {
            text: "The insurer makes a profit because everyone buys insurance.",
            correct: false
          }
        ]
      },
      {
        shortLabel: "5B",
        group: "Lab 5 - Incentives",
        meta: "Module 5",
        prompt: "In Game 3, what mechanism solves the single-contract problem?",
        options: [
          {
            text: "Compulsory insurance only.",
            correct: false
          },
          {
            text: "A self-selection mechanism created by a menu of contracts.",
            correct: true
          },
          {
            text: "An anchor effect on the players' risk perceptions.",
            correct: false
          }
        ]
      },
      {
        shortLabel: "6A",
        group: "Lab 6 - Inflation and unemployment",
        meta: "Module 6",
        prompt: "In the job search model, the reservation wage is:",
        options: [
          {
            text: "the wage that maximizes the employer's profit.",
            correct: false
          },
          {
            text: "the minimum offer at which the job seeker accepts.",
            correct: true
          },
          {
            text: "the unemployment benefit itself.",
            correct: false
          }
        ]
      },
      {
        shortLabel: "6B",
        group: "Lab 6 - Inflation and unemployment",
        meta: "Module 6",
        prompt: "According to the lab's job search model, which statement is correct?",
        options: [
          {
            text: "High unemployment lowers the reservation wage, while unemployment benefits tend to increase it.",
            correct: true
          },
          {
            text: "High unemployment and unemployment benefits both lower the reservation wage.",
            correct: false
          },
          {
            text: "The reservation wage stays constant throughout the search process.",
            correct: false
          }
        ]
      },
      {
        shortLabel: "7A",
        group: "Lab 7 - GDP and fiscal policy",
        meta: "Module 7",
        prompt: "In the village lab, when government demand for each good is 20 and households consume 80% of production, equilibrium production per household is:",
        options: [
          {
            text: "20",
            correct: false
          },
          {
            text: "100",
            correct: true
          },
          {
            text: "200",
            correct: false
          }
        ]
      },
      {
        shortLabel: "7B",
        group: "Lab 7 - GDP and fiscal policy",
        meta: "Module 7",
        prompt: "In that same lab, what is the fiscal multiplier?",
        options: [
          {
            text: "1",
            correct: false
          },
          {
            text: "5",
            correct: true
          },
          {
            text: "20",
            correct: false
          }
        ]
      },
      {
        shortLabel: "8A",
        group: "Lab 8 - Money and monetary policy",
        meta: "Module 8",
        prompt: "Which good tends to emerge endogenously as money in the lab?",
        options: [
          {
            text: "Good 1, because it has the lowest storage cost.",
            correct: true
          },
          {
            text: "Good 2, because Type 1 agents produce it.",
            correct: false
          },
          {
            text: "Good 3, because it depreciates the most.",
            correct: false
          }
        ]
      },
      {
        shortLabel: "8B",
        group: "Lab 8 - Money and monetary policy",
        meta: "Module 8",
        prompt: "Which classic inefficiency of barter does the emergence of money help relax in the lab?",
        options: [
          {
            text: "Diminishing marginal productivity.",
            correct: false
          },
          {
            text: "The double coincidence of wants.",
            correct: true
          },
          {
            text: "Adverse selection.",
            correct: false
          }
        ]
      },
      {
        shortLabel: "9A",
        group: "Lab 9 - Environment",
        meta: "Module 9",
        prompt: "With a carbon tax of EUR 50 per ton of CO2, equivalent to EUR 1 per unit produced, what becomes the firm's optimal output in the lab?",
        options: [
          {
            text: "2 units",
            correct: false
          },
          {
            text: "3 units",
            correct: true
          },
          {
            text: "4 units",
            correct: false
          }
        ]
      },
      {
        shortLabel: "9B",
        group: "Lab 9 - Environment",
        meta: "Module 9",
        prompt: "In Round 3, with a carbon tax of EUR 100 per ton of CO2, what is the optimal output of a firm whose R&D succeeds and cuts emissions to 10 kg per unit?",
        options: [
          {
            text: "2 units",
            correct: false
          },
          {
            text: "3 units",
            correct: true
          },
          {
            text: "4 units",
            correct: false
          }
        ]
      },
      {
        shortLabel: "10A",
        group: "Lab 10 - Growth",
        meta: "Module 10",
        prompt: "In the growth lab, one core concept explicitly used to compare green growth and degrowth is:",
        options: [
          {
            text: "decoupling.",
            correct: true
          },
          {
            text: "stagflation.",
            correct: false
          },
          {
            text: "comparative advantage.",
            correct: false
          }
        ]
      },
      {
        shortLabel: "10B",
        group: "Lab 10 - Growth",
        meta: "Module 10",
        prompt: "In the post-growth perspective highlighted by the lab's paper list, the central goal is to:",
        options: [
          {
            text: "maximize GDP regardless of environmental limits.",
            correct: false
          },
          {
            text: "improve human wellbeing within planetary boundaries.",
            correct: true
          },
          {
            text: "eliminate all technological innovation.",
            correct: false
          }
        ]
      }
    ]
  }
];

const STORAGE_KEY = "economics-quiz-progress-v2";

const state = createInitialState();

const elements = {
  heroEyebrow: document.querySelector("#heroEyebrow"),
  heroTitle: document.querySelector("#heroTitle"),
  heroText: document.querySelector("#heroText"),
  sectionButtons: document.querySelector("#sectionButtons"),
  liveScore: document.querySelector("#liveScore"),
  correctCount: document.querySelector("#correctCount"),
  incorrectCount: document.querySelector("#incorrectCount"),
  remainingCount: document.querySelector("#remainingCount"),
  progressTitle: document.querySelector("#progressTitle"),
  progressCopy: document.querySelector("#progressCopy"),
  progressFill: document.querySelector("#progressFill"),
  questionGrid: document.querySelector("#questionGrid"),
  questionLabel: document.querySelector("#questionLabel"),
  questionMeta: document.querySelector("#questionMeta"),
  responseState: document.querySelector("#responseState"),
  questionPrompt: document.querySelector("#questionPrompt"),
  optionsList: document.querySelector("#optionsList"),
  feedbackBox: document.querySelector("#feedbackBox"),
  prevButton: document.querySelector("#prevButton"),
  nextButton: document.querySelector("#nextButton"),
  clearButton: document.querySelector("#clearButton"),
  resetButton: document.querySelector("#resetButton")
};

function createInitialState() {
  const answersBySection = {};
  const currentIndexBySection = {};

  quizSections.forEach((section) => {
    answersBySection[section.id] = Array.from({ length: section.questions.length }, () => null);
    currentIndexBySection[section.id] = 0;
  });

  return {
    currentSectionId: quizSections[0].id,
    currentIndexBySection,
    answersBySection
  };
}

function getCurrentSection() {
  return quizSections.find((section) => section.id === state.currentSectionId);
}

function getCurrentAnswers() {
  return state.answersBySection[state.currentSectionId];
}

function getCurrentIndex() {
  return state.currentIndexBySection[state.currentSectionId];
}

function setCurrentIndex(nextIndex) {
  const currentSection = getCurrentSection();
  state.currentIndexBySection[state.currentSectionId] = clamp(nextIndex, 0, currentSection.questions.length - 1);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function loadState() {
  try {
    const savedState = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "null");
    if (!savedState) {
      return;
    }

    if (typeof savedState.currentSectionId === "string" && quizSections.some((section) => section.id === savedState.currentSectionId)) {
      state.currentSectionId = savedState.currentSectionId;
    }

    quizSections.forEach((section) => {
      const savedAnswers = savedState.answersBySection?.[section.id];
      if (Array.isArray(savedAnswers) && savedAnswers.length === section.questions.length) {
        state.answersBySection[section.id] = savedAnswers.map((value) => (Number.isInteger(value) ? value : null));
      }

      const savedIndex = savedState.currentIndexBySection?.[section.id];
      if (Number.isInteger(savedIndex)) {
        state.currentIndexBySection[section.id] = clamp(savedIndex, 0, section.questions.length - 1);
      }
    });
  } catch (error) {
    console.warn("Could not restore the quiz progress.", error);
  }
}

function saveState() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getAnswerState(sectionId, questionIndex) {
  const answerIndex = state.answersBySection[sectionId][questionIndex];
  if (answerIndex === null) {
    return "empty";
  }

  const section = quizSections.find((item) => item.id === sectionId);
  return section.questions[questionIndex].options[answerIndex].correct ? "correct" : "incorrect";
}

function computeStats(sectionId) {
  const section = quizSections.find((item) => item.id === sectionId);

  return state.answersBySection[sectionId].reduce(
    (stats, answerIndex, questionIndex) => {
      if (answerIndex === null) {
        stats.remaining += 1;
        return stats;
      }

      stats.answered += 1;
      if (section.questions[questionIndex].options[answerIndex].correct) {
        stats.correct += 1;
        stats.score += 1;
      } else {
        stats.incorrect += 1;
        stats.score -= 0.5;
      }
      return stats;
    },
    {
      answered: 0,
      correct: 0,
      incorrect: 0,
      remaining: 0,
      score: 0
    }
  );
}

function renderHero() {
  const section = getCurrentSection();
  document.title = section.title;
  elements.heroEyebrow.textContent = section.eyebrow;
  elements.heroTitle.textContent = section.title;
  elements.heroText.textContent = section.description;
}

function renderSectionButtons() {
  elements.sectionButtons.innerHTML = "";

  quizSections.forEach((section) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "section-button";
    if (section.id === state.currentSectionId) {
      button.classList.add("section-button--active");
    }

    button.innerHTML = `
      <span class="section-button__title">${section.title.replace("Economics Quiz - ", "")}</span>
      <span class="section-button__meta">${section.questions.length} questions</span>
    `;

    button.addEventListener("click", () => {
      state.currentSectionId = section.id;
      saveState();
      render();
    });

    elements.sectionButtons.appendChild(button);
  });
}

function renderQuestionGrid() {
  const section = getCurrentSection();
  const currentIndex = getCurrentIndex();
  elements.questionGrid.innerHTML = "";

  section.questions.forEach((question, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `question-chip question-chip--${getAnswerState(section.id, index)}`;
    if (index === currentIndex) {
      button.classList.add("question-chip--current");
    }
    button.textContent = question.shortLabel ?? String(index + 1);
    button.setAttribute("aria-label", `Aller a la question ${question.shortLabel ?? index + 1}`);
    button.addEventListener("click", () => {
      setCurrentIndex(index);
      saveState();
      render();
    });
    elements.questionGrid.appendChild(button);
  });
}

function renderStats() {
  const section = getCurrentSection();
  const stats = computeStats(section.id);
  const totalQuestions = section.questions.length;
  const currentIndex = getCurrentIndex();
  const progressRatio = (stats.answered / totalQuestions) * 100;

  elements.liveScore.textContent = stats.score % 1 === 0 ? stats.score.toString() : stats.score.toFixed(1);
  elements.correctCount.textContent = String(stats.correct);
  elements.incorrectCount.textContent = String(stats.incorrect);
  elements.remainingCount.textContent = String(stats.remaining);
  elements.progressTitle.textContent = `Question ${currentIndex + 1} sur ${totalQuestions}`;
  elements.progressCopy.textContent = `${stats.answered} reponse${stats.answered > 1 ? "s" : ""} sur ${totalQuestions}`;
  elements.progressFill.style.width = `${progressRatio}%`;
}

function renderCurrentQuestion() {
  const section = getCurrentSection();
  const currentIndex = getCurrentIndex();
  const answers = getCurrentAnswers();
  const question = section.questions[currentIndex];
  const answerIndex = answers[currentIndex];
  const answerState = getAnswerState(section.id, currentIndex);

  elements.questionLabel.textContent = question.group;
  elements.questionMeta.textContent = `${question.meta} - Repere ${question.shortLabel}`;
  elements.questionPrompt.textContent = question.prompt;
  elements.responseState.textContent =
    answerState === "correct" ? "Correct" : answerState === "incorrect" ? "Incorrect" : "Non repondu";
  elements.responseState.className = `state-pill state-pill--${answerState}`;

  elements.optionsList.innerHTML = "";

  question.options.forEach((option, optionIndex) => {
    const optionButton = document.createElement("button");
    optionButton.type = "button";
    optionButton.className = "option-card";

    if (answerIndex === optionIndex) {
      optionButton.classList.add("option-card--selected");
    }

    if (answerIndex !== null && option.correct) {
      optionButton.classList.add("option-card--correct");
    }

    if (answerIndex === optionIndex && !option.correct) {
      optionButton.classList.add("option-card--incorrect");
    }

    optionButton.innerHTML = `
      <span class="option-card__index">${String.fromCharCode(65 + optionIndex)}</span>
      <span class="option-card__text">${option.text}</span>
    `;

    optionButton.setAttribute("aria-pressed", answerIndex === optionIndex ? "true" : "false");
    optionButton.addEventListener("click", () => {
      answers[currentIndex] = optionIndex;
      saveState();
      render();
    });

    elements.optionsList.appendChild(optionButton);
  });

  renderFeedback(question, answerIndex);
  elements.prevButton.disabled = currentIndex === 0;
  elements.nextButton.disabled = currentIndex === section.questions.length - 1;
  elements.clearButton.disabled = answerIndex === null;
}

function renderFeedback(question, answerIndex) {
  if (answerIndex === null) {
    elements.feedbackBox.className = "feedback-box feedback-box--idle";
    elements.feedbackBox.textContent = "Choisis une reponse pour voir tout de suite si elle est juste ou fausse.";
    return;
  }

  const selectedOption = question.options[answerIndex];
  const correctOption = question.options.find((option) => option.correct);

  if (selectedOption.correct) {
    elements.feedbackBox.className = "feedback-box feedback-box--correct";
    elements.feedbackBox.innerHTML = "<strong>Bonne reponse.</strong> Tu gagnes 1 point sur cette question.";
    return;
  }

  elements.feedbackBox.className = "feedback-box feedback-box--incorrect";
  elements.feedbackBox.innerHTML = `
    <strong>Faux.</strong> Cette reponse ferait perdre 0.5 point a l'examen.
    <br>
    <strong>Bonne reponse:</strong> ${correctOption.text}
  `;
}

function render() {
  renderHero();
  renderSectionButtons();
  renderStats();
  renderQuestionGrid();
  renderCurrentQuestion();
}

function goToQuestion(nextIndex) {
  setCurrentIndex(nextIndex);
  saveState();
  render();
}

function resetCurrentSection() {
  const section = getCurrentSection();
  const shouldReset = window.confirm(`Reinitialiser ${section.title.replace("Economics Quiz - ", "")} et effacer tes reponses ?`);
  if (!shouldReset) {
    return;
  }

  state.answersBySection[section.id] = Array.from({ length: section.questions.length }, () => null);
  state.currentIndexBySection[section.id] = 0;
  saveState();
  render();
}

function wireEvents() {
  elements.prevButton.addEventListener("click", () => {
    goToQuestion(getCurrentIndex() - 1);
  });

  elements.nextButton.addEventListener("click", () => {
    goToQuestion(getCurrentIndex() + 1);
  });

  elements.clearButton.addEventListener("click", () => {
    getCurrentAnswers()[getCurrentIndex()] = null;
    saveState();
    render();
  });

  elements.resetButton.addEventListener("click", resetCurrentSection);

  window.addEventListener("keydown", (event) => {
    if (event.target instanceof HTMLElement) {
      const tagName = event.target.tagName;
      if (tagName === "INPUT" || tagName === "TEXTAREA" || tagName === "SELECT") {
        return;
      }
    }

    if (event.key === "ArrowLeft") {
      goToQuestion(getCurrentIndex() - 1);
    }

    if (event.key === "ArrowRight") {
      goToQuestion(getCurrentIndex() + 1);
    }

    if (["1", "2", "3"].includes(event.key)) {
      const optionIndex = Number(event.key) - 1;
      getCurrentAnswers()[getCurrentIndex()] = optionIndex;
      saveState();
      render();
    }
  });
}

loadState();
wireEvents();
render();
