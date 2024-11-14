class HomeCtrl {
  index(req, res) {
    res.json({
      tudoCerto: true
    });
  }
}

export default new HomeCtrl();
