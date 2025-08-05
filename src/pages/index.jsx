import { lazy } from "react";

const Login = lazy(() => new Promise((resolve) => {
    return setTimeout(() => resolve(import("./Auth/Login")), 1500)
}))

const Home = lazy(() => new Promise((resolve) => {
    return setTimeout(() => resolve(import("./Dashboard/Home")), 1500)
}))

const Explore = lazy(() => new Promise((resolve) => {
    return setTimeout(() => resolve(import("./Dashboard/Explore")), 1500)
}))

const Notifications = lazy(() => new Promise((resolve) => {
    return setTimeout(() => resolve(import("./Dashboard/Notifications")), 1500)
}))

const Messages  = lazy(() => new Promise((resolve) => {
    return setTimeout(() => resolve(import("./Dashboard/Messages")), 1500)
}))

const Bookmarks = lazy(() => new Promise((resolve) => {
    return setTimeout(() => resolve(import("./Dashboard/Bookmarks")), 1500)
}))

const Lists = lazy(() => new Promise((resolve) => {
    return setTimeout(() => resolve(import("./Dashboard/Lists")), 1500)
}))

const Profile = lazy(() => new Promise((resolve) => {
    return setTimeout(() => resolve(import("./Dashboard/Profile")), 1500)
}))

const More = lazy(() => new Promise((resolve) => {
    return setTimeout(() => resolve(import("./Dashboard/More")), 1500)
}))

export {Login, Home, Explore, Notifications, Messages, Bookmarks, Lists,Profile,More}