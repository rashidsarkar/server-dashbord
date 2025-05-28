class AppError extends Error {
  statusCode: number;
  error: any;

  constructor(statusCode: number, message: string, error?: any) {
    super(message);
    this.statusCode = statusCode;
    this.error = error;
  }
}

export default AppError;
