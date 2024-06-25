import Modal from '@/utils/modal/baseModal';
import { EVENT_EMITTER } from '@/utils/event-emitter';

export class ContinueModal extends Modal {
  constructor(title: string, text: string, eventName: string, isInfo: boolean) {
    super({ title, text, eventName, isInfo });
    this.title = title;

    EVENT_EMITTER.subscribe(`openModal${this.title}`, () => this.openModal());
  }
}
