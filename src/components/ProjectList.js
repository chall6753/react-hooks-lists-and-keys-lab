import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects[2].id);
  
  

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id='project-list'>
      {projects.map((arr)=> {
        return(
          <ProjectItem key={arr.id} name={arr.name} about={arr.about} technologies={arr.technologies}/>
        )}
      )}
      </div>
      
    </div>
  );
}

export default ProjectList;
