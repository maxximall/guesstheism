import React from 'react';
import {connect} from 'react-redux';
import Question from './Question';
import Result from './Result';
import Progress from './Progress';


class QuestionContainer extends React.Component{

    calcResult = () => {
        return (this.props.answers / this.props.questions.length) * 100
    }
    
    quizUncomplete(){
        return this.props.questions.length > this.props.progress ? true : false;
    } 
 
   
    render(props){

        return (
            <div className="question_container">

                        <h2 className="logo">Guess the Ism<i className="fas fa-question"></i></h2>
                   
                        {this.quizUncomplete() ?
                            <div>
                                <Progress />
                                <Question question={this.props.questions[this.props.progress]}/>
                            </div> 
                            :
                            <Result result={ this.calcResult() }/>
                        }

            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return{
        questions: state.questions,
        progress: state.progress,
        answers: state.answers
    }
}
export default connect(mapStateToProps)(QuestionContainer);