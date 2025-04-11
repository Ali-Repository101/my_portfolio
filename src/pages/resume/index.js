import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { introdata, meta } from "../../content_option";

export const Resume = () => {
    const resumeUrl = introdata.your_resume_url;

    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{meta.title} - Resume</title>
                <meta name="description" content="View and download my resume." />
            </Helmet>
            <div className="resume-container">
                <iframe
                    src={resumeUrl}
                    className="resume-frame"
                    title="Resume"
                ></iframe>
                <div className="resume-actions">
                    <a href={resumeUrl} download="My_Resume.pdf" className="resume-download-btn">
                        Download Resume
                    </a>
                </div>
            </div>
        </HelmetProvider>
    );
};
