import fs from 'fs';
import request from 'request-promise';
import deatil from './deatil';

(async () => {
  for (let item of deatil) {
    const urlData = item.ourl;
    const splitArray = urlData.split('/');
    splitArray[0] = '';
    const urlString = splitArray.join('/');

    const api = `http://img1.ph.126.net${urlString}`;
    console.log(`start: ${api}`);

    let options = {
      method: 'GET',
      uri: api,
      form: {},
      headers: {},
      encoding: null,
    };

    try {
      let response = await request(options);
      fs.writeFile(`temp/${splitArray[2]}`, response);
      console.log(`${deatil.indexOf(item)} / ${deatil.length} done: ${api}`);
    } catch (e) {
      console.error(`failed: ${api}`);
    }
  }
})();
