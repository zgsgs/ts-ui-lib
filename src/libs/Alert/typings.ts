export interface IAlertOptions {
  duration?: number;
  header?: string;
  text?: string;
}

export enum DEFAULT_VALUES {
  HEADER = 'This is my Alert',
  TEXT = 'This is my Alert text',
  DURATION = 300,
}

export enum UI_COLOR_TYPES {
  PRIMARY = 'primary',
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
}
