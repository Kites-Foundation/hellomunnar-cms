module.exports = [
  {
    method: 'GET',
    path: '/near-mes',
    handler: 'near-me.find',
    config: { policies: [] }
  },
  {
    method: 'GET',
    path: '/near-mes/:id',
    handler: 'near-me.findOne',
    config: { policies: [] }
  },
  {
    method: 'POST',
    path: '/near-mes',
    handler: 'near-me.create',
    config: { policies: [] }
  },
  {
    method: 'PUT',
    path: '/near-mes/:id',
    handler: 'near-me.update',
    config: { policies: [] }
  },
  {
    method: 'DELETE',
    path: '/near-mes/:id',
    handler: 'near-me.delete',
    config: { policies: [] }
  }
]