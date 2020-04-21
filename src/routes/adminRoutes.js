const express = require('express');

const adminRouter = express.Router();

function router(nav) {
  adminRouter.route('/')
    .get((request, response) => {
      response.send('inserting books');
    });
  return adminRouter;
}

module.exports = router;
