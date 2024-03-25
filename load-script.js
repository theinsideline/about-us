//LOAD ABOUT US PAGE FROM GIT REPOSITORY
const load = () => {
  const appElement = document.createElement("script");
  appElement.defer = true;
  appElement.src = "https://theinsideline.github.io/about-us/dist/js/app.js";

  const chunkElement = document.createElement("script");
  chunkElement.defer = true;
  chunkElement.src =
    "https://theinsideline.github.io/about-us/dist/js/chunk-vendors.js";

  const styleElement = document.createElement("link");
  styleElement.rel = "stylesheet";
  styleElement.href =
    "https://theinsideline.github.io/about-us/dist/css/app.css";

  document.head.append(appElement);
  document.head.append(chunkElement);
  document.head.append(styleElement);
};

document.addEventListener("DOMContentLoaded", load);
