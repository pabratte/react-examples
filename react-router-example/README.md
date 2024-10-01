# React Router example

To test run:

`npm install`
`npm run start`


## Steps to use react-router

1. Install react-router-dom

`npm i -D react-router-dom`

2. This is *NOT MANDATORY* but for better organization you can create a `pages` folder under the `src` folder where you can put the pages.

3. In your app *wrap* everything that will use React Router features (Link, Routes, etc) inside a 
`<BrowserRouter>` tag. There are also other kind of routers (???).

```jsx
function App() {
  return (
    <div>
      <BrowserRouter>
        <h1>React Router example</h1>
        <NavBar />
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
```

4. Use the <Routes> tag to specify routes and components. Everytime the route in your app changes, React Router will render the specified component where the <Routes> tag is. You can also use params (???).

5. To create links that use React Router's routing instead of changing the page, use the <Link> tag like this:

```jsx
<Link to="/page1">Go to Page1</Link>
```