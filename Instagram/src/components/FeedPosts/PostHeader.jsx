import { Flex ,Box, Avatar, Skeleton,Button} from "@chakra-ui/react";

export default function PostHeader({avatar,username}) {
    return (
        <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'} my={2}>
            <Flex alignItems={'center'} gap={2}>
                {/* profile Picture */}
                <Avatar size={'sm'} src={avatar} alt="user profile pic"/>


                {/* Username and Date */}
                <Flex fontSize={12} fontWeight={'bold'} gap={2}>
                    {username}_
                    <Box color={'gray.500'}>
                        • 1w
                    </Box>
                </Flex>
            </Flex>
            <Box cursor={'pointer'}>
                <Button size={'xm'}
                fontSize={12}
                color={'blue.500'}
                bg={'transparent'}
                _hover={{color:'white'}}
                fontWeight={"bold"}
                transition={"0.25s ease-in-out"}
                >
                    Unfollow
                </Button>
            </Box>
        </Flex>
    )
}
