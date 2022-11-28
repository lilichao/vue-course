;(() => {
    "use strict"
    const e = {
        setH1() {
            document.body.insertAdjacentHTML(
                "beforeend",
                "<h1>你好！webpack</h1>"
            )
        }
    }
    console.log("Hello"), e.setH1()
})()
