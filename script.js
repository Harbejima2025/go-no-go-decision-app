document.addEventListener("DOMContentLoaded", () => {
  const questionContainer = document.getElementById("questionContainer");
  const modeSelect = document.getElementById("modeSelect");
  const saveButton = document.getElementById("saveButton");
  const username = document.getElementById("username");

  function renderQuestions(mode) {
    questionContainer.innerHTML = "";

    questionsData.forEach((area, areaIndex) => {
      const areaHeader = document.createElement("h2");
      areaHeader.textContent = `${areaIndex + 1}. ${area.area}`;
      questionContainer.appendChild(areaHeader);

      area.categories.forEach((cat, catIndex) => {
        const catHeader = document.createElement("h3");
        catHeader.textContent = `${areaIndex + 1}.${catIndex + 1} ${cat.subArea}`;
        questionContainer.appendChild(catHeader);

        cat.questions.forEach((q) => {
          const questionDiv = document.createElement("div");

          const questionLabel = document.createElement("label");
          questionLabel.textContent = `${q.id} — ${q[mode]}`;
          questionLabel.setAttribute("for", `q_${q.id}`);

          const answerBox = document.createElement("textarea");
          answerBox.id = `q_${q.id}`;
          answerBox.name = q.id;

          questionDiv.appendChild(questionLabel);
          questionDiv.appendChild(answerBox);
          questionContainer.appendChild(questionDiv);
        });
      });
    });
  }

  modeSelect.addEventListener("change", () => {
    renderQuestions(modeSelect.value);
  });

  saveButton.addEventListener("click", () => {
    const mode = modeSelect.value;
    const name = username.value.trim();
    if (!name) {
      alert("Please enter your name.");
      return;
    }

    const responses = {
      user: name,
      mode: mode,
      responses: {},
      timestamp: new Date().toISOString()
    };

    const textareas = document.querySelectorAll("textarea");
    textareas.forEach((ta) => {
      responses.responses[ta.name] = ta.value.trim();
    });

    const blob = new Blob([JSON.stringify(responses, null, 2)], {
      type: "application/json",
    });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `responses_${name}_${mode}.json`;
    a.click();
  });

  // Initial render
  renderQuestions(modeSelect.value);
});
