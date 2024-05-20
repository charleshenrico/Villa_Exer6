import needle from 'needle';

needle.post('http://localhost:3000/saveStudent',{stdnum:12345678, fname: 'Charles', lname:'Villa', age: 20  }, (err, res) => {
      console.log(res.body);
    });
