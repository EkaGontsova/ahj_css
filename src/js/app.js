/* eslint-disable no-new */
/* eslint-disable no-console */
/* eslint-disable no-alert */
class App {
  constructor(buttonId, contentId, copyTextClass) {
    this.collapseButton = document.getElementById(buttonId);
    this.collapsibleContent = document.getElementById(contentId);
    this.copyText = document.querySelector(copyTextClass);
    this.init();
  }

  init() {
    this.collapseButton.addEventListener('click', () => this.toggleContent());
    this.copyText.addEventListener('click', () => this.copyContent());
  }

  toggleContent() {
    this.collapsibleContent.classList.toggle('show');
  }

  copyContent() {
    const textToCopy = this.collapsibleContent.innerText.trim();
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => alert('Text copied to clipboard!'))
      .catch((err) => console.error('Failed to copy text: ', err));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new App('collapse-button', 'collapsible-content', '.copy-text');
});
