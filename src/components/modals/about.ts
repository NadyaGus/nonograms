import Modal from '@/utils/baseModal';

export class AboutModal extends Modal {
  constructor(title: string, text: string, isInfo: boolean) {
    super({ title, text, isInfo });
    this.title = title;
  }
}
