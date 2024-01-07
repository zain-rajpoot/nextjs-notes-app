"use client";
import React from 'react'

export default function UpdatedNote({params}) {

  const UpdateNote =(e)=>{
e.preventDefault()
console.log("Note Updated")
  }
  return (
    <div className="mx-auto max-w-7xl ">
       <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="text-center text-xl font-medium text-gray-900">Update a Note {params.id}</h2>
        </div>
        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-7xl">
          <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={UpdateNote} method="POST">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title                </label>
                <div className="mt-1">
                  <input
                    name="title"
                    type="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
              </div>

              <div>
              <label htmlFor="Description" className="block text-sm font-medium text-gray-700">
        Add Description
      </label>
      <div className="mt-1">
        <textarea
          rows={8}
          name="description"
          required
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          defaultValue={''}
        />
      </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Update note
                </button>
              </div>
            </form>

           
          </div>
        </div>
      </div>
    </div>
  )
}
