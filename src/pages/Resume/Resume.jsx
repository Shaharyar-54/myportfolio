import React from "react";
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from "./TimelineItem";
import SkillItem from "./SkillItem";

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="SMH Rehman High School"
            date="2009 — 2019"
            description="Demonstrated leadership and teamwork as captain of the debate team, fostering critical thinking and communication skills among peers."
          />
          <TimelineItem
            title="Govt. College Formen Nazimabad"
            date="2020 — 2021"
            description="Served as president of the environmental club, spearheading sustainability initiatives and promoting eco-conscious practices campus-wide."
          />
          <TimelineItem
            title="SMI University"
            date="2022 — 2026"
            description="Building good relation with student and learning the technologies which is highly demand in current era."
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Wenawa"
            date="2024-2025"
            description="Currently employed at Wenawa, leveraging Software to develop innovative software solutions and drive impactful business results."
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="React.js" value={70} />
          <SkillItem title="Next.js" value={80} />
          <SkillItem title="Node.js" value={80} />
          <SkillItem title="Firebase" value={60} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
