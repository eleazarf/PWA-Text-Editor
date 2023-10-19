// Get a reference to the "buttonInstall" element
const butInstall = document.getElementById("buttonInstall");

// Logic for installing the Progressive Web App (PWA)

// Event handler for the 'beforeinstallprompt' event
window.addEventListener("beforeinstallprompt", (event) => {
  // Store the triggered event for future installation
  window.deferredPrompt = event;

  // Display the install button by removing the 'hidden' class
  butInstall.classList.toggle("hidden", false);
});

// Event handler for the click event on the 'butInstall' button
butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }

  // Show the installation prompt to the user
  promptEvent.prompt();

  // Reset the deferred prompt variable as it can only be used once
  window.deferredPrompt = null;

  // Hide the install button after prompting for installation
  butInstall.classList.toggle("hidden", true);
});

// Event handler for the 'appinstalled' event
window.addEventListener("appinstalled", (event) => {
  // Clear the installation prompt
  window.deferredPrompt = null;
});
