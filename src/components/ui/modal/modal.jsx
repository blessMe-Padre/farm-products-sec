import React, { useEffect } from 'react'
import './modal.css'
import { Close } from './../buttons/close';


export default function Modal({ active, setActive, children }) {
    const handlerEsc = (evt) => {
        if (evt.key === "Escape") {
            setActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handlerEsc);
        return () => {
            document.removeEventListener("keydown", handlerEsc);
        };
    });

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                <Close onClick={() => setActive(false)}>X</Close>
                {children}
            </div>
        </div>
    )
}
