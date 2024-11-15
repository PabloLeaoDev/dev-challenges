import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'The name field must be between 3 and 255 characters long.'
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email already existis'
        },
        validate: {
          isEmail: {
            msg: 'Invalid e-mail.'
          }
        }
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: ''
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'The password must be between 6 and 50 characters long.'
          }
        }
      }
    }, {
      sequelize
    });

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });

    return this;
  }
}
