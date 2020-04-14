export const menu = [
    {
      name: "Dashboard",
      url: "",
      icon: "DashboardIcon"
    },
    {
      name: "User Settings",
      url: "usersettings",
      icon: "UserSettingsIcon",
      children: [
        {
          name: "Sample 1",
          url: "usersettings/sample1",
          icon: "SampleIcon"
        },
        {
          name: "Sample 2",
          url: "usersettings/sample2",
          icon: "SampleIcon"
        }
      ]
    },
    {
      name: "Discord Settings",
      url: "discordsettings",
      icon: "DiscordIcon",
      children: [
        {
          name: "osu!",
          url: "/osu",
          icon: "OsuIcon"
        },
        {
          name: "League of Legends",
          url: "LoL",
          icon: "LeagueIcon"
        }
      ]
    }
]
