export async function getDomains() {
  // get list of domains
    const response = await fetch("", {
    method: 'POST',
    headers: {
        'x-functions-key': "",
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
    const response = await fetch("", {
    method: 'POST',
    headers: {
        'x-functions-key': "",
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
    const test = await fetch("", {
    method: 'POST',
    headers: {
        'x-functions-key': "",
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