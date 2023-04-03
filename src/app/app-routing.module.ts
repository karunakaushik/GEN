import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleTransComponent } from './allTasks/google-trans/google-trans.component';

const routes: Routes = [{
  path: 'googleTrans',
  component: GoogleTransComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
