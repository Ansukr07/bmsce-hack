import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || '/api';

const api = axios.create({
  baseURL: API_URL,
});

export const fetchPrograms = () => api.get('/programs');
export const fetchEvents = () => api.get('/events');
export const fetchFaculty = () => api.get('/faculty');
export const fetchTestimonials = () => api.get('/testimonials');
export const askChatbot = async (message) => {
  const response = await api.post('/chatbot/query', { message });
  return response.data;
};

export default api;
