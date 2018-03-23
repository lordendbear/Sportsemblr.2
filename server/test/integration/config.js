require('dotenv').config();

const config = {
    env: process.env.NODE_ENV,
    port: process.env.PORT || 3001,
    jwtSecret: process.env.JWT_SECRET,
    connectionString: process.env.TEST_CONNECTION_STRING
};

export default config;