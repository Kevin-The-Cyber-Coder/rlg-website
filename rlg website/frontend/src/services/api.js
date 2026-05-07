import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Blog APIs
export const fetchBlogs = (params) => api.get('/blogs', { params });
export const fetchBlogById = (id) => api.get(`/blogs/${id}`);
export const createBlog = (data) => api.post('/blogs', data);
export const updateBlog = (id, data) => api.put(`/blogs/${id}`, data);
export const deleteBlog = (id) => api.delete(`/blogs/${id}`);

// Program APIs
export const fetchPrograms = (params) => api.get('/programs', { params });
export const fetchProgramById = (id) => api.get(`/programs/${id}`);
export const createProgram = (data) => api.post('/programs', data);
export const updateProgram = (id, data) => api.put(`/programs/${id}`, data);
export const deleteProgram = (id) => api.delete(`/programs/${id}`);

// Donation APIs
export const createDonation = (data) => api.post('/donations', data);
export const fetchDonations = (params) => api.get('/donations', { params });

// Contact APIs
export const submitContact = (data) => api.post('/contact', data);
export const fetchContacts = (params) => api.get('/contact', { params });

// Gallery APIs
export const fetchGallery = (params) => api.get('/gallery', { params });
export const uploadGalleryImage = (data) => api.post('/gallery', data);
export const deleteGalleryImage = (id) => api.delete(`/gallery/${id}`);

// Event APIs
export const fetchEvents = (params) => api.get('/events', { params });
export const fetchEventById = (id) => api.get(`/events/${id}`);
export const createEvent = (data) => api.post('/events', data);
export const updateEvent = (id, data) => api.put(`/events/${id}`, data);
export const deleteEvent = (id) => api.delete(`/events/${id}`);

// Testimonial APIs
export const fetchTestimonials = (params) => api.get('/testimonials', { params });
export const createTestimonial = (data) => api.post('/testimonials', data);
export const deleteTestimonial = (id) => api.delete(`/testimonials/${id}`);

// Dashboard APIs
export const fetchDashboardStats = () => api.get('/dashboard/stats');
export const fetchRecentActivities = () => api.get('/dashboard/activities');

export default api;