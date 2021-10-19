import React from 'react'
import './Cards.css'
import Resources from './Resources';

function Cards(props){
    return (
        <div className="col">
            <div className="card h-100">
                <a href="#" className="btn bg-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on right">
                    <h5 className="d-inline">
                        FrontEnd
                    </h5>
                </a>
                <div className="ribbon-corner ribbon-fold">
                    Web Dev
                </div>
                <div className="img">
                    <a href="https://roadmap.sh/frontend" target="blank" rel="nor">
                        <img src="https://github.com/kamranahmedse/developer-roadmap/raw/master/img/frontend.png?year-2021-2" className="card-img-top" alt="..."/>
                    </a>
                </div>
                <div className="card-body" style={{paddingBottom: "0px"}}>
                    <p className="card-text" style={{marginBottom: "8px"}}>{props.content}
                        Front end development manages everything that users visually see first in their browser or application. You can start frontend web dev with HTML, CSS and basic JS then, If you want to continue with
                        more advance concepts of JavaScript or else you can start with a frontend frame work like React JS, Angular JS, Vue JS and many other. I would say go with React JS as It's used for handling the view layer for web and mobile apps. 
                        React also allows us to create reusable UI components.
                        React allows developers to create large web applications that can change data,
                        without reloading the page. The main purpose of React is to be fast, scalable,
                        and simple and more over it is most demanding frameworks in the market;31.3% of worldwide specialists are currently utilizing this technology.            
                    </p>
                    <h6 className="card-title d-inline-block" style={{marginBottom: "8px"}}>HTML</h6>
                    <p className="card-text d-inline-block float-end" style={{marginBottom: "8px"}}></p>
                    <br/>
                    <h6 className="card-title d-inline-block" style={{marginBottom: "8px"}}>CSS</h6>
                    <p className="card-text d-inline-block float-end" style={{marginBottom: "8px"}}></p>
                    <br/>
                    <h6 className="card-title d-inline-block" style={{marginBottom: "8px"}}>Basic JS</h6>
                    <p className="card-text d-inline-block float-end" style={{marginBottom: "8px"}}></p>
                    <br/>
                    <h6 className="card-title d-inline-block" style={{marginBottom: "8px"}}>React JS, Angular JS & Vue JS</h6>
                    <p className="card-text d-inline-block float-end" style={{marginBottom: "8px"}}></p>
                    <br/>
                    <Resources/>
                </div>
                <div className="card-body d-flex justify-content-between py-0 position-absolute w-100" style={{bottom: "0"}} >
                    <p className="card-text d-inline my-2">
                        <small className="text-muted">
                        <strong className="">
                            BY -
                        </strong><em>Md. Arish</em></small>
                    </p>
                    <a href="#" rel="noreferrer" className="card-link my-2" style={{textDecoration: "none"}} >More...</a>
                </div>
            </div>
        </div>
    )
}

export default Cards;