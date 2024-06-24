type Props = {
  tag: string;
  className?: string;
  parent?: BaseComponent;
};

export default class BaseComponent {
  public elem: HTMLElement;
  public img?: HTMLImageElement;

  constructor(props: Props) {
    const elem = document.createElement(props.tag);
    this.elem = elem;
    props.className ? (elem.className = props.className) : null;
    props.parent ? this.appendTo(props.parent) : null;
  }

  appendTo(parent: BaseComponent | HTMLElement) {
    if (parent instanceof BaseComponent) {
      parent.elem.append(this.elem);
    } else {
      parent.append(this.elem);
    }
  }

  remove() {
    this.elem.remove();
  }

  addListener<K extends keyof HTMLElementEventMap>(event: K, listener: (event: HTMLElementEventMap[K]) => void) {
    this.elem.addEventListener(event, listener);
  }

  addClass(...classNames: string[]) {
    this.elem.classList.add(...classNames);
  }

  removeClass(...classNames: string[]) {
    this.elem.classList.remove(...classNames);
  }

  setAttribute(name: string, value: string) {
    this.elem.setAttribute(name, value);
  }

  removeAttribute(name: string) {
    this.elem.removeAttribute(name);
  }

  setTextContent(text: string) {
    this.elem.textContent = text;
  }

  addImage(src: string, className: string, parent: BaseComponent) {
    const img = document.createElement('img');
    img.src = src;
    img.className = className;

    parent.elem.append(img);
    this.img = img;
  }
}
