import axios from 'axios';
import * as chrome from 'chrome';

chrome.runtime.onMessage.addListener((message) => {
    if (message.text) {
      summarizeText(message.text)
        .then(summary => {
          document.getElementById("summary").textContent = summary;
        })
        .catch(error => {
          console.error(error);
          document.getElementById("summary").textContent = "Error: Could not summarize text.";
        });
    }
  });
  
  async function summarizeText(text) {
    const response = await axios.post("https://api.openai.com/v1/completions", {
      model: "text-davinci-003",
      prompt: "Summarize the following text:\n" + text,
      max_tokens: 500,
      temperature: 0.5,
    }, {
      headers: {
        "Authorization": `Bearer ${"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"}`,
      },
    });
    return response.data.choices[0].text.trim();
  }
  