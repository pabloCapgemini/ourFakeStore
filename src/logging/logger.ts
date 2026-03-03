import winston from 'winston';

export const createLogger = () => {
  const isProduction = process.env.NODE_ENV === 'production';
  const logLevel = process.env.LOG_LEVEL || (isProduction ? 'warn' : 'info');

  const format = isProduction 
    ? winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      )
    : winston.format.combine(
        winston.format.timestamp(),
        winston.format.simple()
      );

  return winston.createLogger({
    level: logLevel,
    format: format,
    transports: [
      new winston.transports.Console()
    ]
  });
};