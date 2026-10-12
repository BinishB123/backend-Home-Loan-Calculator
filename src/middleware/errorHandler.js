const errorHandler = (err, req, res, next) => {
  console.error("========== API ERROR ==========");
  console.error("Time:", new Date().toISOString());
  console.error("Method:", req.method);
  console.error("URL:", req.originalUrl);
  console.error("Message:", err.message);
  console.error("Stack:", err.stack);
  console.error("================================");

  const statusCode = err.statusCode || err.status || 500;

  res.status(statusCode).json({
    success: false,
    message: statusCode === 500
      ? "Internal Server Error"
      : err.message,
  });
};

export default errorHandler;