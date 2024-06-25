import Modal from '@/utils/baseModal';

export class ContinueModal extends Modal {
  constructor(title: string, text: string, eventName: string, isInfo: boolean) {
    super({ title, text, eventName, isInfo });
    this.title = title;
  }
}
