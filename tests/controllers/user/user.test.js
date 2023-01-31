const request = require("supertest")
const app = require("../../../app")

describe('Sanity test', () => {
    test('1 should equal 1', () => {
        expect(1).toBe(1)
    })
})

describe('User get endpoint', () => {
    test('Should return array', async () => {
        const res = await request(app)
            .get('/api/user')
        expect(res.status).toEqual(200)
        expect.arrayContaining(res.body)
    })
})

describe('User post endpoint', () => {
    test('Should match with create message', async () => {
        const payload = { first_name: 'brian', last_name: 'capah', date_of_birth: '1994-07-27', location: 'Sidikalang' };
        const res = await request(app)
            .post('/api/user')
            .send(payload)
        expect(res.status).toEqual(200)
        expect(res.body.message).toBe('User Created Successfully!')
    })
})

describe('User put endpoint', () => {
    test('Should match with edited message', async () => {
        const payload = { id: 13, date_of_birth: '1994-09-27' };
        const res = await request(app)
            .put('/api/user')
            .send(payload)
        expect(res.status).toEqual(200)
        expect(res.body.message).toBe('User Edited Successfully!')
    })
})

describe('User delete endpoint', () => {
    test('Should match with deleted message', async () => {
        const payload = { id: 13 };
        const res = await request(app)
            .delete('/api/user')
            .send(payload)
        expect(res.status).toEqual(200)
        expect(res.body.message).toBe('User Deleted Successfully!')
    })
})