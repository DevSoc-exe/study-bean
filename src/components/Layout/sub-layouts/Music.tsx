import React from 'react'
import { v4 } from 'uuid';

const Music = () => {
    const nowPlaying = [
        {
            "id": "6679b11bd15f92237c37d8ba",
            "name": "Douglas Richard",
            "nextInQueue": "Gardner Avenue",
            "time": 2
        },
        {
            "id": "6679b11b70126fa2f1438550",
            "name": "Tracy Silva",
            "nextInQueue": "Kent Avenue",
            "time": 0
        },
        {
            "id": "6679b11bb3c4ceb600232fa4",
            "name": "Hicks Whitley",
            "nextInQueue": "Ellery Street",
            "time": 4
        },
        {
            "id": "6679b11bb30df3b46a136766",
            "name": "Kenya Todd",
            "nextInQueue": "Village Road",
            "time": 0
        },
        {
            "id": "6679b11bd9328814ea0ab3bf",
            "name": "Lakisha Garrison",
            "nextInQueue": "Pitkin Avenue",
            "time": 1
        },
        {
            "id": "6679b11b96733a136e9b28e0",
            "name": "Wells Greer",
            "nextInQueue": "Herbert Street",
            "time": 2
        },
        {
            "id": "6679b11b5ffe46fbdb99aa7c",
            "name": "Ramona Berg",
            "nextInQueue": "Clove Road",
            "time": 2
        },
        {
            "id": "6679b11b2e3147e4b5b6d38b",
            "name": "Bernadette Sweeney",
            "nextInQueue": "Shale Street",
            "time": 5
        },
        {
            "id": "6679b11bef910cfaca0ac8f8",
            "name": "Marks Harding",
            "nextInQueue": "Desmond Court",
            "time": 3
        },
        {
            "id": "6679b11b0daa9a34839230a0",
            "name": "Curry Kirk",
            "nextInQueue": "Grove Street",
            "time": 1
        },
        {
            "id": "6679b11b96d1049bad6befe8",
            "name": "Lancaster Fernandez",
            "nextInQueue": "Crawford Avenue",
            "time": 0
        },
        {
            "id": "6679b11bf3b8bada8e666d08",
            "name": "Hope Davenport",
            "nextInQueue": "Brighton Avenue",
            "time": 1
        },
        {
            "id": "6679b11b4045da9f411667e6",
            "name": "Tammy Barker",
            "nextInQueue": "Dewey Place",
            "time": 4
        },
        {
            "id": "6679b11b407b8dafcda1c818",
            "name": "Roxie Kirkland",
            "nextInQueue": "Dupont Street",
            "time": 2
        },
        {
            "id": "6679b11be52ab64347e1963d",
            "name": "Medina Edwards",
            "nextInQueue": "Williamsburg Street",
            "time": 3
        },
        {
            "id": "6679b11b973af3be8750865d",
            "name": "Forbes Rocha",
            "nextInQueue": "Guider Avenue",
            "time": 0
        },
        {
            "id": "6679b11ba4826b23690e9c8e",
            "name": "Velma Harmon",
            "nextInQueue": "Woodbine Street",
            "time": 0
        },
        {
            "id": "6679b11b41e2939e3793c666",
            "name": "Karina Wall",
            "nextInQueue": "Prescott Place",
            "time": 5
        },
        {
            "id": "6679b11b8e4e475e13268b93",
            "name": "Wood Chandler",
            "nextInQueue": "Ridgewood Avenue",
            "time": 3
        },
        {
            "id": "6679b11be196e4f462958ad3",
            "name": "Tiffany Strong",
            "nextInQueue": "Wallabout Street",
            "time": 2
        },
        {
            "id": "6679b11b0c3965c9a620e15a",
            "name": "Patsy Diaz",
            "nextInQueue": "Guernsey Street",
            "time": 2
        },
        {
            "id": "6679b11bcd552e606d602de7",
            "name": "Glover Puckett",
            "nextInQueue": "Emmons Avenue",
            "time": 3
        },
        {
            "id": "6679b11b0c3fd6ce4c0a1fdc",
            "name": "Kaye Ferguson",
            "nextInQueue": "Pooles Lane",
            "time": 5
        }
    ];

    return (
        <section className="h-full w-full mt-4 ">

            <div className="flex flex-col h-[5%]">
                <h2 className="text-lg font-medium">
                    <span className='underline underline-offset-2'>Music</span> &gt;&nbsp;
                    <span className='underline underline-offset-2'>Playlist</span>
                </h2>
                <hr className='w-full mt-2' />
            </div>

            <div className='flex flex-col overflow-hidden pb-2 h-[calc(100%-5.5rem)] relative'>
                <div className='overflow-y-scroll pr-6'>
                    {
                        nowPlaying && nowPlaying.map((song) => (
                            <div className="border-b pt-2" key={v4()}>
                                <div className="text-sm flex flex-col w-full">
                                    <div className="text-md font-bold text-stone-700 flex flex-row justify-between items-center w-full">
                                        <h2 className="text-md mt-2 text-stone-700 font-semibold muted">{song.name}</h2>
                                        <span>{song.time}</span>
                                    </div>
                                    <span className="text-[12px]">By:  {song.name}</span>
                                    <span className="text-[12px]">Next: {song.nextInQueue}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='bg-fader absolute w-[89%] z-50 h-12 bottom-0'/>

        </section >

    )
}

export default Music
