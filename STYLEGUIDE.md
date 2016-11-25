# Angular Styleguide conformity
![Angular Styleguide](https://mgechev.github.io/angular2-style-guide/images/badge.svg)

This document tracks the conformity to the different rules of the [Angular Styleguide](https://angular.io/styleguide).

## Table of Contents

1. [1. Single Responsibility](#single-responsibility)
2. [2. Naming](#naming)
3. [Coding Conventions](#coding-conventions)
4. [App Structure](#app-structure)
5. [Components](#components)
6. [Directives](#directives)
7. [Services](#services)
8. [Data Services](#data-services)
9. [Lifecycle Hooks](#lifecycle-hooks)
10. [Appendix](#appendix)

## 1. Single Responsibility

### Rule of One [STYLE 01-01](https://angular.io/styleguide#01-01)

- [X] **Do** define one thing (e.g. service or component) per file.
- [X] **Consider** limiting files to 400 lines of code.

### Small Functions [STYLE 01-02](https://angular.io/styleguide#01-02)

- [X] **Do** define small functions.
- [X] **Consider** limiting to no more than 75 lines.


## 2. Naming

### General Naming Guidelines [STYLE 02-01](https://angular.io/styleguide#02-01)

- [X] **Do** use consistent names for all symbols.
- [X] **Do** follow a pattern that describes the symbol's feature then its type. The recommended pattern is `feature.type.ts`.

### Separate File Names with Dots and Dashes [STYLE 02-02](https://angular.io/styleguide#02-02)

- [X] **Do** use dashes to separate words in the descriptive name.
- [X] **Do** use dots to separate the descriptive name from the type.
- [X] **Do** use consistent type names for all components following a pattern that describes the component's feature then its type. A recommended pattern is `feature.type.ts`.
- [X] **Do** use conventional type names including `.service`, `.component`, `.pipe`, `.module`, `.directive`. Invent additional type names if you must but take care not to create too many.

### Symbols and File Names [STYLE 02-03](https://angular.io/styleguide#02-03)

- [X] **Do** use consistent names for all assets named after what they represent.
- [X] **Do** use upper camel case for class names. Match the name of the symbol to the name of the file.
- [X] **Do** append the symbol name with the conventional suffix for a thing of that type (e.g., `Component`, `Directive`, `Module`, `Pipe`, `Service`).
- [X] **Do** give the filename the conventional suffix for a file of that type (e.g., `.component.ts`, `.directive.ts`, `.module.ts`, `.pipe.ts`, `.service.ts`).

### Service Names [STYLE 02-04](https://angular.io/styleguide#02-04)

- [X] **Do** use consistent names for all services named after their feature.
- [X] **Do** use upper camel case for services.
- [X] **Do** suffix services with `Service` when it is not clear what they are (e.g. when they are nouns).

### Bootstrapping [STYLE 02-05](https://angular.io/styleguide#02-05)

- [X] **Do** put bootstrapping and platform logic for the app in a file named `main.ts`.
- [X] **Do** include error handling in the bootstrapping logic.
- [X] ___Avoid___ putting app logic in the `main.ts`. Instead consider placing it in a component or service.


## 3. Coding Conventions

### Classes [STYLE 03-01](https://angular.io/styleguide#03-01)

- [X] **Do** use upper camel case when naming classes.

### Constants [STYLE 03-02](https://angular.io/styleguide#03-02)

- [X] **Do** declare variables with `const` if their values should not change during the application lifetime.
- [X] **Consider** spelling `const` variables in lower camel case.
- [X] **Do** tolerate *existing* `const` variables that are spelled in `UPPER_SNAKE_CASE`.

### Interfaces [STYLE 03-03](https://angular.io/styleguide#03-03)

- [X] **Do** name an interface using upper camel case.
- [X] **Consider** naming an interface without an `I` prefix.
- [X] **Consider** using a class instead of an interface.

### Properties and Methods [STYLE 03-04](https://angular.io/styleguide#03-04)

- [X] **Do** use lower camel case to name properties and methods.
- [X] ___Avoid___ prefixing private properties and methods with an underscore.

### Import Line Spacing [STYLE 03-06](https://angular.io/styleguide#03-06)

- [X] **Consider** leaving one empty line between third party imports and application imports.
- [X] **Consider** listing import lines alphabetized by the module.
- [X] **Consider** listing destructured imported assets alphabetically.


## 4. App Structure

### LIFT [STYLE 04-01](https://angular.io/styleguide#04-01)

- [X] **Do** structure the app such that you can `L`ocate code quickly, `I`dentify the code at a glance, keep the `F`lattest structure you can, and `T`ry to be DRY.
- [X] **Do** define the structure to follow these four basic guidelines, listed in order of importance.

### Locate [STYLE 04-02](https://angular.io/styleguide#04-02)

- [X] **Do** make locating code intuitive, simple and fast.

### Identify [STYLE 04-03](https://angular.io/styleguide#04-03)

- [X] **Do** name the file such that you instantly know what it contains and represents.
- [X] **Do** be descriptive with file names and keep the contents of the file to exactly one component.
- [X] ___Avoid___ files with multiple components, multiple services, or a mixture.

### Flat [STYLE 04-04](https://angular.io/styleguide#04-04)

- [X] **Do** keep a flat folder structure as long as possible.
- [X] **Consider** creating sub-folders when a folder reaches seven or more files.
- [X] **Consider** configuring the IDE to hide distracting, irrelevant files such as generated `.js` and `.js.map` files.

### T-DRY (Try to be DRY) [STYLE 04-05](https://angular.io/styleguide#04-05)

- [X] **Do** be DRY (Don't Repeat Yourself)
- [X] **Avoid** being so DRY that you sacrifice readability.

### Overall Structural Guidelines [STYLE 04-06](https://angular.io/styleguide#04-06)

- [X] **Do** start small but keep in mind where the app is heading down the road.
- [X] **Do** have a near term view of implementation and a long term vision.
- [X] **Do** put all of the app's code in a folder named `app`.
- [X] **Consider** creating a folder for a component when is has multiple accompanying files (`.ts`, `.html`, `.css` and `.spec`).

### Folders-by-Feature Structure [STYLE 04-07](https://angular.io/styleguide#04-07)

- [X] **Do** create folders named for the feature area they represent.
- [X] **Do** create an Angular module for each feature area.

### App Root Module [STYLE 04-08](https://angular.io/styleguide#04-08)

- [X] **Do** create an Angular module in the app's root folder (e.g., in `/app`).
- [X] **Consider** naming the root module `app.module.ts`.

### Feature Modules [STYLE 04-09](https://angular.io/styleguide#04-09)

- [X] **Do** create an Angular module for all distinct features in an application (e.g. `Heroes` feature).
- [X] **Do** place the feature module in the same named folder as the feature area (.e.g `app/heroes`).
- [X] **Do** name the feature module file reflecting the name of the feature area and folder (e.g. `app/heroes/heroes.module.ts`)
- [X] **Do** name the feature module symbol reflecting the name of the feature area, folder, and file (e.g. `app/heroes/heroes.module.ts` defines `HeroesModule`)

### Shared Feature Module [STYLE 04-10](https://angular.io/styleguide#04-10)

- [X] **Do** create a feature module named `SharedModule` in a `shared` folder (e.g. `app/shared/shared.module.ts` defines `SharedModule`).
- [X] **Do** put common components, directives and pipes that will be used throughout the application by other feature modules in the `SharedModule`, where those assets are expected to share a new instance of themselves (not singletons).
- [X] **Do** import all modules required by the assets in the `SharedModule` (e.g. `CommonModule` and `FormsModule`).
- [X] **Do** declare all components, directives, and pipes in the `SharedModule`.
- [X] **Do** export all symbols from the `SharedModule` that other feature modules need to use.
- [X] ___Avoid___ specifying app-wide singleton providers in a `SharedModule`. Intentional singletons are OK. Take care.

### Core Feature Module [STYLE 04-11](https://angular.io/styleguide#04-11)

- [X] **Do** collect single-use classes and hiding their gory details inside `CoreModule`. A simplified root `AppModule` imports `CoreModule` in its capacity as orchestrator of the application as a whole.
- [X] **Do** create a feature module named `CoreModule` in a `core` folder (e.g. `app/core/core.module.ts` defines `CoreModule`).
- [X] **Do** put a singleton service whose instance wil be shared throughout the application in the `CoreModule` (e.g. `ExceptionService` and `LoggerService`).
- [X] **Do** import all modules required by the assets in the `CoreModule` (e.g. `CommonModule` and `FormsModule`).
- [X] **Do** gather application-wide, single use components in the `CoreModule`. Import it once (in the `AppModule`) when the app starts and never import it anywhere else. (e.g. `NavComponent` and `SpinnerComponent`).
- [X] ___Avoid___ importing the `CoreModule` anywhere except in the `AppModule`.
- [X] **Do** export all symbols that from the `CoreModule` that the `AppModule` will import and make available for other feature modules to use.

### Prevent Reimport of Core Module [STYLE 04-12](https://angular.io/styleguide#04-12)

- [X] **Do** guard against reimporting of `CoreModule` and fail fast by adding guard logic.

### Lazy Loaded Folders [STYLE 04-13](https://angular.io/styleguide#!#04-13)

- [X] **Do** put the contents of lazy loaded features in a *lazy loaded folder*. A typical *lazy loaded folder* contains a *routing component*, its child components, and their related assets and modules.

### Never Directly Import Lazy Loaded Folders [STYLE 04-14](https://angular.io/styleguide#!#04-14)

- [X] ___Avoid___ allowing modules in sibling and parent folders to directly import a module in a *lazy loaded feature*.


## 5. Components

### Component Selector Naming [STYLE 05-02](https://angular.io/styleguide#!#05-02)

- [X] **Do** use *dashed-case* or *kebab-case* for naming the element selectors of components.

### Components as Elements [STYLE 05-03](https://angular.io/styleguide#!#05-03)

- [X] **Do** define components as elements via the selector.

### Extract Template and Styles to Their Own Files [STYLE 05-04](https://angular.io/styleguide#!#05-04)

- [X] **Do** extract templates and styles into a separate file, when more than 3 lines.
- [X] **Do** name the template file `[component-name].component.html`, where `[component-name]` is the component name.
- [X] **Do** name the style file `[component-name].component.css`, where `[component-name]` is the component name.

### Decorate Input and Output Properties Inline [STYLE 05-12](https://angular.io/styleguide#!#05-12)

- [X] **Do** use `@Input` and `@Output` instead of the inputs and outputs properties of the `@Directive` and `@Component` decorators.
- [X] **Do** place the `@Input()` or `@Output()` on the same line as the property they decorate.

### Avoid Renaming Inputs and Outputs [STYLE 05-13](https://angular.io/styleguide#!#05-13)

- [X] ___Avoid___ renaming inputs and outputs, when possible.

### Member Sequence [STYLE 05-14](https://angular.io/styleguide#05-14)

- [X] **Do** place properties up top followed by methods.
- [X] **Do** place private members after public members, alphabetized.

### Put Logic in Services [STYLE 05-15](https://angular.io/styleguide#05-15)

- [X] **Do** limit logic in a component to only that required for the view. All other logic should be delegated to services.
- [X] **Do** move reusable logic to services and keep components simple and focused on their intended purpose.

### Don't Prefix Output Properties [STYLE 05-16](https://angular.io/styleguide#05-16)

- [X] **Do** name events without the prefix `on`.
- [X] **Do** name event handler methods with the prefix `on` followed by the event name.

### Put Presentation Logic in the Component Class [STYLE 05-17](https://angular.io/styleguide#!#05-17)

- [X] **Do** put presentation logic in the component class, and not in the template.


## 6. Directives

### Use Directives to Enhance an Existing Element [STYLE 06-01](https://angular.io/styleguide#06-01)

- [X] **Do** use attribute directives when you have presentation logic without a template.

### Use HostListener and HostBinding Class Decorators [STYLE 06-03](https://angular.io/styleguide#06-03)

- [X] **Consider** preferring the `@HostListener` and `@HostBinding` to the host property of the `@Directive` and `@Component` decorators.
- [X] **Do** be consistent in your choice.


## 7. Services

### Services are Singletons within an Injector [STYLE 07-01](https://angular.io/styleguide#07-01)

- [X] **Do** use services as singletons within the same injector. Use them for sharing data and functionality.

### Single Responsibility [STYLE 07-02](https://angular.io/styleguide#07-02)

- [X] **Do** create services with a single responsibility that is encapsulated by its context.
- [X] **Do** create a new service once the service begins to exceed that singular purpose.

### Providing a Service [STYLE 07-03](https://angular.io/styleguide#07-03)

- [X] **Do** provide services to the Angular injector at the top-most component where they will be shared.

### Use the @Injectable() Class Decorator [STYLE 07-04](https://angular.io/styleguide#07-04)

- [X] **Do** use the `@Injectable` class decorator instead of the `@Inject` parameter decorator when using types as tokens for the dependencies of a service.


## 8. Data Services

### Separate Data Calls [STYLE 08-01](https://angular.io/styleguide#08-01)

- [X] **Do** refactor logic for making data operations and interacting with data to a service.
- [X] **Do** make data services responsible for XHR calls, local storage, stashing in memory, or any other data operations.


## 9. Lifecycle Hooks

### Implement Lifecycle Hooks Interfaces [STYLE 09-01](https://angular.io/styleguide#09-01)

- [X] **Do** implement the lifecycle hook interfaces.


## 10. Appendix

### Codelyzer [STYLE A-01](https://angular.io/styleguide#A-01)

- [X] **Do** use [codelyzer](https://www.npmjs.com/package/codelyzer) to follow this guide.
- [X] **Consider** adjusting the rules in codelyzer to suit your needs.

### File Templates and Snippets [STYLE A-02](https://angular.io/styleguide#A-02)

- [X] **Do** use file templates or snippets to help follow consistent styles and patterns. Here are templates and/or snippets for some of the web development editors and IDEs.
- [X] **Consider** using [snippets](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2) for [Visual Studio Code](https://code.visualstudio.com/) that follow these styles and guidelines.
- [X] **Consider** using [snippets](https://atom.io/packages/angular-2-typescript-snippets) for [Atom](https://atom.io/) that follow these styles and guidelines.
- [X] **Consider** using [snippets](https://github.com/orizens/sublime-angular2-snippets) for [Sublime Text](http://www.sublimetext.com/) that follow these styles and guidelines.
- [X] **Consider** using [snippets](https://github.com/mhartington/vim-angular2-snippets) for [Vim](http://www.vim.org/) that follow these styles and guidelines.
