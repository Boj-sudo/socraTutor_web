import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './user/register/register.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedService } from './shared.service';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { StudentTableComponent } from './admin-dash/student-table/student-table.component';
import { TutorTableComponent } from './admin-dash/tutor-table/tutor-table.component';
import { ShowStudentComponent } from './admin-dash/student-table/show-student/show-student.component';
import { AddEditStudentComponent } from './admin-dash/student-table/add-edit-student/add-edit-student.component';
import { ShowTutorComponent } from './admin-dash/tutor-table/show-tutor/show-tutor.component';
import { AddEditTutorComponent } from './admin-dash/tutor-table/add-edit-tutor/add-edit-tutor.component';
import { UserService } from './user/user.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ModulesComponent } from './modules/modules.component';
import { TutorDashComponent } from './tutor-dash/tutor-dash.component';
import { AvailTutorsComponent } from './avail-tutors/avail-tutors.component';
import { OnlineSessionsComponent } from './online-sessions/online-sessions.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';
import { LearningPortalComponent } from './learning-portal/learning-portal.component';
import { HighSchoolComponent } from './curriculum/high-school/high-school.component';
import { TertiaryComponent } from './curriculum/tertiary/tertiary.component';
import { BecomeTutorComponent } from './become-tutor/become-tutor.component';
import { BookingComponent } from './booking/booking.component';
import { PaymentComponent } from './payment/payment.component';
import { MathsTutorsComponent } from './avail-tutors/maths-tutors/maths-tutors.component';
import { PhysicsTutorsComponent } from './avail-tutors/physics-tutors/physics-tutors.component';
import { LifesciTutorsComponent } from './avail-tutors/lifesci-tutors/lifesci-tutors.component';
import { ChemistryTutorsComponent } from './avail-tutors/chemistry-tutors/chemistry-tutors.component';
import { InformaticsTutorsComponent } from './avail-tutors/informatics-tutors/informatics-tutors.component';
import { ComscieTutorsComponent } from './avail-tutors/comscie-tutors/comscie-tutors.component';
import { StatsTutorsComponent } from './avail-tutors/stats-tutors/stats-tutors.component';
import { AccountingTutorsComponent } from './avail-tutors/accounting-tutors/accounting-tutors.component';
import { FindLocationComponent } from './find-location/find-location.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { NotificationComponent } from './learning-portal/notification/notification.component';
import { ProfilesComponent } from './learning-portal/profiles/profiles.component';
import { CoursesComponent } from './learning-portal/courses/courses.component';
import { MarksComponent } from './learning-portal/marks/marks.component';
import { TutorialsComponent } from './learning-portal/tutorials/tutorials.component';
import { AssignmentsComponent } from './learning-portal/assignments/assignments.component';
import { FirstPageComponent } from './become-tutor/first-page/first-page.component';
import { SecondPageComponent } from './become-tutor/second-page/second-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UserComponent,
    LoginComponent,
    HomeComponent,
    AdminDashComponent,
    StudentTableComponent,
    TutorTableComponent,
    ShowStudentComponent,
    AddEditStudentComponent,
    ShowTutorComponent,
    AddEditTutorComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    ModulesComponent,
    TutorDashComponent,
    AvailTutorsComponent,
    OnlineSessionsComponent,
    CurriculumComponent,
    ProfileComponent,
    ResetPasswordComponent,
    LearningPortalComponent,
    HighSchoolComponent,
    TertiaryComponent,
    BecomeTutorComponent,
    BookingComponent,
    PaymentComponent,
    MathsTutorsComponent,
    PhysicsTutorsComponent,
    LifesciTutorsComponent,
    ChemistryTutorsComponent,
    InformaticsTutorsComponent,
    ComscieTutorsComponent,
    StatsTutorsComponent,
    AccountingTutorsComponent,
    FindLocationComponent,
    NotificationComponent,
    ProfilesComponent,
    CoursesComponent,
    MarksComponent,
    TutorialsComponent,
    AssignmentsComponent,
    FirstPageComponent,
    SecondPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    GooglePayButtonModule
  ],
  providers: [
    SharedService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
