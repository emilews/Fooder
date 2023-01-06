const express = require("express");
const router = express.Router();

router.g

module.exports = router;

res.send({
    data: {
        token: token,
        level: db_user["level"],
        name: db_user["name"],
        time: dayjs().toISOString(),
        expire: Math.floor(Date.now() / 1000) + (60 * 60 * 60 * 1000)
    }
})