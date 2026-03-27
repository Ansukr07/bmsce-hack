import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

export const fetchPrograms = () => api.get('/programs');
export const fetchEvents = () => api.get('/events');
export const fetchFaculty = () => api.get('/faculty');
export const fetchTestimonials = () => api.get('/testimonials');

export default api;
