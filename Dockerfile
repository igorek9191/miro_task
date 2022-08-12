FROM cypress/included:10.3.1

RUN mkdir /custom-cypress-image

WORKDIR /custom-cypress-image

COPY ./cypress ./cypress
COPY ./cypress.config.ts .
COPY ./cypress.env.json .
COPY ./package.json .
COPY ./tsconfig.json .

RUN npm install