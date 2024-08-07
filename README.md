# Personal Website [![Netlify Status](https://api.netlify.com/api/v1/badges/ca8f89c9-a424-4519-8a88-847076dbb615/deploy-status)](https://shrayswarup.com)



This is the code for my personal website and portfolio. It is a React project bootstrapped using `create-react-app` and deployed using Netlify.

<img width="1399" alt="SitePreview" src="https://github.com/shrays/Personal-Website/assets/14226108/f9179cf6-fa29-4eba-88ad-467ceafb87eb">

## Getting Started

Development for the website requires [Node v18](https://nodejs.org/download/release/latest-v18.x/) as well as `npm`, the Node Package Manager. Please ensure you install these prerequisites before continuing.

Clone this repository and `cd` into the directory:

```sh
git clone https://github.com/shrays/Personal-Website.git shrays-personal-site
cd shrays-personal-site
```

If you're using a NodeJS version manager like `nvm`, be sure to select the latest version of Node 18 at this time.

Run an `npm` install command to get the required dependencies.

```sh
npm i
```

If no errors occur, you're ready to move on with the next steps.

## Develop

To make changes to the website, the easiest way to get started is to run the development server made available using `react-scripts`. This can be first setup using the steps outline in the previous section. Once that's done, run the following command to start a development server:

```sh
npm run dev
```

This will host a development server on port 3000 and any changes you make to the project will automatically be reflected on the development website, `localhost:3000`, when a file is saved.

## Build

Once you're ready to make a production-ready build, you can make use of `react-scripts` to generate a static website.

```sh
npm run build
```

This will output the static website to the `build` folder where you can use a tool like `http-server` to host from the folder. You can also integrate this into your deployment setup of your choice, like Apache or Nginx. For this project, we make use of GitHub Pages using the `gh-pages` CLI tool which can be run using `npm run deploy` (remember to do this _after_ running `npm run build`).

## Contribute

Thank you for taking an interest in improving the website! To get started, please review the [GitHub](https://github.com/shrays/Personal-Website) for this project.

You can open an issue in the issues tab if you have a bug or feature request you would like to report. Please remember to be clear and concise with your request and include all relevant details where necessary, including steps to reproduce in the case of a bug.

If you have a change you would like to merge into the main project, begin by creating a fork of the project that you can contribute to yourself. Once you've made the changes, you can open a pull request through GitHub using the pull request tab from this project's GitHub link. Please reference any relevant issues the changes address and be sure that your code follows the style enforced in the project (run `npm run format` before commiting). Once you've submitted a pull request, I will review the changes and ask questions, request changes, and eventually decide to accept or decline the changes. Please note that by contributing, you are also releasing the rights to code that you create for the project if it is implemented in the main repository.

## Helpful Links

- [React](https://react.dev/)
- [`create-react-app`](https://create-react-app.dev/)

## Warranty

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
