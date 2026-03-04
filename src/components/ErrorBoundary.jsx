import React from "react";
import { AlertTriangle } from "lucide-react";
import { logger } from "../utils/logger";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    logger.error("Global error caught by boundary", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          background: '#f9fafb'
        }}>
          <div style={{
            maxWidth: '600px',
            textAlign: 'center',
            background: '#ffffff',
            padding: '40px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <AlertTriangle size={64} style={{color: '#ef4444', margin: '0 auto 24px'}} />
            <h1 style={{fontSize: '1.75rem', fontWeight: 700, marginBottom: '16px', color: '#1f2937'}}>
              Oops! Something went wrong
            </h1>
            <p style={{color: '#6b7280', marginBottom: '24px', lineHeight: '1.6'}}>
              We're sorry, but something unexpected happened. Please try refreshing the page or return to the homepage.
            </p>
            <div style={{display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap'}}>
              <button
                onClick={() => window.location.reload()}
                style={{
                  background: '#16a34a',
                  color: '#ffffff',
                  padding: '12px 24px',
                  borderRadius: '6px',
                  border: 'none',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
              >
                Refresh Page
              </button>
              <a
                href="/"
                style={{
                  background: '#f3f4f6',
                  color: '#1f2937',
                  padding: '12px 24px',
                  borderRadius: '6px',
                  border: 'none',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontSize: '1rem'
                }}
              >
                Go to Homepage
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
