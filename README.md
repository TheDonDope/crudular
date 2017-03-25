![Crudular](crudular.png)

# Crudular

[![Angular Style Guide](https://mgechev.github.io/angular2-style-guide/images/badge.svg)](https://angular.io/styleguide)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

It uses the following npm packages (version numbers current as of [2017-03-04](https://xkcd.com/1179/)):

- [Bootstrap 4.0.0-alpha.6](https://www.npmjs.com/package/bootstrap): Used for the SCSS styling of the application
- [Font-Awesome 4.7.0](https://www.npmjs.com/package/font-awesome): Used as the glyphicon font of the application
- [Moment 2.17.0](https://www.npmjs.com/package/moment): Used for date/time manipulation *(Note: The npm package already includes the types for moment so you do not need to add it with `npm install @types/moment --save-dev`)*

It follows the [Official Angular Styleguide](https://angular.io/styleguide).

## Features

The application provides the following features:

- Provide a login view to authenticate with a remote api
- Manage a JWT authenticity token to use for calls of protected remote api methods
- Provide a home view showing the user information about his JWT token
- Provide a dynamic authentication-based navigation
- Provides full Docker support for both development and production environment

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Dockerization

The application provides full Docker support. You can use it for both development as well as production builds and deployments.

### How to build and start the dockerized version of the application 

The Dockerization infrastructure is described in the `docker-compose.yml` (respectively `docker-compose.production.yml`.
The application consists of two containers:
- `crudular-angular` - In development mode, this container serves the angular app. In production mode it builds the angular app, with the build artifacts being served by the Nginx container
- `crudular-nginx` - This container is used only production mode. It serves the built angular app with Nginx.

### Development build and deployment

Run the following:

```bash
$ docker-compose build
$ docker-compose up -d
```

Now open your browser at [http://localhost:4200](http://localhost:4200)

### Production build and deployment

Run the following:

```bash
$ docker-compose -f docker-compose.production.yml build
$ docker-compose -f docker-compose.production.yml up crudular-angular   # Wait until this container has finished building, as the nginx container is dependent on the production build artifacts
$ docker-compose -f docker-compose.production.yml up -d crudular-nginx  # Start the nginx container in detached mode
```

Now open your browser at [http://localhost:8080](http://localhost:4200)

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Commit Message Format

This project follows the [angular commit-message convention](https://github.com/conventional-changelog/conventional-changelog-angular/blob/master/convention.md).

## Versioning

This project follows the [Semantic Versioning 2.0.0](http://semver.org/) specification.

## Bumping Version Number

If you follow semantic versioning and use the [angular commit-message convention](https://github.com/conventional-changelog/conventional-changelog-angular/blob/master/convention.md), you can use the following npm task to get the appropiate next version number

```bash
$ npm run bump-version
```

## Releasing

You can use the following workflow to ease your release process:

*Note: The following scripts use the npm-packages [conventional-github-releaser](https://github.com/conventional-changelog/conventional-github-releaser), [conventional-recommended-bump](https://github.com/conventional-changelog/conventional-recommended-bump) and [standard-changelog](https://github.com/conventional-changelog/standard-changelog). Make sure you install them first by running: `npm install -g conventional-github-releaser conventional-recommended-bump standard-changelog`. Furthermore, [gitflow](https://github.com/nvie/gitflow) is partially used for the following commands*

0. Given your project was initialized with `$ git flow init` and your current branch being `develop` is ready to be released, do the following
1. Get your next-version number:`$ npm run bump-version`
2. Start your next-release: `$ git flow release start <next-version-from-step-1>`
3. Bump the version number in your `package.json` with the version from step 1
4. Generate your `CHANGELOG.md`: `$ npm run changelog`
5. Make your release commit: `$ git add --all && git commit -m 'chore(release): <next-version-from-step-1>'`
6. Finish your release: `$ git flow release finish <next-version-from-step-1>`
7. Push your branches and tags to GitHub: `$ git push origin master && git push origin develop && git push origin --tags`
8. Draft and publish your GitHub Relase: `$ npm run github-release`

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
