export default {
  title: "My Docs",
  description: "VitePress documentation",

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide" }
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "Guide", link: "/guide" }
        ]
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" }
    ]
  }
}