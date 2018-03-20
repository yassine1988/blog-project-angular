import { Component, Input } from '@angular/core';

import { PostItem } from './post-item';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent {

  @Input() post:PostItem;

  onLoveIt(): void {
    this.post.loveIts++;
  }

  onDontLoveIt(): void {
    this.post.dontLoveIts++;
  }
}
