type CallBack = () => void;

export class EventEmitter {
  public emitter: { [key: string]: Set<CallBack> };

  constructor() {
    this.emitter = {};
  }

  public subscribe(event: string, listener: CallBack): void {
    const listeners = this.emitter[event] ?? new Set<CallBack>();
    listeners.add(listener);
    if (!(event in this.emitter)) {
      this.emitter[event] = listeners;
    }
  }

  public unsubscribe(event: string, listener: CallBack): void {
    const listeners = this.emitter[event];
    if (listeners && listeners.delete(listener)) {
      listeners.delete(listener);
    }
  }

  public emit(event: string): void {
    const listeners = this.emitter[event];
    if (listeners) {
      listeners.forEach((listener) => {
        listener();
      });
    }
  }
}
