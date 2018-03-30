import React from 'react';
import PropTypes from 'prop-types';

const EventDetails = ({ event }) => {
    if (event) {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1>{event.title}</h1>
                    <p className="lead">
                        by <a >Start Bootstrap</a>
                    </p>

                    <hr />
                    <p><span className="glyphicon glyphicon-time"></span> Posted on August 24, 2013 at 9:00 PM</p>

                    <hr />
                    <img className="img-responsive" src="http://placehold.it/900x300" alt="" />

                    <hr />
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!</p>

                    <hr />
                    <div className="well">
                        <h4>Leave a Comment:</h4>
                        <form >
                            <div className="form-group">
                                <textarea className="form-control" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>

                    <hr />
                    <div className="media">
                        <a className="pull-left" >
                            <img className="media-object" src="http://placehold.it/64x64" alt="" />
                        </a>
                        <div className="media-body">
                            <h4 className="media-heading">Start Bootstrap
                <small>August 25, 2014 at 9:30 PM</small>
                            </h4>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </div>
                    </div>
                    <div className="media">
                        <a className="pull-left" >
                            <img className="media-object" src="http://placehold.it/64x64" alt="" />
                        </a>
                        <div className="media-body">
                            <h4 className="media-heading">Start Bootstrap
                <small>August 25, 2014 at 9:30 PM</small>
                            </h4>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            <div className="media">
                                <a className="pull-left" >
                                    <img className="media-object" src="http://placehold.it/64x64" alt="" />
                                </a>
                                <div className="media-body">
                                    <h4 className="media-heading">Nested Start Bootstrap
                        <small>August 25, 2014 at 9:30 PM</small>
                                    </h4>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        );
    }

    return null;
};

EventDetails.propTypes = {
    event: PropTypes.object
}

export default EventDetails;