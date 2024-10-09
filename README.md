# coomer's clone simulator

this is a very silly site made for [scienceteamtober](https://tumblr.com/scienceteamtober) on tumblr. to celebrate the timeless tale of 'half life vr but the ai is self aware'. day 7's theme is "clones".

[![ko-fi badge](https://img.shields.io/badge/support%20my%20sillies-434B57?style=for-the-badge&logo=ko-fi&logoColor=fff)](https://ko-fi.com/wormboy3)
![signature](https://img.shields.io/badge/crane%20did%20this-926cd4?style=for-the-badge)


---

## developer's notes

this is a static site. to develop, run `npm run compile` and host a local static server with the `/site` directory as root.

this project now uses webpack to compile to one single javascript file. to compile/build/deploy:

- ensure you've used `npm install` to install all modules noted in `/package.json`
- use `npm run compile` to compile to javascript
    - this will create `main-bundle.js` in the `/site` folder, for ease of development.
- use `npm run build` to build project to `/build` folder.
- `npm run deploy` is pre-programmed to deploy via wrangler to cloudflare pages. customize this as you need.
