import React from 'react'

export default function ResContent() {
    return (
        <li className="list-group-item">
            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
            <small></small>
            <a href="https://reactjs.org/docs/getting-started.html" rel="noreferrer" className="list-group-item list-group-item-action" aria-current="true" target="_blank">
                <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">React JS documentation</h5>
                <small>3 days ago</small>
                </div>
                <p className="mb-1">React JS official documentation</p>
                {/* <small>And some small print.</small> */}
            </a>
        </li>
    )
}
