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

const MODAL_TEXT_ABOUT = '';
const MODAL_TEXT_SAVE = 'Are you sure you want to save your current game? You can only save one game';
const MODAL_TEXT_CONTINUE = 'Are you sure you want to download the game? Current progress will be lost';
const MODAL_TEXT_SCORE = 'Last five results';

export class App extends BaseComponent {
  private scoreModal: ScoreModal;

  private saveModal: SaveModal;

  private continueModal: ContinueModal;

  private aboutModal: AboutModal;

  protected header: Header;

  constructor() {
    super({ tag: 'div', className: classes.app });

    this.scoreModal = new ScoreModal(MODAL_TITLE_SCORE, MODAL_TEXT_SCORE, true);
    this.scoreModal.appendTo(this);

    this.saveModal = new SaveModal(MODAL_TITLE_SAVE, MODAL_TEXT_SAVE, 'save-game', false);
    this.saveModal.appendTo(this);

    this.continueModal = new ContinueModal(MODAL_TITLE_CONTINUE, MODAL_TEXT_CONTINUE, 'continue-game', false);
    this.continueModal.appendTo(this);

    this.aboutModal = new AboutModal(MODAL_TITLE_ABOUT, MODAL_TEXT_ABOUT, true);
    this.aboutModal.appendTo(this);

    this.header = new Header(this, this.scoreModal, this.saveModal, this.continueModal, this.aboutModal);
  }
}
