const fs = require("fs");
const md = require('markdown-it')({
    html: true,
    linkify: true,
    typographer: true
});
const slugify = require("slugify");
const minify = require('html-minifier').minify;

const hljs = require('highlight.js');
const Entities = require('html-entities').AllHtmlEntities;

const entities = new Entities();

const courses = require("courses-config.json");

const includes = "./includes/";
const output = "./output/";
const mainTitle = "nya-dbwebb.se";


function createHeader(next) {
    fs.readFile(`${includes}header.html`, 'utf8', (err, data) => {
        if (err) {
            console.error(err.message);
        }

        fs.readFile(`${output}style.min.css`, 'utf8', (err, cssData) => {
            if (err) {
                console.error(err.message);
            }

            next(data.replace("{{inline-style}}", cssData));
        });
    });
}

function createIndex(header) {
    fs.readFile(`${includes}index.html`, 'utf8', (err, data) => {
        if (err) {
            console.error(err.message);
        }

        let outputContent = header.replace("{{title}}", mainTitle) + data;

        compiler.addFooterAndWriteToFile(outputContent, "index.html");
    });
}
