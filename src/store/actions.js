export default {
    addCity({commit}, city) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=fdc5c7b31d822cd909a6ffa9fab71737`)
            .then(res => res.json())
            .then(res => {
                if (res.cod >= 400 && res.cod < 500) {
                    alert(res.message)
                } else if (res.cod === 200) {
                    console.log(res)
                    commit('addCity', res)
                }
            })
    },
    deleteCity({commit}, index) {
        commit('deleteCity', index)
    },
    async setCities({commit}) {
        let cities = JSON.parse(localStorage.getItem('cities'))

        for (let i = 0; i < cities.length; i++) {
            await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i].name}&units=metric&appid=fdc5c7b31d822cd909a6ffa9fab71737`)
                .then(res => res.json())
                .then(res => {
                    cities[i] = res
                })
        }
        commit('setCities', cities)
    },
    async updateData({commit}, city) {
        await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=fdc5c7b31d822cd909a6ffa9fab71737`)
            .then(res => res.json())
            .then(res => {
                commit('updateData', res)
            })
    }
}
