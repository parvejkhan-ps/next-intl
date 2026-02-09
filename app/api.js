import { cache } from 'react';
import axios from 'axios';

// --- MOCK DATABASE ---
// This variable stays alive while the server is running
let MOCK_DB = {
  id: '123',
  name: "John Doe", // Default Name
  bio: "Full Stack Developer",
  email:"pk@g.c",
  lastUpdated: new Date().toISOString()
};
const api = axios.create({
  baseURL: `http://localhost:5000/api`,
});


export const getPostData = async (slug, context="test") => {
  const API_URL = `/profiles/${slug}`;

  // *** LOG 1: The API call is about to happen ***
  console.log(`\n--- LOG 1(${context}): getPostData CALLED (${new Date().toLocaleTimeString()}) ---`);
  console.log(`--- Attempting External FETCH (Axios): ${API_URL}`);

  try {
    const response = await api.get(API_URL, {
      next: {
        tags: [`profiles-${slug}`], // 🔥 cache tag
      },
    });
    const post = response.data;

    // *** LOG 2: The API call successfully finished and returned data ***
    console.log(`--- LOG 2(${context}): FETCH COMPLETE. Post ID: ${post.id}`);
    console.log('--- Result will now be shared ---\n');

    return post;
  } catch (error) {
  console.log('Axios Error:', {
    message: error.message,
    status: error.response?.status,
    data: error.response?.data,
  });

  throw new Error('Failed to fetch post data');
}

};
export const getPostData2 = async (slug, context) => {
  const API_URL = `/profile/${slug}`;

  // *** LOG 1: The API call is about to happen ***
  // console.log(`\n--- LOG 1(${context}): getPostData2 CALLED (${new Date().toLocaleTimeString()}) ---`);
  // console.log(`--- Attempting External FETCH (Axios): ${API_URL}`);

  try {
    const response = await api.get(API_URL, {
      next: {
        tags: [`profiles-${slug}`], // 🔥 cache tag
      },
    });
    const post = response.data;

    // *** LOG 2: The API call successfully finished and returned data ***
    // console.log(`--- LOG 2(${context}): getPostData2 FETCH COMPLETE. Post ID: ${post.id}`);
    // console.log('--- Result will now be shared ---\n');

    return post;
  } catch (error) {
  console.log('Axios Error:', {
    message: error.message,
    status: error.response?.status,
    data: error.response?.data,
  });

  throw new Error('Failed to fetch post data');
}

};

export async function updatePost(id, data) {
  const res = await api.patch(`/profiles/${id}`, data);
  return res.data;  
}
export async function getPosts() {
  const res = await api.get('/profiles');
  return res.data;
}

// 2. UPDATE DATA (Helper for our Server Action)
// This simulates writing to a real database
export const updateUserProfile = async (slug, newData) => {
  console.log(`[API] Updating user profile...`);
  const API_URL = `${process.env.API_BASE_URL}/api/profiles/${slug}`;

  // *** LOG 3: The API update call is about to happen ***
  console.log(`\n--- LOG 3: updateUserProfile CALLED (${new Date().toLocaleTimeString()}) ---`);
  console.log(`--- Attempting External UPDATE (Axios): ${API_URL} with data:`, newData);
  
  try {
    const response = await axios.put(API_URL, newData);
    console.log("response",response);
    const updatedProfile = response.data;
    
    // *** LOG 4: The API update call successfully finished and returned data ***
    console.log(`--- LOG 4: UPDATE COMPLETE. Updated Profile ID: ${updatedProfile.id}`);
    console.log('--- Updated result will now be shared ---\n');
    return updatedProfile;
  } catch (error) {
    console.error('Axios Error:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
    });
  
    throw new Error('Failed to update user profile');
  }
};