import React,{useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './AskQuestion.css'
import { askQuestion } from '../../actions/question.js'

const AskQuestion = () => {
    
    const [questionTitle,setQuestionTitle]= useState('')
    const [questionBody,setQuestionBody]= useState('')
    const [questionTags,setQuestionTags]= useState('')

    const dispatch= useDispatch()
    const User = useSelector((state)=> (state.currentUserReducer))
    const navigate=useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log({questionTitle,questionBody,questionTags})
        // User?._result?._id ?(
        dispatch (askQuestion({
            questionTitle, questionBody, questionTags, userPosted: User.result.name,
            userId : User?.result?._id
        }, navigate))
        // ):
        // alert("Please login to ask a question")
        // navigate('/Auth')

    }

    const handleEnter = (e) =>{
        if(e.key === 'Enter'){
            setQuestionBody(questionBody + "\n")
        }
    }

    return (
        <div className='ask-question'>
           <div className='ask-ques-container'>
                <h1>Ask a public Question</h1>
                <form onSubmit={handleSubmit}>
                    <div className="ask-form-container">
                        <label htmlFor='ask-ques-title'>
                            <h4>Title</h4>
                            <p>Be specific and clear while asking a question</p>
                            <input type="text" id="ask-ques-title" onChange={(e) => {setQuestionTitle(e.target.value)}} placeholder='eg.This question is from python.how to use map function'></input>
                        </label>
                        <label htmlFor='ask-ques-body'>
                            <h4>Body</h4>
                            <p>Include everything related to the question to be easily answered</p>
                            <textarea name="" id="ask-ques-body" onKeyPress={handleEnter} onChange={(e) => {setQuestionBody(e.target.value)}} cols="30" rows="10"></textarea>
                        </label>
                        <label htmlFor='ask-ques-tags'>
                            <h4>Tags</h4>
                            <p>Add upto 5 tags inorder to be easily recognised</p>
                            <input type="text" id="ask-ques-tags" onChange={(e) => {setQuestionTags(e.target.value.split(", "))}} placeholder='eg.This question is from python.how to use map function'></input>
                        </label>
                    </div>
                    <input type="submit" value="Review your question" className='review-btn'></input>
                </form>
           </div>
        </div>
    );
}

export default AskQuestion;
