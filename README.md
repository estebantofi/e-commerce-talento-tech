# E-Commerce Talento Tech

A simple e-commerce web application built with **React**, **Vite**, and **Bootstrap**. This project demonstrates a basic online store layout, product listing, shopping cart UI, authentication, and navigation using React Router.

## Features

- Product listing fetched from [Fake Store API](https://fakestoreapi.com/)
- Responsive UI with [React Bootstrap](https://react-bootstrap.github.io/)
- Shopping cart sidebar (OffCanvas)
- Add/remove products to cart
- Navigation bar and footer
- Routing with [React Router](https://reactrouter.com/)
- Protected routes for checkout (Buy)
- Simple authentication flow
- Ready for deployment to GitHub Pages

## Live Demo

[View the deployed app here](https://estebantofi.github.io/e-commerce-talento-tech/)

## Project Structure

```
src/
  App.jsx                      # Main app with routes
  App.css                      # App-wide styles
  index.css                    # Global styles
  main.jsx                     # App entry point
  components/
    Card.jsx                   # Product card component
    Footer.jsx                 # Footer component
    Layout.jsx                 # Layout with header/footer
    NavBar.jsx                 # Navigation bar
    OffCanvas.jsx              # Shopping cart sidebar
    ProtectedRoute.jsx         # Route protection for auth
  context/
    auth/
      AuthContext.jsx          # Auth context and hook
      AuthProvider.jsx         # Auth provider
    shoppingCart/
      ShoppingCartContext.jsx  # Cart context and hook
      ShoppingCartProvider.jsx # Cart provider
  feature/
    Buy/Buy.jsx                # Checkout page
    login/Login.jsx            # Login page
    product/Product.jsx        # Product details page
    products/Products.jsx      # Product listing page
    superdeals/SuperDeals.jsx  # Super deals page
  hooks/                       # (Reserved for custom hooks)
  utils/
    ProductsControl.js         # Cart product add/remove logic
  assets/                      # Static assets
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```sh
npm install
```

### Development

```sh
npm run dev
```

Open [http://localhost:5173/e-commerce-talento-tech](http://localhost:5173/e-commerce-talento-tech) in your browser.

### Linting

```sh
npm run lint
```

### Build

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

### Deploy to GitHub Pages

```sh
npm run deploy
```

## Configuration

- The app uses a custom `basename` for routing and sets the Vite `base` path for GitHub Pages deployment.
- Update the `homepage` field in [package.json](package.json) if you change the repo name.

## License

MIT
