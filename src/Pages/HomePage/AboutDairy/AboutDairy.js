import React from 'react';

const AboutDairy = () => {
    return (
        <div className="bg-white py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">Natural and Organic Products</p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">When mankind realized the nutritional advantages of cow, goat, and sheep milk thousands of years ago, we were already consuming it. People drink milk, eat bread with butter oil, and drink tea with thick cream. We will do it for you.</p>
            </div>
        
            <div className="mt-10 flex justify-center">
              <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
                <div className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-rose-400 text-white">
                      
                    </div>
                    <p className="ml-16 py-2 text-lg font-medium leading-6 text-gray-900">Modern Dairy.</p>
                  </dt>
                </div>
        
                <div className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-rose-400 text-white">
                       
                     
                    </div>
                    <p className="ml-16 py-2 text-lg font-medium leading-6 text-gray-900">100% Natural & Organic</p>
                  </dt>
                </div>
        
                <div className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-rose-400 text-white">
                      
                    </div>
                    <p className="ml-16 py-2 text-lg font-medium leading-6 text-gray-900">Best products</p>
                  </dt>
                </div>
        
                <div className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-rose-400 text-white">
                     
                    </div>
                    <p className="ml-16 py-2 text-lg font-medium leading-6 text-gray-900">Awarded Dairy Supplier</p>
                  </dt>
                </div>
              </dl>
            </div>
          </div>
        </div>
    );
};

export default AboutDairy;