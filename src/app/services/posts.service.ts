import { Subject } from 'rxjs/Subject';
import { Post } from '../models/post.model';
import * as firebase from 'firebase';

export class PostsService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() {}

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts').on(
      'value',
      (data: firebase.database.DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPosts();
      }
    );
  }

  savePosts() {
    // firebase.database().ref('/posts') : Retourne un node firebase localisé en '/posts'
    // la méthode this fonctionne un peu comme la méthode push
    firebase.database().ref('/posts').set(this.posts);
  }

  createNewPost(post: Post) {
    this.posts.push(post);
    this.savePosts();
    this.emitPosts();
  }

  removePost(post: Post) {
    const indexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        }
      }
    );

    this.posts.splice(indexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }

  setLoveIt(index: number) {
    this.posts[index].loveIts++;
    this.savePosts();
    this.emitPosts();
  }

  setDontLoveIt(index: number) {
    this.posts[index].dontLoveIts++;
    this.savePosts();
    this.emitPosts();
  }
}
