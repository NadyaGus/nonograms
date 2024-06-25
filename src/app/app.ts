import { AboutModal } from '@/components/modals/about';
import { ContinueModal } from '@/components/modals/continue';
import { ScoreModal } from '@/components/modals/score';
import { SaveModal } from '@/components/modals/save';
import BaseComponent from '@/utils/baseComponent';
import { Header } from '@/components/header/header';

import classes from './app.module.scss';

const MODAL_TITLE_SCORE = 'HIGH SCORE';
const MODAL_TITLE_SAVE = 'SAVE GAME';
const MODAL_TITLE_CONTINUE = 'CONTINUE LAST GAME';
const MODAL_TITLE_ABOUT = 'ABOUT';

export class App extends BaseComponent {
  private scoreModal: ScoreModal;

  private saveModal: SaveModal;

  private continueModal: ContinueModal;

  private aboutModal: AboutModal;

  protected header: Header;

  constructor() {
    super({ tag: 'div', className: classes.app });

    this.scoreModal = new ScoreModal(MODAL_TITLE_SCORE);
    this.scoreModal.appendTo(this);

    this.saveModal = new SaveModal(MODAL_TITLE_SAVE);
    this.saveModal.appendTo(this);

    this.continueModal = new ContinueModal(MODAL_TITLE_CONTINUE);
    this.continueModal.appendTo(this);

    this.aboutModal = new AboutModal(MODAL_TITLE_ABOUT);
    this.aboutModal.appendTo(this);

    this.header = new Header(this, this.scoreModal, this.saveModal, this.continueModal, this.aboutModal);
  }
}
