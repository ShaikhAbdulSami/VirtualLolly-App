const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/ShaikhAbdulSami/Documents/mywork/virtualLolly-app/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/ShaikhAbdulSami/Documents/mywork/virtualLolly-app/src/pages/404.tsx"))),
  "component---src-pages-create-new-tsx": hot(preferDefault(require("/Users/ShaikhAbdulSami/Documents/mywork/virtualLolly-app/src/pages/createNew.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/ShaikhAbdulSami/Documents/mywork/virtualLolly-app/src/pages/index.tsx")))
}

