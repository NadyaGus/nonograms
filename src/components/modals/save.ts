import Modal from '@/utils/baseModal';

export class SaveModal extends Modal {
  public name: string;

  constructor() {
    super();
    this.name = 'save';
    this.addTitle(this.name);
  }
}
