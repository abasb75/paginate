import React from "react";
import './ABPaginate.css';
interface Props {
    activePage: number;
    lastPage: number;
    pageRangeDisplayed: number;
    onChange: Function;
    listClassName: string;
    itemClassName: string;
    nextClassName: string;
    previousClassName: string;
    firstClassName: string;
    lastClassName: string;
    disabledFirstClassName: string;
    disabledLastClassName: string;
    disabledPreviousClassName: string;
    disabledNextClassName: string;
    activeItemClassName: string;
    breakClassName: string;
    showNextPage: boolean;
    showPreviousPage: boolean;
    showFirstPage: boolean;
    showLastPage: boolean;
    nextPageLabel: string;
    previousPageLabel: string;
    firstPageLabel: string;
    lastPageLabel: string;
    breakLabel: string;
}
interface State {
    activePage: number;
}
declare class ABPaginate extends React.Component<Props, State> {
    static defaultProps: Props;
    constructor(props: Props);
    componentDidUpdate(prevProps: Props, prevState: any): void;
    prev(): JSX.Element | null;
    next(): JSX.Element | null;
    first(): JSX.Element | null;
    last(): JSX.Element | null;
    break(): JSX.Element;
    item(index: number, value: number): JSX.Element;
    underPageRangeDisplayed(): JSX.Element;
    moreThanPageRangeDisplayed(): JSX.Element;
    render(): JSX.Element | null;
}
export default ABPaginate;
