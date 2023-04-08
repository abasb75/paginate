import React from "react";

interface Props {
    value:string|number;
    onChange:Function;
    label:string;
    options:{
        key:number|string;
        value:number|string;
    }[];
}

const SelectBox = ({options,value,onChange,label}:Props) => {
    return (<div className="input">
        <label>{label}</label>
        <select value={value} onChange={e=>onChange(e.target.value)}>
            {options.map((option,index)=><option key={index} value={option.key}>{option.value}</option>)}
        </select>
    </div>);
}

export default SelectBox;