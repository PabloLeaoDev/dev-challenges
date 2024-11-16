class HomeCtrl {
  async index(req, res) {
    res.json('Index');
  }
}

export default new HomeCtrl();
