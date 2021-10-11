import React from "react";
import { RndyElementProps } from "../interfaces";

const RndyElement: React.FC<RndyElementProps> = ({
  index,
  children,
  onDropEvent,
}) => {
  return (
    <div style={{margin: "1rem 0"}}>

        <div
          data-wf-dnd={`${index}`}
          draggable
          onDragStart={(e) => {
            const target = e.target as HTMLElement;
            e.dataTransfer.setData("index", target.dataset?.wfDnd || "-1");
          }}
          // onDragOver={(e) => e.preventDefault()}
          // onDrop={(e) => {
          //   const fromIndex = e.dataTransfer.getData("index") || "-1";
          //   onDropEvent({ from: parseInt(fromIndex, 10), to: index });
          // }}
        >
        <div style={{height: "3px", backgroundColor: "gold" }}
          data-wf-dnd={index}
          onDragOver={(e) => {
            e.preventDefault();
            const fromIndex = e.dataTransfer.getData("index") || "-1";
            if ( parseInt(fromIndex, 10) !== index) {
              e.target["style"]["height"] = "30px";
            }
          }}
          onDragLeave={(e)=> {
            e.preventDefault();
            e.target["style"]["height"] = "3px"
          }}
          onDrop={(e) => {
            const fromIndex = e.dataTransfer.getData("index") || "-1";
            onDropEvent({ from: parseInt(fromIndex, 10), to: index });
            e.target["style"]["height"] = "3px"
          }}
        />
          {children}
          <div 
            data-wf-dnd={index + 1}
            style={{height: "3px", backgroundColor: "red" }}
            onDragOver={(e) => {
              e.preventDefault();
              const fromIndex = e.dataTransfer.getData("index") || "-1";
              if (parseInt(fromIndex, 10) !== index) {
                e.target["style"]["height"] = "30px";
              }
            }}
            onDragLeave={(e)=> {
              e.preventDefault();
              e.target["style"]["height"] = "3px"
            }}
            onDrop={(e) => {
              const fromIndex = e.dataTransfer.getData("index") || "-1";
              onDropEvent({ from: parseInt(fromIndex, 10), to: index + 1 });
              e.target["style"]["height"] = "3px"
            }}
          />
        </div>
    </div>
  );
};

export default RndyElement;
