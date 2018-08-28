# Angular and Contentful CMS/API

## Connecting Contenful with Angular

### Use contentful cms as the backend for an Angular project.

Post component, service and markdown to HTML pipe.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

### Add your spaceId and token in environment.ts

```
  contentful: {
    spaceId: 'your_Id',
    token: 'your_token'
  }
};
```

### postsComponent.html

```
<!-- Comming from Contenful CMS/API -->


  <div class="container" *ngFor="let layout of layouts">
    <div class="overlay">
      <h1 class="pt-5">{{ layout.fields.title }}</h1>
      <br>
      <div id="contentful" [innerHTML]="layout.fields.body | mdToHtml">
        <div class="space"></div>
    </div>
      </div>
  </div>
```

### contentful.service.ts

```
  getContents(query?: object): Promise<Entry<any>[]> {
    return this.client
      .getEntries(
        Object.assign(
          {
            content_type: 'layouts'
          },
          query
        )
      )
      .then(res => res.items);
  }
```
