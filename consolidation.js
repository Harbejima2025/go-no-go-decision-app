document.addEventListener("DOMContentLoaded", () => {
  const uploadInput = document.getElementById("uploadResponses");
  const outputContainer = document.getElementById("output");

  uploadInput.addEventListener("change", async () => {
    const files = Array.from(uploadInput.files);
    const allData = [];

    for (const file of files) {
      const text = await file.text();
      const json = JSON.parse(text);
      allData.push(json);
    }

    renderConsolidatedView(allData);
  });

  function renderConsolidatedView(data) {
    outputContainer.innerHTML = "";

    data.forEach((person, index) => {
      const personSection = document.createElement("section");
      personSection.classList.add("user-section");

      const header = document.createElement("h2");
      header.textContent = `${index + 1}. ${person.user} (${person.mode.toUpperCase()})`;
      personSection.appendChild(header);

      const responseTable = document.createElement("table");
      responseTable.innerHTML = `
        <thead>
          <tr>
            <th>Question ID</th>
            <th>Response</th>
          </tr>
        </thead>
        <tbody>
          ${Object.entries(person.responses).map(([id, answer]) => `
            <tr>
              <td>${id}</td>
              <td>${answer || "<i>No response</i>"}</td>
            </tr>
          `).join("")}
        </tbody>
      `;

      personSection.appendChild(responseTable);
      outputContainer.appendChild(personSection);
    });
  }
});
