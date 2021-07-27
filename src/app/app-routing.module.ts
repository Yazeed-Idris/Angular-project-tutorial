import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';

const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: 'recipes', component: RecipesComponent},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: '**', redirectTo: '/recipes', pathMatch: 'full'},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
