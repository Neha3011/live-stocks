# Live Stocks
This is a single page application in react 16, which shows live stock data in a tabular form.
Everything is thoroughly tested by writing unit tests using JEST framework. To maintain the code quality, eslint is used.
Github pages is integrated for automated deployment. You can see the demo at[Demo Link](https://neha3011.github.io/live-stocks/)
### Follow steps to run the project

```sh
1) git clone https://github.com/Neha3011/live-stocks.git
2) npm install
3) npm start (to develop locally)
```

### To run the unit test with coverage, execute the following commands

```sh
1) npm run test
2) npm run coverage
```

![Alt text](/images/covearge.png?raw=true "Code Coverage")

### To run the linter (airbnb), execute the following command

```sh
1) npm run lint
```

### steps to deploy on github pages

```sh
1) git checkout master
2) git up
3) rm -rf dist
4) npm run build:prod
5) git subtree push --prefix dist origin gh-pages
```