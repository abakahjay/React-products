import { useQuery } from 'react-query';
import API from '../utils/api';

const fetchPosts = async () => {
    const { data } = await API.get('/api/v1/posts');
    return data;
};

const usePosts = () => {
    return useQuery('posts', fetchPosts);
};

export default usePosts;
