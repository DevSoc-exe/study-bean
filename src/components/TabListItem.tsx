import Link from 'next/link';
import React from 'react'

const TabListItem = ({
    children,
    className,
    href,
    title,
    messages
}: {
    children: React.ReactElement;
    href: string;
    className?: string;
    title: string;
    messages?: number
}) => {
    return (
        <div>
            <Link href={href}>
                <div className={`w-full p-1 mt-1 rounded-md flex items-center justify-between hover:bg-stone-200 transition-colors ${className}`}>
                    <div className='flex flex-row items-center justify-start'>
                        {children}
                        <span className='ml-2 text-sm font-medium text-stone-500'>{title}</span>
                    </div>

                    {messages && messages > 0 ?
                        <div className='text-[12px] font-medium flex size-[20px] justify-center items-center rounded-full bg-primary text-white'>
                            {messages}
                        </div> : ""
                    }
                </div>
            </Link>
        </div>
    )
}

export default TabListItem
