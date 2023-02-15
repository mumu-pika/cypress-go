import HelloWorld from '@/components/HelloWorld.vue'

describe('<HelloWorld />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(HelloWorld)
  })
})