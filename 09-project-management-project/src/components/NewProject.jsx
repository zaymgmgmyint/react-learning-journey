import Input from "./Input.jsx";
import {useRef} from "react";
import Modal from "./Modal.tsx";

export default function NewProject({ onAdd, onCancel }) {

    const modal = useRef()

    const title = useRef();
    const description = useRef();
    const date = useRef();

    function handleSave(){
        const enteredTitle = title.current && title.current.value;
        const enteredDescription = description.current && description.current.value;
        const enteredDate = date.current && date.current.value;

        if(!enteredTitle || !enteredDescription || !enteredDate){
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDate,
        });
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Close">
                <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input!</h2>
                <p className="text-stone-400 my-4">Oops...looks like you forgot to enter a value</p>
                <p className="text-stone-400 my-4">Please make sure you provide a valid value for every input filed.</p>
            </Modal>
            <div className="w-[35rem] mt-16 ">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button>
                    </li>
                    <li>
                        <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                                onClick = {handleSave}>
                            Save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input type="text" ref={title} label="Title"/>
                    <Input ref={description} label="Description" textarea />
                    <Input type="date" ref={date} label="Due Date"/>
                </div>
            </div>
        </>
    )
}