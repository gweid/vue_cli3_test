import {
    ADDPRICE,
    REDUCEPRICE
} from "../mutation-types/b"

export default {
    handelPriceAdd: ({
        commit // es6 解构赋值
    }) => {
        commit(ADDPRICE)
    },
    handelPriceReduce: ({
        commit
    }) => {
        commit(REDUCEPRICE)
    }
}