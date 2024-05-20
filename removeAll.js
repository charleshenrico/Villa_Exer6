import needle from 'needle';

needle.post('http://localhost:3000/removeAllUser', (err, res) => {
      console.log(res.body);
    });