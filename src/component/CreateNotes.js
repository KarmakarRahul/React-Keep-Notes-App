import React, { useState } from "react";
import { FaPlus } from 'react-icons/fa';

const CreateNotes = (props) => {
    const [note,setNote]= useState({
        title:"",
        content:""
    });

    const InputEvent = (event) => {
        // const name = event.target.name;
        // const value = event.target.value;
        const {name,value } = event.target;
        setNote((prevData) => { 
            return {
                ...prevData,
                [name]:value,
            };
        });
    };

    const addEvent = (e) => {
        e.preventDefault()

        if(note.title === "" || note.content ===''){
            console.log("error occured");
        }
        else {
        props.passNote(note);
        setNote({
            title:"",
            content:""
        })
    }
    };

    return (
        <>
            <div>
                <form className="w-full max-w-md mx-auto relative" onSubmit={addEvent}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0 my-4">
                            <label
                                className="block  tracking-wide text-[#176B87] text-lg font-bold mb-1"
                                htmlFor="title"

                            >
                                Title
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                                id="title"
                                required
                                type="text"
                                name="title"
                                placeholder="Title"
                                value={note.title}
                                onChange={InputEvent}
                                minLength={3}
                            />

                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-1">
                        <div className="w-full px-3">
                            <label
                                className="block  tracking-wide text-[#176B87]  text-lg font-bold mb-1"
                                htmlFor="note"
                            >
                                Write a Note
                            </label>
                            <textarea
                                className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="note"
                                cols="10"
                                rows="5"
                                name="content"
                                placeholder="Write a note"
                                value={note.content}
                                onChange={InputEvent}
                                required
                            ></textarea>
                        </div>
                    </div>
                    {/* Add Submit button or other form controls as needed */}
                    <button
                        // onClick=
                        type="submit"
                        className="absolute bottom-4 right-4 p-2 bg-green-500 hover:bg-green-600 text-white rounded-full"
                        title="Add Note"
                    >
                        <FaPlus size={20} />
                    </button>
                </form>
            </div>
        </>
    )
};

export default CreateNotes;

