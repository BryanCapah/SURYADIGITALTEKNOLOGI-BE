const request = require('request');
const { user } = require('../models');
const { getDateByToday } = require('../tools');
const { clientServerOptions } = require('../tools/scheduler');
const sendBirthdayMessage = async () => {
    try {
        const todaysDate = getDateByToday()
        const usersBirthday = await user.findAll({
            raw: true,
            where: {
                date_of_birth: todaysDate
            }
        })

        if (usersBirthday?.length === 0) return

        await usersBirthday.forEach(user => {
            const message = `Hey, ${user?.first_name} it's your birthday!`
            request(clientServerOptions(message), function (error, response) {
                console.log(error, response.body)
            });

        })

        await Promise.all(usersBirthday)
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    sendBirthdayMessage
}