import { AlarmClock } from 'lucide-react'
import React from 'react'

const Pomodoro = () => {
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
                        <div className='h-[95%] flex items-center justify-center aspect-square border rounded-full p-0.5'>
                            <div className='h-[95%] aspect-square border rounded-full m-auto'>

                            </div>
                        </div>
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
