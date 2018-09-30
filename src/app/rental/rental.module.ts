import { Routes, RouterModule } from '@angular/router';
import { RentalService } from './shared/rental.service';
import { RentalListComponent } from './rental-list/rental-list.component';
import { NgModule } from '@angular/core';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalComponent } from './rental.component';
import { CommonModule } from '@angular/common';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
    {path: 'rentals', component: RentalComponent, children: [
        {path: '', component: RentalListComponent},
        {path: ':rentalId', component: RentalDetailComponent}
    ]},
  ]
  

@NgModule({
    declarations: [
        RentalComponent,    
        RentalListComponent,
        RentalListItemComponent,
        RentalDetailComponent
       
    ],
    imports: [
        CommonModule, 
        RouterModule.forChild(routes),
        HttpClientModule

    ],
    providers: [
        RentalService
    ]
})

export class RentalModule {}