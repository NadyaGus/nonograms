import BaseComponent from './baseComponent';

import classes from './modal.module.scss';

export default class Modal extends BaseComponent {
  protected modal = this.createModal();

  constructor(parent: BaseComponent) {
    super({ tag: 'div', className: classes.modalBackground, parent });
    this.addClass(classes.close!);
  }

  private createModal(): BaseComponent {
    const modal = new BaseComponent({
      tag: 'div',
      className: 'modal',
      parent: this,
    });
    this.createCloseButton(modal);

    return modal;
  }

  private createCloseButton(parent: BaseComponent): void {
    const button = new BaseComponent({
      tag: 'button',
      className: classes.closeButton!,
      parent,
    });
    button.setTextContent('CLOSE');

    const close = (): void => {
      this.addClass(classes.close!);
    };

    button.addListener('click', close);
  }

  public openModal(): void {
    this.removeClass(classes.close!);
  }
}
