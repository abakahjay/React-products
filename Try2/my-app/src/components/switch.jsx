export function Switch (){
    const USER_STATUS = 'NOT_VERIFIED';
    switch(USER_STATUS){//We can use switch instead of if else statements
        case 'VERIFIED':
            return (<>
                <h1>You are verified</h1>
            </>);
        case 'NOT_VERIFIED':
            return (<>
                <h1>You are not verified,Please Verify email or phone number</h1>
            </>);
        case 'DISABLED':
            return (<>
                <h1>Your account is DISABLED</h1>
            </>);
        default :
            return <>
                <h1>Please Contact Admin for additional assistance</h1>
            </>
    }
}