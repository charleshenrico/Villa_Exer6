import express from 'express';

// create app
const app = express()

// Plugin for reading JSON payloads
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// pass app instance to router
import router from './router.js'
router(app)


app.listen(3000, () => { console.log("API listening at port 3000.")});