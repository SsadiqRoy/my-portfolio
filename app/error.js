'use client';

function error({ error }) {
  return (
    <div className="error">
      <div className="error-box">
        <h1>{error.message}</h1>

        <a href="/" className="btn-primary">
          Try Again
        </a>
      </div>
    </div>
  );
}

export default error;
