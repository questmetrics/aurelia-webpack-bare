import { customElement, inlineView, autoinject, bindable, bindingMode } from 'aurelia-framework';
import './defs';

@autoinject()
@customElement('date-picker')
export class DatePicker {

  private $dp: any;
  readonly input: HTMLInputElement;

  @bindable({
    defaultBindingMode: bindingMode.twoWay
  })
  date: Date;

  constructor(
    // private element: Element
  ) {

  }

  bind() {
    this.$dp = (jQuery(this.input) as any)
      .datepicker({
        format: 'mm/dd/yyyy',
        startDate: '-3d',
      })
      .on('changeDate', e => {
        this.date = e.date;
      });
  }

  unbind() {
    this.$dp.destroy();
  }
}
