/**
 * Logger utility for centralized error handling and logging.
 */
const isProduction = import.meta.env.PROD;

export const logger = {
  info: (message, ...data) => {
    if (!isProduction) {
      console.info(`[INFO] ${message}`, ...data);
    }
  },

  warn: (message, ...data) => {
    if (!isProduction) {
      console.warn(`[WARN] ${message}`, ...data);
    }
  },

  error: (message, error, ...data) => {
    // In a real app, you might send this to Sentry, LogRocket, or a custom backend
    console.error(`[ERROR] ${message}`, error, ...data);

    // Optional: Log to local storage for persistence if needed during debugging
    try {
      const logs = JSON.parse(localStorage.getItem('app_error_logs') || '[]');
      logs.push({
        timestamp: new Date().toISOString(),
        message,
        error: error?.message || String(error),
        stack: error?.stack,
        additionalData: data
      });
      // Keep only last 50 logs
      localStorage.setItem('app_error_logs', JSON.stringify(logs.slice(-50)));
    } catch (e) {
      console.error('Failed to save log to localStorage', e);
    }
  },

  getLogs: () => {
    try {
      return JSON.parse(localStorage.getItem('app_error_logs') || '[]');
    } catch (e) {
      return [];
    }
  },

  clearLogs: () => {
    localStorage.removeItem('app_error_logs');
  }
};
