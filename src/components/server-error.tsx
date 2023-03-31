import React from 'react';

interface ServerErrorProps {
  encounteredServerError: boolean;
  errors?: any[];
}

const ServerError: React.FunctionComponent<ServerErrorProps> = (
  props
) => {
  return (
    <div className="w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-danger text-center">Error encountered!</h1>
      <div>
        {props.errors &&
          props.errors.map((error: any, i: number) => {
            return (
              <div
                key={`error-${i}`}
                className="alert alert-danger"
                role="alert"
              >
                {error.message}
              </div>
            );
          })}
        {!props.errors && (
          <div className="alert alert-danger" role="alert">
            {'We are currently fixing some issues!'}
          </div>
        )}
      </div>
      <div>
        <a href={`/`} className="card-link">
          Go to home
        </a>
      </div>
    </div>
  );
};

export default ServerError;
