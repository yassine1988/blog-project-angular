import { Component, Input } from '@angular/core';

import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent {

  @Input() post: Post;
  @Input() item: number;

  constructor(private postsService: PostsService) {}

  onLoveIt(): void {
    this.postsService.setLoveIt(this.item);
  }

  onDontLoveIt(): void {
    this.postsService.setDontLoveIt(this.item);
  }

  onDeletePost(): void {
    this.postsService.removePost(this.post);
  }
}
