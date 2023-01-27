# End to End Tests in Microservices

This project is the supporting code for course [End to End Tests in Microservices](https://pactman-consulting.thinkific.com/courses/mini-end-to-end-tests-microservices).

## Prerequisites
1. Install [nodejs](https://nodejs.org/en/download/)
1. Pactflow [starter](https://pactflow.io/pricing/) account

## Setup
1. `npm install`

## Start App
1. `npm start`


## Test

### Unit & Contract
1. `npm test`   
Note: contracts generated to `pact/pacts` folder

### End to End - Cypress
Headless:
1. `npm run cy:run`
Headed:
1. `npm run cy:open`
