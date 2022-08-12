# General description

This project is an implementation of a test automation task for [miro](https://miro.com/signup/)

## Test coverage

Currently, tests are covering just primary signup functionality via web form. It includes positive and negative tests. Checks with non-valid fields don't include a check for the "Name" field, cause there was no possibility to clarify requirements for that field.

##  Tools

The project is written with TypeScript, Cypress, Docker, Mocha reporter.

## How to run tests
In the root of the project execute:

```bash
npm test
```

After the execution, a Mocha report should be automatically opened in a browser.

It is also possible to run tests in a Docker container. To start tests in a container execute:
```
docker compose up
```
After container work execute the following command to get report:
```
docker cp qa-auto-task:/custom-cypress-image/cypress/reports ./docker-report
```

Finally, report should be in ```/docker-report``` folder

## A few final thoughts

Further test coverage should include signup via third side services.