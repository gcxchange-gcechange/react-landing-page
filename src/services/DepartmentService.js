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
  const response = await fetch('')
  return await response.json();
}
// TODO put the the send function here