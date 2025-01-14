import { Flex,Avatar, VStack, Button, Link,Box } from "@chakra-ui/react";
import { useState ,useRef, useEffect} from "react";

export default function SuggestedUser({name,followers,avatar}) {
        const [isFollowing,setIsFollowing] = useState(false)
        const [isLoading,setIsLoading]=useState(true);
        useEffect(()=>{
            setTimeout(()=>{
                setIsLoading(false);
            },1000)
        })
        const [followerse,setFollowers] = useState(followers)
        const commentRef = useRef(null);
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
    return (
        <Flex w={'full'} alignItems={'center'} justifyContent={'space-between'}>
            <Flex w={'full'} alignItems={'center'} gap={2}>
                <Avatar src={avatar} size={'lg'}/>
                <VStack spacing={2} alignItems={'flex-start'}>
                    <Link to={`/`}>
						<Box fontSize={12} fontWeight={"bold"}>
							{name}
						</Box>
					</Link>
					<Box fontSize={11} color={"gray.500"}>
						{followerse} followers
					</Box>
                </VStack>
            </Flex>
            <Button bg={'transparent'}
            fontSize={14}
            fontWeight={'medium'}
            color={'blue.400'}
            cursor={'pointer'}
            size={'sm'}
            p={0}
            h={'max-content'}
            _hover={{ color: "white" }}
            isLoading={isLoading}
            onClick={handleFollows}>
                {isFollowing ? "Unfollow" : "Follow"}
            </Button>
        </Flex>
    )
}
