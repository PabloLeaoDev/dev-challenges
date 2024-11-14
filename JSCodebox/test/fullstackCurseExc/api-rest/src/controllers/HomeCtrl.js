import Aluno from '../models/Aluno';

class HomeCtrl {
  async index(req, res) {
    const newStudent = await Aluno.create({
      name: 'Fulano',
      middlename: 'Sicrano',
      email: 'fulano@gmail.com',
      age: 30,
      weight: 70,
      height: 1.75
    });

    res.json(newStudent);
  }
}

export default new HomeCtrl();
