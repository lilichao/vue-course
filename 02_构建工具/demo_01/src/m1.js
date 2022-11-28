import $ from "jquery"

export default {
    setH1() {
        document.body.insertAdjacentHTML("beforeend", "<h1>你好！webpack</h1>")
    }
}
