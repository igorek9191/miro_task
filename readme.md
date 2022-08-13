# General description

This project is an implementation of a test automation task for [miro](https://miro.com/signup/)

## Test coverage

Currently, tests are covering just primary signup functionality via web form. It includes positive and negative tests. Checks with non-valid fields don't include a check for the "Name" field, cause there was no possibility to clarify requirements for that field.

##  Tools

The project is written with TypeScript, Cypress, Docker, Mocha reporter.

## How to run tests
In the root of the project execute at first:
```
npm install
```
and then:
```bash
npm test
```

After the execution, a Mocha report should be automatically opened in a browser.

It is also possible to run tests in a Docker containers. There are 2 containers for run with chrome and firefox browsers.
To start tests in containers execute:
```
docker compose up
```
After containers work execute the following commands to get reports:
```
docker cp qa-auto-task:/custom-cypress-image/cypress/reports ./docker-chrome-report
docker cp qa-auto-task2:/custom-cypress-image/cypress/reports ./docker-firefox-report
```