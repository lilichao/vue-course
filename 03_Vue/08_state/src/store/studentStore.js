import { defineStore } from "pinia"

export const useStudentStore = defineStore("student", {
    state: () => ({
        name: "孙悟空",
        age: 18,
        gender: "男",
        address: "花果山",
        skills: ["七十二变", "筋斗云", "金箍棒"]
    }),

    getters: {
        title: (state) => {
            return "Mr. " + state.name
        },

        double() {
            return this.age * 2
        }
    },

    actions: {
        growUp() {
            throw new Error("出错了！")
            this.age++
        }
    }
})
