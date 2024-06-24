import Modal from '@/utils/baseModal';

export class AboutModal extends Modal {
  public name: string;

  constructor() {
    super();
    this.name = 'about';
    this.addTitle(this.name);
  }
}
