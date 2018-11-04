
const defaultAsnwerState = {
    correctAnswers: 0
}

const answersReducer = (state=0, action) => {
    switch(action.type){
        case 'SET_CORRECT_ANSWERS':
            return state

        case 'INCREMENT_CORRECT_ANSWERS':
            return state + 1

        default:
            return state
    }

}

export default answersReducer