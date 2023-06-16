const body = JSON.parse($response.body)
body.data = body.data.map(t=>({
  ...t,
  status: 1,
  fail_process: 0,
  pay_type: 0,
  price: 0,
  pkg_price: 0
}))
body.userinfo = {
  vip_type: 6,
  m_type: 3,
  m_is_old: 0,
  quota_remain: 500,
  limit_quota: {
    day: 0,
    total: 500,
  },
}
body.vip_user_type = 3
$done({ body: JSON.stringify(body) })
