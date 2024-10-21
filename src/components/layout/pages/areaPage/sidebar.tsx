/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React, { useState } from "react";
import '@xyflow/react/dist/style.css';
import css from "./sidebar.module.css";
import IconButton from "src/components/buttons/icon/icon";
import { Plus, Save } from "lucide-react";


/* ----- COMPONENT ----- */
const Sidebar: React.FC<{handleSave: any}> = ({handleSave}) => {
    const [show, setShow] = useState(true);

    const onDragStart = (event: React.DragEvent, nodeType: string) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <div className={`${css.sidebar} ${show ? css.show : css.hide}`}>
            <div className={css.buttonContainer}>
                <div className={`${css.button} ${show ? css.rotate : ""}`}>
                    <IconButton icon={Plus} onClick={() => setShow(!show)} />
                </div>
                <div className={css.button}>
                    <IconButton icon={Save} onClick={handleSave} />
                </div>
            </div>
            <div className={css.container}>
                <div
                    onDragStart={(event) => onDragStart(event, 'action')}
                    draggable
                    className={css.item}
                >
                    Action
                </div>
                <div
                    onDragStart={(event) => onDragStart(event, 'reaction')}
                    draggable
                    className={css.item}
                >
                    Reaction
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
