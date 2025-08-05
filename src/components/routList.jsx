import { Suspense } from "react";
import { BookmarksIcon, ExploreIcon, HomeIcon, ListIcon, MessagesIcon, MoreIcon, NotificationIcon, ProfileIcon } from "../assets/icons";
import { Bookmarks, Explore, Home, Lists, Messages, More, Notifications, Profile } from "../pages";
import { PATH } from "./path";
import PagesLoading from "./PagesLoading";

export const routList = [
    {
        id: 1,
        path: PATH.main,
        title: "Home",
        element: <Suspense fallback={<PagesLoading isLoading={true}/>}><Home /></Suspense>,
        icon: <HomeIcon />,
        activeIcon: <HomeIcon active={true} />,
        children: []
    },
    {
        id: 2,
        path: PATH.explore,
        title: "Explore",
        element: <Suspense fallback={<PagesLoading isLoading={true}/>}><Explore /></Suspense>,
        icon: <ExploreIcon />,
        activeIcon: <ExploreIcon active={true} />,
        children: []
    },
    {
        id: 3,
        path: PATH.notification,
        title: "Notification",
        element: <Suspense fallback={<PagesLoading isLoading={true}/>}><Notifications /></Suspense>,
        icon: <NotificationIcon />,
        activeIcon: <NotificationIcon active={true} />,
        children: []
    },
    {
        id:4,
        path: PATH.messages,
        title: "Messages",
        element: <Suspense fallback={<PagesLoading isLoading={true}/>}><Messages /></Suspense>,
        icon: <MessagesIcon />,
        activeIcon: <MessagesIcon active={true} />,
        children: []
    },
    {
        id: 5,
        path: PATH.bookmarks,
        title: "Bookmarks",
        element: <Suspense fallback={<PagesLoading isLoading={true}/>}> <Bookmarks /></Suspense>,
        icon: <BookmarksIcon />,
        activeIcon: <BookmarksIcon active={true} />,
        children: []
    },
    {
        id: 6,
        path: PATH.lists,
        title: "Lists",
        element: <Suspense fallback={<PagesLoading isLoading={true}/>}><Lists /></Suspense>,
        icon: <ListIcon />,
        activeIcon: <ListIcon active={true} />,
        children: []
    },
    {
        id: 7,
        path: PATH.profile,
        title: "Profile",
        element: <Suspense fallback={<PagesLoading isLoading={true}/>}><Profile /></Suspense>,
        icon: <ProfileIcon />,
        activeIcon: <ProfileIcon active={true} />,
        children: []
    },
    {
        id: 8,
        path: PATH.more,
        title: "More",
        element: <Suspense fallback={<PagesLoading isLoading={true}/>}><More /></Suspense>,
        icon: <MoreIcon />,
        activeIcon: <MoreIcon active={true} />,
        children: []
    }
]