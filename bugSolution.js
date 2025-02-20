const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      res.send('Success!');
    } else {
      Promise.reject(new Error('Something went wrong!'))
        .catch(error => {
          console.error('Error caught:', error); // Log the error for debugging
          res.status(500).send('Internal Server Error'); // Send a proper error response
        });
    }
  }, 1000);
});
app.listen(3000, () => console.log('Server listening on port 3000'));