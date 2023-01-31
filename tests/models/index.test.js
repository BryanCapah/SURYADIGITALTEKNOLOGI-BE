const models = require('../../models')

describe('Test sequelize model configuration', () => {
    test('It should be return an object', () => {
        expect.objectContaining(models)
    })
})