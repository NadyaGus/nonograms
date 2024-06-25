import BaseComponent from '../baseComponent';

import classes from './button.module.scss';

type Props = {
  text: string;
  onClick: () => void;
};

export class BaseButton extends BaseComponent {
  constructor({ text, onClick }: Props) {
    super({ tag: 'button', className: classes.button });
    this.setTextContent(text);
    this.addListener('click', onClick);
  }
}
