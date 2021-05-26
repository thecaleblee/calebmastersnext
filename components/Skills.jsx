import React from "react";
import Container from "./Container";
import SkillBar from "./SkillBar";

export default function Skills(props) {
  /**
   * Display a chart with skill and skill level
   * @param {string} al - Aria-Label Text
   * @param {string} heading - Heading for the Skill chart
   * @param {string} subheading - Subheading; below the Heading
   * @param {Object[]} skillSet - Categories of skills and their related skills
   * @param {string} skillSet[].category - Name of the Category the skill belongs in
   * @param {Object[]} skillSet[].skills - List of Skills for a given category
   * @param {string} skillSet[].skills[].name - Name to be displayed inside SkillBar
   * @param {number} skillSet[].skills[].percent - Percent of competency to display for skill; e.g. 100 = 100%
   *
   * @example <Skills id="idname" heading="Skill section heading" subheading="Subheading text" al="Aria-label for skills" skillSet="{skillset Object}"
   */

  const {
    id = "",
    heading = "",
    subheading = "",
    al = "",
    children,
    skillSet: skills,
  } = props;

  return (
    <Container id={id}>
      <h2>
        {heading}
        <span>{subheading}</span>
      </h2>
      <article aria-label={al}>
        {React.Children.toArray(
          skills.map((skill) => {
            const { category, skills: bars } = skill;

            return (
              <>
                <h3>{category}</h3>
                {React.Children.toArray(
                  bars.map((bar) => <SkillBar content={bar} />)
                )}
              </>
            );
          })
        )}
        {children}
      </article>
    </Container>
  );
}
