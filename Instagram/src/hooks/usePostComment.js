import { useState } from "react";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/useAuthStore";
import usePostStore from "../store/usePostStore";
import API from "../utils/api";

const usePostComment = () => {
	const [isCommenting, setIsCommenting] = useState(false);
	const showToast = useShowToast();
	const authUser = useAuthStore((state) => state.user);
	const addComment = usePostStore((state) => state.addComment);

	const handlePostComment = async (postId, comment,userId) => {
		if (isCommenting) return;
		if (!authUser) return showToast("Error", "You must be logged in to comment", "error");
		setIsCommenting(true);
		const newComment = {
			comment,
			createdAt: Date.now(),
			createdBy: authUser.uid,
			postId,
		};
        const form = new FormData()
        form.append('text',comment)
        form.append('userId', authUser._id)
		try {
			const response =await API.post(`/api/v1/comments/${postId}`,{
                text:comment,
                userId: authUser._id,
            })
            const comments = response.data
            console.log(comments)
			addComment(postId, newComment);
		} catch (error) {
			const message = error.response?.data?.error || error.message
			showToast("Error", message, "error");
		} finally {
			setIsCommenting(false);
		}
	};

	return { isCommenting, handlePostComment };
};

export default usePostComment;
