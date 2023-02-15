describe("message in the list", () => {
  it('display a message in the list', () => {
    // https://docs.cypress.io/api/commands/visit
    cy.visit({
      url: 'http://localhost:3000',
      method: 'GET'
    }) // visit a remote URL

    cy.get("[data-test='messageText']").type('new message') // 获取到输入框并输入对应内容
    cy.contains('send').click() // 获取页面中发送按钮并做一次点击
    cy.get("[data-test='messageText']").should('have.value', '') // 断言输入框中的内容为空
    cy.contains('new message') // 断言页面中显示了输入的内容

  })
})