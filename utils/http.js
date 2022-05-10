
const config = {
    baseUrl: 'http://localhost:8062',
    header: {
        'content-type': 'application/json;charset=UTF-8',
        'token': null
    },
    method: 'GET',
    dataType: 'json',
    responseType: 'text',
    custom: {},
    timeout: 30000,
    sslVerify: true
}

// 获取token缓存
uni.getStorage({
	key: 'token',
	success: function (res) {
        console.log(res.data);
        config.header.token = res.data
	}
});


const $http = function(options = {}) {
    let url = config.baseUrl + options.url || ''
    // url上拼接参数
    if(options.params) {
        url += '?'
        for(var key in options.params){                
            url += key + '=' + options.params[key] + '&'
        }
        url = url.slice(0, url.lastIndexOf('&'))
    }
    // 合并额外属性
    let hebin = {}
    if(options.responseType) {
        hebin.responseType = options.responseType
    }

    return new Promise((resolve, reject) => {
        uni.request({
            url,
            method: options.method || '',
            data: options.data || {},
            header: options.header || config.header,
            ...hebin,
            timeout: config.timeout,
            success: (res) => {
                if(res.data.code==200){
                    resolve(res.data);// then回调
                }else{
                    uni.hideLoading();
                    uni.showToast({
                        title:res.data.msg,
                        icon: 'none',
                        duration: 2000
                    });
                    
                }
                
            },
            fail: (res) => {
                reject(res);// catch回调
            }
        })
    })
}


export default $http;