document.addEventListener("DOMContentLoaded", () => {
  const uploadInput = document.getElementById("uploadResponses");
  const output = document.getElementById("consolidatedOutput");

  uploadInput.addEventListener("change", async () => {
    const files = Array.from(uploadInput.files);
    const responses = [];

    for (const file of files) {
      const text = await file.text();
      const json = JSON.parse(text);
      responses.push(json);
    }

    displayResponses(responses);
  });

  function displayResponses(data) {
    output.innerHTML = ""; // Clear old results

    data.forEach((res, index) => {
      const section = document.createElement("section");
      section.className = "user-section";

      const title = document.createElement("h2");
      title.textContent = `${index + 1}. ${res.user} (${res.mode.toUpperCase()})`;
      section.appendChild(title);

      const table = document.createElement("table");
      table.innerHTML = `
        <thead>
          <tr>
            <th>Question ID</th>
            <th>Response</th>
          </tr>
        </thead>
        <tbody>
          ${Object.entries(res.responses)
            .map(([qid, answer]) => `
              <tr>
                <td>${qid}</td>
                <td>${answer || "<i>No response</i>"}</td>
              </tr>
            `).join("")}
        </tbody>
      `;

      section.appendChild(table);
      output.appendChild(section);
    });
  }
});
