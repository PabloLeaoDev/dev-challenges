import app from './app';

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`\nListening in port ${port}`);
  console.log(`\nCtrl + Click in http://localhost:${port}`);
});
