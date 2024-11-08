const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


app.get('/', (req, res) => res.sendStatus(200));
app.use('/blog', require('./routes/blog'));

app.listen(process.env.PORT, () => console.log(`listening at port ${process.env.PORT}`));

