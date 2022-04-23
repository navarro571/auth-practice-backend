const express = require("express");
const SchemaValidate = require("../middlewares/schema.handler");
const { customerId, updateCustomerSchema, createCustomerSchema } = require("../schemas/customer.schema");
const UserService = require("../services/user.service");

const router = express.Router();
const service = new UserService('Customer');

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

router.get('/:id',
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const user =  await service.findByID(id);
            res.json(user);
        } catch (error) {
            next(error);
        }
    }
);
router.patch('/:id',
    SchemaValidate(customerId, 'params'),
    SchemaValidate(updateCustomerSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const body= req.body;
            const users = await service.update(id, body);
            res.json(users);
        } catch (error) {
            next(error);
        }
    }
);
router.post('/',
    SchemaValidate(createCustomerSchema, 'body'),
    async (req, res, next) => {
        try {
            const body= req.body;
            const users = await service.create(body);
            res.json(users);
        } catch (error) {
            next(error);
        }
    }
);

router.delete('/:id',
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const userDeleted = await service.delete(id);
            res.json(userDeleted);
        } catch (error) {
            next(error);
        }
    }
);

module.exports = router;