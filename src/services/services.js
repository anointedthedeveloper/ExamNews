import { logger } from '../utils/logger';

const proxyUrl = ''; // Using Netlify Functions as proxy
const baseUrl = '/.netlify/functions/proxy-jamb';

export const axiosInstance = {
  post: async (url, data) => {
    const fullUrl = `${baseUrl}${url}`;
    try {
      const res = await fetch(fullUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data || { page: 1 })
      });
      if (!res.ok) {
        const errorMsg = `API error: ${res.status}`;
        logger.error(`POST ${url} failed`, new Error(errorMsg), { status: res.status });
        throw new Error(errorMsg);
      }
      return { data: await res.json() };
    } catch (err) {
      logger.error(`Fetch POST ${url} exception`, err);
      throw err;
    }
  },
  get: async (url) => {
    const fullUrl = `${baseUrl}${url}`;
    try {
      const res = await fetch(fullUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      });
      if (!res.ok) {
        const errorMsg = `API error: ${res.status}`;
        logger.error(`GET ${url} failed`, new Error(errorMsg), { status: res.status });
        throw new Error(errorMsg);
      }
      return { data: await res.json() };
    } catch (err) {
      logger.error(`Fetch GET ${url} exception`, err);
      throw err;
    }
  }
};
