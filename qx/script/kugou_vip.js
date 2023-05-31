function modify(data){
  ["busi_vip", "busi_vip_list"].forEach(key=>{
    if(data[key]){
      data[key][0] = {
        ...data[key][0],
        is_vip : 1,
        vip_end_time : "2025-06-01 20:40:47",
        y_type : 1,
        is_paid_vip : 1
      }
    }
  })
}
let body = JSON.parse($response.body)
modify(body.data)
$done({ body: JSON.stringify(body) })
