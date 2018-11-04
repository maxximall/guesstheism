import React from 'react';
import {connect} from 'react-redux';


const Prgress = ({progress, questions}) => {
    return(
        <div>
           { ('Question ' + (progress + 1) + ' of ' + questions.length)}
        </div>
    )
}


const mapStateToProps = (state) => {
    return{   
        progress: state.progress,
        questions: state.questions
    }
}
export default connect(mapStateToProps)(Prgress);