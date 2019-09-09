exports.config = {
    output: './output',
    helpers: {
        WebDriver: {
            url: 'https://www.sahibinden.com',
            browser: 'chrome',
            show: true,
            windowSize: "maximize",
            waitForTimeout: 5000
        },
    },
    include: {
        I: './steps_file.js',
        homePage: './pages/home.js',
        searchFragment: './fragments/search.js',
        searchResultPage: './pages/searchResult.js',
        advertDetailPage: './pages/advertDetail.js',
    },
    mocha: {},
    bootstrap: null,
    teardown: null,
    hooks: [],
    gherkin: {
        features: './features/*.feature',
        steps: ['./step_definitions/steps.js']
    },
    plugins: {
        screenshotOnFail: {
            enabled: true
        },
        wdio: {
            enabled: true,
            services: ['selenium-standalone']
        },
        allure: {
            enabled: true
        },
        autoDelay: {
            enabled: true
        },
        retryFailedStep: {
            enabled: true
        },
        stepByStepReport: {
            enabled: true,
        }
    },
    tests: './tests/*_test.js',
    name: 'codeceptjs_example'
}