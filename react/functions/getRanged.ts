interface Page {
    key:number;
    value:string;
}

function getRange(lastPage:number|null):Page[] {
    if(!lastPage) return [{key:0,value:'Page 1'}];
    const pages = new Array(lastPage).fill(undefined).map((item,index)=>{
        const key:number = index+2;
        return {key,value:`Count ${key}`}
    });
    return pages;
}

export default getRange;