import Modal from '@/utils/baseModal';

export class ContinueModal extends Modal {
  constructor(title: string) {
    super(title);
    this.title = title;
  }
}
