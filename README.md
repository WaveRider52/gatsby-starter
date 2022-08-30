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

### 📃 Lesson 4: Creating Gatsby Page Layouts ###
In this lesson you will bring your pages to the next level. We will set up a universal layout component that we can easily use to create new page  with just a couple of lines of code. 
What we gonna do is create a new component in our /components directory and let's call the component layout.js. This will be adventually the only component that our pages need to import in order to get up and running. Now we're gonna focus on layout.js and index.js.

So for the start let's create the basic structure of the layout component:

  1. Import react from react
  2. Setup layout constant
  3. It's a functional component where we return some jsx
  4. And I'll start off with a single root div
  5. Down below we go a head and export this component 
      ```
      export default Layout
      ```

Let's go over and try to use it over in index.js and see what happens. So here is the big picture goal:
  1. I wanna be able to remove every components that are used on every page and just use that single layout component instead so that's the only one I'm gonna end up importing.
  2. I'm gonna import typing following in index.js
      ```
      import Layout from '../components/layout'
      ```
  3. I'm gonna recreate the return statemen and remove the duplicate one
      We're gonna enter unique staff inside Layout tag
  4. Well for us is what unique? It's none of the tags div, Header, Footer. It's just the staff right inside.
      So I'm going to copy those three elements h1, h2 and p.
  5. And gonna paste them inside Layout element and this is the end goal of what we want.
  6. Now currently if I remove that duplicate return, this is not going to work as expected
  7. I'm gonna save index.js
  8. I'm gonna navigate over to the homepage and what do we have? We have a blank screen.
      That's because the stuff we're passing inside Layout tag is not rendered.
  9. Well in react to get content rendered inside of a component via the children prop and that's exactly what we gonna use to get all of that other stuff rendered.
  10. So inside layout.js we get our props 
      ```
      const Layout = (props) => {
      ```

      and we're going to use one right here. we're going to render  
  
      ```
      props.children
      ```

      and putting that inside curly braces to reference that javascript variable.

Now, what is props.children? Well it's the JSX passed in. So it is JSX for these three elements: h1, h2, p.

Now after saved layout.js. We see on the homepage our content rendered. From here we can customize the layout component to add stuff that's gonna be shared on all pages like that header and footer.

So I'll import the Header from ./header and the same thing for Footer ./footer and finally we will use both of those. Now the header is going to go just before the individual page content and the footer just after that content.

So using the layout.js component is just gonna make our lives a whole lot easier. Now let's go a head and integrate that into the other three pages for the site.

So let's checkout each page to make sure that everything is working. And there we go! We have a basic static site created and powered by gatsby. Now we're not done not by a long shot. There's a lot more to cover and what I wanna focus on in the next few lessons styling your gatsby sites.
  
### 📃 Lesson 5: Styling Gatsby Projects ###
In this lesson we will bring style to our gatsby sites using css. In this lesson we'll be using gatsby plugin to enable SAS so we can take advantage all of the great features of the scsss synthax.

Let's get started with some basic styles getting those applied to the site.

Create a new folder /styles and in there I'm going to put a new file index.css. This will be the start of the styles for our site.

To make obvious that styles are in our pages included, all we going to do is to use universal selector to select every element on the page. And we are going to change its color to red. By default the styles are definetly not being applied. None of the pages is red and this is correct.

To make it by default loaded, we're going to import our base style sheet from our layout component as the layout component is used on each and every page:
  ```
      import '../styles/index.css'
  ```
to get those styles included in the static sites that gatsby generates.

We want to enable a css pre-processor. Here we'll be using SASS, allowing us to take advantage of the scss synthax so we can use all of the great features, functions and other tools it provides.
Now to do that we're going to use our very first gatsby plugin. You can find the list of all available plugins on the gatsby site gatsbyjs.org. Well we choose plugin menu from the site, which allow us to search through all available plugins to find the one we're looking for. Now this list includes both official plugins released and maintained by the gatsby core team and it also includes third party plugins.
So if we search for sass, here it is: it is gatsby-plugin-sass.
So currently I can use the import statement to import a css file but if I try to import sass file or an scss file gatsby wouldn't know what to do. Once we have this plugin correctly installed and configured, it will all work as expected:

So the 1st thing we're going to install is the plug-in, that is gatsby-plugin-sass

And the other thing we need is node-sass. So this module is responsible for converting the files down to regular css and this plugin just allows us to atually do that from a gatsby site. Now we can go ahead and run this installation command installing both of those tools:
  ```
[gatsby-starter]$ npm install gatsby-plugin-sass node-sass
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated har-validator@5.1.5: this library is no longer supported

> node-sass@6.0.1 install /Users/orcunodabas/git/gatsby-starter/node_modules/node-sass
> node scripts/install.js

Downloading binary from https://github.com/sass/node-sass/releases/download/v6.0.1/darwin-x64-83_binding.node
Download complete ░⸩ ⠋ :
Binary saved to /Users/orcunodabas/git/gatsby-starter/node_modules/node-sass/vendor/darwin-x64-83/binding.node
Caching binary to /Users/orcunodabas/.npm/node-sass/6.0.1/darwin-x64-83_binding.node

> node-sass@6.0.1 postinstall /Users/orcunodabas/git/gatsby-starter/node_modules/node-sass
> node scripts/build.js

Binary found at /Users/orcunodabas/git/gatsby-starter/node_modules/node-sass/vendor/darwin-x64-83/binding.node
Testing binary
Binary is fine
npm WARN acorn-import-assertions@1.7.6 requires a peer of acorn@^8 but none is installed. You must install peer dependencies yourself.
npm WARN eslint-config-react-app@6.0.0 requires a peer of babel-eslint@^10.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN ts-node@9.1.1 requires a peer of typescript@>=2.7 but none is installed. You must install peer dependencies yourself.
npm WARN tsutils@3.21.0 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.
npm WARN gatsby-plugin-sass@4.12.0 requires a peer of sass@^1.30.0 but none is installed. You must install peer dependencies yourself.

+ node-sass@6.0.1
+ gatsby-plugin-sass@4.12.0
added 150 packages from 124 contributors and audited 1866 packages in 198.372s

217 packages are looking for funding
  run `npm fund` for details

found 8 vulnerabilities (7 moderate, 1 high)
  run `npm audit fix` to fix them, or `npm audit` for details
  ```

And once that's done, all we need to do is configure our gatsby site to actually use that plugin. It's not enough to just install the plugin, it needs to be configured. Now that's done via a file which currently does not exist in our project. But we can go ahead and create it.

It needs to leave in root of our project and it needs to be called gatsby-config.js. One of the core things we can to do here is configure the plugins we wanna use and that's exactly what we gonna end up doing.

This config file just needs to export an object but it is important to note, that this is a NodeJS file so we need to use module.exports and the main properties we are going to use is plugins and inside we can configure all of the plugins we wanna use. So the only plugin we are going to use is gatsby-plugin-sass. Now we ready to use scss or sass in our project.

So we start our develop server with command npm run develop.

And once it's up it's gonna use this plugin. Which means we can now create import scss or sass files.

What I'm gonna to is to rename index.css into index.scss. Than what I'm gonna do is import that file instead of import index.css

We now know how to add basic styles into our gatsby project

### 📃 Lesson 6: Styling Gatsby with CSS Modules ###

The focus will be on CSS modules. It's the preffered to style Gatsby sites because CSS modules are supported by default in all Gatsby Projects and as it's covered extensively in Gatsby documentation.

First of all we gonna focus on our header component. To add style we create a new style sheet header.scss and save into components folder. We should avoid using generic classname. The solution is using complex class names. The Solution we're gonna use is CSS modules.

CSS modules makes all of the class selectors in the module style sheet locally scoped, which means that we have to manually import them and use them.

### 📃 Lesson 7: Gatsby Data with GraphQL ###

We gonna turn our attention towards getting dynamic data into our gatsby site using gatsby's GraphQL API.

Everything shown in the browser is something that's only showing up because it's typed directy inside of the jsx for a react component: all of the nav items, the site titel, every bit of text showing on the screen. Now obviously that's fine as we are getting starting but as we do wanna create more complex dynamic sites, this approach is no longer going to scale.

As an example: Let's say we were gonna introduce the blog to our gatsby site without using anything new with GraphQL API.
Creating a blog post will require you to add a new page to the pages directory for every single post and you will end up with a lot of duplicate code and you will end up writing you blog posts right inside of the jsx for the component which is never ideal that's not an easy way to get your thoughts down on paper and organized when you have to manually maintain the html structure along the way. 

The other downside is you also have to update the blog page so your posts showed up here. You have to manually copy titles all over to this page to create a list all of your posts. 

Instead we're going to focus getting data via the GraphQL API that Gatsby provides. The best way to visualize is actually on the homepage of the Gatsby site that's over at gatsbyjs.org.

![How Gatsby Works](https://drive.google.com/uc?export=view&id=18wCFRtR7YhCL_c29t5lDM5_tPiBHEsE4)

It's a pretty good visualization for what's happening here. Everything we were working so far sits below right BUILD block. 

![How Gatsby Works - Build Block](https://drive.google.com/uc?export=view&id=1NQnWlaDl8y-k2v2nPBIdhGalwmQDdJJG)

So yes we are using gatsby and we are working with HTML, CSS and React. And we're also getting a version of our site up and running. We're not deploying it to production. We're running it in development but it's the same idea and we'll get to the deploy stage a little bit later.


![How Gatsby Works - Datasources Block](https://drive.google.com/uc?export=view&id=1jWDfGP7XlgHGq-igxbnsjWqHUSnOYEaq)

The only thing we haven't touched on is what's up above the DATASOURCES for your gatsby site. So where does your data come from when it's not typed directly inside of a react component? It could come from a CMS like Contentful or Wordpress. It could come from files on the file system in the form of markdown, blog posts. It could come from any 3rd party datasouce such as a custom API you've created. So this is what makes Gatsby really powerful. We can pull in all of these data using gatsby's GraphQL API allowing us to create what is still a static site but that static site get generated with dynamic data from 3rd party data sources. Now we will progress some more complex data sources like CMSs and markdown files but we're gonna start with one of the easiest build-in ways we can set up dynamic data in our gatsby sites. And that is via what known as site meta data -it's nothing more than an object on there. We can put key/value pairs for whatever we would like. As an example site title. Maybe the twitter profile name. The author of the site anything like that that we wanna be able to easily adjust across the entire site. 

Now to get that done, only need to do is going to visual studio code and make a change to that gatsby config file gatsby-config.js, we've created. So for the moment I'm gonna close all the editors. And we're gonna open up just the gatsby-config.js file. And we're gonna add another property on to this object just along site of plugins and in this case I'll call this and the name is here important. It's need to be exact, otherwise gatsby is not gonna be able to find it. Let's get startet by setting up a **title** property for the site title.

I'm gonna call mine something like Full-Stack Hub perfect. You can choose whatever title you would like for your own site. Another property **author** which I can use throughout site and right here the value here is just my name. So there we go we have two pieces of data and we'll add more on to site metadata, for now though let's figure out how we can actually query this using the GraphQL API that Gatsby provides. Once we've pulled these values into our components, we'll focus on adding more and more data. Now let's actually fetch this data using gatsby's GraphQL API. And to start we're gonna head over to the browser open a new tab we're gonna pull up URL, that's only available when our site is running on development mode:

Right here that is localhost:8000/___graphql

![How Gatsby Works - GraphQL API](https://drive.google.com/uc?export=view&id=11vXiFZRWZeRqPAe-VwDVyQFh9oK7t4El)

This is gonna pull up a tool called GraphiQL which is an inbrowser IDE for exploring a GraphQL API so if you've ever worked with REST API before maybe you've used tools Postman or Insomnia this is the same idea just for a GraphQL.

So we 
1. type in here our query in the left handside 
2. we click play button
3. it runs the query
4. and we get our data over here on the right handside

so we can use this to mess around all of the data we have access to. Figuring out exactly what we need and where it lives. Once we have our query, we're getting back the data we want, we can move that query into a react component to actually set things up in the gatsby site.

For now we're gonna start by using GraphiQL to mess around with the basics GraphQL, once we know how to fetch the title and the author we'll actually bring back into a react component to wire that data up dynamically. If you haven't worked with GraphQL APIs before, one of the great things about than is that their self documenting GraphQL uses an explicit schema and the tools like GraphiQL can show you that schema letting you know exactly what data you have access to and how you can get it.

![How Gatsby Works - GraphQL User Interface](https://drive.google.com/uc?export=view&id=1OSGzbflmdDcV_iyxKwQ6qnvsKrpeaKic)

So for us let's open this Doc's Panel on the right handside. Now in GraphQL there are three main operations we can perform:
1. Queries
2. Mutations
3. Subscriptions

When it comes to GraphQL inside of Gatsby, we just use queries to fetch data from external sources.

So right here let's go ahead and click on the Query. Now we can see a list of all queries we have access to. And this list is going to change through our gatsby-starter journey. Later on there will be queries for fetching mark down pages or fetching content from a CMS. 

For now the one query we're gonna focus on is near the bottom of the list and it's just called site. 

So I'm gonna click on **site**. So I'm gonna click on site. We can see a few different things about the site query. I can see the arguments we can provide, we're not gonna provide any. 

And I can view the Type Definition, which is what we want. So when we grab site, what we do get access to. If I click that we gonna access to all of that fields

![How Gatsby Works - Site fields](https://drive.google.com/uc?export=view&id=1402r0tmDKbh4qt1_cPUM9OlBHow-1nC3)

I have a quite a few different fields. The one that we're interested in is called **siteMetadata**.

![How Gatsby Works - Type of siteMetadata](https://drive.google.com/uc?export=view&id=193Kb0T2hEdR2HZCUe9lOTPMHjPfBlqRL)

Now if I click on siteMetadata. I can see that is of the following type. I click on that and I see what field I have access to, **title** and **author**.

![How Gatsby Works - fields of siteMetadata](https://drive.google.com/uc?export=view&id=1SUtEXdMFJ0QUHqHIHUuqJ5Si2Z0NFNSu)

There are two things we define ove in siteMetadata over here (in gatsby-config.js).

So let's go ahead an actually run a query to fetch this data

Step 1: remove comments on in the central left column, we can see the query
Step 2: Here the query
Step 3: When I hit the Play button above the query, I get the result of my query back   on the central right column, with a JSON object containing the same structure of the query.

![How Gatsby Works - Run GraphQL Query](https://drive.google.com/uc?export=view&id=1b-6GMpg4ZNGnfxhVjDUqRHrwF3qnnDzs)

Let's go ahead and run this exact same query from a react component so we can fetch dynamic data into our site. We're gonna focus on grabing the site title like we're doing here. Now we're actually going to populate it as the value that shows up in the header up above. Now for us that means we need to make a change to the header component (header.js). This data right here (with author name) is gonna end up becoming dynamic and to get started, we have to grab to new things from the Gatsby library alongside of link. The first thing we're going to grab is called **graphql** and the second thing we're going to grab is called **useStaticQuery**. Using these two things we'll be able to perform a GraphQL query, getting access to data, then we'll be able to inject right in the JSX down below. So after we have finished, it looks like that below left side header component before changes done and right side after changes are done:

![How Gatsby Works - Add GraphQL Query to header component](https://drive.google.com/uc?export=view&id=1ySXePbyo1J7KsQFsZGFuMazx6z8zr5ch)

we create a variable to store the **data** we are fetching from GraphQL API. Then we're going to call **useStaticQuery** function. This is going to allow us to query our GraphQL API. Now we're going to call it as a function *useStaticQuery()* and inside of there we're going to provide **Tagged Template Literal**. So right here we're using a *Template String* but just before the template string we're using *graphql* which is a function:

![How Gatsby Works - template literals and function](https://drive.google.com/uc?export=view&id=1gMgL0VYtrRFW9aEvlqWKM7D1grRG5CD1)

So this is a syntax *``* called **Tagged Template Literal**. Essentially it allows this string to be processed by that function and in this case it's going to convert our String GraphQL Query over to something that can actually be used. A complex abstract state three with all sorts of object properties and stuff we just don't worry about. So inside it we type exactly the same query what we were typing in GraphiQL

![How Gatsby Works - GraphQL query](https://drive.google.com/uc?export=view&id=1gq9vEO9oQpWBqdgUsje9i9-mm0-jYRiU)

So it's a query in there we're using the site query, I'm asking for the siteMetadata and on that I want the *title*.
Now we're done. We have access to that data and we can go ahead and use it in the link down below or wherever else we might wanna use that data.

So for us I'm gonna remove Orçun Odabas in h1 in my header and we're going to setup curly braces {} so we can inject the value. The value is on data.site.siteMetadata.title. And when we save our program, we can actually pull our site and what do we see? I see *Gatsby Bootcamp* showing up in the header, which is fantastic. We are able to create a react component, that fetch data from Gatsby's GraphQL API to come up with something that's dynamic.

Now what's cool is, as that data changes, the site will also change. So over here I'm gonna alter the title and save the changes, head over to the browser and I can see that change is already in place. So this is one way we can access some dynamic data in our Gatsby sites using siteMetadata. This is great for key/value pairs like title, author, email address, social media URLs and that sort of thing.

So now we have two dynamic pieces of data in the site and we figured out how to use Gatsby's GraphQL API which is a great step in the right direction.

### 📃 Lesson 8: GraphQL Playground ###

Graphiql is the default IDE for working with Graphql API in Gatsby. But Gatsby also support, newer and more featured IDE known as Graphql Playground. Graphql Playground provides us with additional features like a nice fully customizable UI interface, multiple tab options

To swap out GraphQL for GraphQL Playground:
1.  Create your environment specific .env file and set an environment variable on our machines
  
      We gonna set this in a cross OS compatible way. We gonna focus on `package.json`. Now this could be as easy as setting up THE environment variable right here in the script:
      ```
      "version": "0.1.0",
        "license": "0BSD",
        "scripts": {
          "build": "gatsby build",
          **LINE WHERE YOU CAN ASSIGN VALUE FOR ENV VARIABLE**
          "develop": "gatsby develop",
          "format": "prettier --write \"**/*.{js,jsx,ts,tsx,json,md}\"",
          "start": "npm run develop",
          "serve": "gatsby serve",
      ```
The prblm with that is it's not cross OS compatibel. So instead we gonna create an environment variable in a separate file which will load in which is a very common approach.
So right here in the root of the project we'll place the file `.env.development`. In here we're going to define a key value pair as environment variable: 

```    
GATSBY_GRAPHQL_IDE=playground
``` 
      
![GraphQL Playground is a GraphQL IDE - Create .env File](https://drive.google.com/uc?export=view&id=1w5vmHpM21tzB_yy48W1UeZ3B-XEEKtx8)
  
  
That's going to enable us GraphQL Support, giving us this new tool in the browser

2. Get package *env-cmd* from npm by running command to load `.env.development` file in when we use development server. For this we're going to use very popular *env-cmd* package. In the terminal we type npm install command with *save-dev* flag since this is a dependency we use in development and from here we're gonna go ahead and set up *env-cmd*
      ```
        npm install --save-dev env-cmd
      ```
      ![GraphQL Playground is a GraphQL IDE - env-cmd package installation](https://drive.google.com/uc?export=view&id=1XQQlyVhEq7JTG_9-wlFvXKHs9xFZceox)
      
  3.  Update package.json
        Update the script portion of our *package.json* and include the following
    ```
    "develop": "env-cmd -f .env.development gatsby develop"
    ````
![GraphQL Playground is a GraphQL IDE - Update package.json](https://drive.google.com/uc?export=view&id=12fNC_3s4cI-v6rDnxuxwv0QzsQkyfGJD)


Now it's going to load these environment variables in then run the gatsby server
  
So let's start up our server. We're going to type 
  ````
  npm run develop
  ````
Once it's up and running
  ````
  waverider52@MacBook-Pro-von-Orcun gatsby-starter % npm run develop

> gatsby-starter-hello-world@0.1.0 develop
> env-cmd -f .env.development gatsby develop

success open and validate gatsby-configs, load plugins - 0.261s
success onPreInit - 0.064s
info One or more of your plugins have changed since the last time you ran Gatsby. As
a precaution, we're deleting your site's cache to ensure there's no stale data.
success initialize cache - 0.076s
success copy gatsby files - 0.152s 
success Compiling Gatsby Functions - 0.531s
success onPreBootstrap - 0.560s
success createSchemaCustomization - 0.002s
success Checking for changed pages - 0.002s
success source and transform nodes - 0.062s
success building schema - 0.420s
success createPages - 0.001s
success createPagesStatefully - 0.124s
info Total nodes: 26, SitePage nodes: 5 (use --verbose for breakdown)
success Checking for changed pages - 0.001s
success update schema - 0.080s
success write out redirect data - 0.005s
success onPostBootstrap - 0.002s
info bootstrap finished - 5.631s
success onPreExtractQueries - 0.001s
success extract queries from components - 0.278s
success write out requires - 0.007s
success run static queries - 0.025s - 2/2 79.19/s
success run page queries - 0.036s - 2/2 55.55/s
warn Browserslist: caniuse-lite is outdated. Please run:
  npx browserslist@latest --update-db
  Why you should do it regularly: https://github.com/browserslist/browserslist#browsers-data-updating
success Caching HTML renderer compilation - 0.001s
⠀
You can now view gatsby-starter-hello-world in the browser.
⠀
  http://localhost:8000/
⠀
View the GraphQL Playground, an in-browser IDE, to explore your site's data and schema
⠀
  http://localhost:8000/___graphql
⠀
Note that the development build is not optimized.
To create a production build, use gatsby build
⠀
success Building development bundle - 9.138s
success Writing page-data.json files to public directory - 0.157s - 2/3 19.05/s
  ````

All we're going to do is refresh the graphiQL page with link *http://localhost:8000/___graphql* from output of run command and we should see something quite different.
  
It's loading entirely new interface. Here we have GraphQL Playground:

![GraphQL Playground is a GraphQL IDE - GraphQL Playground User Interface](https://drive.google.com/uc?export=view&id=1Bk9F-_dKSChc546LkYeoXH_ibbMtq2pr)

Accessing the documentation by working with deeply nested types in GraphQL API was a pain, if you need to navigate back and forth inside the single column of GraphiQL’s UI. The Playground lets you navigate your API documentation much comfortable by using multiple columns, and supporting keyboard-based navigation:

![GraphQL Playground is a GraphQL IDE - GraphQL Playground API Docs Navigation](https://drive.google.com/uc?export=view&id=1UQlRrohW-NvdJcgUTqUIt349SAgSBC1M)