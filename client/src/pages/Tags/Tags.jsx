import React from 'react';
import './Tags.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import TagsList from './TagsList';

const Tags = () => {
    const tagsList = [{
        id:1,
        tagName: 'javaScript',
        tagDesc: "JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn."
    },
    {
        id:2,
        tagName: 'c',
        tagDesc: "C is a general-purpose computer programming language. It was created in the 1970s by Dennis Ritchie, and remains very widely used and influential."
    },

    {
        id:3,
        tagName: 'cpp',
        tagDesc: "C++ is a popular programming language. C++ is used to create computer programs, and is one of the most used language in game development."
    },

    {
        id:4,
        tagName: 'Python',
        tagDesc: "Python is a popular programming language. Python can be used on a server to create web applications"
    },

    {
        id:5,
        tagName: 'Ruby',
        tagDesc: "A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write."
    },

    {
        id:6,
        tagName: 'java',
        tagDesc: "Java is the #1 programming language and development platform. It reduces costs, shortens development timeframes, drives innovation, and improves application "
    }

]
    return (
        <div className='home-container-1'>
            <LeftSidebar/>
            <div className="home-container-2">
                <h1 className='tags-h1'>Tags</h1>
                <p className='tags-p'>A tag is a keyword or label that categorizes your question with other, similar questions.</p>
                <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question.</p>
                <div className='tags-list-container'>
                    {
                        tagsList.map((tag) => (
                            <TagsList tag={tag} key={tagsList.id}/>
                        ))

                    }
                </div>
            </div>
        </div>
    );
}

export default Tags;
