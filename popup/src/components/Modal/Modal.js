import React, { useState } from "react";
import "./modal.css"


export default function Modal() {
    const [showModal, setShowModal] = useState(false);
    const ClickModal = () => {
        setShowModal(!showModal)
    }
    return(
        <>
        <button className="btn-modal" onClick={ClickModal}> Open
        </button>
        {showModal && (
            <div className="modal">
                <div className="modal2">
                <div className="content">
                    <h2>Hello Modal!</h2>
                    <button onClick={ClickModal}> CLOSE </button>
                </div>
            </div>
        </div>
        )}
        </>
    )
}