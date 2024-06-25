import { BaseButton } from './baseButton';
import BaseComponent from './baseComponent';

import classes from './modal.module.scss';

export default class Modal extends BaseComponent {
  protected modal = this.createModal();

  public title: string;

  constructor(title: string) {
    super({ tag: 'div', className: classes.modalBackground });
    this.title = title;
    this.addTitle(this.title);
    this.addClass(classes.close!);
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

  protected addTitle(title: string): void {
    const header = new BaseComponent({ tag: 'h2', className: classes.title, parent: this.modal });
    header.setTextContent(title);

    header.appendTo(this.modal);
  }

  private createCloseButton(parent: BaseComponent): void {
    const close = (): void => {
      this.addClass(classes.close!);
    };

    const button = new BaseButton({ text: 'CLOSE', onClick: close });
    button.appendTo(parent);
  }

  public openModal(): void {
    this.removeClass(classes.close!);
  }
}
