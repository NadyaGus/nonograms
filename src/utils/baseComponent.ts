import { EventEmitter } from './event-emitter';

type Props = {
  tag: string;
  className?: string;
  parent?: BaseComponent;
};

export default class BaseComponent extends EventEmitter {
  public elem: HTMLElement;

  public img?: HTMLImageElement;

  constructor(props: Props) {
    super();
    const elem = document.createElement(props.tag);
    this.elem = elem;
    elem.className = props.className || '';
    this.appendTo(props.parent);
  }

  public appendTo(parent: BaseComponent | HTMLElement | undefined): void {
    if (parent) {
      if (parent instanceof BaseComponent) {
        parent.elem.append(this.elem);
      } else {
        parent.append(this.elem);
      }
    }
  }

  public remove(): void {
    this.elem.remove();
  }

  public addListener<K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (event: HTMLElementEventMap[K]) => void,
  ): void {
    this.elem.addEventListener(event, listener);
  }

  public addClass(...classNames: string[]): void {
    this.elem.classList.add(...classNames);
  }

  public removeClass(...classNames: string[]): void {
    this.elem.classList.remove(...classNames);
  }

  public setAttribute(name: string, value: string): void {
    this.elem.setAttribute(name, value);
  }

  public removeAttribute(name: string): void {
    this.elem.removeAttribute(name);
  }

  public setTextContent(text: string): void {
    this.elem.textContent = text;
  }

  public addImage(src: string, className: string, parent: BaseComponent): void {
    const img = document.createElement('img');
    img.src = src;
    img.className = className;

    parent.elem.append(img);
    this.img = img;
  }
}
