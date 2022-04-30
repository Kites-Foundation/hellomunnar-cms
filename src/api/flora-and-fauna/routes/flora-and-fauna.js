module.exports = [
  {
    method: 'GET',
    path: '/flora-and-faunas',
    handler: 'flora-and-fauna.find',
    config: { policies: [] }
  },
  {
    method: 'GET',
    path: '/flora-and-faunas/:id',
    handler: 'flora-and-fauna.findOne',
    config: { policies: [] }
  },
  {
    method: 'POST',
    path: '/flora-and-faunas',
    handler: 'flora-and-fauna.create',
    config: { policies: [] }
  },
  {
    method: 'PUT',
    path: '/flora-and-faunas/:id',
    handler: 'flora-and-fauna.update',
    config: { policies: [] }
  },
  {
    method: 'DELETE',
    path: '/flora-and-faunas/:id',
    handler: 'flora-and-fauna.delete',
    config: { policies: [] }
  }
]