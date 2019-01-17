import { Toast } from 'cube-ui';
// export default {
//   onlyText: str => Toast.$create({ time: 1500, type: 'txt', txt: str }).show()
// };
export function ToastOnlyText(str) {
  Toast.$create({ time: 1500, type: 'warn', txt: str }).show();
}
export function ToastWithLoading(str) {
  return Toast.$create({ time: 500000, txt: str });
}
