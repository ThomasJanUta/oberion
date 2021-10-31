<p align="center">
  <a href="https://oberion.io">
    <img alt="Oberion" src="https://oberion.io/logo.OberionIO.png" width="60" />
  </a>
</p>
<h1 align="center">Oberion</h1>
<h3 align="center">🎮🤖🕹️</h3>
<h3 align="center">The Website Builder made for Game Developers</h3>
<h3 align="center">
     <a href="https://oberion.io/preview" rel="noopener">Demo & Preview</a>
</h3>

[Oberion](https://oberion.io) creates a stylish website for your video game.

Oberion requires you to have a Steam Store page with content about your game. Take a look at <https://oberion.io/preview> to see how your website will look like with your current Steam Store page.


## 🚀 Quick start
1. Make your Steam Store page beautiful and interesting for gamers.
- all the website content comes from your Steam page
- GIFs in your description make your website feel more alive
- include cool screenshots
- have a nice gameplay trailer with to catch attention within seconds

2. coming soon


## 🧐 What's inside?
Everything you need to build your own website!

This is a [Gatsby](https://www.gatsbyjs.org/) project written in [JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript) and [React](https://reactjs.org/). Conventional [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) and [styled-components](https://styled-components.com/) is used for styling. [GraphQL](https://graphql.org/) is used for querying the content. [Node.js](https://nodejs.org/en/) builds the static site once before deployment.


## 🎓 Customize

### Customize content
The best way is to customize your Steam page in [Steamworks](https://partner.steamgames.com/doc/store/editing). Trigger a redeploy and the changes from Steam are automatically merged into your website. 

### Customize styles
The easiest way is to define your own custom styles in the [styles.css file](src/styles.css) like this:
```
body {
    background: black;
    margin: 0;
    width: 100%;
    font-family: "Roboto", Arial, sans-serif;

    /* --- custom styles --- */
    background: MidnightBlue;
}
```
This way your custom styles are applied without breaking our default styles. CSS uses attributes that are specified later with higher priority. If you delete or replace the default styles you might encounter [merge conflicts](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-merge-conflicts) when we update this project.

Redeploying will not overwrite your custom styles.

### Customize HTML

This project uses [React JSX](https://reactjs.org/docs/introducing-jsx.html) and JavaScript to
define the browsers HTML in the [src/pages](src/pages) and [src/components](src/components) folder.
If you have no experience with React it is not recommended to change the JSX code.

If you want to continue receiving content updates from your Steam page the JSX code must remain
intact.

## FAQ

### Can I change the styling to customize the look and feel?

Of course! This is open source. Make the site your own.

Please be aware that <https://oberion.io> uses this project internally. We want to improve Oberion
and this project. It is subject to change and your customizations might not work in future releases.

### Where is the content coming from?

Directly from your Steam Store page.

### What is Gatsby?

[Gatsby](https://www.gatsbyjs.org/) is a static site generator. Oberion uses Gatsby to create a
static website made out of HTML, CSS, JavaScript, so you can host it anywhere you want.

### How do I get my site on the internet? How do I deploy the website?

You can use [GitHub-Pages](https://docs.github.com/en/pages/quickstart) for a quick 5-minute
deployment.

Or you get your
own [custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
and host your website there.

## 🤝 How to Contribute

Whether you're helping us fix bugs, improve the docs, or spread the word, we'd love to have you
contribute! 💪💙

Feel free to open an issue if you have questions, encounter bugs or want to contribute with a pull
request.

Pull requests should always reference an issue. Before making a pull request, please open an issue
first.

Read the [contribution guidelines](CONTRIBUTING.md).


## 📝 License
Oberion 💙 open source. Build something great!

MIT license: Free for private and commercial use. 


## 💫 Check out our project
We're building the website builder for game developers at [Oberion](https://oberion.io).
