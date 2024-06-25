import { BaseButton } from './baseButton';
import BaseComponent from './baseComponent';
import { EVENT_EMITTER } from './event-emitter';

import classes from './modal.module.scss';

type Props = {
  title: string;
  text: string;
  eventName?: string;
  isInfo: boolean;
};

export default class Modal extends BaseComponent {
  protected modal = this.createModal();

  public title: string;

  private text: string;

  private event?: string;

  private isInfo: boolean;

  constructor(props: Props) {
    super({ tag: 'div', className: classes.modalBackground });
    this.title = props.title;
    this.text = props.text;
    this.event = props.eventName;
    this.isInfo = props.isInfo;
    this.init();
  }

  private init(): void {
    this.addTitle(this.title);
    this.addClass(classes.close!);
    this.addText(this.text);
    this.addButtons(this.event);
  }

  private createModal(): BaseComponent {
    const modal = new BaseComponent({
      tag: 'div',
      className: classes.modal,
      parent: this,
    });
    this.createCloseButton(modal);

    return modal;
  }

  private createCloseButton(parent: BaseComponent): void {
    const close = (): void => {
      this.addClass(classes.close!);
    };

    const button = new BaseButton({ text: 'CLOSE', onClick: close });
    button.appendTo(parent);
  }

  protected addTitle(title: string): void {
    const header = new BaseComponent({ tag: 'h2', className: classes.title, parent: this.modal });
    header.setTextContent(title);

    header.appendTo(this.modal);
  }

  private addText(text: string): void {
    const textComponent = new BaseComponent({ tag: 'p' });
    textComponent.setTextContent(text);
    textComponent.appendTo(this.modal);
  }

  private addButtons(event: string | undefined): void {
    if (this.isInfo) {
      const closeButton = new BaseButton({ text: 'CLOSE', onClick: (): void => this.closeModal() });
      closeButton.appendTo(this.modal);
    } else if (event) {
      const yesButton = new BaseButton({ text: 'YES', onClick: (): void => EVENT_EMITTER.emit(event) });
      const noButton = new BaseButton({ text: 'NO', onClick: (): void => this.closeModal() });

      [yesButton, noButton].forEach((button) => button.appendTo(this.modal));
    }
  }

  public openModal(): void {
    this.removeClass(classes.close!);
  }

  public closeModal(): void {
    this.addClass(classes.close!);
  }
}
