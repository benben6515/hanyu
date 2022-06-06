import items_2022 from '../2022/items'

export default {
  title: 'It\'s Han Yu 👋',
  description: 'HanYu\' blog site',
  themeConfig: {
    nav: [
      { text: 'Posts 文章列表', link: '/posts' },
      { text: 'About 關於我', link: '/about' },
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
      copyright: `Copyright © ${new Date().getFullYear()} @HanYu, made by @Benben`
    }
  }
}
