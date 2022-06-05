import React from 'react';
import './RightSidebar.css'
import comment from '../../assets/message.svg'
import pen from '../../assets/pen.svg'
import logo from '../../assets/bwlogo.jpg'

const Widget = () => {
    return (
        <div className='widget'>
            <h4>Hello World!</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <p>This is a collaboratively edited question and
                     answer site for <b> professional and enthusiast 
                     programmers.</b> It's 100% free.</p>
                </div>
                <div className='right-sidebar-div-2'>    
                    <p>Got a question about the site itself? meta is the place to talk
                        about things like what questions are appropriate,
                        what tags we should use, etc.
                    </p>
                </div>
                <div className='right-sidebar-div-3'>
                    <p > About </p>
                    <p > Help </p>
                    <p > Meta </p>
                </div>
            </div>
            <h4>The Explore Blog</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <img src={pen} alt="pen" width='18' />
                    <p>Observability is key to the future of software (and 
                        your DevOps career)</p>    
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={pen} alt="pen" width='18' />
                    <p>Podcast 374:How valuable is your screen name?</p>    
                </div>
            </div>
            <h4>Featured on Meta</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <img src={comment} alt="comment" width='18' />
                    <p>Announcing the arrival of Valued Associate
                         #1214: Dalmarus</p>    
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={comment} alt="comment" width='18' />
                    <p>Improvements to site status and incident
                         communication</p>    
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={logo} alt="logo" width='18' />
                    <p>Staging Ground: Reviewer Motivation, 
                        Scaling, and Open Questions</p>    
                </div>
            </div>
        </div>
    );
}

export default Widget;
