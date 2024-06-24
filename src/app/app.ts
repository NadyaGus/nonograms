import { AboutModal } from '@/components/modals/about';
import { ContinueModal } from '@/components/modals/continue';
import { ScoreModal } from '@/components/modals/score';
import { SaveModal } from '@/components/modals/save';
import BaseComponent from '@/utils/baseComponent';
import { Header } from '@/components/header/header';

import classes from './app.module.scss';

export class App extends BaseComponent {
  private scoreModal: ScoreModal;

  private saveModal: SaveModal;

  private continueModal: ContinueModal;

  private aboutModal: AboutModal;

  protected header: Header;

  constructor() {
    super({ tag: 'div', className: classes.app });

    this.scoreModal = new ScoreModal();
    this.scoreModal.appendTo(this);

    this.saveModal = new SaveModal();
    this.saveModal.appendTo(this);

    this.continueModal = new ContinueModal();
    this.continueModal.appendTo(this);

    this.aboutModal = new AboutModal();
    this.aboutModal.appendTo(this);

    this.header = new Header(this, this.scoreModal, this.saveModal, this.continueModal, this.aboutModal);
  }
}
