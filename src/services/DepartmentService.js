export async function getDomains() {
  // get list of domains
    const response = await fetch("https://appsvc-function-dev-orgin-dotnet001.azurewebsites.net/api/Domain?code=", {
    method: 'POST',
    headers: {
        'x-functions-key': "/KZlGuWy8Mxj3aiLseoKAKnTdE2USA/ComB08IaxjKxvz9g72oiDng==",
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

export async function getDepartments() {
  // get list of departments
    const response = await fetch("https://appsvc-function-dev-orgin-dotnet001.azurewebsites.net/api/Department?code=", {
    method: 'POST',
    headers: {
        'x-functions-key': "/KZlGuWy8Mxj3aiLseoKAKnTdE2USA/ComB08IaxjKxvz9g72oiDng==",
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
    const test = await fetch("https://appsvc-function-dev-invgs-dotnet001.azurewebsites.net/api/QueueUserInfo?code=", {
    method: 'POST',
    headers: {
        'x-functions-key': "/L0H0GKp6qFGiq0UAljNF29Wro1TtAXlbCfaRFCocV9R2XKM/504Cw==",
        'Content-Type':'application/json'
    },
    body:JSON.stringify(user)
  })
  .then(res => {
      if(res.status === 200) {
        return res;
      } else {
        return res.text()
      }
  })
  .catch((error) => {
      console.error(error);
      return error
  });

  return await test;
}