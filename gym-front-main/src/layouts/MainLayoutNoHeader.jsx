import React from 'react';
import SlideBar from '../components/SlideBar';

const MainLayoutNoHeader = ({ children }) => {
    return (
        <div className='flex h-screen overflow-hidden'>
            <SlideBar />
            <div className='flex flex-col w-full'>
                <main className="flex-1 flex justify-center items-center overflow-auto bg-gray-100">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayoutNoHeader;