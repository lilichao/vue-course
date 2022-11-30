// 直接将css引入到js中
// import "./style/index.css"
// 引入图片
// import An from "./assets/an.jpg"

document.body.insertAdjacentHTML(
    "beforeend",
    "<h1>今天天气真不错，风才12级！</h1>"
)

// const a = 10

// const fn = () => {
//     return "哈哈"
// }

// console.log(a)
// console.log(fn())

document.body.onclick = () => {
    alert("你点我干嘛！")
}
