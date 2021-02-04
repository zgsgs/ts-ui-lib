import Template from './Template';
import { IAlertOptions } from './typings';

export default class Alert extends Template {
  private _header: string;
  private _text: string;
  private _oAlert: HTMLElement;
  private _oXIcon: HTMLElement;
  private _oInner: HTMLElement;

  constructor(options: IAlertOptions) {
    super();
    this._header = options.header || 'This is my Alert';
    this._text = options.text || 'This is my Alert text';

    this.render();
    this.bindEvent();
  }

  private bindEvent() {
    this._oXIcon.addEventListener('click', this.hide.bind(this));
    this._oAlert.addEventListener('click', this.hide.bind(this));
    this._oInner.addEventListener('click', e => e.stopPropagation(), false);
  }

  private render() {
    document.body.appendChild(
      this.alertView({
        header: this._header,
        text: this._text,
      })
    );
    this._oAlert = document.querySelector('.alert') as HTMLElement;
    this._oXIcon = this._oAlert.querySelector('.icon') as HTMLElement;
    this._oInner = this._oAlert.querySelector('.inner') as HTMLElement;
  }

  public static create(options: IAlertOptions) {
    return new Alert(options);
  }

  public show(type: string, options: IAlertOptions) {
    this._oAlert.className = 'alert show';
  }

  public hide() {
    this._oAlert.className = 'alert hide';
  }
}
