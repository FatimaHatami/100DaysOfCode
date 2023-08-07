import React from "react";

const Skill = ({ skill, level, color }) => {
  return (
    <div className="skill" style={{ backgroundColor: `${color}` }}>
      <span>{skill}</span>
      <span>
        {level == "beginner" && "👶"}
        {level == "intermediate" && "👍"}
        {level == "advanced" && "💪"}
      </span>
    </div>
  );
};

export default Skill;
