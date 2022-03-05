import express, { Request, Response, Router,  } from "express";

const router: Router = express.Router();

router.post('/login', [
    async (req: Request, res: Response, next: any) => {

    }
]);

router.post('/recovery', [
    async (req: Request, res: Response, next: any) => {

    }
]);

router.post('/change-password', [
    async (req: Request, res: Response, next: any) => {

    }
]);

export default router;