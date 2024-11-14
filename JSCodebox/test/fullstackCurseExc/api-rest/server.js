import app from './app';

const port = 3001;

app.listen(port, () => {
  console.log(`\nListening in port ${port}`);
  console.log(`\nCtrl + Click in http://localhost:${port}`);
});
