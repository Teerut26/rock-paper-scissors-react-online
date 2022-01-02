import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className="flex flex-col h-screen w-full justify-center items-center">
      <div className="p-6 w-96 bg-white rounded-xl shadow-lg flex flex-col items-center gap-4">
        <div className="text-3xl font-bold">{props.NumberManage}</div>
        <div className="flex gap-3">
          <div
            onClick={() => {
              props.dispatch({
                type: "SET_NUMBER",
                playload: props.NumberManage + 1,
              });
            }}
            className="btn btn-primary"
          >
            Increase
          </div>
          <div
            onClick={() => {
              props.dispatch({
                type: "SET_NUMBER",
                playload: props.NumberManage - 1,
              });
            }}
            className="btn btn-primary"
          >
            Decrease
          </div>
          <Link to="/page-1">
          <div className="btn btn-primary">Go To Page 1</div>
          </Link>
        </div>
      </div>
    </div>
  );
}


export default connect((state) => {
    return state;
  })(Home);