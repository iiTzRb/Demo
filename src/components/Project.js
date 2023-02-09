

 const Project = ({project}) => {
   
  return (
    
    <>
      {project.map((project) => (
      <h3 key={project.id}>{project.text}</h3>))
      }  
    </>
  )
}

export default Project