const express = require("express");
const router = express.Router();

router.post('/u/login', async (req, res) => {
  let db_user = await getUserFromMongo(req.body["username"]);
  if (db_user != undefined) {
      const verified = bcrypt.compareSync(user["password"], db_user["password"]);
      if (verified) {
          let token = jwt.sign({
              exp: Math.floor(Date.now() / 1000) + (60 * 60 * 60),
              lvl: db_user["level"]
          }, 'secret');
          res.send({
              data: {
                  token: token,
                  level: db_user["level"],
                  name: db_user["name"],
                  time: dayjs().toISOString(),
                  expire: Math.floor(Date.now() / 1000) + (60 * 60 * 60 * 1000)
              }
          })
      } else {
          res.sendStatus(403);
      }
  }
});


module.exports = router;