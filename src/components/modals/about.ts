import Modal from '@/utils/modal/baseModal';
import { EVENT_EMITTER } from '@/utils/event-emitter';

export class AboutModal extends Modal {
  constructor(title: string, text: string, isInfo: boolean) {
    super({ title, text, isInfo });
    this.title = title;

    EVENT_EMITTER.subscribe(`openModal${this.title}`, () => this.openModal());
  }
}
