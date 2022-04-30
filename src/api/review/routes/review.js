module.exports = [
  {
    method: 'GET',
    path: '/reviews',
    handler: 'review.find',
    config: { policies: [] }
  },
  {
    method: 'GET',
    path: '/reviews/:id',
    handler: 'review.findOne',
    config: { policies: [] }
  },
  {
    method: 'POST',
    path: '/reviews',
    handler: 'review.create',
    config: { policies: [ 'global::isAuthenticated' ] }
  },
  {
    method: 'PUT',
    path: '/reviews/:id',
    handler: 'review.update',
    config: { policies: [ 'global::isAuthenticated' ] }
  },
  {
    method: 'DELETE',
    path: '/reviews/:id',
    handler: 'review.delete',
    config: { policies: [] }
  }
]