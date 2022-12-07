/* 
    如果直接修改对象的属性，那么就是仅仅修改了属性，没有去做其他的事情，
        这种操作只会影响对象自身，不会导致元素的重新的渲染
    
    希望在修改一个属性的同时，可以进行一些其他的操作，比如触发元素重新渲染！

    要实现这个目的，必须要对对象进行改造，vue3中使用的是的代理模式来完成对象的改造

    设置代理时不会对原对象产生影响！
*/
// obj.name = "猪八戒"

// 创建一个对象
const obj = {
    name: "孙悟空",
    age: 18
}

// 来为对象创建一个代理
const handler = {
    // get用来指定读取数据时的行为，它的返回值就是最终读取到的值
    // 指定get后，在通过代理读取对象属性时，就会调用get方法来获取值
    get(target, prop, receiver) {

        // 返回值之前做一些其他的操作...
        // 在vue中，data()返回的对象会被vue所代理
        // vue代理后，当我们通过代理去读取属性时，返回值之前，它会先做一个跟踪的操作
        //      当我们通过代理去修改属性时，修改后，会通知之前所有用到该值的位置进行更新

        // track() 追踪谁用了我这个属性
        /* 
            三个参数：
                target 被代理的对象
                prop 读取的属性
                receiver 代理对象
        */
        return target[prop]
    },

    // set会在通过代理修改对象时调用
    set(target, prop, value, receiver){

        target[prop] = value

        // trigger() 触发所有的使用该值的位置进行更新
        // 值修改之后做一些其他的操作
    }
} // handler 用来指定代理的行为

// 创建代理
const proxy = new Proxy(obj, handler)

// 修改代理的属性
proxy.age = 28

console.log(proxy.age)

