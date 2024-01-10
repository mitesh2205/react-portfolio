import ProjectCard from '../components/ProjectCard';
import styles from '../styles/ProjectPage.module.css';
import projects from '../config/ProjectList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';


const ProjectsPage = () => {
  console.log(projects); // Log the value of projects

  return (
    <>
      <div id="ProjectPage" className='mt-36'>
        
      <div className="table mx-12 lg:mx-60">
      <FontAwesomeIcon className='pr-3 text-yellow_vs' icon={faBriefcase}></FontAwesomeIcon>
        <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
        Stuff I've Built So Far
        </code>
        <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
      </div>
        <div className={styles.container} >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};


export default ProjectsPage;
