import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: AboutUsComponent,
		pathMatch:  'full'
	},
];

@NgModule({
	declarations: [
		AboutUsComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	]
})
export class AboutUsModule { }
