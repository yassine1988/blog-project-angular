import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';


@NgModule({
  declarations: [
    AppComponent,
    PostListItemComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
