import fetch from 'node-fetch';

export async function handler(event, context) {
  try {
    const url = 'https://api.clashofclans.com' + event.path;
    const response = await fetch(url, {
      method: event.httpMethod,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',

      },
      body: event.httpMethod === 'POST' ? JSON.stringify(event.body) : null,
    });

    const data = await response.json();

    return {
      statusCode: response.status,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Something went wrong' }),
    };
  }
}