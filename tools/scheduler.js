exports.clientServerOptions = (message) => {
    return {
        uri: 'https://email-service.digitalenvision.com.au/send-email',
        body: {
            "email": "test@digitalenvision.com.au",
            "message": message
        },
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }
}