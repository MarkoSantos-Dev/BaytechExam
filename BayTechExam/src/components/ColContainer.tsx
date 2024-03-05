import { Column, Id } from "../types";
import TrashIcon from "../icon/TrashIcon";

interface Props {
    column: Column;
    deleteColumn: (id: Id) => void;
}


const ColContainer = (props:Props) => {
    const{column, deleteColumn} = props;
  return (
    <div className="
    bg-mainBackgroundColor
    w-[350px]
    h-[350px]
    max-h-[500px]
    rounded-md
    flex
    flex-col
    ">
        <div className="
        bg-columnBackgroundColor
        text-md
        h-[60px]
        cursor-grab
        rounded-md
        rounded-b-none
        p-3
        font-bold
        border-columnBackgroundColor
        border-4
        flex
        items-center
        justify-between
        ">
        <div className="flex gap-2">
            <div className="
            flex
            justify-center
            items-center
            bg-columnBackgroundColor
            px-2
            py-1
            text-sm
            rounded-full
            ">
                ⚫
            </div>
            {column.title}
            </div>
            <button 
            onClick={() =>{
                deleteColumn(column.id);
            }}
            className="
            stroke-slate-400
            hover:stroke-white
            hover:bg-columnBackgroundColor
            rounded
            px-1
            py-2
            ">
                <TrashIcon/>
            </button>
        </div>
        
        <div className="flex flex-grow">Content</div>
        <div>Footer</div>
    </div>
  )
}

export default ColContainer