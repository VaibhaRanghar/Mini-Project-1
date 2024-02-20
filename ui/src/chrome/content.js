import * as chrome from 'chrome';

chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "summarize") {
      const selectedText = window.getSelection().toString();
      if (selectedText) {
        chrome.runtime.sendMessage({ text: selectedText });
      }
    }
  });
  