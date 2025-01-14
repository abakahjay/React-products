import React from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import { Box,Image } from '@chakra-ui/react'

export default function FeedPost({img,avatar,username}) {
    return (
        <>
            <PostHeader avatar={avatar} username={username}/>
            <Box my={2} borderRadius={4} overflow={"hidden"}>
				<Image src={img} alt={"FEED POST IMG"} />
			</Box>
            <PostFooter username={username} />
        </>
    )
}
