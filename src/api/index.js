const basicCommand = {
  method: 'GET',
  headers: { 'Authorization': 'whatever-you-want' }
};

const baseUrl3 = 'http://localhost:5001';


class BackendApi {
  constructor() {
    this.baseUrl2 = 'http://localhost:5001'
  }

  getCategories() {
    fetch(this.baseUrl2 + '/categories', basicCommand)
      .then((response) => {
        return response.json();
      })
      .then(payload => {
        console.log(payload);
      })
  }

  static fetchFactory() {
    return function(supplement) {
      return fetch(baseUrl3 + '/' + supplement, basicCommand)
    }
  }

  getCategories2() {
    fetch(this.baseUrl2 + '/categories', basicCommand)
      .then((response) => {
        return response.json();
      })
  }
}

export const fetchFactory = (supplement) => {
  return fetch(baseUrl3 + '/' + supplement, basicCommand)
};

export default BackendApi;
