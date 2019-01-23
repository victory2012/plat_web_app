const phoneReg = /^1[3|4|5|7|8][0-9]\d{8}$/;
const emailReg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
const passwordReg = /^[a-zA-Z0-9][a-zA-Z0-9!@#$%^&*]{5,19}$/;
const accountReg = /^[a-zA-Z][a-zA-Z0-9]{3,19}$/;
// const spaceReg = /\s+/gi;

export function phoneNumCheck(num) {
  return phoneReg.test(num);
}
export function emailCheck(str) {
  return emailReg.test(str);
}
export function passwordCheck(str) {
  return passwordReg.test(str);
}
export function accountCheck(str) {
  return accountReg.test(str);
}
export function spaceCheck(str) {
  // return spaceReg.test(str);
  console.log('spaceCheck', str);
  return str.indexOf(' ') === -1;
}
