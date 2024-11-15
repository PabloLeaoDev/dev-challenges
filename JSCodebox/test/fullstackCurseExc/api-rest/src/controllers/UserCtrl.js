import User from '../models/User';

class UserCtrl {
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      const { id, name, email } = newUser;
      return res.json({ id, name, email });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'name', 'email'] });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { id, name, email } = user;
      return res.json({ id, name, email });
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const { userId } = req;

      if (!userId) {
        return res.status(400).json({
          errors: ['ID does not exists']
        });
      }

      const user = await User.findByPk(userId);

      if (!user) {
        return res.status(400).json({
          errors: ['User does not exists']
        });
      }

      const newUserData = await user.update(req.body);
      const { id, name, email } = newUserData;
      return res.json({ id, name, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  async delete(req, res) {
    try {
      const { userId } = req;

      if (!userId) {
        return res.status(400).json({
          errors: ['ID does not exists']
        });
      }

      const user = await User.findByPk(userId);

      if (!user) {
        return res.status(400).json({
          errors: ['User does not exists']
        });
      }

      await user.destroy();
      const { id, name, email } = user;
      return res.json({
        user: { id, name, email },
        successMessage: 'User successfully deleted'
      });
    } catch (e) {
      return res.status(400).json(null);
    }
  }
}

// index

// show

// update

// delete

export default new UserCtrl();
