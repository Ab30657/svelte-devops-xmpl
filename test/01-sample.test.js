/* eslint-disable no-undef */
describe('sample test', function() {
    this.slow(2000)
    this.timeout(3000)
    it ('page renders', (browser) => {
        browser.url('http://localhost:5000').expect.element('body').to.be.present.before(1000)
        browser.end()
    })
})
