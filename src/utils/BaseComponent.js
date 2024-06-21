export default class BaseComponent {
  constructor({ tag = 'div', className = '', parent = null }) {
    const node = document.createElement(tag);
    this.node = node;
    node.className = className;

    if (parent) {
      this.appendTo(parent);
    }
  }

  appendTo(parent) {
    parent.append(this.node);
  }

  remove() {
    this.node.remove();
  }

  addListener(event, callback) {
    this.node.addEventListener(event, callback);
  }

  addClass(...classNames) {
    this.node.classList.add(...classNames);
  }

  removeClass(...classNames) {
    this.node.classList.remove(...classNames);
  }

  setAttribute(name, value) {
    this.node.setAttribute(name, value);
  }

  removeAttribute(name) {
    this.node.removeAttribute(name);
  }

  setTextContent(text) {
    this.node.textContent = text;
  }
}
