import React from "react";

interface Props {
    type:'number'|'string';
    value:number|string;
    onChange:Function;
    label:string;
    maxLen:number;
}

const TextInput = ({value,type,onChange,label,maxLen}:Props) => {
    const setValue = (value:string) =>{
        if( type === 'number' && value !== ''){
            onChange(parseInt(value));
        }else if( type === 'number' && (value === '')){
            console.log(value)
            onChange(1);
        }else{
            onChange(value);
        }
    }
    return (<div className="input">
        <label>{label}</label>
        <input type="text" value={value} onChange={e=>setValue(e.target.value)} maxLength={maxLen} />
    </div>);
}

TextInput.defaultProps = {
    type:'string',
    value:'',
    onchange:()=>{},
}

export default TextInput;