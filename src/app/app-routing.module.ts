import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { StudentTableComponent } from './admin-dash/student-table/student-table.component';
import { TutorTableComponent } from './admin-dash/tutor-table/tutor-table.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ModulesComponent } from './modules/modules.component';
import { TutorDashComponent } from './tutor-dash/tutor-dash.component';
import { AvailTutorsComponent } from './avail-tutors/avail-tutors.component';
import { HighSchoolComponent } from './curriculum/high-school/high-school.component';
import { TertiaryComponent } from './curriculum/tertiary/tertiary.component';
import { LearningPortalComponent } from './learning-portal/learning-portal.component';
import { OnlineSessionsComponent } from './online-sessions/online-sessions.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';
import { BecomeTutorComponent } from './become-tutor/become-tutor.component';
import { BookingComponent } from './booking/booking.component';
import { PaymentComponent } from './payment/payment.component';
import { AccountingTutorsComponent } from './avail-tutors/accounting-tutors/accounting-tutors.component';
import { ChemistryTutorsComponent } from './avail-tutors/chemistry-tutors/chemistry-tutors.component';
import { ComscieTutorsComponent } from './avail-tutors/comscie-tutors/comscie-tutors.component';
import { InformaticsTutorsComponent } from './avail-tutors/informatics-tutors/informatics-tutors.component';
import { LifesciTutorsComponent } from './avail-tutors/lifesci-tutors/lifesci-tutors.component';
import { MathsTutorsComponent } from './avail-tutors/maths-tutors/maths-tutors.component';
import { PhysicsTutorsComponent } from './avail-tutors/physics-tutors/physics-tutors.component';
import { StatsTutorsComponent } from './avail-tutors/stats-tutors/stats-tutors.component';
import { FindLocationComponent } from './find-location/find-location.component';
import { AssignmentsComponent } from './learning-portal/assignments/assignments.component';
import { CoursesComponent } from './learning-portal/courses/courses.component';
import { DashboardComponent } from './learning-portal/dashboard/dashboard.component';
import { MarksComponent } from './learning-portal/marks/marks.component';
import { NotificationComponent } from './learning-portal/notification/notification.component';
import { ProfilesComponent } from './learning-portal/profiles/profiles.component';
import { TutorialsComponent } from './learning-portal/tutorials/tutorials.component';
import { FirstPageComponent } from './become-tutor/first-page/first-page.component';
import { SecondPageComponent } from './become-tutor/second-page/second-page.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'student-table', component:StudentTableComponent},
  {path:'tutor-table', component:TutorTableComponent},
  {path:'admin-dash', component:AdminDashComponent},
  {path:'contact', component:ContactComponent},
  {path:'about', component:AboutComponent},
  {path:'tutor-dash', component:TutorDashComponent},
  {path:'module', component:ModulesComponent},
  {path:'tutor', component:AvailTutorsComponent},
  {path:'high-school', component:HighSchoolComponent},
  {path:'tertiary', component:TertiaryComponent},
  {path:'learning-portal', component:LearningPortalComponent},
  {path:'online-session', component:OnlineSessionsComponent},
  {path:'profile', component:ProfileComponent},
  {path:'reset-password', component:ResetPasswordComponent},
  {path:'become-tutor', component:BecomeTutorComponent},
  {path:'booking', component:BookingComponent},
  {path:'payment', component:PaymentComponent},
  {path:'accounting-tutors', component:AccountingTutorsComponent},
  {path:'chemistry-tutors', component:ChemistryTutorsComponent},
  {path:'comscie-tutors', component:ComscieTutorsComponent},
  {path:'informatics-tutors', component:InformaticsTutorsComponent},
  {path:'lifesci-tutors', component:LifesciTutorsComponent},
  {path:'maths-tutors', component:MathsTutorsComponent},
  {path:'physics-tutors', component:PhysicsTutorsComponent},
  {path:'stats-tutors', component:StatsTutorsComponent},
  {path:'find-location', component:FindLocationComponent},
  {path:'assignment', component:AssignmentsComponent},
  {path:'course', component:CoursesComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'marks', component:MarksComponent},
  {path:'notification', component:NotificationComponent},
  {path:'profiles', component:ProfilesComponent},
  {path:'tutorial', component:TutorialsComponent},
  {path:'first-page', component:FirstPageComponent},
  {path:'second-page', component:SecondPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
