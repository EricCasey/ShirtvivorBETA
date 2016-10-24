const express = require('express');
const router = express.Router();

const authHelpers = require('../auth/_helpers');

router.post('/register', (req, res, next)  => {
  return authHelpers.createUser(req, res)
  .then((user) => { handleLogin(res, user[0]); })
  .then(() => { handleResponse(res, 200, 'success'); })
  .catch((err) => { handleResponse(res, 500, 'error'); });
});

function handleLogin(req, user) {
  return new Promise((resolve, reject) => {
    req.login(user, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
}

function handleResponse(res, code, statusMsg) {
  res.status(code).json({status: statusMsg});
}

module.exports = router;
