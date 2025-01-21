import { Flex,Box,Text, InputGroup, InputRightElement ,Input, Button} from "@chakra-ui/react";
import { useRef, useState } from "react";
import {NotificationsLogo,UnlikeLogo,CommentLogo}from '../../assets/constants.jsx'



export default function PostFooter({username,post,isProfilePage}) {
    post&&console.log(post)
    const [liked,setLiked] = useState(false)
    const [likes,setLikes] = useState(post?.likes.length||1)
    const commentRef = useRef(null);
    const handleLikes = ()=>{
        if(liked){
            setLiked(false)
            setLikes(likes-1)
        }else{
            setLiked(true)
            setLikes(likes+1)
        }
    }
    return (
        <Box mb={10} marginTop={"auto"}>
            <Flex alignItems={'center'} gap={4} width={'full'}  pt={0} mb={2} mt={4}>

                <Box onClick={handleLikes} cursor={"pointer"} fontSize={18}>
					{!liked ? <NotificationsLogo /> : <UnlikeLogo />}
				</Box>

                <Box cursor={"pointer"} fontSize={18} onClick={() => commentRef.current.focus()}>
                        <CommentLogo />
                </Box>
            </Flex>

            <Text fontWeight={600} fontSize={"sm"}>
				{likes} likes
			</Text>


            {!isProfilePage&&(
                <>
                    <Text fontSize={12} fontWeight={'bold'} gap={2}>
                        {username}_{"  "}
                        <Text as={'span'} color={'gray.500'} fontWeight={400}>
                            Feeling Good
                        </Text>
                    </Text>
                    <Text fontSize={'sm'} color={'gray'}>
                        View All 1000 Comments
                    </Text>
                </>
            )}


            <Flex alignItems={'center'} justifyContent={'space-between'} gap={2} w={'full'}>
                <InputGroup >
                    <Input variant={'flushed'} placeholder="Add a Comment..." fontSize={14}/>
                    <InputRightElement>
                        <Button fontSize={14} color={'blue.500'} fontWeight={600} cursor={'pointer'} _hover={{color:'white'}} transition={'0.2s ease-in-out'} bg={'transparent'}>
                            Post
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Flex>



            {/* <Text fontSize='12' color={"gray"}>
					Posted 1w ago
			</Text> */}
        </Box>
    )
}
