import BaseComponent from '../utils/BaseComponent';
import classes from './app.module.scss';

export class App extends BaseComponent {
  constructor() {
    super({ className: classes.app });
  }
}
