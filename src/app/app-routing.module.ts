import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { QuizzerComponent } from './quizzer/quizzer.component';


const routes: Routes = [
  {path: 'cards', component: CardsComponent},
  {path: 'quiz', component: QuizzerComponent},
  {path: '', redirectTo: 'cards', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
