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
    )
};

export default App;