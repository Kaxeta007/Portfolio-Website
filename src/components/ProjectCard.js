import React from 'react'
import { Col } from "react-bootstrap";



const ProjectCard = ({title, description, imgUrl, githubLink}) => {

  


  return (
    <Col size={12} sm={6} md={4}>
      <a href={githubLink} target='_blank' rel="noopener noreferrer" style={{color: "white"}}>
        <div className="proj-imgbx">
            <img src={imgUrl} />
            <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
            </div>
        </div>
      </a>

    </Col>
    
  )
}

export default ProjectCard
