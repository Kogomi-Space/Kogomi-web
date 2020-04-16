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
      url: "",
      // onClick: new HandleClick(""),
      icon: <DashboardIcon />,
    },
    {
      name: "User Settings",
      url: "usersettings",
      icon: <UserSettingsIcon />,
      children: [
        {
          name: "Sample 1",
          url: "usersettings/sample1",
          icon: <SampleIcon />
        },
        {
          name: "Sample 2",
          url: "usersettings/sample2",
          icon: <SampleIcon />
        }
      ]
    },
    {
      name: "Discord Settings",
      url: "discordsettings",
      icon: <DiscordIcon />,
      children: [
        {
          name: "osu!",
          url: "/osu",
          icon: <OsuIcon />
        },
        {
          name: "League of Legends",
          url: "LoL",
          icon: <LeagueIcon />
        }
      ]
    }
]
