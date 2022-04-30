module.exports = [
  {
    method: 'GET',
    path: '/things-to-dos',
    handler: 'things-to-do.find',
    config: { policies: [] }
  },
  {
    method: 'GET',
    path: '/things-to-dos/:id',
    handler: 'things-to-do.findOne',
    config: { policies: [] }
  },
  {
    method: 'POST',
    path: '/things-to-dos',
    handler: 'things-to-do.create',
    config: { policies: [] }
  },
  {
    method: 'PUT',
    path: '/things-to-dos/:id',
    handler: 'things-to-do.update',
    config: { policies: [] }
  },
  {
    method: 'DELETE',
    path: '/things-to-dos/:id',
    handler: 'things-to-do.delete',
    config: { policies: [] }
  }
]