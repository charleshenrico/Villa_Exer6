import needle from 'needle';

needle.post('http://localhost:3000/removeUser',{stdnum:12345678}, (err, res) => {
      console.log(res.body);
    });