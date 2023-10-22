import { NgModule } from '@angular/core';
import { PRIMARY_OUTLET, RouterModule, Routes } from '@angular/router';
import { AComponent } from './a.component';
import { BComponent } from './b.component';
import { CComponent } from './c.component';

const routes: Routes = [
  {
    path: 'one',
    children: [
      { path: '', component: AComponent, outlet: 'left' },
      { path: '', component: BComponent, outlet: PRIMARY_OUTLET },
      { path: '', component: CComponent, outlet: 'right' },
    ],
  },
  {
    path: 'two',
    children: [
      { path: '', component: BComponent, outlet: 'left' },
      { path: '', component: CComponent, outlet: PRIMARY_OUTLET },
      { path: '', component: AComponent, outlet: 'right' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
