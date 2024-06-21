import BaseComponent from '../../utils/baseComponent';

import classes from './header.module.scss';

export class Header extends BaseComponent {
  constructor(parent, modal) {
    super({ tag: 'nav', className: classes.header, parent });
    this.modal = modal;
    this.#init();
  }

  #init() {
    const ul = new BaseComponent({ tag: 'ul', className: classes.list });

    // TODO: add modals here
    ['score', 'save', 'continue', 'about'].forEach((name) => {
      const link = new BaseComponent({ tag: 'li', className: classes.link, parent: ul });
      link.setTextContent(name);
      link.addListener('click', () => this.modal.openModal());

      return link;
    });

    ul.appendTo(this);
  }
}
