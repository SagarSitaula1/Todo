import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
    const [modalIsopen, setModalIsOpen] = useState(false);

    function deleteHandler() {
        setModalIsOpen(true);
    }

    function closeModelHandler() {
        setModalIsOpen(false);
    }

    return ( <
            div className = "card" >
            <
            h2 > { props.text } < /h2> <
            div className = "actions" >
            <
            button className = "btn"
            onClick = { deleteHandler } >
            Delete <
            /button> <
            /div> {
                modalIsopen && < Modal onCancel = { closeModelHandler }
                onConfirm = { closeModelHandler }
                />} {
                    modalIsopen && < Backdrop onClick = { closeModelHandler }
                    />}


                    <
                    /div>
                );
            }

            export default Todo;