const defaultState = {
    urlList: '',
    urlOne: '',
}
export const reducerUrl = (state = defaultState, action) => {
    switch (action.type) {
        case "NEW_URL_LIST":
            return {...state, urlList: action.payload}
        case "NEW_URL":
            return {state, urlOne: action.payload}
        default:
            return state
    }
}