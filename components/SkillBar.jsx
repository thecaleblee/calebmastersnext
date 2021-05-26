import React from "react";

export default function SkillBar(props) {
  /**
   * @param {string} name - Name to be displayed inside SkillBar
   * @param {number} percent - Percent of competency to display for skill; e.g. 100 = 100%
   * @example <SkillBar content={SkillObject} />
   */

  const { content } = props;

  const { name = "", percent = 0 } = content;

  return (
    <>
      <style jsx>{`
        p:before {
          content: "${name}";
          width: ${percent}%;
        }
      `}</style>
      <p aria-label={`${name} ${percent}%`}>{name}</p>
    </>
  );
}
