import { api } from './axios';

// Get all profiles
export const getProfiles = async (params = {}) => {
  try {
    const response = await api.get('/profiles', { params });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Error fetching profiles';
  }
};

// Get a single profile by ID
export const getProfile = async (id) => {
  try {
    const response = await api.get(`/profiles/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Error fetching profile';
  }
};

// Create a new profile (admin only)
export const createProfile = async (profileData) => {
  try {
    const response = await api.post('/profiles', profileData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Error creating profile';
  }
};

// Update a profile (admin only)
export const updateProfile = async (id, profileData) => {
  try {
    const response = await api.patch(`/profiles/${id}`, profileData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Error updating profile';
  }
};

// Delete a profile (admin only)
export const deleteProfile = async (id) => {
  try {
    const response = await api.delete(`/profiles/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Error deleting profile';
  }
};

// Get available locations
export const getLocations = async () => {
  try {
    const response = await api.get('/profiles/locations');
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Error fetching locations';
  }
};
