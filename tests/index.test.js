const request = require("supertest")
const app = require("../app")

describe('Base url test', () => {
    test('will return is running', async () => {
        const res = await request(app)
            .get('/')
        expect(res.status).toEqual(200)
        expect(res.body).toEqual('is running')

    })
})