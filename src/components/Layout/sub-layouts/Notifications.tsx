import { Timer, UserPlus, Volume1Icon, Volume2Icon } from 'lucide-react'
import React from 'react'
import Notification from '@/components/Notification'

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

                <Notification title="Freind request from charan" message='yo' />

            </div>
        </section>
    )
}

export default Notifications
