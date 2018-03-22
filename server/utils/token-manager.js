const jwt = require('jwt-simple');

export default (config) => {
    return {
        encode: (payload) => {
            return jwt.encode(payload, config.jwtSecret);
        }
    };
}