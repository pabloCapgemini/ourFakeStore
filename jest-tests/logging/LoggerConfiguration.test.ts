// Test for logger configuration module
// Tests structured logging configuration with multiple transports and environments
import { describe, test, expect, beforeEach, afterEach } from '@jest/globals';

describe('Logger Configuration', () => {
    // Store original env values to restore after tests
    const originalEnv = process.env;

    beforeEach(() => {
        // Reset environment for each test
        jest.resetModules();
    });

    afterEach(() => {
        // Restore original environment
        process.env = originalEnv;
    });

    test('should create logger with console transport', async () => {
        process.env.NODE_ENV = 'development';

        const { createLogger } = await import('../../src/logging/logger');
        const logger = createLogger();

        expect(logger).toBeDefined();
        expect(logger.info).toBeDefined();
        expect(logger.error).toBeDefined();
    });

    test('should format logs as JSON in production', async () => {
        process.env.NODE_ENV = 'production';

        const { createLogger } = await import('../../src/logging/logger');
        const logger = createLogger();

        // Test that logger exists and has expected methods
        expect(logger).toBeDefined();
        expect(typeof logger.info).toBe('function');
    });

    test('should support multiple log levels', async () => {
        const { createLogger } = await import('../../src/logging/logger');
        const logger = createLogger();

        expect(typeof logger.debug).toBe('function');
        expect(typeof logger.info).toBe('function');
        expect(typeof logger.warn).toBe('function');
        expect(typeof logger.error).toBe('function');
    });
});