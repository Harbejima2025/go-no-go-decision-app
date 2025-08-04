// consolidation.js

function parseResponses(rawText) {
  // Split by empty line(s)
  const chunks = rawText.trim().split(/\n\s*\n/);
  const parsed = [];
  for (const chunk of chunks) {
    try {
      const obj = JSON.parse(chunk);
      if (obj.answers) {
        parsed.push(obj);
      }
    } catch {
      // skip invalid JSON
    }
  }
  return parsed;
}

function consolidateAnswers(responses) {
  // Structure: { questionId: [answers from people] }
  const consolidated = {};
  questions.forEach((q) => {
    consolidated[q.id] = [];
  });

  responses.forEach((resp) => {
    Object.entries(resp.answers).forEach(([qid, ans]) => {
      if (ans && ans.trim() !== "") {
        consolidated[qid].push(ans.trim());
      }
    });
  });

  return consolidated;
}

function displayConsolidated(consolidated) {
  const container = document.getElementById("consolidatedOutput");
  container.innerHTML = "";

  for (const [qid, answers] of Object.entries(consolidated)) {
    if (answers.length === 0) continue;
    const q = questions.find((q) => q.id === qid);
    const div = document.createElement("div");
    div.className = "consolidated-block";

    const title = document.createElement("h3");
    title.textContent = `${qid} (${q.area}): ${q.text}`;
    div.appendChild(title);

    const ul = document.createElement("ul");
    answers.forEach((ans, i) => {
      const li = document.createElement("li");
      li.textContent = ans;
      ul.appendChild(li);
    });
    div.appendChild(ul);
    container.appendChild(div);
  }
}

document.getElementById("consolidateBtn").addEventListener("click", () => {
  const rawText = document.getElementById("responsesInput").value;
  if (!rawText.trim()) {
    alert("Please paste at least one JSON response.");
    return;
  }
  const responses = parseResponses(rawText);
  if (responses.length === 0) {
    alert("No valid JSON responses found. Check formatting.");
    return;
  }
  const consolidated = consolidateAnswers(responses);
  displayConsolidated(consolidated);

  // Also generate summary
  const summary = generateSummary(consolidated);
  document.getElementById("summaryOutput").textContent = summary;
});
