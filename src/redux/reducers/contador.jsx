const contador = (state = 0, action) => {
    switch (action.type) {
        case '@contador/aumentar':
            return state + 1
    
        default:
            return state
    }
}
export default contador;