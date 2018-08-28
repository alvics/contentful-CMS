import { ContentfulService } from './../../services/contentful.service';
import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  title;
  // Creating a variables as observables to hold the layouts content
  layouts: Entry<any>[] = [];
  // images: Entry<any>[] = [];

  constructor(private contenful: ContentfulService) {}

  ngOnInit() {
    // subscribe to the current title observable and set its value equal to the title variable
    this.contenful.logContent('3bh985ibn6ee');
    this.contenful.getContents().then(layouts => (this.layouts = layouts));

    //  this.contenful.getImages().then(images => (this.images = images));
  }
}
