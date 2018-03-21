const getResponseMock = () => {
    return {
        sendStatus(statusCode) {
            this.statusCode = statusCode;

            return this;
        },
        send(body) {
            this.body = body;

            return this;
        },
    };
};

export default getResponseMock;