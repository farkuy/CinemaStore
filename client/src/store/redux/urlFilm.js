const defaultState = {
    urlOne: ''
}
export const reducerUrlOne = (state = defaultState, action) => {
    switch (action.type) {
        case "NEW_URL":
            return {state, urlOne: JSON.parse(action.payload)}
        default:
            return state
    }
}