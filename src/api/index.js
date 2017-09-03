const basicCommand = {
  method: 'GET',
  headers: {
    'Authorization': 'whatever-you-want',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};

const basicGetCommand = {
  ...basicCommand,
  method: 'GET'
};

const basicPostCommand = {
    ...basicCommand,
    method: 'POST'
  };

const baseUrl = 'http://localhost:5001';

export const fetchFactory = (supplement) => {
  return fetch(baseUrl + '/' + supplement, basicGetCommand)
};

export const postFactory = (supplement, data) => {
  return fetch(baseUrl + '/' + supplement, {...basicPostCommand, body: JSON.stringify(data)})
};
