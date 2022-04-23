const express = require("express");
const UserService = require("../services/user.service");

const router = express.Router();
const service = new UserService('Admin');

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
            const users = service.findByID(id);
            res.json(users);
        } catch (error) {
            next(error);
        }
    }
]);
router.patch('/:id', [
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const body= req.body;
            const users = service.update(id, body);
            res.json(users);
        } catch (error) {
            next(error);
        }
    }
]);
router.post('/', [
    async (req, res, next) => {
        try {
            const body= req.body;
            const users = service.create(body);
            res.json(users);
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