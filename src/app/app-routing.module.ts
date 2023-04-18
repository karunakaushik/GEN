import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleTransComponent } from './allTasks/google-trans/google-trans.component';
import { EditorComponent } from './editor/editor.component';

const routes: Routes = [
  {
  path: 'googleTrans',
  component: GoogleTransComponent
  },
  {
    path: 'editor',
    component: EditorComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
