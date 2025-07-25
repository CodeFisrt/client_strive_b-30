import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout'; 
import { ClientList } from './pages/client/client-list/client-list';
import { EmployeeForm } from './pages/employee/employee-form/employee-form';
import { EmployeeList } from './pages/employee/employee-list/employee-list';
import { authGuard } from './core/guards/auth-guard';
import { ClientProject } from './pages/client-project/client-project';
import { ProjectDetail } from './pages/project-detail/project-detail';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component: Login
    },
    {
        path:'',
        component: Layout,
        //canActivate:[authGuard],
        children: [
            
            {
                path:'client-list',
                component: ClientList 
            },
            {
                path:'employee-form/:id',
                component: EmployeeForm
            },
              
            {
                path:'employee-list',
                component: EmployeeList
            },
            {
                path:'project',
                component: ClientProject
            },
            {
                path:'projectdetail/:projectid',
                component: ProjectDetail
            }
        ]
    }

];
