import BaseComponent from '@/utils/baseComponent';
import { BaseButton } from '@/utils/button/baseButton';

import puzzleJSON from '@/utils/picturs.json';
import classes from './select-puzzle.module.scss';

export class SelectPuzzle extends BaseComponent {
  private puzzle: string | undefined;

  private puzzleList: string[];

  constructor() {
    super({ className: classes.wrapper! });
    this.puzzle = this.getCurrentPuzzleName('0');
    this.puzzleList = this.getPuzzlesNames('small');
    this.init();
  }

  private init(): void {
    this.addSelect();
    this.addSelectList();
  }

  private addSelect(): void {
    const select = new BaseButton({
      text: this.puzzle,
      className: classes.select!,
      onClick: (): void => this.openList(),
    });
    select.appendTo(this);
  }

  private addSelectList(): void {
    const list = new BaseComponent({ tag: 'ul', className: classes.list });

    this.puzzleList.forEach((itemName) => {
      const elem = new BaseComponent({ tag: 'li', parent: list });
      elem.setTextContent(itemName);
    });

    list.appendTo(this);
  }

  private getCurrentPuzzleName(id: string): string {
    const currentPuzzle = puzzleJSON.find((puzzle) => puzzle.id === id);

    this.puzzle = currentPuzzle?.name;

    return currentPuzzle?.name || '';
  }

  private getPuzzlesNames(size: 'small' | 'medium' | 'large'): string[] {
    const levels = puzzleJSON.filter((puzzle) => puzzle.size === size);

    const levelsName = levels.map((level) => level.name);
    this.puzzleList = levelsName;

    return levelsName;
  }

  private openList(): void {
    this.toggleClass(classes.open!);
  }
}
