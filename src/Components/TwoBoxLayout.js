import React from "react";

function TwoBoxLayout(props) {
    
  return (
    <div className="container">
      <div className="box box1">
        <div className="card">
          {<props.params.leftCardComponent />}
        </div>
      </div>
      <div className="box box2">
        <div className="card">
            {props.params.title}
        <props.params.rightCardComponent />
        </div>
      </div>
    </div>
  );
}

export default TwoBoxLayout;
