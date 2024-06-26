import BaseComponent from '@/utils/baseComponent';
import { BaseButton } from '@/utils/button/baseButton';

import classes from './level-controls.module.scss';

export class LevelControls extends BaseComponent {
  constructor() {
    super({ tag: 'div', className: classes.controls! });
    this.init();
  }

  private init(): void {
    this.addLevelChoice();
  }

  private addLevelChoice(): void {
    const wrapper = new BaseComponent({ className: classes.wrapper, parent: this });

    const levels = ['easy', 'medium', 'hard'];
    levels.forEach((level) => {
      const elem = new BaseButton({
        text: level,
        className: classes.control!,
        onClick: (): void => console.log(level),
        parent: wrapper,
      });

      return elem;
    });
  }
}
