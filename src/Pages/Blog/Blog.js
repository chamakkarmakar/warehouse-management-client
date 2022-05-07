import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';

const Blog = () => {
    const faq=[
        {ques:'Difference between JavaScript and NodeJS',ans:' JavaScript  is an high level programming language that use for Scripting. On the other hand,  NodeJS  is a Javascript runtime that allows the Javascript to run in the Server side. An Engine is required to run the Javascript codes whereas NodeJS allows the Javascript code to run even outside of the Browser.  JavaScript  is mainly used to Handle all the activities of User/client side in Web Application. On the other Hand,  NodeJS  helps to accomplish any Backend Job, server site scripting and moreover, the Backend Activities'},
        {ques:'When should you use  nodejs  and when should you use  mongodb ?',ans:'While working with an Web Application, we need to go through a process. What client will access is called client side and the command of the clients gets executed in the Backend. NodeJS is a Javascript engine that mostly used for creating server and Backend that can respond to the request made by the client. On th other hand, MongoDB is an NoSQL Database that allows to save and query data in Database. If the application requires to store data and present them in the Frontend, then MongoDB here allows to do so. By querying the collection, the user will be able to see the desired data.'},
        {ques:'Differences between  SQL  and  NoSQL  databases',ans:'Structured query language or SQL refers to a standired programming language that allows designing and managing relational Databases or controlling data stored in RDBMS. On the other hand, NoSQL stands for not only SQL, which are non relational database that can exist with the relational databases. SQL helps in executing queries, retrieving and modification of data. NoSQL is suitable for the applications that consists tons of data and works great with Non-structured, structured and semi structured data. Some of the common SQL database includes, MYSQL, Oracle, Sybase, etc. The Following are NoSQL Databases: MongoDB, Apache Cassandra, Coach DB, Redis etc. In SQL, Data needs to be orgaized in Table of the Database whereas, NoSQL databases allows direct insertion.'},
        {ques:'What is the purpose of jwt and how does it work?',ans:'JWT or JSON Web Token is a secure way of trasmitting information between server and client. JWT contains all the required information to access resources from the server. The JWT is used for Token-based aunthentication. After the user succesfully authenticate and authorize the access, all the required information gets stored in a Token. That Token will be used by the application as credential when a target API is called. The passed token will inform the API that the bearer of the token has the permission to access the resources of the API and performs the action. Otherwise, an error will be thrown and the Token Bearer will not be access the API.'}
    ]
    const [selected,setSelected]=useState(false);

    const handleClick=i=>{
        if(selected===i){
           return setSelected(false)
        }
        setSelected(i)
    }
    return (
        <div className='container mx-auto mt-7 w-full md:w-9/12'>
            {
                faq.map((aq,i)=>
                <div id="accordion-collapse" data-accordion="collapse" key={aq.no}>
                <h2 id="accordion-collapse-heading-1">
                    <button type="button" onClick={() => handleClick(i)} className="flex justify-between items-center p-5 w-full font-medium text-left rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200  text-gray-900" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                        <span>{aq.ques} </span>
                        {
                            selected === i ?
                            <ChevronDownIcon className='w-6 h-6'></ChevronDownIcon>
                            :
                            <ChevronUpIcon className='w-6 h-6'></ChevronUpIcon>
                        }
                    </button>
                </h2>
                <div id="accordion-collapse-body-1" className={`${selected === i ? 'block' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-1">
                    <div className="p-5 border border-b-0 border-gray-200 ">
                        <p className="mb-2 text-gray-500 ">{aq.ans}.</p>
                    </div>
                </div>
                    </div>
                    )
            }
        </div>
    );
};

export default Blog;