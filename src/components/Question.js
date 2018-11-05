import React from 'react';
import {connect} from 'react-redux';
import { updateProgress } from '../actions/progress';
import { incrementCorrectAnswers } from '../actions/answers';
import {Animated} from "react-animated-css";


class Question extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            questionText: props.question.questionText,
            correctAnswer: props.question.answer,
            options: props.question.options,
            questionImage: props.question.questionImage,
            userInfo: '',
            componentVisible: true
            
        }
        this.submitAnswer = this.submitAnswer.bind(this);
    }
    
    componentWillReceiveProps(nextProps){
        this.setState({
            questionText: nextProps.question.questionText,
            correctAnswer: nextProps.question.answer,
            options: nextProps.question.options,
            questionImage: nextProps.question.questionImage,
            userInfo: '',
            componentVisible: true
        });
        this.cleanState();
        
     }
    
    submitAnswer = (answer) => { 
        
        if(this.state.correctAnswer === this.state.options[answer]){
            this.setState(()=>({
                userInfo: 'Correct!',
            }))
            this.props.incrementCorrectAnswers();
            
        }else{
            this.setState(()=>({
                userInfo: `Incorrect!`,
            }))
            
            const wrongOption = document.getElementById(answer);
            wrongOption.classList.add("incorrect")
        }

        const rightOption = document.getElementById(this.indexOfCorrectAnswer());
        rightOption.classList.add("correct");

        this.disableClickOnSubmit();
        
         
    }
    indexOfCorrectAnswer(){
        return this.state.options.indexOf(this.state.correctAnswer)
    }
    cleanState(){
        const correct = document.querySelectorAll(".correct");
        correct[0].classList.remove("correct");
        const incorrect = document.querySelectorAll(".incorrect");
        if(incorrect.length > 0){
            incorrect[0].classList.remove("incorrect");
        }
        this.enableClick();
    
    }
    disableClickOnSubmit(){
        let options = document.querySelectorAll('td');
        options.forEach(element => {
            element.style.pointerEvents = 'none'
        });
    }
    enableClick(){
        console.log('enable fired')
        let options = document.querySelectorAll('td');
        options.forEach(element => {
            element.style.pointerEvents = 'auto'
        });
    }
        
    render(){
       
        return(
                <div>
                    <p className='question-text'>{this.state.questionText}</p>
                    <img src={`./images/${this.state.questionImage}`}/>
                    <p>{this.state.userInfo}</p>

                    <table>
                        <tbody>
                            <tr>
                                <td id='0' className="option" onClick={() => this.submitAnswer(0)}>{this.state.options[0]}</td>
                                <td id='1'  className="option" onClick={() => this.submitAnswer(1)}>{this.state.options[1]}</td>
                            </tr>
                            <tr>
                                <td id='2'  className="option" onClick={() => this.submitAnswer(2)}>{this.state.options[2]}</td>
                                <td id='3' onClick={() => this.submitAnswer(3)}>{this.state.options[3]}</td>
                            </tr>
                        </tbody>
                    </table>
                    {this.state.userInfo ? <button className='button' onClick={() => {this.props.updateProgress()}}>
                        Next <i className="fa fa-arrow-right"></i>
                    </button> : null}
                </div>
        )
    }
    
}
const mapDispatchToProps = (dispatch, props) => ({
    updateProgress: () => dispatch(updateProgress()),
    incrementCorrectAnswers: () => dispatch(incrementCorrectAnswers())
})
export default connect(null, mapDispatchToProps)(Question);