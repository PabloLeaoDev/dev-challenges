import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenCtrl {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Invalid credentials']
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        errors: ['User does not exists']
      });
    }

    const passwordIsValid = await user.passwordIsValid(password);

    if (!passwordIsValid) {
      return res.status(401).json({
        errors: ['Invalid password']
      });
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION
    });

    return res.json({ token, user: { name: user.name, id, email } });
  }
}

export default new TokenCtrl();
