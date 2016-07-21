//公共组建相关脚本
seajs.config({
    alias: {
        "jquery": "plugin/jquery-1.8.3.min.js",
        "jade": "plugin/jade.js",
        'pagination': 'plugin/pagination.js'
    }
});

//业务相关脚本
seajs.config({
    alias: {
        "doself": "site/doself.js"
    }
});
