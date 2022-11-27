import {API_URL, API_KEY } from './apiAccess';

export const API = {}; 

API.get = (endpoint) => apiRequest(endpoint, 'GET', null);
API.post = (endpoint, data) => apiRequest(endpoint, 'POST', data);
API.put = (endpoint, data) => apiRequest(endpoint, "PUT", data);
API.delete = (endpoint) => apiRequest(endpoint, 'DELETE', null);


const apiRequest = async (endpoint, method, body) => {

  // Build request object
  let requestObj = { method: method }; // *GET, POST, PUT, DELETE, etc.
  if (body) requestObj = {...requestObj,
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(body)
  };

  // Call API and return response object
  
    const endpointAddress = API_URL + endpoint + API_KEY;
    const response = await fetch(endpointAddress, requestObj);
    if ((response.status >= 200) && (response.status <= 299))
      return { success: true, response: await response.json() };
    else return { success: false, response: response };
  
}