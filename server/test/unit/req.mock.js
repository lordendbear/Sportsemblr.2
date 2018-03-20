const getRequestMock = (options = {}) => {
    const req = {};

    req.body = options;

    return req;
};

export default getRequestMock;