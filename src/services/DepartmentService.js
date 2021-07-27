var getDomainURL = '';
var getDepartmentURL = '';
var getListFunctionKey = '';
var sendUserURL = '';
var sendUserFunctionKey = '';

export async function getDomains() {
  console.log(getDomainURL);
  // put domain API
  const response = await fetch(getDomainURL, {
    method: 'POST',
    headers: {
        'x-functions-key': getListFunctionKey,
        'Content-Type':'application/json'
    }}).then((data) => {
      return data
    })
    .catch((error) => {
      console.log(error);
      return
    })
  return await response.json();
}

export async function getDepartTest() {
  // put department API here
  const response = await fetch(getDepartmentURL, {
    method: 'POST',
    headers: {
        'x-functions-key': getListFunctionKey,
        'Content-Type':'application/json'
    }}).then((data) => {
      return data
    })
    .catch((error) => {
      console.log(error)
      return
    })
  return await response.json();
}

export async function sendUser(user) {
  const test = await fetch(sendUserURL, {
    method: 'POST',
    headers: {
        'x-functions-key': sendUserFunctionKey,
        'Content-Type':'application/json'
    },
    body:JSON.stringify(user)
  })
  // .then(res => {return res})
  .then((data) => {
     console.log(data);
     return data
  })
  .catch((error) => {
      console.error(error);
      return error
  });

  return await test;
}