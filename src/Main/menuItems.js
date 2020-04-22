import DashboardIcon from '@material-ui/icons/Dashboard';
import UserSettingsIcon from '@material-ui/icons/AccountBox';
import SampleIcon from '@material-ui/icons/BeachAccess';
import DiscordIcon from '@material-ui/icons/ChatBubble';
import OsuIcon from '@material-ui/icons/FiberManualRecord';
import LeagueIcon from '@material-ui/icons/Games';
import React from "react";

export const menu = [
    {
      name: "Dashboard",
      url: "/main",
      id: 1,
      icon: <DashboardIcon />,
    },
    {
      name: "User Settings",
      url: "/usersettings",
      id: 2,
      icon: <UserSettingsIcon />,
      children: [
        {
          name: "Sample 1",
          url: "/sample1",
          id: 1,
          icon: <SampleIcon />
        },
        {
          name: "Sample 2",
          url: "/sample2",
          id: 2,
          icon: <SampleIcon />
        }
      ]
    },
    {
      name: "Discord Settings",
      url: "/discordsettings",
      id: 3,
      icon: <DiscordIcon />,
      children: [
        {
          name: "osu!",
          url: "/osu",
          id: 1,
          icon: <OsuIcon />
        },
        {
          name: "League of Legends",
          url: "/LoL",
          id: 2,
          icon: <LeagueIcon />
        }
      ]
    }
]
