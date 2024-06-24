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

  appendTo(parent: BaseComponent | HTMLElement): void {
    if (parent instanceof BaseComponent) {
      parent.elem.append(this.elem);
    } else {
      parent.append(this.elem);
    }
  }

  remove(): void {
    this.elem.remove();
  }

  addListener<K extends keyof HTMLElementEventMap>(event: K, listener: (event: HTMLElementEventMap[K]) => void): void {
    this.elem.addEventListener(event, listener);
  }

  addClass(...classNames: string[]): void {
    this.elem.classList.add(...classNames);
  }

  removeClass(...classNames: string[]): void {
    this.elem.classList.remove(...classNames);
  }

  setAttribute(name: string, value: string): void {
    this.elem.setAttribute(name, value);
  }

  removeAttribute(name: string): void {
    this.elem.removeAttribute(name);
  }

  setTextContent(text: string): void {
    this.elem.textContent = text;
  }

  addImage(src: string, className: string, parent: BaseComponent): void {
    const img = document.createElement('img');
    img.src = src;
    img.className = className;

    parent.elem.append(img);
    this.img = img;
  }
}
