import React, { useState } from "react";
import Paginate from "../src";
import Select from "./components/Select";
import getPages from "./functions/getPages";
import TextInput from "./components/Input";
import getRange from "./functions/getRanged";
import CheckBox from "./components/CheckBox";
import SelectBox from './components/SelectBox';
import { ToastContainer , toast } from "react-toastify";
import copy from "@abasb75/copy-to-clipboard";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const [activePage,setActivePageIndex] = useState(1);
    const [lastPage,setLastPage] = useState(10);
    const [pageRangeDisplayed,setPageRangeDisplayed] = useState(4);

    const [showNextPage,setShowNexPage] = useState(true);
    const [showPreviousPage,setShowPreviousPage] = useState(true);

    const [showFirstPage,setShowFirstPage] = useState(true);
    const [showLastPage,setShowLastPage] = useState(true);

    const [breakLabel,setBreakLabel] = useState('...');

    const [firstPageLabel,setFirstPageLabel] = useState('<<');
    const [lastPageLabel,setLastPageLabel] = useState('>>');

    const [previousPageLabel,setPreviousPageLabel] = useState('<');
    const [nextPageLabel,setNextPageLabel] = useState('>');

    const [buttonRounded,setButtonRounded] = useState<'none'|'normal'|'quarter'|'full'>('normal');
    const buttonRounderOptions = [
        {key:'none',value:'none'},
        {key:'normal',value:'normal'},
        {key:'quarter',value:'quarter'},
        {key:'full',value:'full'},
    ];

    const pages = getPages(Math.ceil(lastPage));
    const pagesRanged = getRange(Math.ceil(lastPage/2-1));
     
    const resultCode = `<Paginate 
    activePage={${activePage}}
    lastPage={${lastPage}}
    pageRangeDisplayed={${pageRangeDisplayed}}
    onChange={ ()=>{} }
    showNextPage={${showNextPage}}
    showPreviousPage={${showPreviousPage}}
    showFirstPage={${showFirstPage}}
    showLastPage={${showLastPage}}
    breakLabel={'${breakLabel}'}
    nextPageLabel={'${nextPageLabel}'}
    previousPageLabel={'${previousPageLabel}'}
    firstPageLabel={'${firstPageLabel}'}
    lastPageLabel={'${lastPageLabel}'}
    buttonRounded={'${buttonRounded}'}
 />`;
    console.log(resultCode);

    return (<>
        <div className="holder">
            <div className="aside">
                <h1>@abasb7/paginate :</h1>
                <div className="inputs">
                    <Select options={pages} value={activePage} label="Active Page :" onChange={setActivePageIndex}  />
                    <TextInput value={lastPage} onChange={setLastPage} type="number" label={'Last Page :'} maxLen={4} />
                    <Select options={pagesRanged} value={pageRangeDisplayed} label="Page Range Displayed :" onChange={setPageRangeDisplayed}  />

                    <CheckBox value={showPreviousPage} onChange={setShowPreviousPage} label="Show Previous Page Button :" />
                    <CheckBox value={showNextPage} onChange={setShowNexPage} label="Show Next Page Button :" />

                    <CheckBox value={showFirstPage} onChange={setShowFirstPage} label="Show First Page Button :" />
                    <CheckBox value={showLastPage} onChange={setShowLastPage} label="Show Last Page Button :" />

                    <TextInput value={breakLabel} onChange={setBreakLabel} type="string" label="Break Label :" maxLen={5}/>

                    <TextInput value={previousPageLabel} onChange={setPreviousPageLabel} type="string" label="Previous Button Label :" maxLen={12}/>
                    <TextInput value={nextPageLabel} onChange={setNextPageLabel} type="string" label="Next Button Label :" maxLen={12}/>
                    <TextInput value={firstPageLabel} onChange={setFirstPageLabel} type="string" label="First Button Label :" maxLen={12}/>
                    <TextInput value={lastPageLabel} onChange={setLastPageLabel} type="string" label="Last Button Label :" maxLen={12}/>

                    <SelectBox value={buttonRounded} onChange={setButtonRounded} label="Button's Border Radius :"  options={buttonRounderOptions} />

                </div>
            </div>
            <div className="main">
                <div className="code">
                    <button className="icon-content_copy" onClick={()=>{
                        copy('npm i @abasb75/paginate').then(
                            ()=>{
                                toast.success('Copied !', {
                                    position: "bottom-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "colored",
                                });
                            }
                        ).catch(
                            ()=>{
                                toast.error('Copy failed !', {
                                    position: "bottom-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "colored",
                                });
                            }
                        )
                    }}></button>
                    <span>npm i @abasb75/paginate</span>
                </div>
                <Paginate 
                    activePage={activePage}
                    lastPage={lastPage}
                    pageRangeDisplayed={pageRangeDisplayed}
                    onChange={setActivePageIndex}
                    
                    showNextPage={showNextPage}
                    showPreviousPage={showPreviousPage}
                    showFirstPage={showFirstPage}
                    showLastPage={showLastPage}

                    breakLabel={breakLabel}

                    nextPageLabel={nextPageLabel}
                    previousPageLabel={previousPageLabel}
                    firstPageLabel={firstPageLabel}
                    lastPageLabel={lastPageLabel}

                    buttonRounded={buttonRounded}
                 />
                 <div className="code" style={{marginTop:'50px',height:'auto'}}>
                    <button className="icon-content_copy" onClick={()=>{
                        copy(resultCode).then(
                            ()=>{
                                toast.success('Copied !', {
                                    position: "bottom-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "colored",
                                });
                            }
                        ).catch(
                            ()=>{
                                toast.error('Copy failed !', {
                                    position: "bottom-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "colored",
                                });
                            }
                        )
                    }}></button>
                    <textarea disabled value={resultCode}>{resultCode}</textarea>
                </div>
                <div className="footer">
                    <ul>
                        <li><a href="https://abasbagheri.ir">Abbas Bagheri</a></li>
                        <li><a href="https://github.com/abasb75/paginate"><i className="icon-github"></i></a></li>
                        <li><a href="https://www.npmjs.com/~abasb75"><i className="icon-npm"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/e-abbas-bagheri/"><i className="icon-linkedin"></i></a></li>
                    </ul>
                </div>
                 <ToastContainer />
            </div>
        </div>
        
        
    </>);
};

export default App;
