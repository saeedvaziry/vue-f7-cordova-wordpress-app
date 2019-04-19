import axios from 'axios';
import main from './main';

class Api {
  constructor() {
    this.baseUrl = process.env.VUE_APP_API_URL;
  }

  call(requestType, url, data = null, headers = [], r = false) {
    return new Promise((resolve, reject) => {
      axios[requestType](this.baseUrl + url, data, headers).then(response => {
        main.$f7.preloader.hide();
        resolve(response);
      }).catch(({ response }) => {
        main.$f7.preloader.hide();
        if (r) {
          reject(response);
        }
      });
    });
  }
}

export default Api;