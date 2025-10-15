import { Routes } from '@angular/router';
import { Login } from './components/auth/login';
import { ShopRegister } from './components/auth/shop-register';
import { Dashbord } from './components/dashbord/dashbord';
import { GeStock } from './components/dashbord/ge-stock/ge-stock';
import { Finance } from './components/dashbord/finance/finance';
import { Setting } from './components/dashbord/setting/setting';
import { Sale } from './components/dashbord/ge-stock/sale/sale';
import { Purchase } from './components/dashbord/ge-stock/purchase/purchase';
import { Stock } from './components/dashbord/ge-stock/stock/stock';
import { Archive } from './components/dashbord/ge-stock/archive/archive';
const appName="LeMarché Portail Admin"
export const routes: Routes = [
    {
        path: 'login',
        title: `Login - ${appName}`,
        component: Login
    },
    {
        path: 'shop-register',
        title: `Inscription - ${appName}`,
        component: ShopRegister
    },
    {
        path: '',
        title: `Dashbord - ${appName}`,
        component: Dashbord,
        children:[
            {
                path: '',pathMatch: 'full', redirectTo: 'ge-stock'
            },
            {
                path: 'ge-stock',
                title: `Gestion de stock - ${appName}`,
                component: GeStock,
                children:[
                    {path:'',pathMatch: 'full',redirectTo: 'sale'},
                    {
                        path: 'sale',
                        title: `Vente - ${appName}`,
                        component: Sale,
                    },
                    {
                        path: 'purchase',
                        title: `Approvisionnement - ${appName}`,
                        component: Purchase,
                    },
                    {
                        path: 'stock',
                        title: `Stock - ${appName}`,
                        component: Stock,
                    },
                    {
                        path: 'archive',
                        title: `Archive - ${appName}`,
                        component: Archive,
                    },
                ]
            },
            {
                path: 'finance',
                title: `Finance - ${appName}`,
                component: Finance
            },
            {
                path: 'setting',
                title: `Paramette - ${appName}`,
                component: Setting
            },
        ]
    },
    {path :'**', redirectTo: ''}
];
