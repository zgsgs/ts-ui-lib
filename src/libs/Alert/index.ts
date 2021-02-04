import Template from './Template';
import { DEFAULT_VALUES, IAlertOptions, UI_COLOR_TYPES } from './typings';
import $ from 'jquery';

export default class Alert extends Template {
  private _duration: number;
  private _header: string;
  private _text: string;
  private _oAlert: JQuery<HTMLElement>;
  private _oXIcon: JQuery<HTMLElement>;
  private _oInner: JQuery<HTMLElement>;

  constructor(options: IAlertOptions) {
    super();
    this._duration = options.duration || DEFAULT_VALUES.DURATION;
    this._header = options.header || DEFAULT_VALUES.HEADER;
    this._text = options.text || DEFAULT_VALUES.TEXT;

    this.render();
    this.bindEvent();
  }

  private bindEvent() {
    this._oXIcon.on('click', this.hide.bind(this));
    this._oAlert.on('click', this.hide.bind(this));
    this._oInner.on('click', e => e.stopPropagation());
  }

  private render() {
    document.body.appendChild(
      this.alertView({
        header: this._header,
        text: this._text,
      })
    );
    this._oAlert = $('.alert');
    this._oXIcon = $('.icon');
    this._oInner = $('.inner');
  }

  public static create(options: IAlertOptions) {
    return new Alert(options);
  }

  public show(type: string, options: IAlertOptions) {
    const { duration, header, text } = options;
    let _type: UI_COLOR_TYPES = UI_COLOR_TYPES.PRIMARY;
    for (let k in UI_COLOR_TYPES) {
      if (UI_COLOR_TYPES[k] === type) {
        _type = type as UI_COLOR_TYPES;
      }
    }

    this._oAlert.addClass(_type);
    duration && (this._duration = duration);
    this._oAlert.fadeIn(this._duration);
  }

  public hide() {
    this._oAlert.fadeOut(this._duration);
  }
}
