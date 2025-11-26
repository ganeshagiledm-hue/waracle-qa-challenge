# Waracle QA Challenge – Cypress Automated Tests

This repository contains an end‑to‑end test suite for the Waracle QA Challenge online shop.
The goal of this project is to cover the critical user journeys of the application using Cypress,
while keeping the code clean, readable, and easy to extend.

## What’s covered

The tests focus on the highest‑value user flows:

- Logging in (including locked/invalid users)
- Browsing products
- Handling edge cases for special user types
- Adding/removing items from the cart
- Completing a checkout
- Basic performance tolerance

## User types tested

The test suite supports all four accounts provided:

- `standard_user` – expected to behave normally
- `locked_out_user` – cannot access the app
- `problem_user` – intentionally broken images
- `performance_glitch_user` – slow loading times

## Project structure

```
cypress/
  fixtures/       → test data (user accounts)
  integration/    → all test specs
  support/        → custom Cypress commands
.github/workflows → CI pipeline
```

## Running the tests

```bash
npm install
npx cypress open   # interactive
npm run test:run   # headless
```

## CI

GitHub Actions workflow is included to run tests on push.

## Notes

This project is structured the same way I would prepare a testing repo for a real engineering team—clean separation of concerns, reusable utilities, and stable selectors.
