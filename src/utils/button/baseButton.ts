import BaseComponent from '../baseComponent';

import classes from './button.module.scss';

type Props = {
  text?: string;
  className?: string;
  onClick: () => void;
  parent?: BaseComponent;
};

export class BaseButton extends BaseComponent {
  constructor({ text, className, onClick, parent }: Props) {
    super({ tag: 'button', className: classes.button });

    if (text) {
      this.setTextContent(text);
    }

    this.addListener('click', onClick);

    if (className) {
      this.addClass(className);
    }

    if (parent) {
      this.appendTo(parent);
    }
  }
}
