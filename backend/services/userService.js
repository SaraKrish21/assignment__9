const User = require('../models/User');

class UserService {
  async createUser(name, email, password) {
    try {
      const user = new User({ name, email, password });
      await user.save();
      return user;
    } catch (error) {
      throw new Error('Error creating user');
    }
  }

  async getUserById(userId) {
    try {
      const user = await User.findById(userId);
      if (!user) throw new Error('User not found');
      return user;
    } catch (error) {
      throw new Error('Error getting user');
    }
  }

  async updateUser(userId, updateData) {
    try {
      const user = await User.findByIdAndUpdate(userId, updateData, {
        new: true,
      });
      if (!user) throw new Error('User not found');
      return user;
    } catch (error) {
      throw new Error('Error updating user');
    }
  }

  async deleteUser(userId) {
    try {
      const user = await User.findByIdAndDelete(userId);
      if (!user) throw new Error('User not found');
      return user;
    } catch (error) {
      throw new Error('Error deleting user');
    }
  }

  async getAllUsers() {
    try {
      const users = await User.find();
      return users;
    } catch (error) {
      throw new Error('Error getting users');
    }
  }
}

module.exports = new UserService();
