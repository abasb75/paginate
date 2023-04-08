import React from "react";

interface Props {
    value:boolean;
    onChange:Function;
    label:string;
}

const CheckBox = ({value,onChange,label}:Props) => {
    
    return (<div className="input">
        <input type="checkbox" checked={value} onChange={e=>onChange(!value)}  />
        <label>{label}</label>
    </div>);
}

CheckBox.defaultProps = {
    value:false,
    onchange:()=>{},
}

export default CheckBox;