import { Flex, Image, Text } from "@chakra-ui/react";
export default function GoogleAuth({ prefix }) {
return (
    <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"} >
			<Image src='/google.png' w={5} alt='Google logo' />
			<Text mx='2' color={"blue.500"}>
				{prefix} with Google
			</Text>
	</Flex>
)
}
