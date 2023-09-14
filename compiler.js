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
