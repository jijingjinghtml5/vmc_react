
const currentTab = (state = 'index', action) => {

    switch (action.type) {
        case 'change_tab':
            state = action.text;
            return state
        case 'SET_DATA':
            return Object.assign({},state, action.text)
        default:
            return state
    }
}

export default {currentTab}