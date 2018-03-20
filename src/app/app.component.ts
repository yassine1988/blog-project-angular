import { Component } from '@angular/core';

import { POSTS } from './post-list-item-component/mock-posts-items';
import { PostItem } from './post-list-item-component/post-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts : PostItem[] = POSTS;
}
