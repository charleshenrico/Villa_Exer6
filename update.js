import needle from 'needle';

needle.post('http://localhost:3000/update',{ lname: 'Parker', fname:'Charles' }, (err, res) => {
      console.log(res.body);
    });