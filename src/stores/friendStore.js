/**
* @desc This store retrieves mock name and picture data from
* an API. The experiment/helper/getMockPopulation module uses
* this data to produce a mock population formatted for the experiment.
*/
const formatResult = result => {
  return {
    firstName: result.name.first,
    lastName: result.name.last,
    imageSrc: result.picture.thumbnail
  };
};

const handleAPIResponse = (request, resolve, reject) => {
  if (request.status >= 200 && request.status < 400) {
    const data = JSON.parse(request.responseText);
    resolve(data.results.map(formatResult));
  } else {
    reject('The friends API sent a malformed response.');
  }
};

export const getFriends = total => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', `https://randomuser.me/api/?results=${total}`, true);

    const handler = handleAPIResponse.bind(null, request, resolve, reject);
    request.onload = handler;
    request.onerror = handler;

    request.send();
  });
};