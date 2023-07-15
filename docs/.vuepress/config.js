// config.js
module.exports = {
    theme: 'vdoing', // npm主题依赖包
    // theme: require.resolve('../../vdoing'), // 使用本地主题包

    title: 'vuepress-blog-vdoing',
    // theme: "@vuepress/theme-blog",
    base: "/vuepress-blog-vdoing/",
    themeConfig: {
        repo: 'https://github.com/goofish-shop/vuepress-blog-vdoing',
        footer: {
            copyrightInfo: "goofish-shop"
        },
        extendFrontmatter: {
            author: {
                name: 'ahKevinXy',
                link: 'https://github.com/ahKevinXy'
            },
            titleTag: '',
        }
    }
}