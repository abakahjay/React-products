import {
	Avatar,
	Button,
	Divider,
	Flex,
	GridItem,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
	Text,
	VStack,
	useDisclosure,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Comment from "../Comment/Comment";
import Caption from "../Comment/Caption";
import PostFooter from "../FeedPosts/PostFooter";
import { ProfileUrl } from "../../utils/imageUrl";

export default function ProfilePost({post}) {
  const { isOpen, onOpen, onClose } = useDisclosure();//This is use for the modal setup
  // `http://localhost:7004/posts/image/${post.image}`
  return (
    <>
        <GridItem
          cursor={"pointer"}
          borderRadius={4}
          overflow={"hidden"}
          border={"1px solid"}
          borderColor={"whiteAlpha.300"}
          position={"relative"}
          aspectRatio={1 / 1}
          onClick={onOpen}
        >
          <Flex
            opacity={0}
            _hover={{opacity:1}}
            position={"absolute"}
            top={0}
            right={0}
            bottom={0}
            left={0}
            bg={'blackAlpha.700'}
            transition={'all 0.3s ease'}
            zIndex={1}
            justifyContent={'center'}
          >
            <Flex alignItems={'center'} justifyContent={'center'} gap={50}>
              {/* likes */}
              <Flex>
                <AiFillHeart size={20} />
                <Text fontWeight={"bold"} ml={2}>
                  {/* {post.likes.length} */}20
                </Text>
              </Flex>
              {/* Comments */}
              <Flex>
                <FaComment size={20} />
                <Text fontWeight={"bold"} ml={2}>
                  {/* {post.comments.length} */}34
                </Text>
              </Flex>
            </Flex>
          </Flex>
          {/* <Image src={`http://localhost:7004/posts/image/${post.postId}`} alt='profile post' w={"100%"} h={"100%"} objectFit={"cover"} /> */}
          <Image src={ProfileUrl(post)} alt='profile post' w={"100%"} h={"100%"} objectFit={"cover"} />
        </GridItem>


        {/* Adding the Modal here */}
        <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={{ base: "3xl", md: "5xl" }}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={"black"} pb={5}>
            <Flex
              gap='4'
              w={{ base: "90%", sm: "70%", md: "full" }}
              mx={"auto"}
              maxH={"90vh"}
              minH={"50vh"}
            >
              {/* Image */}
              <Flex
                borderRadius={4}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
                flex={1.5}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image src={ProfileUrl(post)} alt='profile post' />
                {/* <Image src={post.imageURL} alt='profile post' /> */}
              </Flex>

              {/* Second Half Of the Modal */}
              <Flex flex={1} flexDir={"column"} px={10} display={{ base: "none", md: "flex" }}>
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Flex alignItems={"center"} gap={4}>
                    <Avatar src={'img2'} size={"sm"} name='As a Programmer' />
                    <Text fontWeight={"bold"} fontSize={12}>
                      {/* {userProfile.username} */}
                      joshua
                    </Text>
                  </Flex>

                  {/* {authUser?.uid === userProfile.uid && ( */}
                    <Button
                      size={"sm"}
                      bg={"transparent"}
                      _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                      borderRadius={4}
                      p={1}
                      // onClick={handleDeletePost}
                      // isLoading={isDeleting}
                    >
                      <MdDelete size={20} cursor='pointer' />
                    </Button>
                  {/* )} */}
                </Flex>
                <Divider my={4} bg={"gray.500"} />

                <VStack w='full' alignItems={"start"} maxH={"350px"} 
                overflowY={"auto"}
                >
                  {/* CAPTION */}
                  {/* {post.caption && */}
                    <Caption post={post}/>
                  {/* } */}


                  {/* COMMENTS */}
                  {[0,1,2,3,4,4,4,4,4,4,4,4,4,].map((comment,commentId) => (
                    <Comment key={commentId} comment={comment} />
                  ))}
                  {/* {post.comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} />
                  ))} */}
                </VStack>
                <Divider my={4} bg={"gray.800"} />
                <PostFooter isProfilePage={true} post={post} />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
