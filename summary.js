// summary.js
function generateSummary(responses) {
  const summaryContainer = document.getElementById("summaryContainer");
  const questionStats = {}; // Map: question ID => { total, blank, texts[] }

  // Aggregate responses
  responses.forEach((res) => {
    Object.entries(res.responses).forEach(([qid, answer]) => {
      if (!questionStats[qid]) {
        questionStats[qid] = { total: 0, blank: 0, texts: [] };
      }
      questionStats[qid].total++;
      if (!answer.trim()) {
        questionStats[qid].blank++;
      }
      questionStats[qid].texts.push(answer.trim());
    });
  });

  // Prepare HTML
  let html = "<h3>🧮 Response Summary by Question</h3><table><thead><tr><th>Question ID</th><th>Answered</th><th>Blank</th><th>Agreement</th></tr></thead><tbody>";

  let redFlags = [];

  Object.entries(questionStats).forEach(([qid, stat]) => {
    const uniqueAnswers = new Set(stat.texts.filter((t) => t));
    const consensus = uniqueAnswers.size === 1 ? "✅ Yes" : (uniqueAnswers.size <= 3 ? "⚠️ Partial" : "❌ No");

    if (consensus === "❌ No" || stat.blank > responses.length / 3) {
      redFlags.push(qid);
    }

    html += `<tr>
      <td>${qid}</td>
      <td>${stat.total - stat.blank}</td>
      <td>${stat.blank}</td>
      <td>${consensus}</td>
    </tr>`;
  });

  html += "</tbody></table>";

  // Generate final recommendation
  const goThreshold = Object.values(questionStats).filter(q => q.blank < responses.length / 3 && new Set(q.texts).size === 1).length;
  const totalQuestions = Object.keys(questionStats).length;
  const goRatio = goThreshold / totalQuestions;

  let finalRec = "";
  if (redFlags.length > 10 || goRatio < 0.6) {
    finalRec = "❌ NO-GO";
  } else if (goRatio >= 0.6 && goRatio < 0.85) {
    finalRec = "⚠️ HOLD – Needs further discussion";
  } else {
    finalRec = "✅ GO";
  }

  html += `<h3>🚦 Recommendation: <strong>${finalRec}</strong></h3>`;
  if (redFlags.length > 0) {
    html += `<p>⚠️ <strong>Red Flags</strong> found in the following question IDs: ${redFlags.join(", ")}</p>`;
  }

  summaryContainer.innerHTML = html;
}
