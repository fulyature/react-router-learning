import React from "react";
import { useLocation, useParams } from "react-router-dom";

const InstructorDetail = () => {
  let { id } = useParams();

  let { state, pathname } = useLocation();
  console.log(state);
  return (
    <div className="p-3">
      <p>
        from useParam:ı am ınstructer
        <span className="text-danger fw-bolder">{id}</span>
      </p>
      <p>
        from useLocation:ı am ınstructer
        <span className="text-danger fw-bolder">{state.name}</span>
      </p>
      <p>out pats is:{pathname}</p>
    </div>
  );
};

export default InstructorDetail;
