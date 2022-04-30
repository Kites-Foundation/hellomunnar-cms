module.exports = [
  {
    method: 'GET',
    path: '/ksrtcs',
    handler: 'ksrtc.find',
    config: { policies: [] }
  },
  {
    method: 'GET',
    path: '/ksrtcs/:id',
    handler: 'ksrtc.findOne',
    config: { policies: [] }
  },
  {
    method: 'POST',
    path: '/ksrtcs',
    handler: 'ksrtc.create',
    config: { policies: [] }
  },
  {
    method: 'PUT',
    path: '/ksrtcs/:id',
    handler: 'ksrtc.update',
    config: { policies: [] }
  },
  {
    method: 'DELETE',
    path: '/ksrtcs/:id',
    handler: 'ksrtc.delete',
    config: { policies: [] }
  }
]