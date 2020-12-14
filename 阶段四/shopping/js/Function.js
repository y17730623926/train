// 请求
function qingQiu(info_val, warp, pageNum) {
    var huodong_item = $(".huodong_item").eq(0);
    $.ajax({
        url: "http://localhost/w/website/findGoodsList",
        dataType: "json",
        type: "GET",
        data: {
            info: info_val,
            pageNo: pageNum,
        },
        success: function (data) {
            console.log(data);
            var arr = data["data"]["tbk_dg_material_optional_response"]["result_list"]["map_data"];
            maxPage = Math.floor(data["data"]["tbk_dg_material_optional_response"].total_results / arr.length)
            console.log(maxPage)
            arr.forEach(function (item, index) {
                var con = huodong_item.clone(true).attr("href", `./list.html?aa=${item.item_id}`);
                con.attr("class", "huodong_item").find("img").attr("src", item["pict_url"]);
                con.find("p").text(item["category_name"]).append("<span class='right'>" + item["zk_final_price"] + "元</span>");
                if (item["coupon_info"]) {
                    con.append(`<a href="${item["coupon_share_url"]}">${item["coupon_info"]}</a>`);
                } else {
                    con.find("span").eq(1).text("暂无优惠劵");
                }
                warp.append(con);
            });
        }
    })
}
