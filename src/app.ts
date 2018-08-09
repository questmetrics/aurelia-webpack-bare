import { inlineView, observable } from 'aurelia-framework';

export class App {

  @observable()
  appDate: Date;

  constructor() {

  }

  appDateChanged() {
    console.log('app date changed');
    console.log(this.appDate);
  }
}
