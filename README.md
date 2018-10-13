# Amarnath Portfolio
I made this Portfolio to showcase my UI skills. 

## Technologies
- HTML5
- Angular 2
- Typescript
- CSS3, Flexbox, BEM naming convention

## Step to create and deploy application on Github (might be helpful for others)
- Create Angular application locally, run it (ng serve) and open `http://localhost:4200/`. If all is well then you will see your application up and running.
- Open `Angular.json` see `outputPath` under `build/options`. Make sure you don't have any sub-path under `dist/`, that is the output path should be `"outputPath": "dist/"`.
- Install `angular-cli-ghpages` (`npm install -g angular-cli-ghpages`) which is used to deploy Angular pages on Github.
- Once installed run build with prod flag and href(`<Github_username>.github.io/<repository-name>`). So in my case it will be  `ng build --prod --base-href https://amarnath510.github.io/portfolio/` (**NOTE:** Don't forget the last slash after repo)
- Then run, `ngh` to publish the pages to Github. It will show successful message if everything is fine.
- Now open, the url (in my case it is `https://amarnath510.github.io/portfolio/`) to see your beautiful application up and running.

## Build Reference
![Build Reference](https://user-images.githubusercontent.com/4599623/46904836-345d0700-cf08-11e8-8072-551a587be1e1.png)

## Application
![Amarnath-About-Screenshot](https://user-images.githubusercontent.com/4599623/46904880-13e17c80-cf09-11e8-87a2-00c2a94cf068.png)
