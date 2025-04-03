// JobCard.jsx
import React from "react";
import "./style.css";

const JobCard = ({ job }) => {
  return (
    <div className="frame-13">
      <div className="frame-14">
        <img
          className="image"
          alt="Image"
          src="https://c.animaapp.com/m8zie5xoMjUXAh/img/image-78-1.png"
        />
      </div>

      <div className="text-wrapper-7">{job.job_title}</div>

      <div className="frame-15">
        <div className="frame-16">
          <img
            className="frame-17"
            alt="Experience"
            src="https://c.animaapp.com/m8zie5xoMjUXAh/img/frame-48102935.svg"
          />
          <div className="text-wrapper-8">{job.experience}</div>
        </div>

        <div className="frame-16">
          <img
            className="frame-17"
            alt="Location"
            src="https://c.animaapp.com/m8zie5xoMjUXAh/img/frame-48102937.svg"
          />
          <div className="text-wrapper-8">{job.location}</div>
        </div>

        <div className="frame-18">
          <img
            className="frame-17"
            alt="Salary"
            src="https://c.animaapp.com/m8zie5xoMjUXAh/img/frame-48102939.svg"
          />
          <div className="text-wrapper-8">{job.salary_range?.replace(/,000/g, 'k').replace(/,/g, '').replace(' - ', '-')}</div>
        </div>
      </div>

      <div className="frame-19">
        <div className="text-wrapper-9">{Math.round((new Date() - new Date(job.updated_at)) / (1000 * 60 * 60))}h Ago
        </div>
      </div>

      <div className="frame-20">
        <div className="text-wrapper-10">Apply Now</div>
      </div>

      <p className="a-user-friendly">{job.job_description}</p>
    </div>
  );
};

export default JobCard;