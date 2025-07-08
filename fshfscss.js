import { exec } from "https://cdn.jsdelivr.net/npm/fscss@1.1.6/e/xfscss.min.js";

  const DEBUG = true;

  function applyFSCSS({ type, content }) {
    exec({
      type,
      content,
      onSuccess: (styleElement) => {
        DEBUG && console.log("✅ FSCSS applied:", styleElement);
      },
      onError: (error) => {
        console.error("❌ Failed to apply FSCSS:", error);
        alert("⚠️ Could not load styles. Please try again later.");
      }
    });
  }

applyFSCSS({

    type: "text",

    content: `$init-background: lightblue;

$init-border: 2px groove lightgreen;

$init-outline: 1px groove #235000;

$init-color: #521;`
});
