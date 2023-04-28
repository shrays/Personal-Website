let fetch;
exports.handler = async function () {
    if (!fetch) {
        fetch = (await import('node-fetch')).default;
    }

    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_LIFX_KEY}`,
        },
        body: JSON.stringify({duration: 0})
    };
    const response = await fetch('https://api.lifx.com/v1/lights/id:d073d569b62a/toggle', options);
    const data = await response.json();

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
};