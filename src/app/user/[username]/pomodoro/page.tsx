"use client"
import { AlarmClock } from 'lucide-react'
import React, { useState } from 'react'


const Pomodoro = ({ params }: any) => {
    console.log(params.username);

    const [percentage, setPercentage] = useState(20);
    const strokeDasharray = 2 * Math.PI * 225; // 2 * Math.PI * 45 (circle's circumference)
    const strokeDashoffset = percentage ? strokeDasharray - (strokeDasharray * percentage) / 100 : 0;

    return (
        <article className="h-[calc(100vh-1rem)] backdrop-blur w-3/5 left-3 border-r border-stone-200 flex flex-col py-4 px-3 justify-start  items-start">
            <div className="flex justify-between">
                <h1 className="text-xl mt-1 text-stone-700 font-bold muted flex items-center justify-center">
                    <AlarmClock className="inline mr-3" color="green" />
                    <span className="text-primary">
                        Pomodoro
                    </span>
                </h1>
            </div>
            <hr className='w-full my-1' />
            <section className="flex mt-2 gap-2 flex-col w-full h-[calc(100%-3.5rem)] border p-4">
                <div className='flex flex-row w-full justify-between items-center gap-2 h-2/3'>
                    <div className='h-full aspect-square flex items-center justify-center'>
                        <svg className="w-full h-full transform rotate-180 border">
                            <circle
                                cx="50%"
                                cy="50%"
                                r="225"
                                strokeWidth="10"
                                fill="none"
                            />
                            <circle
                                cx="50%"
                                cy="50%"
                                r="225"
                                stroke="#2c2c2c"
                                strokeWidth="10"
                                fill="none"
                                strokeDasharray={strokeDasharray}
                                strokeDashoffset={strokeDashoffset}
                                strokeLinecap="round"
                                className="transition-all duration-300"
                            />
                        </svg>
                    </div>
                    <div className='w-full'>
                        presets
                    </div>
                </div>
                <div className='w-full flex items-center  justify-center'>

                </div>
            </section>
        </article >
    )
}

export default Pomodoro
