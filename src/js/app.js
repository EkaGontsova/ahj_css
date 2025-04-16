/* eslint-disable no-new */
/* eslint-disable no-console */
/* eslint-disable no-alert */
class App {
  constructor(buttonId, contentId, copyTextClass) {
    this.collapseButton = document.getElementById(buttonId);
    this.collapsibleContent = document.getElementById(contentId);
    this.copyText = document.querySelector(copyTextClass);
    this.toggleContentHandler = this.toggleContent.bind(this);
    this.copyContentHandler = this.copyContent.bind(this);
    this.init();
  }

  init() {
    this.collapseButton.addEventListener('click', this.toggleContentHandler);
    this.copyText.addEventListener('click', this.copyContentHandler);
  }

  toggleContent() {
    if (this.collapsibleContent.classList.contains('fadein')) {
      this.collapsibleContent.classList.remove('fadein');
      this.collapsibleContent.classList.add('fadeout');

      this.collapseButton.removeEventListener('click', this.toggleContentHandler);

      this.collapsibleContent.addEventListener(
        'animationend',
        () => {
          this.collapsibleContent.classList.remove('fadeout');
          this.collapseButton.addEventListener('click', this.toggleContentHandler);
        },
        { once: true },
      );
    } else {
      this.collapsibleContent.classList.remove('fadeout');
      this.collapsibleContent.classList.add('fadein');

      this.collapseButton.removeEventListener('click', this.toggleContentHandler);

      this.collapsibleContent.addEventListener(
        'animationend',
        () => {
          this.collapseButton.addEventListener('click', this.toggleContentHandler); // Восстанавливаем обработчик
        },
        { once: true },
      );
    }
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
