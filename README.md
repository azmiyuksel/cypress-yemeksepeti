# cypress-yemeksepeti
This repo is added for Yemeksepeti technical case. To use this repo NodeJS and npm should have been installed your local computer.

To install dependencies, run:
`npm install`

To run tests on browser, run:
`npx cypress open`

To run tests on headless browser, run:
`npx cypress run`

You can specify browser with --browser command:
`npx cypress run --browser=edge`

You can run tests in your ci environment parallel with following command:
`cypress run --record --key=8wukb9 --parallel`
