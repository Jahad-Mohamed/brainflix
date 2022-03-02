export const GET_VIDEOS_API_URL = () =>
  `https://project-2-api.herokuapp.com/videos/?api_key=${process.env.REACT_APP_API_KEY}`;
export const GET_VIDEO_INFO_API_URL = (id) =>
  `https://project-2-api.herokuapp.com/videos/${id}?api_key=${process.env.REACT_APP_API_KEY}`;
