#### 事件绑定

```js
function bindEvent(elem,type,selector,fn){
    if(fn == null){
        fn = selector;
        selector = null;
    }
    elem.addEventListener(type,function(event){ //此处不能用箭头函数，必须function this作用域问题
        const target = event.target;
        //代理绑定
        if (selector){
            if (target.matches(selector)){
                fn.call(target,event);
            }
        } else { //普通绑定
            fn.call(target,event);
        }
    })
}
```

#### 事件冒泡

- 基于DOM树形结构
- 事件会沿着触发元素向上冒泡
- 可以使用stopPropagation()阻止冒泡