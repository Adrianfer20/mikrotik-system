const UserInitial = {
    email:null, displayName:null , photoURL:null
}


const user = (state = UserInitial, action) => {
    switch (action.type) {
        case '@user/set':
            return action.payload
        default:
            return state
    }
}

export default  user;