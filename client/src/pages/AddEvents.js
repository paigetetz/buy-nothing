import { useState } from 'react'
import MeetImg from '../assets/meet.svg'

export default function AddEvent() {

    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div>
            <div className='text-center text-6xl text-white'>Add Event</div>

            <div className='md:grid md:grid-cols-2 items-center px-16 pb-8'>
                <div className=''>
                    <div class="mt-4 bg-white shadow-md rounded-lg text-left">
                        <div class="h-2 bg-tertiary rounded-t-md"></div>
                        <div class="px-8 py-6 ">
                            <label class="block font-semibold"> Event Title </label>
                            <input type="text" placeholder="Name" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />

                            <label class="block mt-3 font-semibold">Contact Email </label>
                            <input type="email" placeholder="Email" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />

                            <label class="block mt-3 font-semibold"> Event Location </label>
                            <input type="text" placeholder="Product" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />

                            <label class="block mt-3 font-semibold"> Event Agenda </label>
                            <input type="number" placeholder="888" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />

                            <label class="block mt-3 font-semibold"> Choose File </label>
                            <input type="file" onChange={handleChange} class="w-full px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />

                            <div>
                                <img src={file} alt="" className="w-64" />
                            </div>

                            <div class="flex justify-between items-baseline">
                                <button type="submit" class="mt-4 bg-tertiary text-white py-2 px-6 rounded-md">Add Event</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img src={MeetImg} alt="img" width="422" height="422" />
                </div>
            </div>

        </div>
    )
}
