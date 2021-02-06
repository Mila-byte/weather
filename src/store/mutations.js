export default {
    addCity (state, res) {
        for (let city of state.arrCity) {
            if (city.id === res.id) {
                alert(`City ${res.name} is already exists`)
                return
            }
        }
        state.arrCity.push(res)
        localStorage.setItem('cities', JSON.stringify(state.arrCity))
    },
    deleteCity (state, index) {
        state.arrCity.splice(index, 1)
        localStorage.setItem('cities', JSON.stringify(state.arrCity))
    },
    setCities(state, cities) {
        state.arrCity = cities
    },
    updateData (state, upCity) {
        for (let i = 0; i < state.arrCity.length; i++) {
            if (upCity.id === state.arrCity[i].id) {
                state.arrCity.splice(i,1,upCity)
                localStorage.setItem('cities', JSON.stringify(state.arrCity))
                break
            }
        }
    },
    setMyCity (state, data) {
        for (let i = 0; i < state.arrCity.length; i++) {
            if (data.id === state.arrCity[i].id) {
                state.arrCity.splice(i,1, data)
                console.log('updated my location')
                localStorage.setItem('cities', JSON.stringify(state.arrCity))
                return
            }
        }
        state.arrCity.push(data)
    }
}
