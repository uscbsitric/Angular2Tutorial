import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms'; //Step 1: <-- NgModel lives here
import { AppComponent }  from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Step 2: add the imported directive to the imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
