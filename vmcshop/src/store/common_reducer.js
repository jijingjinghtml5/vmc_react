
const currentTab = (state = 'index', action) => {

    switch (action.type) {
        case 'change_tab':
            state = action.text;
            return state
        default:
            return state
    }
}

export default {currentTab}