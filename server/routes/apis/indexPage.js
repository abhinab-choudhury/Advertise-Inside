export default function indexPage(req, res) {

  res.status(200).json({
    'get': '/api',
    'get': '/api/user_detail',
    'post': '/api/create_user',
    'patch': '/api/update_address',
    'patch': '/api/update_role',
    'delete': '/api/delete_user'
  })
}