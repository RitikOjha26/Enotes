import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { selectUser, logout } from '../features/userslice';
import { registerUser } from '../features/registerslice';
import { userNotes, addNote, deleteNote } from '../features/notes.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";


const Home = () => {

  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");

  const user = useSelector(selectUser);
  const newUser = useSelector(registerUser);
  const notes = useSelector((state) => state.notes);
  //console.log(notes);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(
      logout({ user })
    )
    navigate("/");

  }
  const addNotes = (e) => {
    e.preventDefault();

    if (Title === "") {
      alert("Title cant be Blank");
    } else if (Description === "") {
      alert("Despcription cant be blank");
    } else {
      dispatch(addNote({ Title, Description }))
    }
  }
  const deleteNotes = (e) => {
    e.preventDefault();

    dispatch(deleteNote({ notes }))
  }

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
            <div className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-800" href="#">
              {notes.map((note, index) => (
                <button
                  key={index}
                  className='leading-none'
                  onClick={()=>{setTitle(note.title)}}
                >{note.title}</button>
              ))}
            </div>

            <div className="flex items-center flex-shrink-0 h-10 px-3 mt-auto text-sm font-medium bg-gray-800 rounded hover:bg-gray-700"
              href="#">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span className="ml-2 leading-none">Add Note</span>
            </div>
          </div>

        </div>
        <div className="flex flex-col flex-grow">
          <div className="flex justify-end items-center flex-shrink-0 h-16 px-8 border-b border-gray-800">


            <button className="relative ml-2 text-sm focus:outline-none group">
              <div className="flex items-center justify-between w-10 h-10 rounded hover:bg-gray-800">
                <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </div>
              <div className="absolute right-0 flex-col items-start hidden w-40 mt-1 pb-1 bg-gray-800 border border-gray-800 shadow-lg group-focus:flex">
                <p className="w-full px-4 py-2 text-left hover:bg-gray-900" href="#"> {newUser.name}</p>
                <p className="w-full px-4 py-2 text-left hover:bg-gray-900" onClick={handleLogout}>Logout</p>

              </div>
            </button>
          </div>
          <div className="flex-grow p-6 overflow-auto bg-gray-800">
            <div className=" flex-row  gap-6">


              <textarea
                rows="1"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title"
                onChange={(e) => {
                  setTitle(e.target.value)
                }}
              >
              </textarea>

              <textarea
                rows="20"
                className="block mt-3 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description"
                onChange={(e) => {
                  setDescription(e.target.value)

                }}
              >
              </textarea>

            </div>

            <div className=' flex place-content-end grid-cols-2 place-items-end mt-2'>

              <button
                type="button"
                className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                onClick={addNotes}
              >
                Add
              </button>

              <button
                type="button"
                className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                onClick={deleteNotes}
              >
                Delete
              </button>

            </div>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Home