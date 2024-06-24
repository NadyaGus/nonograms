import type Modal from '@/utils/baseModal';
import BaseComponent from '../../utils/baseComponent';

import burger from './burger.svg';

import classes from './header.module.scss';

export class Header extends BaseComponent {
  private modal: Modal;

  constructor(parent: BaseComponent, modal: Modal) {
    super({ tag: 'nav', className: classes.header, parent });
    this.modal = modal;

    this.init();
    this.appendTo(parent);
  }

  init(): void {
    const ul = new BaseComponent({ tag: 'ul', className: classes.list });

    // TODO: add modals here
    ['score', 'save', 'continue', 'about'].forEach((name) => {
      const link = new BaseComponent({ tag: 'li', className: classes.link, parent: ul });
      link.setTextContent(name);
      link.addListener('click', () => this.modal.openModal());

      return link;
    });

    ul.appendTo(this);
    this.addImage(burger, classes.burger!, this);
  }
}
