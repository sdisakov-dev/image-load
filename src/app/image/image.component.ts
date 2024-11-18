import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromImage from './image.reducer';
import { Observable } from 'rxjs';
import { loadImageUrl } from './image.actions';

@Component({
  selector: 'app-image-component',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  imageUrl$: Observable<string> = this.store.pipe(select(fromImage.selectImageUrl));

  constructor(private store: Store<{ image: fromImage.ImageState }>) { }

  ngOnInit() {
    this.store.dispatch(loadImageUrl({ imageUrl: 'https://get.wallhere.com/photo/2048x1280-px-animals-baby-cat-cats-cute-fat-fluffy-grass-grey-kitten-kittens-1913313.jpg' }));
  }
}
