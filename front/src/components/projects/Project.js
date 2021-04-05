import React from 'react';

const Project = ({project}) => {
  return (
    <div className='project'>
      <h1>{project.title}</h1>
      <img src={project.imageUrl} alt='image-projet'/>
    </div>
  );
};

export default Project;