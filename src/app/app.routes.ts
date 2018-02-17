import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { HeaderComponent } from './header/header.component'
import { OrderSummaryComponent } from './order-summary/order-summary.component'
import { RestaurantsComponent } from './restaurants/restaurants.component'
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component'
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component'
import { MenuComponent } from './restaurant-detail/menu/menu.component'
import { OrderComponent } from './order/order.component'
import { NotFoundComponent } from './not-found/not-found.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  {
    path: 'restaurants/:id', component: RestaurantDetailComponent,
    children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full' },
      { path: 'menu', component: MenuComponent },
      { path: 'reviews', component: ReviewsComponent }
    ]
  },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: 'order-sumary', component: OrderSummaryComponent },
  { path: 'order', loadChildren: './order/order.module#OrderModule' },
  { path: '**', component: NotFoundComponent }
]
