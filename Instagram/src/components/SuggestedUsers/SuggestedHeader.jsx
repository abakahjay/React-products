import { Avatar, Button, Flex,Link,Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function SuggestedHeader({user,onLogout}) {
        return (
            <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
                <Flex alignItems={'center'} gap={2}>
                    <Avatar src="/profilepic.png" size={'lg'}/>
                    <Text fontSize={13} fontWeight={'bold'}>
                        {user.username}
                    </Text>
                </Flex>
                <Link as={RouterLink} to={'/'} size={'sm'} fontSize={14} fontWeight={'medium'} color={'blue.400'} cursor={'pointer'}
                style={{textDecoration:'none'}} _hover={{color:'white'}}
                onClick={()=>{
                    onLogout(user._id);
                }}>
                    Log out
                </Link>
            </Flex>
        )
}
