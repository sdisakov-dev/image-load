import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { ImageService } from './image/image.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { imageReducer } from './image/image.reducer';
import { ImageEffects } from './image/image.effects';

@NgModule({
 declarations: [AppComponent, ImageComponent],
 imports: [
  BrowserModule,
  StoreModule.forRoot({ image: imageReducer }),
  EffectsModule.forRoot([ImageEffects])
 ],
 providers: [ImageService],
 bootstrap: [AppComponent]
})
export class AppModule { }
