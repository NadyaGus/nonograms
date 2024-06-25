import Modal from '@/utils/baseModal';

export class AboutModal extends Modal {
  constructor(title: string) {
    super(title);
    this.title = title;
  }
}
