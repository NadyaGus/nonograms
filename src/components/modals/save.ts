import Modal from '@/utils/baseModal';

export class SaveModal extends Modal {
  constructor(title: string) {
    super(title);
    this.title = title;
  }
}
