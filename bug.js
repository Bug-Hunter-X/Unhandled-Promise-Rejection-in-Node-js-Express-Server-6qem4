const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might fail
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      res.send('Success!');
    } else {
      //throw new Error('Something went wrong!'); //Unhandled error
      //Simulate a scenario where a promise rejects
      Promise.reject(new Error('Something went wrong!')).catch(err=>{
        console.error("Error caught",err)
      });
      res.send('Something went wrong!');
    }
  }, 1000);
});
app.listen(3000, () => console.log('Server listening on port 3000'));