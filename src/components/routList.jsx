import { BookmarksIcon, ExploreIcon, HomeIcon, ListIcon, MessagesIcon, MoreIcon, NotificationIcon, ProfileIcon } from "../assets/icons";
import { Bookmarks, Explore, Home, Lists, Messages, More, Notifications, Profile } from "../pages";
import { PATH } from "./path";

export const routList = [
    {
        id: 1,
        path: PATH.main,
        title: "Home",
        element: <Home />,
        icon: <HomeIcon />,
        activeIcon: <HomeIcon active={true} />,
        children: []
    },
    {
        id: 2,
        path: PATH.explore,
        title: "Explore",
        element: <Explore />,
        icon: <ExploreIcon />,
        activeIcon: <ExploreIcon active={true} />,
        children: []
    },
    {
        id: 3,
        path: PATH.notification,
        title: "Notification",
        element: <Notifications />,
        icon: <NotificationIcon />,
        activeIcon: <NotificationIcon active={true} />,
        children: []
    },
    {
        id: 4,
        path: PATH.messages,
        title: "Messages",
        element: <Messages />,
        icon: <MessagesIcon />,
        activeIcon: <MessagesIcon active={true} />,
        children: []
    },
    {
        id: 5,
        path: PATH.bookmarks,
        title: "Bookmarks",
        element: <Bookmarks />,
        icon: <BookmarksIcon />,
        activeIcon: <BookmarksIcon active={true} />,
        children: []
    },
    {
        id: 6,
        path: PATH.lists,
        title: "Lists",
        element: <Lists />,
        icon: <ListIcon />,
        activeIcon: <ListIcon active={true} />,
        children: []
    },
    {
        id: 7,
        path: PATH.profile,
        title: "Profile",
        element: <Profile />,
        icon: <ProfileIcon />,
        activeIcon: <ProfileIcon active={true} />,
        children: []
    },
    {
        id: 8,
        path: PATH.more,
        title: "More",
        element: <More />,
        icon: <MoreIcon />,
        activeIcon: <MoreIcon active={true} />,
        children: []
    }
]