const config = require('../../../environment/index');

class ErrorHandler extends Error {
  constructor(statusCode, message, error) {
    super();
    this.statusCode = statusCode;
    this.message = message;
    this.error = error;
  }
}

const handleError = (err, res) => {
  const { statusCode, message, error } = err;
  const timestamp = new Date().getTime();

  // TODO: log error
  // TODO: mail admin if critical
  // TODO: check if operational error

  if (config.env === 'development') {
    // TODO: add logger
    // eslint-disable-next-line no-console
    console.error(error, err);
  }
  if (!statusCode) {
    return res.status(500).json({
      status: 'error',
    });
  }

  return res.status(statusCode).json({
    status: 'error',
    statusCode,
    payload: { message },
    timestamp,
  });
};

module.exports = {
  ErrorHandler,
  handleError,
};
