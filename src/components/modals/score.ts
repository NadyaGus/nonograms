import Modal from '@/utils/baseModal';

export class ScoreModal extends Modal {
  public name: string;

  constructor() {
    super();
    this.name = 'score';
    this.addTitle(this.name);
  }
}
