import React,{useState} from "react";
import { Frame } from "./sections/Frame";
import FrameWrapper from "./sections/FrameWrapper/FrameWrapper.";
import { NavbarMain } from "./sections/NavBarMain/NavBarMain";
import "./style.css";
import JobForm from "./sections/JobForm/JobForm";

export const Assignemnt = () => {
  const [showJobForm, setShowJobForm] = useState(false);
  return (
    <div className="assignemnt">
      <div className="div-2">
        <div className="overlap">
          <Frame />
          <NavbarMain onShowJobForm={() => setShowJobForm(true)} />
        </div>

        <FrameWrapper />
      </div>
      {showJobForm && (<JobForm onClose={() => setShowJobForm(false)}
          onSubmitSuccess={() => setShowJobForm(false)} />)}

    </div>
  );
};
