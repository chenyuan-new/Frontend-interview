#### cookie

本身用于游览器和server的通讯，被借用到本地存储
存储大小**4kB**
http请求时发送到服务端，增加请求数据量
`docunment.cookie='key=value'` 采取键值对的方式进行追加不是覆盖，一次只能添加一个

#### localStorage sessionStorage

localStorage 永久存储

sessionStorage 临时存储 关闭标签就消失

通用API
- getItem('key')
- setItem('key','value')
- removeItem('key')
- clear()

大小为5M，不会跟随Http请求发送出去
