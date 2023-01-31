const { sendBirthdayMessage } = require("../../../controllers/birthday")

describe('Test Birthday Method', () => {
    test('Should not error', async () => {
        await expect(
            sendBirthdayMessage(),
        ).resolves.not.toThrowError()
    })
})