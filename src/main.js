const app = document.querySelector("#app");
import AboutPage from './pages/About';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/Products';
import { render, router } from './utilities';

router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/products", () => render(ProductsPage, app));

router.resolve();