import { defineConfig } from "vite"
import legacy from "@vitejs/plugin-legacy"

export default defineConfig({
    plugins: [
        legacy({
            targets: ["defaults", "ie 11"]
        })
    ]
})
