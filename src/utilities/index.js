import Navigo from "navigo";
const router = new Navigo("/", { linksSelector: "a", hash: true });


const render = (content, taget) => {
    taget.innerHTML = content();
};

export { render, router };