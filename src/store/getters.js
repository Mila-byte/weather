export default {
    getDataOfCity(state) {
        if (state.myCity) {
            return [...state.arrCity, state.myCity]
        } else {
            return state.arrCity
        }
    }
}
