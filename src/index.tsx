import React from 'react';
import './paginate.css';

interface Props {
    activePage:number;
    lastPage:number;
    pageRangeDisplayed:number;
    onChange:Function;
    
    showNextPage:boolean;
    showPreviousPage:boolean;
    showFirstPage:boolean;
    showLastPage:boolean;
    nextPageLabel:string;
    previousPageLabel:string;
    firstPageLabel:string;
    lastPageLabel:string;
    breakLabel:string;

    listClassName:string;
    itemClassName:string;
    nextClassName:string;
    previousClassName:string;
    firstClassName:string;
    lastClassName:string;
    disabledFirstClassName:string;
    disabledLastClassName:string;
    disabledPreviousClassName:string;
    disabledNextClassName:string;
    activeItemClassName:string;
    breakClassName:string;

    buttonRounded:'none'|'normal'|'quarter'|'full';
    buttonWidth:number;
    buttonHeight:number;
    
}

interface State{
    activePage:number;
}

class Paginate extends React.Component<Props,State>{

    
    static defaultProps:Props = {
        activePage:1,
        lastPage:1,
        pageRangeDisplayed:4,
        onChange:()=>{},
        listClassName:'ab-paginate-list-2857373',
        itemClassName:'ab-paginate-item-1683646',
        nextClassName:'ab-paginate-next-1837342',
        previousClassName:'ab-paginate-prev-5567886',
        firstClassName:'ab-paginate-first-3873878',
        lastClassName:'ab-paginate-last-8866568',
        disabledFirstClassName:'ab-paginate-dfirst-3203808',
        disabledLastClassName:'ab-paginate-dlast-8843780',
        disabledPreviousClassName:'ab-paginate-prev-4034800',
        disabledNextClassName:'ab-paginate-next-1324686',
        activeItemClassName:'ab-paginate-actv-5623876',
        breakClassName:'ab-paginate-brek-4343078',
        showNextPage:true,
        showPreviousPage:true,
        showFirstPage:true,
        showLastPage:true,
        nextPageLabel:'>',
        previousPageLabel:'<',
        firstPageLabel:'<<',
        lastPageLabel:'>>',
        breakLabel:'...',

        buttonRounded:'normal',
        buttonWidth:42,
        buttonHeight:42,
        
    }

    constructor(props:Props){
        super(props);
        this.state={
            activePage:props.activePage,
        }
    }

    componentDidUpdate(prevProps:Props, prevState:any) {
        if(prevProps.activePage !== this.props.activePage){
            this.setState({activePage:this.props.activePage});
        }
    }

    getButtonsBorderRadius(){
        switch(this.props.buttonRounded){
            case "none":
                return '0px';
            case 'normal':
                return '5px';
            case 'quarter':
                return '25%';
            case 'full':
                return '50%';
            default:
                return '5px';
        }
    }

    getComputedStyle(){
        return {
            borderRadius:this.getButtonsBorderRadius(),
            width:`${this.props.buttonWidth}px`,
            height:`${this.props.buttonHeight}px`,
            maxWidth:`${this.props.buttonWidth}px`,
        };
    }

    prev(){
        if(this.props.showPreviousPage){
            return (<li 
                style={this.getComputedStyle()}
                className={
                    this.props.previousClassName + ' ' 
                    + (this.props.activePage===1 && this.props.disabledPreviousClassName) 
                }
                onClick={()=>{
                    if(this.props.activePage>1){
                        this.props.onChange(this.props.activePage-1)
                    }else{
                        return;
                    }
                }}
            >{this.props.previousPageLabel}</li>);
        }else{
            return null;
        }
    }

    next(){
        if(this.props.showNextPage){
            return (<li 
                style={this.getComputedStyle()}
                className={
                    this.props.nextClassName + ' ' 
                    + (this.props.activePage===this.props.lastPage && this.props.disabledNextClassName) 
                }
                onClick={()=>{
                    if(this.props.activePage<this.props.lastPage){
                        this.props.onChange(this.props.activePage+1)
                    }else{
                        return;
                    }
                }}
            >{this.props.nextPageLabel}</li>);
        }else{
            return null;
        }
    }

    first(){
        if(this.props.showFirstPage){
            return (<li
                style={this.getComputedStyle()} 
                className={
                    this.props.firstClassName + ' ' 
                    + (this.props.activePage===1 && this.props.disabledFirstClassName) 
                }
                onClick={()=>{
                    this.props.onChange(1)
                }}
            >{this.props.firstPageLabel}</li>);
        }else{
            return null;
        }
    }

    last(){
       
        if(this.props.showLastPage){
            return (<li 
                style={this.getComputedStyle()}
                className={
                    this.props.lastClassName + ' ' 
                    + (this.props.activePage===this.props.lastPage && this.props.disabledLastClassName) 
                }
                onClick={()=>{
                    this.props.onChange(this.props.lastPage)
                }}
            >{this.props.lastPageLabel}</li>);
        }else{
            return null;
        }
    }

    break(){
        return (<li className={this.props.breakClassName}>{this.props.breakLabel}</li>)
    }

    item(index:number,value:number){
        return (<li 
            style={this.getComputedStyle()}
            key={index}
            onClick={()=>this.props.onChange(value)}
            className={this.props.itemClassName + ' ' + (value===this.props.activePage && this.props.activeItemClassName)}
        >{value}</li>);
    }
    
    underPageRangeDisplayed(){
        const pages = new Array(this.props.lastPage).fill(undefined);
        return (<>
            {pages.map((value:undefined,index:number)=>{
                return this.item(index,index+1);
            })}
        </>);
    }

    moreThanPageRangeDisplayed(){
        //const array = new Array((this.props.pageRangeDisplayed)+1).fill(undefined);
        if(this.props.activePage<this.props.pageRangeDisplayed || this.props.activePage>this.props.lastPage-this.props.pageRangeDisplayed+1){
            const pages = new Array(this.props.pageRangeDisplayed).fill(undefined);
            return (<>
                <>{pages.map((value:undefined,index:number)=>{
                    return this.item(index,index+1);
                })}</>
                <>{this.break()}
                {pages.map((value:undefined,index:number)=>{
                    return this.item(index,(this.props.lastPage-this.props.pageRangeDisplayed)+index+1);
                })}</>
            </>);
        }else if(this.props.activePage<=this.props.pageRangeDisplayed+1){
            const p1 = new Array( this.props.activePage + 1).fill(undefined);
            const p2 = new Array( (2*this.props.pageRangeDisplayed) - (this.props.activePage+1) ).fill(undefined);
            return (<>
                <>{p1.map((value:undefined,index:number)=>{
                    return this.item(index,index+1);
                })}</>
                {this.break()}
                <>{p2.map((value:undefined,index:number)=>{
                    return this.item(index,(this.props.lastPage-p2.length)+index+1);
                })}</>
            </>);
        }else if(this.props.activePage>=this.props.lastPage-this.props.pageRangeDisplayed){
            const p1 = new Array( (2*this.props.pageRangeDisplayed) - (this.props.lastPage - this.props.activePage + 2) ).fill(undefined);
            const p2 = new Array( this.props.lastPage - this.props.activePage + 2 ).fill(undefined);
            return (<>
                <>{p1.map((value:undefined,index:number)=>{
                    return this.item(index,index+1);
                })}</>
                {this.break()}
                <>{p2.map((value:undefined,index:number)=>{
                    return this.item(index,(this.props.lastPage-p2.length)+index+1);
                })}</>
            </>);

        }else{
            const pages = new Array(this.props.pageRangeDisplayed).fill(undefined);
            const mid = Math.ceil(this.props.pageRangeDisplayed/2);
            return (<>
                {this.item(0,1)}
                {this.break()}
                <>{pages.map((value:undefined,index:number)=>{
                    if(index+1<mid){
                        return this.item(index,(this.props.activePage-(mid-index-1)));
                    }else if(index+1===mid){
                        return this.item(index,(this.props.activePage));
                    }else{
                        return this.item(index,(this.props.activePage+(index-mid+1)));
                    }
                })}</>
                {this.break()}
                <>{this.item(0,this.props.lastPage)}</>
            </>);
        }
    }

    render(){
        if(this.props.lastPage<=1) return null;
        else return (<ul className={this.props.listClassName}>
            { this.first()}
            {this.prev()}
            {(this.props.lastPage<=2*this.props.pageRangeDisplayed) ? this.underPageRangeDisplayed() : this.moreThanPageRangeDisplayed()}
            {this.next()}
            {this.last()}
        </ul>);
    }
}

export default Paginate;