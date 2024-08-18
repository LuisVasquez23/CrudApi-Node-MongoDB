import User from '../models/user.js';

class UserController{

      // Crear usuario
  async createUser(req, res) {
    try {
      const user = new User(req.body);
      const savedUser = await user.save();
      res.json(savedUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Obtener todos los usuarios
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Obtener un usuario por ID
  async getUserById(req, res) {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Eliminar un usuario
  async deleteUser(req, res) {
    try {
      const deletedUser = await User.findByIdAndRemove(req.params.id);
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Actualizar un usuario
  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { name, age, email } = req.body;
      const updatedUser = await User.findByIdAndUpdate(id, { name, age, email }, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new UserController();