import { Box, Flex, Grid, Skeleton, Text, VStack } from "@chakra-ui/react";
import ProfilePost from "./ProfilePost";
import { useEffect, useState } from "react";


const ProfilePosts = ({user}) => {
    // console.log(user)
    const [isFollowing,setIsFollowing] = useState(false)
    const [isLoading,setIsLoading]=useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false);
        },1000)
    })
    const [followerse,setFollowers] = useState(2002)
    const handleFollows = ()=>{
        setIsLoading(true)
        if(!isFollowing){
            setIsFollowing(true)
            setFollowers(followerse+1)
        }else{
            setIsFollowing(false)
            setFollowers(followerse-1)
        }
    }


	const noPostsFound = !isLoading && user?.posts.length === 0;
	if (noPostsFound) return <NoPostsFound />;

	return (
		<Grid
			templateColumns={{
				sm: "repeat(1, 1fr)",
				md: "repeat(3, 1fr)",
			}}
			gap={1}
			columnGap={1}
		>
			{isLoading &&
				[0, 1, 2].map((_, idx) => (
					<VStack key={idx} alignItems={"flex-start"} gap={4}>
						<Skeleton w={"full"}>
							<Box h='300px'>contents wrapped</Box>
						</Skeleton>
					</VStack>
				))}

			{!isLoading && (
				<>
					{user?.posts.map((post) => (
            <ProfilePost post={post} key={post} />
          ))}
          {/* {user.posts.map((post) => (
						<ProfilePost post={post} key={post.id} />
					))} */}
				</>
			)}
		</Grid>
	);
};

export default ProfilePosts;

const NoPostsFound = () => {
	return (
		<Flex flexDir='column' textAlign={"center"} mx={"auto"} mt={10}>
			<Text fontSize={"2xl"}>No Posts Found🤔</Text>
		</Flex>
	);
};
