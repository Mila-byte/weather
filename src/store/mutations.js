export default {
    addCity (state, res) {
        state.arrCity.push(res)
    },
    deleteCity (state, index) {
        state.arrCity.splice(index, 1)
    }
}
