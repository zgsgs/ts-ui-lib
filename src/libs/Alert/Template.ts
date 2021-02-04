import { IAlertOptions } from './typings';
import './styles/index.css';

export default class Template {
  protected alertView(options: IAlertOptions) {
    const { header, text } = options;
    const oAlert: HTMLElement = document.createElement('div');
    oAlert.className = 'alert';
    oAlert.innerHTML = `
    <div class="inner">
      <header class="alert-header">
        <h1>${header}</h1>
        <span class="icon">&times;</span>
      </header>
      <div class="alert-wrap">
        <p>${text}</p>
      </div>
    </div>
    `;
    return oAlert;
  }
}
