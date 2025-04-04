// import React, { useState } from "react";
// import "./style.css";
// import axios from 'axios';

// const JobForm = ({ onClose, onSubmitSuccess }) => {
//   const [formData, setFormData] = useState({
//     jobTitle: '',
//     companyName: '',
//     location: '',
//     minSalary: '',
//     maxSalary: '',
//     jobType: 'FullTime',
//     description: '',
//     applicationDeadline: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (action) => {
//     try {
//       await axios.post('http://127.0.0.1:8000/api/jobs/', {
//         ...formData,
//         status: action
//       });
//       onSubmitSuccess();
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="frame-49">
//     <div className="div">
//       <div className="text-wrapper-15">Create Job Opening</div>

//       {/* Job Title */}
//       <div className="frame-33">
//         <div className="text-wrapper-16">Job Title</div>
//         <div className="frame-34">
//           <input
//             type="text"
//             name="jobTitle"
//             value={formData.jobTitle}
//             onChange={handleInputChange}
//             className="text-wrapper-17"
//             placeholder="Full Stack Developer"
//           />
//           <img
//             className="vector-7"
//             alt="Vector"
//             src="https://c.animaapp.com/m904vg1mRPnYLZ/img/vector-6-1.svg"
//           />
//         </div>
//       </div>

//       {/* Company Name */}
//       <div className="frame-35">
//         <div className="text-wrapper-18">Company Name</div>
//         <div className="frame-36">
//           <input
//             type="text"
//             name="companyName"
//             value={formData.companyName}
//             onChange={handleInputChange}
//             className="text-wrapper-19"
//             placeholder="Amazon, Microsoft, Swiggy"
//           />
//         </div>
//       </div>

//       {/* Location */}
//       <div className="frame-37">
//         <div className="text-wrapper-18">Location</div>
//         <div className="frame-36">
//           <img
//             className="vector-8"
//             alt="Vector"
//             src="https://c.animaapp.com/m904vg1mRPnYLZ/img/vector-3.svg"
//           />
//           <input
//             type="text"
//             name="location"
//             value={formData.location}
//             onChange={handleInputChange}
//             className="text-wrapper-19"
//             placeholder="Choose Preferred Location"
//           />
//         </div>
//       </div>

//       {/* Salary Range */}
//       <div className="frame-38">
//         <div className="text-wrapper-18">Salary Range</div>
//         <div className="frame-39">
//           <div className="frame-40">
//             <img
//               className="vector-9"
//               alt="Vector"
//               src="https://c.animaapp.com/m904vg1mRPnYLZ/img/vector.svg"
//             />
//             <input
//               type="text"
//               name="minSalary"
//               value={formData.minSalary}
//               onChange={handleInputChange}
//               className="text-wrapper-20"
//               placeholder="₹0"
//             />
//           </div>
//           <div className="frame-40">
//             <img
//               className="vector-9"
//               alt="Vector"
//               src="https://c.animaapp.com/m904vg1mRPnYLZ/img/vector.svg"
//             />
//             <input
//               type="text"
//               name="maxSalary"
//               value={formData.maxSalary}
//               onChange={handleInputChange}
//               className="text-wrapper-20"
//               placeholder="₹12,00,000"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Job Description */}
//       <div className="group-2">
//         <div className="text-wrapper-21">Job Description</div>
//         <div className="frame-41">
//           {/* <img
//             className="frame-42"
//             alt="Frame"
//             src="https://c.animaapp.com/m904vg1mRPnYLZ/img/frame-48102961.svg"
//           /> */}
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleInputChange}
//             className="text-wrapper-22"
//             placeholder="Please share a description to let the candidate know more about the job role"
//           />
//         </div>
//       </div>

//       {/* Job Type */}
//       <div className="frame-43">
//         <div className="text-wrapper-18">Job Type</div>
//         <div className="frame-36">
//           <img
//             className="vector-8"
//             alt="Vector"
//             src="https://c.animaapp.com/m904vg1mRPnYLZ/img/vector-3.svg"
//           />
//           <select
//             name="jobType"
//             value={formData.jobType}
//             onChange={handleInputChange}
//             className="text-wrapper-19"
//           >
//             <option value="FullTime">FullTime</option>
//             <option value="PartTime">PartTime</option>
//             <option value="Contract">Contract</option>
//             <option value="Remote">Remote</option>
//           </select>
//         </div>
//       </div>

//       {/* Application Deadline */}
//       <div className="frame-44">
//         <div className="text-wrapper-18">Application Deadline</div>
//         <div className="frame-45">
//           <input
//             className="application-deadline"
//             type="date"
//             name="applicationDeadline"
//             value={formData.applicationDeadline}
//             onChange={handleInputChange}
//           />
//           <img
//             className="vector-10"
//             alt="Vector"
//             src="https://c.animaapp.com/m904vg1mRPnYLZ/img/vector-5.svg"
//           />
//         </div>
//       </div>

//       {/* Action Buttons */}
//       <div className="frame-46" onClick={() => handleSubmit('published')}>
//         <div className="text-wrapper-23">Publish</div>
//         <img
//           className="vector-10"
//           alt="Vector"
//           src="https://c.animaapp.com/m904vg1mRPnYLZ/img/vector-5.svg"
//         />
//       </div>

//       <div className="frame-47" onClick={() => handleSubmit('draft')}>
//         <div className="text-wrapper-24">Save Draft</div>
//         <img
//           className="vector-11"
//           alt="Vector"
//           src="https://c.animaapp.com/m904vg1mRPnYLZ/img/vector-6.svg"
//         />
//       </div>
//     </div>
//     </div>
//   );
// };

// export default JobForm;
import React, { useState } from "react";
import "./style.css";
import axios from "axios";

// Helper function to map the jobType value to the Django choices
const mapJobType = (jobType) => {
  // Assuming your UI sends "FullTime", "PartTime", "Contract", or "Remote"
  // and Django expects "full-time", "part-time", "contract", or "internship"
  switch (jobType.toLowerCase()) {
    case "fulltime":
      return "full-time";
    case "parttime":
      return "part-time";
    case "contract":
      return "contract";
    case "remote":
      // Map remote to a valid choice; adjust as needed.
      return "internship";
    default:
      return jobType.toLowerCase();
  }
};

const JobForm = ({ onClose, onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    companyName: '',
    location: '',
    minSalary: '',
    maxSalary: '',
    jobType: 'FullTime',
    description: '',
    applicationDeadline: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (action) => {
    if (action === "published") {
      // Prepare payload with keys matching Django model fields
      const payload = {
        job_title: formData.jobTitle,
        company_name: formData.companyName,
        location: formData.location,
        job_type: mapJobType(formData.jobType),
        // Combine minSalary and maxSalary into one salary_range field
        salary_range: `${formData.minSalary} - ${formData.maxSalary}`,
        job_description: formData.description,
        application_deadline: formData.applicationDeadline
      };
      try {
        await axios.post("https://fullstack-web-app-backend.vercel.app/api/jobs/", payload);
        onSubmitSuccess();
      } catch (error) {
        console.error("Error:", error);
      }
    } else if (action === "draft") {
      // Save formData in localStorage
      localStorage.setItem("jobDraft", JSON.stringify(formData));
      // You can then navigate back to the main page via onSubmitSuccess or onClose
      onSubmitSuccess();
    }
  };

  return (
    <div className="frame-49">
      <div className="div">
        <div className="text-wrapper-15">Create Job Opening</div>

        {/* Job Title */}
        <div className="frame-33">
          <div className="text-wrapper-16">Job Title</div>
          <div className="frame-34">
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleInputChange}
              className="text-wrapper-17"
              placeholder="Full Stack Developer"
            />
            <img
              className="vector-7"
              alt="Vector"
              src="https://c.animaapp.com/m904vg1mRPnYLZ/img/vector-6-1.svg"
            />
          </div>
        </div>

        {/* Company Name */}
        <div className="frame-35">
          <div className="text-wrapper-18">Company Name</div>
          <div className="frame-36">
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className="text-wrapper-19"
              placeholder="Amazon, Microsoft, Swiggy"
            />
          </div>
        </div>

        {/* Location */}
        <div className="frame-37">
          <div className="text-wrapper-18">Location</div>
          <div className="frame-36">
            <img
              className="vector-8"
              alt="Vector"
              src="https://c.animaapp.com/m904vg1mRPnYLZ/img/vector-3.svg"
            />
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="text-wrapper-19"
              placeholder="Choose Preferred Location"
            />
          </div>
        </div>

        {/* Salary Range */}
        <div className="frame-38">
          <div className="text-wrapper-18">Salary Range</div>
          <div className="frame-39">
            <div className="frame-40">
              <img
                className="vector-9"
                alt="Vector"
                src="https://c.animaapp.com/m904vg1mRPnYLZ/img/vector.svg"
              />
              <input
                type="text"
                name="minSalary"
                value={formData.minSalary}
                onChange={handleInputChange}
                className="text-wrapper-20"
                placeholder="₹0"
              />
            </div>
            <div className="frame-40">
              <img
                className="vector-9"
                alt="Vector"
                src="https://c.animaapp.com/m904vg1mRPnYLZ/img/vector.svg"
              />
              <input
                type="text"
                name="maxSalary"
                value={formData.maxSalary}
                onChange={handleInputChange}
                className="text-wrapper-20"
                placeholder="₹12,00,000"
              />
            </div>
          </div>
        </div>

        {/* Job Description */}
        <div className="group-2">
          <div className="text-wrapper-21">Job Description</div>
          <div className="frame-41">
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="text-wrapper-22"
              placeholder="Please share a description to let the candidate know more about the job role"
            />
          </div>
        </div>

        {/* Job Type */}
        <div className="frame-43">
          <div className="text-wrapper-18">Job Type</div>
          <div className="frame-36">
            <img
              className="vector-8"
              alt="Vector"
              src="https://c.animaapp.com/m904vg1mRPnYLZ/img/vector-3.svg"
            />
            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleInputChange}
              className="text-wrapper-19"
            >
              <option value="FullTime">FullTime</option>
              <option value="PartTime">PartTime</option>
              <option value="Contract">Contract</option>
              <option value="Remote">Remote</option>
            </select>
          </div>
        </div>

        {/* Application Deadline */}
        <div className="frame-44">
          <div className="text-wrapper-18">Application Deadline</div>
          <div className="frame-45">
            <input
              className="application-deadline"
              type="date"
              name="applicationDeadline"
              value={formData.applicationDeadline}
              onChange={handleInputChange}
            />
            <img
              className="vector-10"
              alt="Vector"
              src="https://c.animaapp.com/m904vg1mRPnYLZ/img/vector-5.svg"
            />
          </div>
        </div>

        {/* Action Buttons */}
          <button
            type="button"
            className="frame-46"
            onClick={() => handleSubmit('published')}
          >
            <div className="text-wrapper-23">Publish</div>
            <img
              className="vector-10"
              alt="Vector"
              src="https://c.animaapp.com/m904vg1mRPnYLZ/img/vector-5.svg"
            />
          </button>
    

        
          <button
            type="button"
            className="frame-47"
            onClick={() => handleSubmit('draft')}
          >
            <div className="text-wrapper-24">Save Draft</div>
            <img
              className="vector-11"
              alt="Vector"
              src="https://c.animaapp.com/m904vg1mRPnYLZ/img/vector-6.svg"
            />
          </button>
    
      </div>
    </div>
  );
};

export default JobForm;
