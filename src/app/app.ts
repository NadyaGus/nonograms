import Modal from '../utils/baseModal';
import BaseComponent from '../utils/baseComponent';
import { Header } from '../components/header/header';

import classes from './app.module.scss';

export class App extends BaseComponent {
  protected modal: Modal;
  protected header: Header;

  constructor() {
    super({ tag: 'div', className: classes.app });
    this.modal = new Modal(this);
    this.header = new Header(this, this.modal);
  }
}
