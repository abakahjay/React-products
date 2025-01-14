import { Container,Flex, Skeleton, SkeletonCircle, VStack,Box } from "@chakra-ui/react"
import FeedPost from "./FeedPost"
import { useEffect, useState } from "react"

export default function FeedPosts({authUser}) {
    const user=authUser.user?authUser.user:authUser
    const [isLoading,setIsLoading] =useState(true)
    useEffect(() =>{
        setTimeout(() =>{
            setIsLoading(false);
        },2000)
    },[])
    console.log(user)
    return (
        <Container maxW={'container.sm'} py={10} px={2}>

            {/* For the Loading Skeleton of Instagram */}
            {isLoading&&[0,1,2,3].map((_,idx)=>(
                <VStack key={idx} gap={4} alignItems={'flex-start'} mb={10}>
                    <Flex gap={2} alignItems={'center'}>
                        <SkeletonCircle size={10}/>
                        <VStack gap={2} alignItems={'flex-start'}>
                            <Skeleton height={'10px'} w={'200px'}/>
                            <Skeleton height={'10px'} w={'100px'}/>
                        </VStack>
                    </Flex>
                    <Skeleton w={'full'}>
                        <Box h={400}>
                            contents wrapped
                        </Box>
                    </Skeleton>

                </VStack>
            ))}
            {!isLoading&&(
                <>
                    <FeedPost img={'/img1.png'} avatar={'/img1.png'} username={'Francaaa'}/>
                    <FeedPost img={'/img2.png'} avatar={'/img2.png'} username={'Joshua'}/>
                    <FeedPost img={'/img3.png'} avatar={'/img3.png'} username={'Abigail'}/>
                    <FeedPost img={'/img4.png'} avatar={'/img4.png'} username={'Justice'}/>
                </>
            )}
            
        </Container>
    )
}
