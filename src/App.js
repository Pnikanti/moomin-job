import React from 'react';
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'

const App = () => {
    return (
        <>
        <div class="h-screen flex items-center justify-center bg-blue-500 text-white">
            <div class="text-center flex flex-row max-w justify-center items-center">
                <ArrowRightCircleIcon className="size-16 text-white-500"/>
                <h1 class="text-3xl font-bold ml-4">Press Enter to continue</h1>
            </div>
        </div>
        </>
    )
};

export default App;