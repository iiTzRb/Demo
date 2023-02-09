
import { useState} from 'react'
import Header from './components/Header'
import Project from './components/Project'


const App = () => {
  const [project, setProject] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30 PM',
        remainder: true,
    },
    {
        id: 2,
        text: 'Date',
        day: 'Feb 14th at 5 PM',
        remainder: true,
    },
    {
        id: 3,
        text: 'Assignment',
        day: 'March 5th at 8:30 AM',
        remainder: false,
    }
    
])
  return(
    <div className= 'container'>
      <Header />
      <Project project={project} />
    </div>
  )
}

export default App;

