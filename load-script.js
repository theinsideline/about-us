//LOAD "ABOUT US" PAGE FROM GIT REPOSITORY
const createScriptElement = (url) => {
  const scriptElement = document.createElement("script");
  scriptElement.defer = true;
  scriptElement.src = url;

  return scriptElement;
};

const createStyleElement = (url) => {
  const styleElement = document.createElement("link");
  styleElement.rel = "stylesheet";
  styleElement.href = url;

  return styleElement;
};

const load = () => {
  const appElement = createScriptElement("https://theinsideline.github.io/about-us/js/index.js");
  const chunkElement = createScriptElement("https://theinsideline.github.io/about-us/js/chunk-vendors.js");
  const styleElement = createStyleElement("https://theinsideline.github.io/about-us/css/index.css");

  document.head.append(appElement);
  document.head.append(chunkElement);
  document.head.append(styleElement);
};

document.addEventListener("DOMContentLoaded", load);
