import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import ProjectCard from '../components/ProjectCard';

const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { data: project, loading, error } = useFetch(`/api/projects/${id}`);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading project details.</div>;

    return (
        <div>
            <h1>{project.title}</h1>
            <ProjectCard project={project} />
            <p>{project.description}</p>
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">View Live</a>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">View Code</a>
        </div>
    );
};

export default ProjectDetail;