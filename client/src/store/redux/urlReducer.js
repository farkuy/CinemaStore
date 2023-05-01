const defaultState = {
    urlList: '',
}
export const reducerUrl = (state = defaultState, action) => {
    switch (action.type) {
        case "NEW_URL_LIST":
            return {state, urlList: JSON.parse(action.payload)}
        default:
            return state
    }
}
