import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Notes = ({ title, content, deleteItem, id }) => {
    const [editMode, setEditMode] = useState(false);
    const [editedContent, setEditedContent] = useState(content);

    const deleteNote = () => {
        deleteItem(id);
    };

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleSaveClick = () => {
        // Implement the logic to save the edited content here.
        // For this example, we'll just switch back to view mode and update the content.
        setEditMode(false);
        setEditedContent(editedContent);
    };

    const handleCancelClick = () => {
        // If the user cancels editing, revert back to the original content and switch to view mode.
        setEditMode(false);
        setEditedContent(content);
    };

    return (
        <div className="relative w-full  h-48  max-w-md bg-white shadow-md rounded-lg my-4 inline-block  border  border-zinc-500">
            <div className="px-6 py-8">
                <div className="font-bold text-xl mb-2">{title}</div>
                <div className="w-full h-20 overflow-y-scroll">
                    {editMode ? (
                        <textarea
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            rows="5"
                            value={editedContent}
                            onChange={(e) => setEditedContent(e.target.value)}
                        />
                    ) : (
                        <p className="text-gray-700 text-base">{editedContent}</p>
                    )}
                </div>
            </div>
            <div className="absolute bottom-0 right-0 m-4 space-x-2">
                {editMode ? (
                    <>
                        <button
                            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-2"
                            title="Save"
                            onClick={handleSaveClick}
                        >
                            Save
                        </button>
                        <button
                            className="bg-gray-500 hover:bg-gray-600 text-white rounded-full p-2"
                            title="Cancel"
                            onClick={handleCancelClick}
                        >
                            Cancel
                        </button>
                    </>
                ) : (
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2"
                        title="Edit"
                        onClick={handleEditClick}
                    >
                        <FaEdit />
                    </button>
                )}
                <button
                    onClick={deleteNote}
                    className="bg-red-500 hover:bg-red-600 text-white rounded-full p-2"
                    title="Delete"
                >
                    <FaTrash />
                </button>
            </div>
        </div>
    );
};


export default Notes;
