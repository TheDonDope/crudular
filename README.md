# Crudular

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.17.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

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

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
