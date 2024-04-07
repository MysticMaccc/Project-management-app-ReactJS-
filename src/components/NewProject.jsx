import { useRef, useState } from "react"
import Input from "./Input"
import Modal from "./Modal";

export default function NewProject({ onAdd,onCancel }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modal = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        // validation
        if (enteredTitle.trim() === '' || enteredDescription === ''
            || enteredDueDate === "") {
            // show error modal
            modal.current.open();
            return; //add return to not run scripts below
        }

        //add
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }

    return (
        // the [35rem] is custom side
        <>
            <Modal ref={modal} buttonLabel="Close" >
                <h2 className="text-xl font-bold text-stone-500 my-4">Invalid input</h2>
                <p className="text-red-800 mb-4">Oops, looks like you forgot to enter a value!</p>
                <p className="text-red-800 mb-4">Please make sure you entered a value in all input!</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">
                            Cancel
                        </button>
                    </li>
                    <li>
                        <button onClick={handleSave} className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md">
                            Save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input ref={title} label="Title" type="text" />
                    {/* textarea prop can be set as textarea={true} but its redundant so just textarea */}
                    <Input ref={description} label="Description" textarea />
                    <Input ref={dueDate} label="Due date" type="date" />
                </div>
            </div>
        </>
    )
}