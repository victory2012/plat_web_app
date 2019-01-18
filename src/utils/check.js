const phoneReg = /^1[3|4|5|7|8][0-9]\d{8}$/;
const emailReg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$ /;
export function phoneNumCheck(num) {
  return phoneReg.test(num);
}
export function emailCheck(str) {
  return emailReg.test(str);
}
