import React from 'react'
import { useState } from 'react';

export default function AddTodo({addTodo}) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const formSubmit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title or DEscription shold not be blank!!!")
        }
        else{
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    return (
        <form className="m-3 border bg-glass-secondary p-3" onSubmit= {formSubmit}>
            <div className="mb-3 ">
                <label for="exampleInputEmail1" className="form-label">Task Title</label>
                <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Task Description</label>
                <textarea type="text" className="form-control" id="desc" value={desc} onChange= {(e)=> setDesc(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary">Add Task</button>
        </form>
    )
}
