import express, { Router, Express } from 'express';

/**
 * Routers
 */
import AuthRouter from './auth';

function router(app: Express): void {
    const router: Router = express.Router();
    app.use('/api/v1', router);
    router.use('/auth', AuthRouter);
}

export default router;