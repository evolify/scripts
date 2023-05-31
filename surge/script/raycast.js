let body = JSON.parse($response.body)
body.eligible_for_pro_features = true
$done({ body: JSON.stringify(body) })
