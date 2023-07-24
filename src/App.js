import React, { useState } from "react";
import Header from "./component/Header";
import './App.css';
import CreateNotes from "./component/CreateNotes";
import Notes from "./component/Notes";

const App = () => {
    const [addItem, setAddItem] = useState([]);

    const addNotes = (note) => {
        setAddItem((prev) => {
            return [...prev, note];
        });
    };

    const onDelete = (id) => {
        setAddItem((oldData) =>
            oldData.filter((curr, ind) => {
                return ind !== id;
            })
        )
    }

    return (
        <div className=" w-screen h-screen">
            <Header />
            <CreateNotes passNote={addNotes} />
            <div className="border-blue-900 px-4 flex flex-wrap justify-center sm:mx-auto max-w-6xl gap-2">
            {
                addItem.map((val, index) => {
                    return (
                        <Notes
                            key={index}
                            id={index}
                            title={val.title}
                            content={val.content}
                            deleteItem={onDelete}
                        />
                    );
                })
            }
            </div>
        </div>
    )
};

export default App;