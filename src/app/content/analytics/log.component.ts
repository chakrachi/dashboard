import { Component, Input } from "@angular/core";
import { LogPost } from "./log.service";

@Component({
  selector: "nb-log-post",
  template: `
    <article>
      <h2 class="h5">{{ post.title }}</h2>
      <p>{{ post.text }}</p>
      <a [attr.href]="post.link">Read full article</a>
    </article>
  `
})
export class LogPostComponent {
  @Input()
  post: LogPost;
}
