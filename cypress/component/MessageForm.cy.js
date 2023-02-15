import MessageForm from '@/components/MessageForm.vue'
describe('MessageForm', () => {
  it('should emit send event', () => {
    cy.mount(MessageForm)
    cy.get("[data-test='messageText']").type('new Message')
    // click()点击操作是异步的
    // Cypress 支持 Vue Test Utils(VTU)的api
    cy.contains('send').click()
    cy.get('@wrapper').should((wrapper) => {
      expect(wrapper.emitted('send')[0]).toEqual(['new Message'])
    })
  })
})
