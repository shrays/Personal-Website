let fetch
exports.handler = async function (event) {
  if (!fetch) {
    fetch = (await import('node-fetch')).default
  }

  const payload = JSON.parse(event.body)

  const options = {
    method: 'PUT',
    headers: {
      accept: 'text/plain',
      'content-type': 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_LIFX_KEY}`,
    },
    body: JSON.stringify(payload),
  }

  const response = await fetch(
    'https://api.lifx.com/v1/lights/id:d073d569b62a/state',
    options
  )
  const data = await response.json()

  return {
    statusCode: response.status,
    body: JSON.stringify(data),
  }
}
