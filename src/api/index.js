const basicCommand = {
  method: 'GET',
  headers: { 'Authorization': 'whatever-you-want' }
};



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
}

export default BackendApi;
