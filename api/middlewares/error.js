export const ErrorHandler = (statusCode, message) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  return error;
};

export const catchAsyncErrors = (myFunc) => (req, res, next) => {
  Promise.resolve(myFunc(req, res, next)).catch(next);
};
