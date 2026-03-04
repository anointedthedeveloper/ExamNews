const JAMB_API_BASE = "https://ibass-api.jamb.gov.ng/api";

exports.handler = async (event) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Accept',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
      }
    };
  }

  const { path, httpMethod, body } = event;
  // Remove the prefix to get the actual API endpoint
  const jambEndpoint = path.replace('/.netlify/functions/proxy-jamb', '');
  const targetUrl = `${JAMB_API_BASE}${jambEndpoint}`;

  try {
    const options = {
      method: httpMethod,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    };

    if (httpMethod === 'POST' && body) {
      options.body = body;
    }

    const response = await fetch(targetUrl, options);
    const data = await response.json();

    return {
      statusCode: response.status,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    console.error('Proxy Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch from JAMB API', details: error.message })
    };
  }
};