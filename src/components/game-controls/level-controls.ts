import BaseComponent from '@/utils/baseComponent';
import { BaseButton } from '@/utils/button/baseButton';

import classes from './level-controls.module.scss';
import { SelectPuzzle } from './select-puzzle/select-puzzle';

export class LevelControls extends BaseComponent {
  private select: SelectPuzzle;

  constructor() {
    super({ tag: 'div', className: classes.controls! });
    this.select = new SelectPuzzle();
    this.init();
  }

  private init(): void {
    this.addLevelChoice();
    this.select.appendTo(this);
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
