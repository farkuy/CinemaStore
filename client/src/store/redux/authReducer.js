const defaultState = {
    showMd: `dm-overlay-active`,
    redirectPath: ``
}
export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SHOW_AUTH":
            return {...state, showMd: action.payload}
        case 'SET_REDIRECT':
            return { ...state, redirectPath: action.payload };
        default:
            return state
    }
}