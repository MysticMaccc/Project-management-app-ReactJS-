import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(
    function Modal({ children, buttonLabel, ...props }, ref) {
        const dialog = useRef();
        
        useImperativeHandle(
            ref,
            ()=>{
                return{
                    open(){
                        dialog.current.showModal();
                    }
                };
            }
        );

        return (
            createPortal(
                <dialog ref={dialog} className="backdrop:bg-stone-900/90 rounded-md p-4 shadow-md bg-emerald-400">
                    {children}
                    <form method="dialog" className="text-right mt-4">
                        <Button >Close</Button>
                    </form>
                </dialog>
                ,
                document.getElementById('modal-root')
            )
        );
    }
);
export default Modal;