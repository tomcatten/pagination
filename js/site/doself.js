define(function(require, exports, module) {
    var $ = require("jquery"),
        pagination = require('pagination')($);
    var selfTpl = require("../template/self");

    //日期格式化方法
    Date.prototype.format = function(e) {
        var f = {
            "M+": this.getMonth() + 1,
            "d+|D+": this.getDate(),
            "h+|H+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            S: this.getMilliseconds()
        };
        /(y+|Y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var d in f) {
            RegExp("(" + d + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? f[d] : ("00" + f[d]).substr(("" + f[d]).length)))
        }
        return e
    };

    //快速跳转的input事件绑定
    function bindPagersEvent() {
        $('input').on('keydown', function(e) {
            if (e && e.keyCode == 13) {
                showList($(this).val(), 10);
            }
        });
    }

    showList(1, 10);

    //分页方法，可以在请求接口中加入每次展示的条数，然后调用此方法
    function showList(page_no, page_size) {
        bindPagersEvent();
        var data = {
            "list": [{
                "id": 668487,
                "orderNo": "2015071313363664472345",
                "months": 13,
                "money": 100.01,
                "status": 1,
                "remark": "示例1",
                "ctime": 1458823833033,
                "due_time": 1458823833033
            }, {
                "id": 668486,
                "orderNo": "2015071313363664472345",
                "months": 13,
                "money": 100.01,
                "status": 2,
                "remark": "示例2",
                "ctime": 1458823833033,
                "due_time": 1458823833033
            }, {
                "id": 668486,
                "orderNo": "2015071313363664472345",
                "months": 13,
                "money": 100.01,
                "status": 3,
                "remark": "示例3",
                "ctime": 1458823833033,
                "due_time": 1458823833033
            }],
            "total": 1104
        };
        var total = data.total;
        $('.listable tbody').html(selfTpl(data));

        $('.pagers').pagination({
            items: total,
            itemsOnPage: 10,
            cssStyle: 'blue-theme',
            prevText: '',
            nextText: '下一页',
            currentPage: page_no,
            onPageClick: function(pageNumber, event) {
                pageNumberNew = pageNumber;
                showList(pageNumber, page_size);
            },
            onInit: function() {
                //初始化时执行
                $('.v-page-fast').show();

            }
        });
    };
});
