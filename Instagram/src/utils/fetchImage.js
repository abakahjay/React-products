export const fetchImage = async (imageId) => {
    const response = await fetch(`http://localhost:7004/api/v1/posts/image/${imageId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch image');
    }

    // Create a blob from the response
    const blob = await response.blob();

    // Create an object URL for the image to display it
    const imageURL = URL.createObjectURL(blob);
    return imageURL;
};
