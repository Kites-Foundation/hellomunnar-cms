module.exports = [
  {
    method: 'GET',
    path: '/activity-types',
    handler: 'activity-types.find',
    config: { policies: [] }
  },
  {
    method: 'GET',
    path: '/activity-types/:id',
    handler: 'activity-types.findOne',
    config: { policies: [] }
  },
  {
    method: 'POST',
    path: '/activity-types',
    handler: 'activity-types.create',
    config: { policies: [] }
  },
  {
    method: 'PUT',
    path: '/activity-types/:id',
    handler: 'activity-types.update',
    config: { policies: [] }
  },
  {
    method: 'DELETE',
    path: '/activity-types/:id',
    handler: 'activity-types.delete',
    config: { policies: [] }
  }
]