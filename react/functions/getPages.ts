interface Page {
    key:number;
    value:string;
}

function getPages(lastPage:number):Page[] {
    if(lastPage < 1 ) return [];
    if(!lastPage) return [{key:0,value:'Page 1'}];
    const pages = new Array(lastPage).fill(undefined).map((item,index)=>{
        const key:number = index+1;
        return {key,value:`Page ${key}`}
    });
    return pages;
}

export default getPages;