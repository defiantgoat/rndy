import React, { useEffect, useState } from "react";
import RndyElement from "./RndyElement";
import { RndyProps } from "../interfaces";

const Rndy: React.FC<RndyProps> = ({ elements = [], onDropEvent }) => {
  const [values, setValues] = useState(elements);

  useEffect(() => {
    setValues(elements);
  }, [elements]);

  const createItems = () => {
    console.log(values);
    const items = values.map((jsx, i) => (
      <RndyElement key={`element-${i}`} index={i} onDropEvent={onDropEvent}>
        {jsx}
      </RndyElement>
    ));

    return items;
  };

  return <div className="flex flex-col w-1/2 gap-4">{createItems()}</div>;
};

export default Rndy;
