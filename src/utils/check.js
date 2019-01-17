// export default {
//   phoneNumCheck: num => ,
//   emailCheck: str => /^1[3|4|5|7|8][0-9]\d{8}$/.test(str)
// };
export function phoneNumCheck(num) {
  return /^1[3|4|5|7|8][0-9]\d{8}$/.test(num);
}
