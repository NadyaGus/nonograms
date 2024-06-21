import Modal from '../utils/baseModal';
import BaseComponent from '../utils/baseComponent';
import { Header } from '../components/header/header';

import classes from './app.module.scss';

export class App extends BaseComponent {
  constructor() {
    super({ className: classes.app });
    this.modal = new Modal(this.node);
    this.header = new Header(this.node, this.modal);
  }
}
