import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([{ path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) }])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
