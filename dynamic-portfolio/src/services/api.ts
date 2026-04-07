import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export const fetchProjects = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/projects`);
        return response.data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error;
    }
};

export const fetchProjectById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/projects/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching project with id ${id}:`, error);
        throw error;
    }
};