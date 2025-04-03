// import React from "react";
// import "./style.css";
// import JobForm from "../JobForm/JobForm";
// import { useState } from "react";

// export const NavbarMain = ({onShowJobForm}) => {
//   // const [showJobForm,setShwoJobForm] = useState(false)
//   return (
//     <div className="navbar-main">
//       <div className="frame-2">
//         <div className="frame-3" />

//         <div className="overlap-group-wrapper">
//           <div className="overlap-group-2">
//             <div className="frame-4">
//               <div className="frame-5">
//                 <div className="text-wrapper-6">Home</div>
//               </div>
//             </div>

//             <div className="frame-6">
//               <div className="frame-5">
//                 <div className="text-wrapper-6">Find Jobs</div>
//               </div>
//             </div>

//             <div className="frame-7">
//               <div className="frame-5">
//                 <div className="text-wrapper-6">Find Talents</div>
//               </div>
//             </div>

//             <div className="frame-8">
//               <div className="frame-5">
//                 <div className="text-wrapper-6">About us</div>
//               </div>
//             </div>

//             <div className="frame-9">
//               <div className="frame-5">
//                 <div className="text-wrapper-6">Testimonials</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="frame-10">
//           <div className="frame-11">
//             <div className="group-wrapper">
//               <div className="group">
//                 <button className="download-wrapper"
//                  onClick={()=>setShwoJobForm(!showJobForm)}
//                  >

//                   <div className="download">Create Jobs</div>
//                 </button>

//                 <div className="frame-12">
//                   <div className="download-2">Login</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {showJobForm && (
//         <div className="job-form-container">
//           <JobForm 
//             onClose={() => setShowJobForm(false)}
//             onSubmitSuccess={() => setShowJobForm(false)}
//           />
//         </div>
//       )}
//     </div>
//   );
// };
import React from "react";
import "./style.css";
import JobForm from "../JobForm/JobForm";

export const NavbarMain = ({ onShowJobForm }) => {
  return (
    <div className="navbar-main">
      <div className="frame-2">
        <div className="frame-3" />

        <div className="overlap-group-wrapper">
          <div className="overlap-group-2">
            <div className="frame-4">
              <div className="frame-5">
                <div className="text-wrapper-6">Home</div>
              </div>
            </div>

            <div className="frame-6">
              <div className="frame-5">
                <div className="text-wrapper-6">Find Jobs</div>
              </div>
            </div>

            <div className="frame-7">
              <div className="frame-5">
                <div className="text-wrapper-6">Find Talents</div>
              </div>
            </div>

            <div className="frame-8">
              <div className="frame-5">
                <div className="text-wrapper-6">About us</div>
              </div>
            </div>

            <div className="frame-9">
              <div className="frame-5">
                <div className="text-wrapper-6">Testimonials</div>
              </div>
            </div>
          </div>
        </div>

        <div className="frame-10">
          <div className="frame-11">
            <div className="group-wrapper">
              <div className="group">
                {/* Use the passed in function to trigger the popup */}
                <button
                  className="download-wrapper"
                  onClick={onShowJobForm}
                >
                  <div className="download">Create Jobs</div>
                </button>

                <div className="frame-12">
                  <div className="download-2">Login</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Remove the local conditional rendering so the parent controls it */}
    </div>
  );
};
export default NavbarMain