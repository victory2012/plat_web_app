const OSS = require('ali-oss');
// const uploadUrl = 'https://mrd-img-bucket.oss-cn-hangzhou.aliyuncs.com';

export function uploadClient() {
  return new OSS.Wrapper({
    region: 'oss-cn-hangzhou',
    accessKeyId: 'LTAImQ5M3rsgRZHT',
    accessKeySecret: 'vXAOOfdDT9FCuFN9ZdTScUFBhB4Buu',
    bucket: 'mrd-img-bucket'
  });
}
