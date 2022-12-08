const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
dayjs.extend(utc);
dayjs.extend(timezone);
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const lodash = require('lodash');
const axios = require('axios').default;
const { v4: uuidv4 } = require('uuid');
const pino = require('pino-http')()


// App configuration
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(pino);
const port = 3000;


app.listen(port, () => {
    console.info("Started " + dayjs().format());
    console.info(`Farmease DocuSaver running on ${port}`);
});

