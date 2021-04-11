#### XMLHttpRequest

```js
function ajax (url){
    const p = new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open("GET",url,true);//true 设置异步 false同步
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4){ 
                //0 未调用send() 1 正在发送send 2 接收到全部响应内容 3 解析内容 4 完成解析，可在客户端调用
                if (xhr.status === 200){
                resolve(JSON.parse(xhr.responseText));
                } else if (xhr.status === 404){
                    reject(new Error('404 not found'));
                }
            }
        }
    xhr.send(null); //send后才可以收到response
    })
    return p;
}
```

#### fetch

```js
fetch('http://example.com/movies.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
//fetch不会再返回404和500时变为rejected 而是resolved但是ok()设为false
//仅当网络故障时或请求被阻止时，才会标记为 reject
```


#### 跨域

##### 同源策略

ajax请求时，游览器要求当前网页和sever必须同源(安全考虑)
协议、域名、端口都必须相同(子域名也视为跨域)

**加载图片 css js 可以无视同源策略**

跨域必须经过server端的允许和配合，不然说明游览器有漏洞

##### 跨域方法

###### JSONP

- `<script>`可以跨域
- 服务器可以任意动态拼接数据返回

```html
<script>
window.callback = function (data){ //callback名字可以任意指定，但是必须和jsonp.js里的名字相同
    console.log(data);
}
</script>
<script src="./jsonp.js"></script>
<!-- src可以任意拼接，由server端拼接处理 -->
<!-- <script src="./jsonp.js？useName=xxx&callback=callback"></script> -->
```
