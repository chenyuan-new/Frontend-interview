#### 输入url到渲染页面

- DNS解析url获得IP
- TCP连接
- 发送http请求
- 服务器处理请求并返回http报文
- 游览器解析并渲染报文
- 连接结束

#### 解析渲染页面

![alt DOM render](./DOM%20render.png)

JS加载会阻塞DOM 一般将JS加载放在body的最后 使用defer也可以对脚本执行进行延迟

DOM渲染后会有回流和重绘
样式的改变(颜色等)触发重绘，布局改变会触发回流和重绘

`window.onload`资源加载完才能执行
`DOMContentLoaded` DOM渲染完即可，图片可能未下载

#### property attribute

- property是DOM中的属性，是JavaScript里的对象；
- attribute是HTML标签上的特性，它的值只能够是字符串；

Attribute就是dom节点自带的属性，例如html中常用的id、class、title、align等。
而Property是这个DOM元素作为对象，其附加的内容，例如childNodes、firstChild等。

#### childNodes和children

childNodes获取全部子节点，包含元素节点(nodeType = 1)和文字节点(nodeType = 2)
children只获得元素节点
使用childnodes和filter也可以和children一样效果

