import React from 'react'
import Resources from './Resources';

function InputForm(){
    return (
        <>
        <form>
            <div className="col">
                <div className="card h-100">
                    <div type="" className="btn bg-danger p-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on right">
                        <input style={{backgroundColor: "transparent"}} type="email" className="form-control m-0 text-light text-center fs-5 fw-bold" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="ribbon-corner ribbon-fold">
                        <input style={{backgroundColor: "transparent"}} type="email" className="form-control m-0 text-light text-center" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="img">
                        <img src="" className="card-img-top" alt=""/>
                        <input type="image" className="form-control m-0 text-dark text-center" alt="Add Image" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="card-body" style={{paddingBottom: "0px"}}>
                        <p className="card-text" style={{marginBottom: "8px"}}>
                            <textarea style={{backgroundColor: "transparent"}} type="text" className="form-control m-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Description"/>
                        </p>
                        <div>
                            <div className="d-flex justify-content-between">
                                <input type="text" className="form-control d-inline-block p-0 " style={{marginBottom: "8px", marginRight: "3px"}} placeholder="Field" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <input type="text" className="form-control d-inline-block p-0 " style={{marginBottom: "8px", marginLeft: "3px"}} placeholder="Value" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <button type="button" className="btn btn-outline-primary d-block rounded-pill w-100" style={{marginBottom: "8px"}}><em className="fas fa-plus"></em></button>
                        </div>
                        {/* <Resources marBtm={"0px"}/> */}
                    </div>
                    <div className="card-body d-flex justify-content-between py-0">    
                        <input type="date" className="form-control m-0 d-inline-block mx-1 my-2 p-1" placeholder="Dates" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <input type="url" className="form-control m-0 d-inline-block mx-1 my-2 p-1" placeholder="Url" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                </div>
            </div>
        </form>
        </>
    );
}

export default InputForm;