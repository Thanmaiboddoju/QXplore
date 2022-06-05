import React, {useState} from 'react';
import {Link, useNavigate, useParams, useLocation} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import moment from 'moment'
import copy from 'copy-to-clipboard'

import upvote from '../../assets/sort-up-solid.svg'
import downvote from '../../assets/sort-down-solid.svg'
import './Questions.css'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer';
import {postAnswer, deleteQuestion, voteQuestion} from '../../actions/question'


const QuestionDetails = () => {

    const {id} = useParams()
    const navigate= useNavigate()
    const dispatch= useDispatch()
    const questionsList= useSelector(state => state.questionsReducer)
    // var questionsList = [{
    //     _id:'1',
    //     upVotes:3,
    //     downVotes:2,
    //     userId: 1,
    //     answer: [{
    //         answerBody: "Answer",
    //         userAnswered: 'Kumar',
    //         answeredOn: "jan 2",
    //         userId: 2,

    //     }],
    //     noOfAnswers: 2,
    //     questionTitle: "what is a function",
    //     questionBody: "It meant to be",
    //     questionTags: ["java", "nodejs", "reactjs", "mongodb"],
    //     userPosted: "mano",
    //     askedOn: "jan 1"
    // },{
    //     _id:'2',
    //     upVotes:3,
    //     downVotes:2,
    //     userId: 2,
    //     answer: [{
    //         answerBody: "Answer",
    //         userAnswered: 'Kumar',
    //         answeredOn: "jan 2",
    //         userId: 2,

    //     }],
    //     noOfAnswers: 0,
    //     questionTitle: "what is a function",
    //     questionBody: "It meant to be",
    //     questionTags: ["javascript", "R", "python"],
    //     userPosted: "mano",
    //     askedOn: "jan 1"

    // },{
    //     _id:'3',
    //     upVotes:3,
    //     downVotes:2,
    //     userId: 2,
    //     answer: [{
    //         answerBody: "Answer",
    //         userAnswered: 'Kumar',
    //         answeredOn: "jan 2",
    //         userId: 2,

    //     }],
    //     noOfAnswers: 0,
    //     questionTitle: "what is a function",
    //     questionBody: "It meant to be",
    //     questionTags: ["javascript", "R", "python"],
    //     userPosted: "mano",
    //     askedOn: "jan 1"

    // }]

    const User = useSelector((state) => (state.currentUserReducer))
    const [Answer, setAnswer] = useState('');
    const handlePostAns = (e, answerLength) => {
        e.preventDefault()
        if(User === null){
            alert('Login or Signup to answer a question')
            navigate('/Auth')
        }
        else{
            if(Answer === ''){
                alert("Enter an answer before submitting")
            }else{
                dispatch(postAnswer({id, noOfAnswers: answerLength+1, answerBody:Answer, userAnswered: User.result.name, userId: User.result._id}))
                console.log(User.result)
            }
        }


    }

    const location=useLocation()
    const url= 'http://localhost:3000'
    const handleShare = () => {
        copy(url + location.pathname)
        alert("copied url : "+ url+ location.pathname)
    }

    const handleDelete = () => {
        dispatch(deleteQuestion(id, navigate))
    }

    const handleUpVote = () => {
        dispatch(voteQuestion(id, 'upVote', User.result._id))
    }

    const handleDownVote = () => {
        dispatch(voteQuestion(id, 'downVote', User.result._id))
    }


    return (
        <div className='question-details-page'>
            {
                questionsList.data === null?
                <h1>Loading...</h1>:
                <>
                {
                    questionsList.data.filter(question => question._id===id).map(question => (
                        <div key={question._id}>
                            <section className='question-details-container'>
                                <h1>{question.questionTitle}</h1>
                                <div className='question-details-container-2'>
                                    <div className="question-votes">
                                        <img src={upvote} alt="" height="25px" className='votes-icon' onClick={handleUpVote}/>
                                        <p>{question.upVote.length-question.downVote.length}</p>
                                        <img src={downvote} alt="" height="25px" className='votes-icon' onClick={handleDownVote}/>
                                    </div>
                                    <div style={{width: "100%"}}>
                                        <p className='question-body'>{question.questionBody}</p>
                                        <div className="question-details-tags">
                                            {
                                                question.questionTags.map((tag)=>(
                                                    <p key={tag}>{tag}</p>
                                                ))
                                            }
                                        </div>
                                        <div className="question-actions-user">
                                            <div>
                                                <button type='button' onClick={handleShare}>Share</button>
                                                {
                                                    User?.result?._id === question?.userId && (
                                                        <button type='button' onClick={handleDelete}>Delete</button>
                                                    )
                                                }
                                                
                                                
                                            </div>
                                            <div>
                                                <p>asked {moment(question.askedOn).fromNow()}</p>
                                                <Link to={`/Users/${question.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                                    <Avatar backgroundColor="orange" px="8px" py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                    <div>
                                                        {question.userPosted}
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {
                                question.noOfAnswers !==0 && (
                                    <section>
                                        <h3>{question.noOfAnswers} Answers</h3>
                                        <DisplayAnswer key={question._id} question={question} handleShare={handleShare}>
                                    
                                        </DisplayAnswer>
                                    </section>
                                )
                            }
                            <section className='post-ans-container'>
                                <h3>Your Answer</h3>
                                <form onSubmit={ (e) => {handlePostAns(e, question.answer.length)}}>
                                    <textarea name="" id="" onChange={e => setAnswer(e.target.value)} cols="30" rows="10"></textarea><br/>
                                    <input type="submit" className='post-ans-btn' value='Post Your Answer' />
                                </form>
                                <p>
                                    Browse other Question tagged
                                    {
                                        question.questionTags.map((tag) =>(
                                            <Link to="/Tags" key={tag} className='ans-tags'> {tag} </Link>
                                        ))
                                    } or
                                    <Link to='/AskQuestion' style={{textDecoration:"none",color:"#009dff"}}>
                                         Ask your own question 
                                    </Link>
                                </p>
                            </section>
                        </div>
                    ))
                }
                </>
            }
        </div>
    );
}

export default QuestionDetails;
