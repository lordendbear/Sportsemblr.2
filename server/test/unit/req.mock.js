const getRequestMock = (options = {}) => {
    const req = {};

    Object.keys(options)
        .forEach((key) => {
            req[key] = options[key];
        });
    return req;
};

export default getRequestMock;