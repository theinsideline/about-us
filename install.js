//LOAD "ABOUT US" PAGE FROM GIT REPOSITORY
const AboutUsInstall = {
    createScriptElement: url => {
        const scriptElement = document.createElement('script')
        scriptElement.defer = true
        scriptElement.src = url

        return scriptElement
    },
    createStyleElement: url => {
        const styleElement = document.createElement('link')
        styleElement.rel = 'stylesheet'
        styleElement.href = url

        return styleElement
    },
    load: () => {
        const appElement = AboutUsInstall.createScriptElement('https://theinsideline.github.io/about-us/js/index.js')
        const chunkElement = AboutUsInstall.createScriptElement('https://theinsideline.github.io/about-us/js/chunk-vendors.js')
        const styleElement = AboutUsInstall.createStyleElement('https://theinsideline.github.io/about-us/css/index.css')

        document.head.append(appElement)
        document.head.append(chunkElement)
        document.head.append(styleElement)
    },
}

document.addEventListener('DOMContentLoaded', AboutUsInstall.load)
