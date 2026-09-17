import { describe, expect, test, vi } from 'vitest';
import {
  logger as winstonLogger,
  buildLogger,
} from '../../src/plugins/logger.plugin';

describe('logger.plugin.ts', () => {
  test('buildlogger should return a function logger', () => {
    const logger = buildLogger('test');

    expect(typeof logger.log).toBe('function');
    expect(typeof logger.error).toBe('function');
  });

  test('logger should log a message', () => {
    const winstonLoggerMock = vi.spyOn(winstonLogger, 'log');

    const message = 'test message';
    const service = 'test service';
    const logger = buildLogger(service);

    logger.log(message);

    expect(winstonLoggerMock).toHaveBeenCalled();
    expect(winstonLoggerMock).toHaveBeenCalledWith(
      'info',
      expect.objectContaining({
        level: 'info',
        message,
        service,
      }),
    );
  });

  test('logger should log an error', () => {
    const winstonLoggerMock = vi.spyOn(winstonLogger, 'error');

    const message = 'test message';
    const service = 'test service';
    const logger = buildLogger(service);

    logger.error(message);

    expect(winstonLoggerMock).toHaveBeenCalled();
    expect(winstonLoggerMock).toHaveBeenCalledWith(
      'error',
      expect.objectContaining({
        message,
        service,
      }),
    );
  });
});
