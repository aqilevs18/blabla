import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './second/directives/apphighlight.directive';
import { firstTaskService } from './first/services/firstTask.service';
import { SecondComponent } from './second/second.component';
import { secondTaskService } from './second/services/secondTask.service';
import { FirstComponent } from './first/first.component';
import { datePipe } from './first/pipes/date.pipe';
import { statusColorDirective } from './first/directives/statusColor.directive';
import { cardColorDirective } from './first/directives/cardColor.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    SecondComponent,
    FirstComponent,
    datePipe,
    statusColorDirective,
    cardColorDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [firstTaskService, secondTaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
