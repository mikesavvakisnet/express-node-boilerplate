// TODO: logs maybe?

const sendResponse = (res, status, payload) => res.status(status).json({
  status: 'success',
  statusCode: status,
  payload,
  timestamp: Date.now(),
});

module.exports = {
  sendResponse,
};
