import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "My Projects",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "My Work",
    path: "/MyWork",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Notifications",
    path: "/MyNotifications",
    icon: <IoIcons.IoIosNotifications />,
    cName: "nav-text",
  },

  {
    title: "Sign in",
    path: "/signin",
    icon: <IoIcons.IoIosLogOut />,
    cName: "nav-textLog",
  },

];