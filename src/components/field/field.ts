import BaseComponent from '@/utils/baseComponent';

import classes from './field.module.scss';

export class Field extends BaseComponent {
  constructor() {
    super({ className: classes.field! });
  }
}
