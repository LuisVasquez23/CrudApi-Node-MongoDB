import express from 'express';
import UserController from "../controllers/userController.js";

const router = express.Router();

// Rutas para las operaciones CRUD usando métodos de la clase
router.post('/users', UserController.createUser);
router.get('/users', UserController.getUsers);
router.get('/users/:id', UserController.getUserById);
router.delete('/users/:id', UserController.deleteUser);
router.put('/users/:id', UserController.updateUser);

export default router;
