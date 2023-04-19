import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from '../hello.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppService } from './services/app.service';
import { HttpClientModule } from '@angular/common/http';
import { EndFormComponent } from './end-form/end-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CepFormatPipe } from './pipes/cep-format.pipe';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    EndFormComponent,
    CepFormatPipe,
  ],
  bootstrap: [AppComponent],
  providers: [AppService, CepFormatPipe],
})
export class AppModule {}
