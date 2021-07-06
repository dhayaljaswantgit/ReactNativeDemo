import axios from 'axios';

export default class API {
  static baseUrl = 'https://reqres.in/api/';

  static serverCall({apiEndPoints = '', type = 'get', params = undefined}) {
    console.log('serverCall => ', arguments, this.baseUrl);
    return axios[type](this.baseUrl + apiEndPoints, params);
  }
}
