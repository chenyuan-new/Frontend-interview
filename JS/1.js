class jQuery {
    constructor(selector){
        const result = document.querySelectorAll(selector);
        const length = result.length;
        for(let i = 0;i<length;++i){
            this[i] = result[i];
        }
        this.length = length;
    }

    get(index){
        return this[index];
    }

    each(fn){
        for (let i = 0; i<this.length;++i){
            const elem = this[i];
            fn(elem);
        }
    }

    on(type,fn){
        return this.each(elem => {
            elem.addEventListener(type,fn,false);
        })
    }
}

function print(fn){
    const a = 200;
    fn();
}

const a = 100;
function fn(){
    console.log(a);
}
print(fn);

const arrow ={
    wait(){
        setTimeout(function(){
            console.log(this);//window
        })
    }
}
const arrow ={
    wait(){
        setTimeout(()=>{
            console.log(this);//当前对象 arrow
        })
    }
}


Function.prototype.bind1 = function(){
    const args = Array.prototype.slice.call(arguments);
    const t = args.shift();
    const self = this; //this为fn.bind的fn

    return function(){
        return self.apply(t,args);
    }
}

setInterval
setTimeout


function bindEvent(elem,type,selector,fn){
    if(fn == null){
        fn = selector;
        selector = null;
    }
    elem.addEventListener(type,function(event){
        const target = event.target;
        if (selector){
            if (target.matches(selector)){
                fn.call(target,event);
            }
        } else {
            fn.call(target,event);
        }
    })
}

stopPropagation
preventPropagation

const xhr = new XMLHttpRequest();
xhr.open("GET","/api",false);//false 设置异步 true同步
xhr.onreadystatechange = function(){
    if (xhr.readyState === 4){ 
        //0 未调用send() 1 正在发送send 2 接收到全部响应内容 3 解析内容 4 完成解析，可在客户端调用
        if (xhr.status === 200){
            alert(xhr.responseText);
        }
    }
}
xhr.send(null); //send后才可以收到response

window.callback = function (data){
    console.log(data);
}

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

function debounce(fn,delay=500){
    let timer = null;
    return function(){
        if (timer){
            clearTimeout(timer);
        }
        timer = setTimeout(()=>{
            fn.apply(this,arguments);//apply的话调用函数不能为箭头函数
            //fn()也可以
            timer = null;
        },delay);
    }
}


function throttle(fn, delay=100){
    let timer = null;
    return function(){
        if(timer){
            return
        }
        timer = setTimeout(()=>{
            fn.apply(this,arguments)
            timer = null
        },delay)
    }

}