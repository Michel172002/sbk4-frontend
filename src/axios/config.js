import axios from "axios"

const sbk4Fetch = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers: {
        "Content-Type": "application/json",
    }
})

export default sbk4Fetch