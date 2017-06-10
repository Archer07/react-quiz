const express = require('express');

let app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('app'));


app.listen(PORT, () => {
  console.log('Server is listening on PORT: ', PORT);
});
