import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"42590468bbb64d77955374e59c4c1137"
    }
})