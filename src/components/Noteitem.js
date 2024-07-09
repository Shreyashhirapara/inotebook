import React from "react";

const Noteitem = (props) => {
    const { note } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-baseline">
                        <h5 className="card-title">{note.title}</h5><i className="fas fa-trash-alt mx-2">
                        </i>
                        <i className="far fa-edit mx-2"></i>
                    </div>
                <p className="card-text">{note.description}</p>
                
                </div>
            </div>
        </div>
  );
};

export default Noteitem;