import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    workers: 1,
    timeout: 30000, // Set the timeout to 30 seconds (30000 milliseconds)
    // Other configuration options...
    reporter: [
        // Configure error reporting
        ['allure-playwright'],
        ['json', { outputFile: 'test-results.json' }],
        ['junit', { outputFile: 'test-results.xml' }],
        ['list'],
        ['line'],
        ['dot'],
        ['html', { outputFolder: 'test-results/html' }],
    ],
};

export default config;