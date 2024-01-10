// import Image from 'next/image';

import styles from '../styles/ProjectCard.module.css';

// const Image = "https://mitesh-chhatbar.web.app/Mitesh.png";

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      {/* <Image src={project.image} height={300} width={600} alt={project.name} /> */}
        <img src={project.image} alt={project.name} />
      <div className={styles.content}>
        <h3 className='text-2xl text-blue_vs pb-2'>{project.name}</h3>
        <code>{project.description}</code>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.cta}>
          {project.source_code && (
            <a
              href={project.source_code}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Source Code
            </a>
          )}
          {/* if project.demo not null */}
            {project.demo && (
                <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.underline}
                >
                Live Demo
                </a>
            )}
            {/* if project.video not null */}
            {project.video && (
                <a
                href={project.video}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.underline}
                >
                Video
                </a>
            )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;