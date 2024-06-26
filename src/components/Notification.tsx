import { UserPlus } from 'lucide-react'
import React from 'react'

const Notification = ({
    className,
    href,
    onclick,
    title,
    message
}: {
    href?: string;
    className?: string;
    onclick?: any;
    title: string;
    message?: string;
}) => {
    return (
        <div className='flex flex-col border w-full rounded-md py-2 px-4'>
            <div className='flex flex-row justify-start items-center '>
                <UserPlus className='size-5' />
                <span className='ml-2 font-medium text-md'>
                    {title}
                </span>
            </div>
            <p className='text-gray-500 mt-2 text-sm'>
                {message}
            </p>
        </div>
    )
}

export default Notification
