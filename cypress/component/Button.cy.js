import Button from '@/components/Button.vue'

describe('<Button />', () => {
  it('test button ', () => {
     // see: https://on.cypress.io/mounting-vue
      cy.mount(Button, {
        slots: {
          default: 'Click me！'
        }
      })
      cy.get('button').should('contains.text', 'Click me!')
      cy.get('button').click() // 点击按钮
  })
})
