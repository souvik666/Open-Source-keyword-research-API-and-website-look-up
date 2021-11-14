var expressmarkdown = require("express-markdown-reloaded");

//optional
var highlightjs = require("highlight.js");

// optional
// set view engine
app.set("views", path.join(__dirname, "views"));
// set .ejs as the default extension
app.set("view engine", "ejs");

// !!!IMPORTANT: place this before static or similar middleware
app.use(
  "/docs",
  expressmarkdown({
    // directory where markdown files are stored
    // required
    directory: path.join(__dirname, "/docs"),

    // case sensitive/ camel case routing, defaults to lower case
    // optional
    // app.get('case sensitive routing') -> use express settings
    caseSensitive: app.get("case sensitive routing"),

    view: "markdown",

   
    includerawtext: true,

    
    loadepiceditor: true,

   
    marked: {
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false,
      highlight: function (code) {
        return highlightjs.highlightAuto(code).value;
      },
    },

    context: {
      stylesheeturl:
        "http://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.0/styles/googlecode.min.css",
      styleraw: "",
      title: "Markdown",
      //script: 'http://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.0/highlight.min.js',
      jsraw: "",
      jsscripturl: "",
    },
  })
);

// now the static middleware
app.use("/docs", express.static(path.join(__dirname, "docs"), { maxAge: 0 }));

// optional
// and maybe we want to list the files
app.use(
  "/docs",
  express.directory(path.join(__dirname, "docs"), { icons: true })
);
