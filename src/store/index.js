import { createStore } from 'redux'

const initialState = {
    loggedIn: false,
    authed: false
}

const reducer = (state = initialState, action) => {
    return state
}
const store = createStore(reducer)

export default store
