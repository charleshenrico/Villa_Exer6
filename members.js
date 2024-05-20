import needle from 'needle';

needle.get(`http://localhost:3000/members`, (err, res) => {
  console.log(res.body);  
});