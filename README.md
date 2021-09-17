# Angular Library and Project utilising the library
Angular 12 project calling a library project

This tutorial will detail how to:
- Create an angular library
- Create a component in that library
- Export that component for use in an application
- Create an angular application
- Import the local component library
- Access debugging for the library from the main application.


## Creating the shared library

1. cd to the starting folder (in this case 'code').


2. `ng new ngx-my-shared-libs --create-application=false`

3. `cd ngx-my-shared-libs`

4. `ng generate library my-shared-components`

5. `cd projects\my-shared-components\src\lib` (full path {repo}\code\ngx-my-shared-libs\projects\my-shared-components\src\lib)

6. `ng g c TestView` (creates new test component)

7. Find `public-api.ts` under code\ngx-my-shared-libs\projects\my-shared-components\src\lib

8. add a line for the new component, so the file now looks like the following

````
/*
 * Public API Surface of my-shared-components
 */

export * from './lib/my-shared-components.service';
export * from './lib/my-shared-components.component';
export * from './lib/my-shared-components.module';


export * from './lib/test-view/test-view.component';

````

9. Export the view component in the module (code\ngx-my-shared-libs\projects\my-shared-components\src\lib\my-shared-components.component.ts):

````
import { NgModule } from '@angular/core';
import { MySharedComponentsComponent } from './my-shared-components.component';
import { TestViewComponent } from './test-view/test-view.component';



@NgModule({
  declarations: [
    MySharedComponentsComponent,
    TestViewComponent
  ],
  imports: [
  ],
  exports: [
    MySharedComponentsComponent,
    TestViewComponent /* NEW! */
  ]
})
export class MySharedComponentsModule { }


````


10. Open command prompt at code\ngx-my-shared-libs and run `ng build --watch`.



# Importing Into The Angular Project

11. In a new command prompt, cd back to the top level i.e. {repo}/code.

12. create a new sample app using `ng new ngx-sample-app --skip-tests` . Answer the init questions as you wish.

13. `cd ngx-sample-app`

13. now we need to reference the local library using npm install with a local link. Remember to link to the dist folder.


`npm install "file://../ngx-my-shared-libs//dist//my-shared-components"`


14. Import the component into your application module (code\ngx-sample-app\src\app\app.module.ts)

````
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MySharedComponentsModule } from 'my-shared-components';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MySharedComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

````

15. Open up code\ngx-sample-app\src\app\app.component.html

Delete the default contents and update like so:

````
App Component

<lib-test-view></lib-test-view>
````

16. Go to the angular.json in ngx-sample-app (code\ngx-sample-app\angular.json) and add preserveSymLinks to the biuld options 

Sample below shortened for brevity.

````

"architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "preserveSymlinks": true,
            "outputPath": "dist/ngx-sample-app",
            "index": "src/index.html",
            "main": "src/main.ts",

````


17. To this point, we can actually build everything, but we can't actually debug those libraries, so let's go ahead and fix that. In angular.json (code\ngx-sample-app\angular.json), update serve to include options for debugging libs too.

Again, shortened for brevity - starting at line 89 in my sample $projects.ngx-sample-app.architect.serve:

````
"serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "sourceMap": {
              "scripts": true,
              "styles": true,
              "vendor": true
            }
          },


````



18. In the command prompt for the app ({repo/code\ngx-sample-app>}) run `ng serve`.

19. Visit https://localhost:4200 to view the results.

20. In chrome, you can now press F12, then go to sources, Ctrl+P to search files and type 'test-view' to get to the test-view component.



