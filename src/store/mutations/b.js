import {
    ADDPRICE,
    REDUCEPRICE
} from "../mutation-types/b"

export default {
    [ADDPRICE](state) {
        state.price++
    },
    [REDUCEPRICE](state) {
        state.price--
    }
}