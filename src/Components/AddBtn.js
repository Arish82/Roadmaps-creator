import React from 'react'
import InputForm from './InputForm'

export default function AddBtn() {
    return (
        <div>
            <button type="button" className="btn btn-outline-dark border-2 mx-3 px-5" data-bs-toggle="modal" data-bs-target="#examplesModal">
            Add
            </button>
            <div className="modal fade" id="examplesModal" tabIndex="-2" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Add Card</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <InputForm/>
                </div>
                <div className="modal-footer">
                    {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button> */}
                    <button type="submit" className="btn btn-outline-warning d-block rounded-pill w-100" style={{marginBottom: "8px"}}>Save</button>
                </div>
                </div>
            </div>
            </div>

        </div>
    )
}
