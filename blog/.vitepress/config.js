import items_2022 from '../2022/items'

export default {
  title: 'It\'s Han Yu ๐',
  description: 'HanYu\' blog site',
  head: [
    ['link', { rel: "icon", type: "image/svg", sizes: "32x32", href: "/hanyu.svg"}],
  ],
  themeConfig: {
    logo: '/hanyu.svg',
    nav: [
      { text: 'Posts ๆ็ซ ๅ่กจ', link: '/posts' },
      { text: 'About ้ๆผๆ', link: '/about' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/benben6515/' },
      { icon: 'instagram', link: 'https://www.instagram.com/its.hanyu.co/' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/jane-chang-itsalrightok/' }
    ],
    sidebar: [
      {
        text: '2022\'s post',
        items: items_2022,
      },
    ],
    footer: {
      copyright: `Copyright ยฉ ${new Date().getFullYear()} @HanYu, made by @Benben`
    }
  }
}
