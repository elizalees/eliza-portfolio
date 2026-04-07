export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    link: string;
    imageUrl: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export interface ApiResponse<T> {
    data: T;
    message: string;
    success: boolean;
}