import { Timer, UserPlus, Volume1Icon, Volume2Icon } from 'lucide-react'
import React from 'react'

const Notifications = () => {
    return (
        <section className="h-full w-full mt-4 ">
            <div className="flex flex-col h-[5%]">
                <h2 className="text-lg font-medium">
                    Recent Notifications
                </h2>
                <hr className='w-full mt-2' />
            </div>

            <div className='flex flex-col gap-2'>
                <div className='flex flex-col border w-full rounded-md py-2 px-4'>
                    <div className='flex flex-row justify-start items-center '>
                        <UserPlus className='size-5' />
                        <span className='ml-2 font-medium text-md'>
                            Friend request from Charan
                        </span>
                    </div>
                    <p className='text-gray-500 mt-2 text-sm'>
                        optional message
                    </p>
                </div>

                <div className='flex flex-col border w-full rounded-md py-2 px-4'>
                    <div className='flex flex-row justify-start items-center '>
                        <Volume2Icon className='size-5' />
                        <span className='ml-2 font-medium text-md'>
                            now playing amplifier
                        </span>
                    </div>
                    <p className='text-gray-500 mt-2 text-sm'>
                        optional message
                    </p>
                </div>

                <div className='flex flex-col border w-full rounded-md py-2 px-4'>
                    <div className='flex flex-row justify-start items-center '>
                        <Timer className='size-5' />
                        <span className='ml-2 font-medium text-md'>
                            Timer just ended
                        </span>
                    </div>
                    <p className='text-gray-500 mt-2 text-sm'>
                        optional message
                    </p>
                </div>
                
            </div>
        </section>
    )
}

export default Notifications
