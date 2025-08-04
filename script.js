// script.js

// Wait for DOM ready
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("questionsContainer");
  const form = document.getElementById("responseForm");
  const jsonOutput = document.getElementById("jsonOutput");

  // For each question, create input area
  questions.forEach((q) => {
    const div = document.createElement("div");
    div.className = "question-block";

    const label = document.createElement("label");
    label.htmlFor = q.id;
    label.innerHTML = `<strong>${q.id} (${q.area} - ${q.type}):</strong> ${q.text}`;

    const textarea = document.createElement("textarea");
    textarea.id = q.id;
    textarea.name = q.id;
    textarea.rows = 3;
    textarea.cols = 80;
    textarea.placeholder = "Type your answer here...";

    div.appendChild(label);
    div.appendChild(document.createElement("br"));
    div.appendChild(textarea);
    container.appendChild(div);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const response = {
      timestamp: new Date().toISOString(),
      answers: {},
    };

    questions.forEach((q) => {
      const val = document.getElementById(q.id).value.trim();
      response.answers[q.id] = val;
    });

    jsonOutput.value = JSON.stringify(response, null, 2);
    alert("Answers collected! Please copy the JSON output and save it.");
  });
});
