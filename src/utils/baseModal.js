import BaseComponent from './baseComponent';

import classes from './modal.module.scss';

export default class Modal extends BaseComponent {
  constructor(parent) {
    super({ tag: 'div', className: classes.modalBackground, parent });
    this.modal = this.#createModal();
    this.addClass(classes.close);
  }

  #createModal() {
    const modal = new BaseComponent({
      tag: 'div',
      className: 'modal',
      parent: this.node,
    });
    this.#createCloseButton(modal);

    return modal;
  }

  #createCloseButton(parentNode) {
    const button = new BaseComponent({
      tag: 'button',
      className: classes.closeButton,
      parent: parentNode,
    });
    button.setTextContent('CLOSE');

    const close = () => {
      this.addClass(classes.close);
    };

    button.addListener('click', close);
  }

  openModal() {
    this.removeClass(classes.close);
  }
}
