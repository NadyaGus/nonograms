import Modal from '@/utils/baseModal';

export class ContinueModal extends Modal {
  public name: string;

  constructor() {
    super();
    this.name = 'continue';
    this.addTitle(this.name);
  }
}
