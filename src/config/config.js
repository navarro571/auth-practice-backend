require('dotenv/config');

const config = {
    databaseUrl: process.env.DATABASE_URL,
    isProd: process.env.NODE_ENV === 'production'
}

module.exports = {config};