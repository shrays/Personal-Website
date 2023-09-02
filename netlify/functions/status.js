let fetch
exports.handler = async function () {
  if (!fetch) {
    fetch = (await import('node-fetch')).default
  }

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_LIFX_KEY}`,
    },
  }
  const response = await fetch(
    'https://api.lifx.com/v1/lights/id%3Ad073d569b62a',
    options
  )
  const data = await response.json()

  return {
    statusCode: response.status,
    body: JSON.stringify(data),
  }
}
