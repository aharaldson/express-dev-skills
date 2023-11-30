const skills = [
    {id: 123123, skill: 'HTML boilerplate', done: true},
    {id: 123124, skill: 'CSS fluency', done: false},
    {id: 123125, skill: 'Javascript-via-google', done: true},
    {id: 123126, skill: 'git pushing', done: true},
    {id: 123127, skill: 'Express competency', done: false},
    {id: 123128, skill: 'understand MongoDB', done: true},
    {id: 123129, skill: 'RESTful routing', done: true}
  ];
	


module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
};
	
function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex(skills => skills.id === id);
  skills.splice(idx, 1);
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.done = false;
  skills.push(skill);
}

function getAll() {
  return skills;
};

function getOne(id) {
  id = parseInt(id);
  return skills.find(skills => skills.id === id);
}
