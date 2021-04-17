"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    projectRoot: "./src",
    projectName: "seed-blog",
    outDir: './dist/static',
    routes: {
        '/blog/:title': {
            type: 'contentFolder',
            title: {
                folder: "./blog"
            }
        },
    },
    puppeteerLaunchOptions: {
        args: [
            "--disable-gpu",
            "--renderer",
            "--no-sandbox",
            "--no-service-autorun",
            "--no-experiments",
            "--no-default-browser-check",
            "--disable-dev-shm-usage",
            "--disable-setuid-sandbox",
            "--no-first-run",
            "--no-zygote",
            "--single-process",
            "--disable-extensions"
        ]
    }
};
