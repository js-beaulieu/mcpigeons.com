export const meta = {
  title: "MC Pigeons - Minecraft",
  favicon: "/favicon.ico",
};

export const header = {
  title: "MC Pigeons",
  description: "A Minecraft 1.16.1 Vanilla server. Join us today!",
  cta: {
    discord: { label: "Discord", href: "http://discord.mcpigeons.com/" },
    dynmap: { label: "Dynmap", href: "http://pigeons.mcsrv.pro:8123/" },
  },
};

export const nav = {
  links: [
    { label: "Server", anchor: "#server" },
    { label: "Staff", anchor: "#staff" },
    { label: "VIPs", anchor: "#vip" },
  ],
};

export const content = {
  server: {
    title: "Server",
    loading: "Loading data...",
    noData: "No data.",
    sections: {
      motd: {
        title: "MOTD",
      },
      address: {
        title: "Address",
        url: "server.mcpigeons.com",
        copy: "Copy",
        isCopied: "Copied to clipboard!"
      },
      status: {
        title: "Status",
        online: "Online",
        offline: "Offline",
        error: "Error while fetching the server's status",
      },
      online: {
        title: "Currently online",
      },
    },
  },
  staff: {
    title: "Staff",
    table: {
      columns: ["Name", "Role"],
      rows: [
        { Name: "folkrav", Role: "Admin" },
        { Name: "THEPIEGON_QC", Role: "Moderator" },
        { Name: "The_Waan", Role: "Moderator" },
      ],
    },
  }
};

export default {
  meta,
  header,
  nav,
  content,
};
