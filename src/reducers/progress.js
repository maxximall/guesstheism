const defaultProgressReducer = {
    questionNumber: 0
}
const progressReducer = (state = 0, action ) => {
    switch(action.type){
        case 'SET_PROGRESS':
            return state 
            
        case 'UPDATE_PROGRESS':
            return state +1
        default:
            return state
    }
}

export default progressReducer;