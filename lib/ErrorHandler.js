export const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 500;
  return res.status(status).json({ message, stack: err.stack });
};

export const createError = (status, message) => {
  const err = new Error();
  err.status = status;
  err.message = message;
  return err;
};
