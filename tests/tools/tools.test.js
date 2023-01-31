const { clientServerOptions } = require("../../tools/scheduler")
const tools = require('../../tools')
describe('Test clientServerOptions', () => {
    test('Should return object with fields: uri,body,method,headers', () => {
        const expected = {
            uri: 'https://email-service.digitalenvision.com.au/send-email',
            body: {
                email: "test@digitalenvision.com.au",
                message: 'message'
            },
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const clientServerOptionsData = clientServerOptions('message')
        expect(clientServerOptionsData).toMatchObject(expected)
    })
})

describe('Test getDateByToday', () => {
    test('Should return correct format of date YYYY-MM-DD', () => {
        expect(tools.getDateByToday()).toMatch(/\d{4}-\d{2}-\d{2}/)
    })
})