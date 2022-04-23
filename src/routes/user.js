const express = require("express");
const UserService = require("../services/user.service");

const router = express.Router();
const service = new UserService();

router.get('/',
    async (req, res, next) => {
        try {
            const users = await service.get();
            res.json(users);
        } catch (error) {
            next(error);
        }
    }
);

router.get('/:id', [
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const user =  await service.findByID(id);
            res.json(user);
        } catch (error) {
            next(error);
        }
    }
]);

router.delete('/:id', [
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const userDeleted = await service.delete(id);
            res.json(userDeleted);
        } catch (error) {
            next(error);
        }
    }
]);

module.exports = router;