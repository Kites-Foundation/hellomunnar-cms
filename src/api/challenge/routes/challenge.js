module.exports = [
  {
    method: 'GET',
    path: '/challenges',
    handler: 'challenge.find',
    config: { policies: [] }
  },
  {
    method: 'GET',
    path: '/challenges/:id',
    handler: 'challenge.findOne',
    config: { policies: [] }
  },
  {
    method: 'POST',
    path: '/challenges',
    handler: 'challenge.create',
    config: { policies: [] }
  },
  {
    method: 'PUT',
    path: '/challenges/:id',
    handler: 'challenge.update',
    config: { policies: [] }
  },
  {
    method: 'DELETE',
    path: '/challenges/:id',
    handler: 'challenge.delete',
    config: { policies: [] }
  }
]