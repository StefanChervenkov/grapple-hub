import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useParams } from "react-router-dom";
import CommentBox from "../components/CommentBox";
import Comment from "../components/Comment";
import { post } from "../api/requestApi";
import Spinner from "../components/Spinner";
import { get, put } from "../api/requestApi";

const EventForumPage = () => {
    const { user } = useAuth();
    const { eventId } = useParams();
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isCommentBoxVisible, setIsCommentBoxVisible] = useState(false);


    useEffect(() => {
        async function fetchComments() {
            try {
                setIsLoading(true);
                const data = await get(`/jsonstore/comments`);
                if (!data) {
                    throw new Error("Failed to fetch comments.");
                }
                const filteredComments = Object.values(data).filter((comment) => comment.eventId === eventId);
                setComments(filteredComments);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                setError("Failed to fetch comments.");
            }
        }
        fetchComments();

    }, []);


    const postComment = async (commentText) => {
        const newComment = {
            firstName: user.firstName,
            lastName: user.lastName,
            comment: commentText,
            eventId,
            createdAt: new Date().toISOString(),
            likes: [],
            likesCount: 0
        };

        try {
            setIsLoading(true);
            const data = await post('/jsonstore/comments', newComment);
            if (!data) {
                throw new Error("Failed to post comment.");
            }

            setComments([...comments, data]); 
            setIsLoading(false);

        } catch (error) {
            setIsLoading(false);
            setError("Failed to post comment.");
        }
    };

    const handleLike = async (commentId) => {
        const commentIndex = comments.findIndex(comment => comment._id === commentId);
        if (commentIndex === -1) return;

        const currentComment = comments[commentIndex];
        const hasLiked = currentComment.likes.includes(user._id);
        if (hasLiked) return;

        const updatedComment = {
            ...currentComment,
            likes: [...currentComment.likes, user._id],
            likesCount: currentComment.likesCount + 1
        };

        try {
            const data = await put(`/jsonstore/comments/${commentId}`, updatedComment);
            if (!data) {
                throw new Error("Failed to like comment.");
            }
            const updatedComments = [...comments];
            updatedComments[commentIndex] = updatedComment;
            setComments(updatedComments);
        } catch (error) {
            setError("Failed to like comment.");
        }
    };

    if (isLoading) return <Spinner />;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div>
            <button
                onClick={() => setIsCommentBoxVisible(!isCommentBoxVisible)}
                className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2 rounded-lg transition mt-4 mb-4 ml-4"
            >
                {isCommentBoxVisible ? "Hide Comment Box" : "+ Add Comment"}
            </button>

           {isCommentBoxVisible && <CommentBox postComment={postComment} currentUser={user} />}

            {comments.map((comment) => (
                <Comment key={comment._id} comment={comment} currentUserId={user._id} handleLike={handleLike} />
            ))}

        </div>
    );
};

export default EventForumPage;