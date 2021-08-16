<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's hello-world starter
</h1>

Kick off your project with this hello-world boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.com/docs/gatsby-starters/)._

## 🚀 Quick start
0.  **Check Environment and Setup.**

    Only thing you need to install on your machine is Node.js.
    Check if node  and npm are installed on your OS:
    ```shell
    node -v
    v14.17.4
    npm -v
    6.14.14
    ```
    **Install Gatsby CLI**

    To create a Gatsby site, you’ll need to install the Gatsby CLI. This tool gets you up and running with a Gatsby app in no time. It also runs a development server and builds your Gatsby application for production.
    For the installation simply run a single npm command -g (flag to install module globally) and the module name is gatsby-cli followed by  "@" and the latest version, as today 3.11.0, to check the latest version look at https://www.npmjs.com/package/gatsby-cli?activeTab=versions
    ```shell
    [git]$ npm install -g gatsby-cli@3.11.0
    npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
    npm WARN deprecated @hapi/joi@15.1.1: Switch to 'npm install joi'
    npm WARN deprecated @hapi/hoek@8.5.1: This version has been deprecated and is no longer supported or maintained
    npm WARN deprecated @hapi/address@2.1.4: Moved to 'npm install @sideway/address'
    npm WARN deprecated @hapi/bourne@1.3.2: This version has been deprecated and is no longer supported or maintained
    npm WARN deprecated @hapi/topo@3.1.6: This version has been deprecated and is no longer supported or maintained
    /usr/local/bin/gatsby -> /usr/local/lib/node_modules/gatsby-cli/cli.js

    > gatsby-cli@3.11.0 postinstall /usr/local/lib/node_modules/gatsby-cli
    > node scripts/postinstall.js

    Success!

    Welcome to the Gatsby CLI! Please visit https://www.gatsbyjs.org/docs/gatsby-cli/ for more information.


    + gatsby-cli@3.11.0
    updated 6 packages in 44.658s
    ```
1.  **Create a Gatsby site.**

    Use the Gatsby CLI ([install instructions](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli)) to create a new site, specifying the hello-world starter.

    ```shell
    # create a new Gatsby site using the hello-world starter
    gatsby new gatsby-starter https://github.com/gatsbyjs/gatsby-starter-hello-world
    ```
    The command you just ran:

    1. Created a new site with the Gatsby default starter.
    2. Created a folder with the name of the project (dotcms-site).
    3. Install all the npm packages that needs to run the site.
    4. Made your life easier!

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd gatsby-starter/
    [gatsby-starter]$ gatsby develop
    success open and validate gatsby-configs, load plugins - 0.508s
    success onPreInit - 0.108s
    success initialize cache - 0.152s
    success copy gatsby files - 0.309s
    success Compiling Gatsby Functions - 1.012s
    success onPreBootstrap - 1.069s
    success createSchemaCustomization - 0.005s
    success Checking for changed pages - 0.004s
    success source and transform nodes - 0.091s
    success building schema - 1.156s
    success createPages - 0.003s
    success createPagesStatefully - 0.095s
    info Total nodes: 21, SitePage nodes: 2 (use --verbose for breakdown)
    success Checking for changed pages - 0.005s
    success update schema - 0.194s
    success write out redirect data - 0.014s
    success onPostBootstrap - 0.006s
    info bootstrap finished - 9.836s
    success onPreExtractQueries - 0.003s
    success extract queries from components - 0.379s
    success write out requires - 0.017s
    success run page queries - 0.049s - 2/2 40.63/s
    success Caching HTML renderer compilation - 0.005s
    ⠀
    You can now view gatsby-starter-hello-world in the browser.
    ⠀
      http://localhost:8000/
    ⠀
    View GraphiQL, an in-browser IDE, to explore your site's data and schema
    ⠀
      http://localhost:8000/___graphql
    ⠀
    Note that the development build is not optimized.
    To create a production build, use gatsby build
    ⠀
    success Building development bundle - 21.208s
    success Writing page-data.json files to public directory - 0.541s - 2/2 3.70/s
    ```
    This command starts a development server. You will be able to see and interact with your new site in a development environment. Also, it has live reload, so any changes you do in your files you can see immediately in your site.


1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `gatsby-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-hello-world)

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[Build, Deploy, and Host On The Only Cloud Built For Gatsby](https://www.gatsbyjs.com/products/cloud/)

Gatsby Cloud is an end-to-end cloud platform specifically built for the Gatsby framework that combines a modern developer experience with an optimized, global edge network.

<!-- AUTO-GENERATED-CONTENT:END -->
## 🖐️ Hands-On Lessons

The goal is to explore the fundemantal Gatsby features and if we know those, we will be able to work and customize any of those starters, which are boilerplate Gatsby sites maintained by the community and intended for jump-starting development quickly.

### 📃 Lesson 1: Gatsby Pages ###
Customizing pages, Creating new pages and the focus will be on /pages directory and the files inside

Created four pages inside /pages: Index.js / blog.js /about.js / contact.js

### 📃 Lesson 2: Linking Between Pages with Gatsby ###
Properly link btn our pages using Gatsby with {Link} react component and not the 'a' element except linking to external site (Github, Twitter) provided by html as tried out in index page as link to contact page. 
    Why? Because we went through full page refresh:

    1. The entire page went away.
    2. It went to a white screen.
    3. Then the contact page was loaded in.

But Gatsby has a different way, we can link btn your pages, which comes with a lot of optimizations allowing the content to be swapped out 
instanteniously. 
    For this we need to do:
      
      1. import a named export {Link} from Gatsby npm module as this module is already installed as one of our three dependencies in our project as listed out on package.json, so we're good to go no need to install anything new 
      2. {Link} is a react component. When we use Link to link btn the pages of our gatsby site, there is a bunch of optimizations happen behind the scenes, for example:
        - Gatsby is going to preload the page content, you might be heading to. So if you do click that link, it loads instantly!
        - And you've no longer that flash of content btn pages.
      3. The Link component needs 'to' property. To is the path we're trying to head to in this case it is '/contact'

Modified three pages: Index.js /about.js / contact.js

### 📃 Lesson 3: Creating Shared Page Components ###
Let's use shared components! Setting up something like a navigation bar, that shows up exactly the same for every single page that is the topic of this lesson. 

Think about you have a component shared among the entire site like header or footer. Let's create a seperate react component that all the pages can use and render.

  Let's start with the footer:
    1. Create a new file for a new react component. The footer.
    2. Once we have that component in place all of our pages can import it and use it at the bottom of the page.
    3. That will give us a shared footer.

This new component file should not go in the source pages directory since we're not trying to create a new page. We're just trying to create a new component that can be rendered on every page.
  
  So to do that: 
    1. We have to start by creating /componets directory
    2. From there we're going to create footer.js. This would be the footer component.
    3. /components directory has no special meaning. The files inside here aren't going to do anything unless they're imported in somewhere else. And that's exactly what we want.
    4. We store in constant Footer our functional component.
    5. And setup the content we're going to render. With Footer element as root element
    6. The last thing to do is to export this component from this file. Otherwise we'll never be able to access it.
    7. We can now import and render this component in various pages for our site

  Let's start with the one page we already have up:
    1. That's the contact page
    2. Above contact page component we're gonna import the Footer, so I'm importing the default export calling it Footer
    3. And I'm grabing it from a file relative to this one.
    4. So I'm gonna start off with .. to get out of the pages directory where the current file lives.
    5. Than it /components since I'm looking for a file in there and it's called footer leaving off the .js file extension.

Let's put the footer at the bottom of the contact page where it belongs. Just before the last closing div element.

Using react components we're able to compose our pages and nothing we're doing here is gatsby specific. Here we're just using the fundementals of react. So we do the same for about, blog and index pages.

So I created header react component in the same way as footer.


Modified three pages: Index.js / about.js / contact.js / blog.js
Added direcotory: /components
Added react components: footer.js / header.js