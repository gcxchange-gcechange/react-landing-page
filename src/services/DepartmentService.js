export async function getDepartments() {
  const response = await fetch('/api/Department')
  return await response.json();
}

export async function getDomains() {
  // put domain API here
  const response = await fetch('')
  return await response.json();
}

export async function getDepartTest() {
    // put department API here
    const response = await fetch(process.env.REACT_APP_DEV_DEPART_URL, {
        method: 'POST',
        headers: {
            'x-functions-key': process.env.REACT_APP_DEV_DEPART_KEY,
            'Content-Type': 'application/json'
        }
    })  
  return await response.json();
}
// TODO put the the send function here