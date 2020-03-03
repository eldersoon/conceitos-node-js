const Router = require('express');


const routes = new Router();

// projects
const projects = [];

// middlewares to check if project exists
function checkProjecExists(req, res, next) {

  const { id } = req.params;

  const project = projects.find(p => p.id == id);

  if (!project) {
    return res.status(400).json({ error: 'Project does not exists' });
  }

  return next();
}

// create projects
routes.post('/projects', (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
    tasks: []
  };

  projects.push(project);

  return res.json(project);
});

// show all projects
routes.get('/projects', (req, res) => {

  if (projects < 1) {
    return res.status(400).json({ error: 'No one project created!' });
  }

  return res.json(projects);
});

// show expecific project
routes.get('/projects/:id', checkProjecExists, (req, res) => {
  const { id } = req.params;

  const index = projects.findIndex(p => p.id == id);

  // if (!projects[index]) {
  //   return res.status(400).json({ error: 'Project found!' });
  // }

  return res.json(projects[index]);
});

routes.delete('/projects/:id', checkProjecExists, (req, res) => {
  const { id } = req.params;

  const index = projects.findIndex(p => p.id == id);

  projects.splice(index, 1);

  return res.json({ success: 'Project deleted!' });
});


module.exports = routes;