import CreatePost from "./CreatePost";
import Home from "./Home";
import Notifications from "./Notifications";
import ProfileLink from "./ProfileLink";
import Search from "./Search";

const SidebarItems = ({authUser,onLogout}) => {
	return (
		<>
			<Home authUser={authUser} onLogout={onLogout} />
			<Search authUser={authUser} onLogout={onLogout}/>
			<Notifications authUser={authUser} onLogout={onLogout}/>
			<CreatePost authUser={authUser} onLogout={onLogout}/>
			<ProfileLink authUser={authUser} onLogout={onLogout} />
		</>
	);
};

export default SidebarItems;
