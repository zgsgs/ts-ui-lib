import { Alert } from './libs';
import './index.css';

(doc => {
  const oShowAlert: HTMLElement = doc.querySelector('#showAlert') as HTMLElement;

  const alert = Alert.create({
    duration: 300,
    header: 'Alert组件',
    text: '内容',
  });

  const init = (): void => {
    bindEvent();
  };

  function bindEvent(): void {
    oShowAlert.addEventListener('click', showAlert, false);
  }

  function showAlert(): void {
    alert.show('warning', {
      duration: 400,
      header: '第二个title',
      text: '第二个内容',
    });
  }

  init();
})(document);
