import BaseComponent from '@/utils/baseComponent';
import { EVENT_EMITTER } from '@/utils/event-emitter';
import type { AboutModal } from '../modals/about';
import type { ContinueModal } from '../modals/continue';
import type { ScoreModal } from '../modals/score';
import type { SaveModal } from '../modals/save';

import burger from './burger.svg';

import classes from './header.module.scss';

export class Header extends BaseComponent {
  private scoreModal: ScoreModal;

  private saveModal: SaveModal;

  private continueModal: ContinueModal;

  private aboutModal: AboutModal;

  constructor(
    parent: BaseComponent,
    scoreModal: ScoreModal,
    saveModal: SaveModal,
    continueModal: ContinueModal,
    aboutModal: AboutModal,
  ) {
    super({ tag: 'nav', className: classes.header, parent });
    this.scoreModal = scoreModal;
    this.saveModal = saveModal;
    this.continueModal = continueModal;
    this.aboutModal = aboutModal;

    this.init();
    this.appendTo(parent);
  }

  private init(): void {
    const ul = new BaseComponent({ tag: 'ul', className: classes.list });

    const modals = [this.scoreModal, this.saveModal, this.continueModal, this.aboutModal];
    modals.forEach((modal) => {
      const link = new BaseComponent({ tag: 'li', className: classes.link, parent: ul });
      link.setTextContent(modal.title);

      link.addListener('click', () => {
        EVENT_EMITTER.emit(`openModal${modal.title}`);
      });

      return link;
    });

    ul.appendTo(this);
    this.addBurger();
  }

  private addBurger(): void {
    const icon = this.addImage(burger, classes.burger!, this);
    icon.addListener('click', () => icon.toggleClass(classes.open!));
  }
}
