import {Routes} from '@angular/router';

import {HomeComponent} from '../../home/home.component';
import {UserComponent} from '../../user/user.component';
import {TablesComponent} from '../../tables/tables.component';
import {TypographyComponent} from '../../typography/typography.component';
import {IconsComponent} from '../../icons/icons.component';
import {MapsComponent} from '../../maps/maps.component';
import {NotificationsComponent} from '../../notifications/notifications.component';
import {UpgradeComponent} from '../../upgrade/upgrade.component';
import {BrandsComponent} from "../../brands/brands.component";
import {TobaccoComponent} from "../../tobacco/tobacco.component";
import {AdminComponent} from "../../admin/admin.component";

export const AdminLayoutRoutes: Routes = [
    {path: 'dashboard', component: HomeComponent},
    {path: 'user', component: UserComponent},
    {path: 'table', component: TablesComponent},
    {path: 'typography', component: TypographyComponent},
    {path: 'icons', component: IconsComponent},
    {path: 'maps', component: MapsComponent},
    {path: 'notifications', component: NotificationsComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'brands', component: BrandsComponent},
    {path: 'tobacco', component: TobaccoComponent},
    {path: 'upgrade', component: UpgradeComponent},
];
