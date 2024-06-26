import BaseComponent from '@/utils/baseComponent';
import { BaseButton } from '@/utils/button/baseButton';
import { EVENT_EMITTER } from '@/utils/event-emitter';

import puzzleJSON from '@/utils/picturs.json';
import classes from './select-puzzle.module.scss';

export class SelectPuzzle extends BaseComponent {
  private puzzle: string | undefined;

  private puzzleList: string[];

  private list: BaseComponent;

  constructor() {
    super({ className: classes.wrapper! });
    this.puzzle = this.getCurrentPuzzleName('0');
    this.puzzleList = this.getPuzzlesNames('small');

    this.addSelect();

    this.list = this.addSelectList();

    EVENT_EMITTER.subscribe(`set-small-difficulty`, () => {
      this.getPuzzlesNames('small');
      this.addSelectList();
    });
    EVENT_EMITTER.subscribe(`set-medium-difficulty`, () => {
      this.getPuzzlesNames('medium');
      this.addSelectList();
    });
    EVENT_EMITTER.subscribe(`set-large-difficulty`, () => {
      this.getPuzzlesNames('large');
      this.addSelectList();
    });
  }

  private addSelect(): void {
    const select = new BaseButton({
      text: this.puzzle,
      className: classes.select!,
      onClick: (): void => this.openList(),
    });
    select.appendTo(this);
  }

  private addSelectList(): BaseComponent {
    if (this.list) {
      this.removeSelectList();
    }

    this.list = new BaseComponent({ tag: 'ul', className: classes.list });

    this.puzzleList.map((itemName) => {
      const elem = new BaseComponent({ tag: 'li', parent: this.list });
      elem.setTextContent(itemName);

      return elem;
    });

    this.list.appendTo(this);

    return this.list;
  }

  private removeSelectList(): void {
    this.list.remove();
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

    console.log(levelsName);

    return levelsName;
  }

  private openList(): void {
    this.toggleClass(classes.open!);
  }
}
