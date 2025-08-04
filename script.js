document.addEventListener("DOMContentLoaded", () => {
  const questionContainer = document.getElementById("questionContainer");
  const modeSelect = document.getElementById("modeSelect");
  const saveButton = document.getElementById("saveButton");
  const usernameInput = document.getElementById("username");

  // Render the questions dynamically
  function renderQuestions(mode) {
    questionContainer.innerHTML = "";

    questionsData.forEach((area, areaIndex) => {
      const areaTitle = document.createElement("h2");
      areaTitle.textContent = `${areaIndex + 1}. ${area.area}`;
      questionContainer.appendChild(areaTitle);

      area.categories.forEach((category, catIndex) => {
        const categoryTitle = document.createElement("h3");
        categoryTitle.textContent = `${areaIndex + 1}.${catIndex + 1} ${category.subArea}`;
        questionContainer.appendChild(categoryTitle);

        category.questions.forEach((q) => {
          const wrapper = document.createElement("div");

          const label = document.createElement("label");
          label.textContent = `${q.id} — ${q[mode]}`;
          label.setAttribute("for", `q_${q.id}`);

          const textarea = document.createElement("textarea");
          textarea.id = `q_${q.id}`;
          textarea.name = q.id;

          wrapper.appendChild(label);
          wrapper.appendChild(textarea);
          questionContainer.appendChild(wrapper);
        });
      });
    });
  }

  // Save responses to JSON
  saveButton.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    if (!username) {
      alert("Please enter your name before saving.");
      return;
    }

    const mode = modeSelect.value;
    const responses = {
      user: username,
      mode: mode,
      responses: {},
      submittedAt: new Date().toISOString()
    };

    const textareas = document.querySelectorAll("textarea");
    textareas.forEach((ta) => {
      responses.responses[ta.name] = ta.value.trim();
    });

    const blob = new Blob([JSON.stringify(responses, null, 2)], {
      type: "application/json",
    });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${username}_${mode}_responses.json`;
    link.click();
  });

  // Initial render
  modeSelect.addEventListener("change", () => {
    renderQuestions(modeSelect.value);
  });

  renderQuestions(modeSelect.value);
});
