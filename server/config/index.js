if (!process.env.isProduction) {
    require('dotenv').config();
}

const config = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    jwtSecret: process.env.JWT_SECRET,
    connectionString: process.env.CONNECTION_STRING
};

export default config;