const Router = require('express');


const routes = new Router();

routes.get('/projects', (req, res) => {
  return res.json({ project: 'none' });
})

module.exports = routes;