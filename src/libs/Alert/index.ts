import Template from './Template';
import { DEFAULT_VALUES, IAlertOptions, UI_COLOR_TYPES } from './typings';
import $ from 'jquery';
import { h } from 'vue';

export default class Alert extends Template {
  private _duration: number;
  private _header: string;
  private _text: string;
  private _oAlert: JQuery<HTMLElement>;
  private _oXIcon: JQuery<HTMLElement>;
  private _oInner: JQuery<HTMLElement>;
  private _oHeader: JQuery<HTMLElement>;
  private _oText: JQuery<HTMLElement>;

  constructor(options: IAlertOptions) {
    super();
    const _options: IAlertOptions = Alert.mergeOptions(options);
    this._duration = _options.duration || DEFAULT_VALUES.DURATION;
    this._header = _options.header || DEFAULT_VALUES.HEADER;
    this._text = _options.text || DEFAULT_VALUES.TEXT;

    this.render();
    this.bindEvent();
  }

  private static mergeOptions(options: IAlertOptions) {
    const _defaultOptions: IAlertOptions = {
      duration: DEFAULT_VALUES.DURATION as number,
      header: DEFAULT_VALUES.HEADER as string,
      text: DEFAULT_VALUES.TEXT as string,
    };
    if (!options) {
      return _defaultOptions;
    }

    return Object.assign(_defaultOptions, options);
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
    this._oHeader = this._oAlert.find('header h1');
    this._oText = this._oAlert.find('.alert-wrap p');
  }

  public static create(options?: IAlertOptions) {
    return new Alert(options);
  }

  public show(type: string, options?: IAlertOptions) {
    if (options) {
      const { duration, header, text } = options;
      duration && (this._duration = duration);
      header && this._oHeader.html(header);
      text && this._oText.html(text);
    }

    let _type: UI_COLOR_TYPES = UI_COLOR_TYPES.PRIMARY;
    if (_type) {
      for (let k in UI_COLOR_TYPES) {
        if (UI_COLOR_TYPES[k] === type) {
          _type = type as UI_COLOR_TYPES;
        }
      }
    }
    this._oAlert.addClass(_type);
    this._oAlert.fadeIn(this._duration);
  }

  public hide() {
    this._oAlert.fadeOut(this._duration);
  }
}
