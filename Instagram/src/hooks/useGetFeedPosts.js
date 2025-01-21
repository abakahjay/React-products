import { useEffect, useState } from "react";
import usePostStore from "../store/usePostStore";
import useAuthStore from "../store/useAuthStore";
import useShowToast from "./useShowToast";
import useUserProfileStore from "../store/userProfileStore";
import API from "../utils/api";

const useGetFeedPosts = () => {
	const [isLoading, setIsLoading] = useState(true);
	const { posts, setPosts } = usePostStore();
	const authUser = useAuthStore((state) => state.user);
	const showToast = useShowToast();
	const { setUserProfile } = useUserProfileStore();

  // console.log(authUser)

	useEffect(() => {
		const getFeedPosts = async () => {
			setIsLoading(true);
			if (authUser?.following?.length === 0|| !authUser.following|| !authUser) {
				setIsLoading(false);
				setPosts([]);
				return;
			}

			try {
				const response =await API.get(`/api/v1/posts`)
        // console.log(response.data)
        const posts = response.data.posts
        // console.log(posts)
				const feedPosts = [];

				setPosts(posts);
			} catch (error) {
				const message = error.response?.data?.error || error.message
			  showToast("Error", message, "error");
			} finally {
				setIsLoading(false);
			}
		};

		if (authUser) getFeedPosts();
	}, [authUser, showToast, setPosts, setUserProfile]);

	return { isLoading, posts };
};

export default useGetFeedPosts;
