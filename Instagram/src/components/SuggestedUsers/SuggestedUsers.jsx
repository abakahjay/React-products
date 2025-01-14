import { Container } from "@chakra-ui/react"

export default function SuggestedUsers({authUser}) {
    // const user=authUser.user
    const user=authUser.user?authUser.user:authUser
    console.log(user)

    return (
        <Container>
            Suggested Users
            <h1>Welcome to Instagram Clone</h1>
            <h1>Home Page</h1>
            <h1>Hello {user.firstName}</h1>
        </Container>
    )
}
