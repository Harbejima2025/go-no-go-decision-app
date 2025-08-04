// summary.js

function generateSummary(consolidated) {
  // Simple approach: count positive and negative answers keywords for decision
  // For demo, we check if any answers include "no", "not", "negative" keywords => flag

  let noCount = 0;
  let yesCount = 0;

  for (const answers of Object.values(consolidated)) {
    answers.forEach((ans) => {
      const ansLower = ans.toLowerCase();
      if (
        ansLower.includes("no") ||
        ansLower.includes("not") ||
        ansLower.includes("negative") ||
        ansLower.includes("cannot") ||
        ansLower.includes("unable") ||
        ansLower.includes("weak") ||
        ansLower.includes("insufficient")
      ) {
        noCount++;
      } else if (
        ansLower.includes("yes") ||
        ansLower.includes("strong") ||
        ansLower.includes("adequate") ||
        ansLower.includes("sufficient") ||
        ansLower.includes("good") ||
        ansLower.includes("positive") ||
        ansLower.includes("available")
      ) {
        yesCount++;
      }
    });
  }

  let decision = "Go/No-Go Decision: ";

  if (noCount > yesCount) {
    decision += "NO GO - There are more concerns flagged.";
  } else if (yesCount > noCount) {
    decision += "GO - Most responses are positive.";
  } else {
    decision += "INCONCLUSIVE - Mixed responses, please review manually.";
  }

  return decision + `\n(Yes mentions: ${yesCount}, No mentions: ${noCount})`;
}
