import React from 'react'
import ResContent from './ResContent';

function Resources(){
    return (
        <div>
            <button type="button" className="btn btn-outline-primary rounded-pill" style={{marginBottom: "48px"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                Resources
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Resources</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="list-group">
                                <ResContent /> 
                            </div>
                            <li className="list-group-item">
                                <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label my-1"><h5>Add Resources</h5></label>
                                    <button type="submit" className="btn btn-primary float-end my-1">Save</button>
                                    <input type="text" className="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Title"/>
                                    <input type="text" className="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Description"/>
                                    <input type="date" className="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Target Date"/>
                                </div>
                                </form>
                            </li>          
                        </div>
                        <div className="modal-footer">
                            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                            <button type="button" className="btn btn-outline-primary m-auto w-100">Add Resources</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resources;