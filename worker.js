export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/" || url.pathname === "") {
      return fetch("https://raw.githubusercontent.com/qvkare/qvkare.github.io/main/index.html");
    }
    
    return fetch(`https://raw.githubusercontent.com/qvkare/qvkare.github.io/main${url.pathname}`);
  }
};
