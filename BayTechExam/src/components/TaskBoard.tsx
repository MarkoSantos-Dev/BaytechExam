import PlusIcon from "../icon/PlusIcon"
import { useState } from "react";
import { Column , Id} from "../types";
import ColContainer from "./ColContainer";


function TaskBoard() {
    const [columns, setColumns] = useState<Column[]>([]);
    console.log(columns);
    return (
        <div className="
            m-auto
            flex
            min-h-screen
            w-full
            items-center
            overflow-x-auto
            overflow-y-hidden
            px-[40px]
        ">  
            <div className="m-auto flex gap-4">
                <div className="flex gap-4">
                    {columns.map((col) => (
                    <ColContainer 
                    key={col.id}
                    column={col} 
                    deleteColumn={deleteColumns}
                    />
                    ))}
                </div>
                <button
                    onClick={()=>{
                        createNewColumn();
                    }}
                    className="
                    h-[60px]
                    w-[350px]
                    cursor-pointer
                    rounded-lg
                    bg-columnBackgroundColor
                    border-2
                    border-mainBackgroundColor
                    p-4
                    ring-mainBackgroundColor
                    hover:ring-2
                    flex
                    gap-2
                    ">
                        <PlusIcon/>
                        Add Column
                </button>
            </div>
        </div>
    );
    function createNewColumn(){
        const columnToAdd: Column = {
            id: generateId(),
            title: `Column ${columns.length + 1}`,
        };
        setColumns([...columns,columnToAdd]);
    }
    function deleteColumns(id: Id){
        const filteredColumns = columns.filter(col => col.id !== id);
        setColumns(filteredColumns);
    }
}

function generateId(){
    return Math.floor(Math.random() * 10001);
}

export default TaskBoard