import mongoose from 'mongoose';

await mongoose.connect( 'mongodb+srv://ccvilla1:GBJG5bLsFezr1Cnm@villacluster0.qaxpkhx.mongodb.net/StudentDatabase ');

const Student = mongoose.model('studentData',{
  stdnum: Number,
  fname:String,
  lname: String,
  age:Number
},'studentData')


const saveStudent = async (req, res) => {
	const { stdnum, fname, lname, age} = req.body

	const newStudent = new Student({ stdnum, fname, lname, age})

	const result = await newStudent.save()

	if (result._id) {
		res.send({ success: true })
	} else {
		res.send({ success: false })
	}
}

const update = async (req, res) => {
	const result = await Student.updateOne({ fname: req.body.fname}, {lname: req.body.lname})
	res.send(result)
}

const removeUser = async (req, res) => {
	const { stdnum } = req.body

	const result = await Student.deleteOne({ stdnum: req.body.stdnum })

	if (result.deletedCount == 1) {
		res.send({ success: true })
	} else { 
		res.send({ success: false })
	}
}

const removeAllUser = async (req, res) => {
  const student = await Student.deleteMany({})
  res.send(student)
}

const user = async (req, res) => {
	const student = await Student.findOne({ code: req.query.code })
	res.send(student)
}

const members = async (req, res) => {
	const student = await Student.find({});
	res.send(student)
}



export {saveStudent, update, removeUser, removeAllUser, user, members}

// const findStudent = async (req,res) => {
//   const studentData = await Student.findOne({stdnum: req.query.stdnum})

// 	if (!studentData) {
//     	res.send([])
//     	return
// 	}

// 	res.send(studentData)

// }

// const findAllStudents = async (req,res) => {
//   res.send(await Student.find({age:req.body.age}));

// }
// export {findStudent, findAllStudents} 