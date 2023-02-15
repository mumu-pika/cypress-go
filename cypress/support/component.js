// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-jest-adapter'

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount } from 'cypress/vue'

// Cypress.Commands.add('mount', mount)

// 这里自定义mount指令为的是使用vtu中
// https://docs.cypress.io/guides/component-testing/vue/examples
Cypress.Commands.add('mount', (...args) => {
  return mount(...args).then(({ wrapper }) => {
    return cy.wrap(wrapper).as('wrapper')
  })
})

// Example use:
// cy.mount(MyComponent)