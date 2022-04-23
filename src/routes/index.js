const express = require('express');

/**
 * Routers
 */
const AuthRouter = require('./auth');
const UserRouter = require('./user');
const CustomerRouter = require('./customer');
const AdminRouter = require('./admin');

function router(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/auth', AuthRouter);
    router.use('/user', UserRouter);
    router.use('/user-customer', CustomerRouter);
    router.use('/user-admin', AdminRouter);
}

module.exports = router;