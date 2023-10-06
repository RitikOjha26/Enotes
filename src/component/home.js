import React from 'react'
import { useSelector } from 'react-redux'; // Import useSelector
import { selectUser } from '../features/userslice'; // Import the selector from userSlice
import { registerUser } from '../features/registerslice';
const Home = () => {


  const user = useSelector(selectUser);
  const newUser = useSelector(registerUser);

  return (
    <div>
      <div className="flex w-screen h-screen text-gray-400 bg-gray-900">



        <div className="flex flex-col w-56 border-r border-gray-800">
          <button className="relative text-sm focus:outline-none group">
            <div className="flex items-center justify-between w-full h-16 px-4 border-b border-gray-800 hover:bg-gray-800">
              <span className="font-medium">
                E Notes
              </span>

            </div>

          </button>
          <div className="flex flex-col flex-grow p-4 overflow-auto">
            <a className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-800" href="#">
              <span className="leading-none">Note 1</span>
            </a>

            <a className="flex items-center flex-shrink-0 h-10 px-3 mt-auto text-sm font-medium bg-gray-800 rounded hover:bg-gray-700"
              href="#">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span className="ml-2 leading-none">New Note</span>
            </a>
          </div>

        </div>
        <div className="flex flex-col flex-grow">
          <div className="flex justify-end items-center flex-shrink-0 h-16 px-8 border-b border-gray-800">
            

            <button className="relative ml-2 text-sm focus:outline-none group">
              <div className="flex items-center justify-between w-10 h-10 rounded hover:bg-gray-800">
                <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </div>
              <div className="absolute right-0 flex-col items-start hidden w-40 mt-1 pb-1 bg-gray-800 border border-gray-800 shadow-lg group-focus:flex">
                <a className="w-full px-4 py-2 text-left hover:bg-gray-900" href="#"> `${user.name}`</a>
                <a className="w-full px-4 py-2 text-left hover:bg-gray-900" href="#">Logout</a>

              </div>
            </button>
          </div>
          <div className="flex-grow p-6 overflow-auto bg-gray-800">
            <div className=" flex-row  gap-6">


              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Note</label>

              <textarea id="message" rows="1" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title"></textarea>

              <textarea id="message" rows="20" class="block mt-3 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description"></textarea>

            </div>
            <div className=' flex place-content-end grid-cols-2 place-items-end mt-2'>
              <button type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Add</button>
              <button type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete</button>
              </div>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Home