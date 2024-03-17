import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { HeroImagePipe } from "./pipes/heroImage.pipe";


@NgModule({
    declarations: [
        HeroPageComponent,
        LayoutPageComponent,
        ListPageComponent,
        NewPageComponent,
        SearchPageComponent,
        CardComponent
    ],
    imports: [
        CommonModule,
        HeroesRoutingModule,
        MaterialModule,
        HeroImagePipe
    ]
})
export class HeroesModule { }