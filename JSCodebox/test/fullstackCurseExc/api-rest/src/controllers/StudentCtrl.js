import Student from '../models/Aluno';

class StudentCtrl {
  async index(req, res) {
    const students = await Student.findAll();
    res.json(students);
  }

  async store(req, res) {
    try {
      const students = await Student.create(req.body);
      return res.json(students);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const student = await Student.findByPk(id);
      return res.json(student);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const student = await Student.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['Student does not exists']
        });
      }

      const newStudent = await student.update(req.body);
      return res.json(newStudent);
    } catch (e) {
      return res.json(null);
    }
  }

  async delete(req, res) {
    try {
      const student = await Student.findByPk(req.params.id);

      if (!student) {
        return res.status(400).json({
          errors: ['Student does not exists']
        });
      }

      await student.destroy();
      const {
        id, name, middlename, email, age, weight, height
      } = student;
      return res.json({
        student: {
          id, name, middlename, email, age, weight, height
        },
        successMessage: 'Student successfully deleted'
      });
    } catch (e) {
      return res.json(null);
    }
  }
}

export default new StudentCtrl();
