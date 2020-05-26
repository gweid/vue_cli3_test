import {
    ADDCOUNT,
    REDUCECOUNT
} from "../mutation-types/a"

export default {
    handelAdd({
        commit
    }) {
        commit(ADDCOUNT)
    },
    handelReduce({
        commit
    }) {
        commit(REDUCECOUNT)
    }
}