import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import dotenv from 'dotenv';

const testDir = defineBddConfig({
  features: 'tests/features/**/*.feature',
  steps: [
    'tests/stepDefinitions/**/*.js',
    'tests/fixtures/**/*.js',
    '!tests/setup/authSetup.js',
    'pages/**/*.js'
  ],
});

// Read environment variables from file.
    dotenv.config({ path: '.env' });


export default defineConfig({
  testDir,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 3 : 3,
  grep: /@validLogin/,   
  // grepInvert: /@regression/, 
  reporter: [
    ['html'],
    ['list'],
    ['allure-playwright', {
      outputFolder: 'allure-results',  
    }]
  ],
  timeout: 30* 1000,

  use: {
     baseURL: process.env.baseUrl,
     headless: true, 
     slowMo: process.env.CI ? 0 : 1000, 
     trace: 'on-first-retry',
     screenshot: 'only-on-failure',
     video: 'retain-on-failure',
     retries: 2, 
  },

  /* Configure projects for major browsers */
  projects: [

    // Runs this first to save storageStateSession details to user.json
    {      
      name: 'setup',
      testDir: 'tests/setup',
      testMatch: ['authSetup.js'],
    },
      
    //To avoid using storage state in Login tests
    {
      name: 'login-test-chromium',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/.features-gen/**/01Login.feature.spec.js',
    },

    // {
    //   name: 'login-firefox',
    //   use: { ...devices['Desktop Firefox'] },
    //   testMatch: '**/.features-gen/**/01Login.feature.spec.js',
    // },

    // {
    //   name: 'login-webkit',
    //   use: { ...devices['Desktop Safari'] },
    //   testMatch: '**/.features-gen/**/01Login.feature.spec.js',
    // },

    //To use storage state in all other features tests 
    {
      name: 'features-using-storageState-Chromium',
      use:{ ...devices['Desktop Chrome'],
        storageState: 'auth/user.json',
       },
      testMatch: '**/.features-gen/**/*.spec.js',
     // dependencies: ['setup'],
    },

    //  {
    //   name: 'features-firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //     storageState: 'auth/user.json',
    //   },
    //   testMatch: '**/.features-gen/**/*.spec.js',
    //   //dependencies: ['setup'],
    // },

    // {
    //   name: 'features-webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //     storageState: 'auth/user.json',
    //   },
    //   testMatch: '**/.features-gen/**/*.spec.js',
    //   //dependencies: ['setup'], 
    // },


    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

