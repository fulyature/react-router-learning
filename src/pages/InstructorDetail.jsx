import React from "react";
import { useParams } from "react-router-dom";

const InstructorDetail = () => {
  let param = useParams();

  console.log(param);
  return <div>InstructorDetail</div>;
};

export default InstructorDetail;
