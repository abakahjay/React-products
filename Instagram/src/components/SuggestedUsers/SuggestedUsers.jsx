import { VStack,Flex, Text,Button, Box ,Link} from "@chakra-ui/react"
import SuggestedUser from "./SuggestedUser"
import SuggestedHeader from "./SuggestedHeader"

export default function SuggestedUsers({authUser,onLogout}) {
    // const user=authUser.user
    const user=authUser.user?authUser.user:authUser
    // console.log(user)

    return (
        <VStack py={8} px={6} gap={4} >
            <SuggestedHeader user={user} onLogout={onLogout}/>
            <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'} >
                <Text fontSize={'12px'} fontWeight={'bold'} color={'gray.500'}>
                    Suggested for you
                </Text>
                <Text fontSize={12} fontWeight={'bold'} color={'gray.400'} cursor={'pointer'} _hover={{color:'white'}} >
                    See All
                </Text>
            </Flex>
            <SuggestedUser name={'Frank'} followers={1434} avatar='/img1.png' />
            <SuggestedUser name={'Elorm'} followers={334} avatar='/img2.png' />
            <SuggestedUser name={'Prince'} followers={147} avatar='/img3.png' />

            <Box fontSize={12} color={'gray.500'} mt={5}>
                Copyright &copy; {new Date().getFullYear()} Built By{" "}
				<Link href='https://abakahjay.github.io/' target='_blank' color='blue.500' fontSize={14} alignSelf={'start'}>
                    Abakah Joshua
				</Link>
            </Box>
            <h1>Hello {user.firstName}</h1>
        </VStack>
    )
}
