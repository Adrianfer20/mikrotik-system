const stateInitial = {
    toastId: null,
    status: 'idle', // idle || loading || success || error
}

const toast = (state = stateInitial, action) => {
    switch (action.type) {
        case '@toast/idle':
            return stateInitial
        case '@toast/loading':
            return { toastId: action.payload, status: 'loading' }
        case '@toast/error':
            return { toastId: action.payload, status: 'error' }
        default:
            return state
    }
}

export default toast