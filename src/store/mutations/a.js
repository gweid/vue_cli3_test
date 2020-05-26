import {
    ADDCOUNT,
    REDUCECOUNT
} from "../mutation-types/a"

export default {
    [ADDCOUNT](state) {
        state.count++
    },
    [REDUCECOUNT](state) {
        state.count--
    }
}