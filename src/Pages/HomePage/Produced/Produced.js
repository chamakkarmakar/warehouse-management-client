import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';


const Produced = () => {
    const [selected, setSelected] = useState(false);
    const processes = [
        { heading: "Collecting Milk from Healthy Cows", ans: "Milk is high in calcium and proteins, which assist to keep our muscles, bones, and teeth healthy. Vitamins B2 and B12, which promote our energy metabolism and nervous system, are found in milk. That's why healthy cows are required to gain natural and organic milk." },
        { heading: "Processing the Milk Maintaining the Proper Standard", ans: "We know that milk's contents, particularly protein, are critical for patients' rehabilitation. We've spent several years talking with some of the world's largest medical nutrition customers and producers. As a result, we obtained a better understanding of their desires, as well as the wishes of the end users, and how to fulfill them.." },
        { heading: "Tested by Specialist Prior to Releasing", ans: "We apply this expertise to create drinks with the smallest possible volume and highest nutrient content. This is a way for us to stand out!" }
    ]
    const handleClick = i => {
        if (selected === i) {
            return setSelected(false)
        }
        setSelected(i)
    }

    return (
        <div className="container mx-auto px-4 my-5">
            <div className="mx-auto mb-16 max-w-lg text-center lg:mb-28">
                <span className="text-lg font-bold text-rose-500">How A Dairy Product Made</span>
                <h2 className="mt-6 mb-12 text-3xl font-bold">It Comes from Fresh and Organic Milk!</h2>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-between">
                <div className='md:w-1/2 w-full md:mx-7'>
                    <img src="https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                </div>
                <div className='md:w-1/2 w-full md:mx-7'>
                    {
                        processes.map((process, i) =>
                            <div id="accordion-collapse" data-accordion="collapse" key={i}>
                                <h2 id="accordion-collapse-heading-1">
                                    <button type="button" onClick={() => handleClick(i)} className="flex justify-between items-center p-5 w-full font-medium text-left rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200  text-gray-900" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                        <span>{process.heading} </span>
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
                                        <p className="mb-2 text-gray-500 ">{process.ans}.</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </div >
    );
};

export default Produced;