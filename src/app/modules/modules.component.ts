import { Component, Inject, OnInit } from '@angular/core';
import  {DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document : Document) { }

  ngOnInit(): void {
  }

  course = [
    {'id':1,'name':'Mathematics','description':'the abstract science of number, quantity, and space, either as abstract concepts (pure mathematics), or as applied to other disciplines such as physics and engineering (applied mathematics).','image':'../../assets/maths.jpg'},
    {'id':2,'name':'Physics','description':'Physics is the natural science that studies matter, its fundamental constituents, its motion and behavior through space and time, and the related entities of energy and force.','image':'../../assets/physics.jpg'},
    {'id':3,'name':'Chemistry','description':'Chemistry is the scientific study of the properties and behavior of matter.[1] It is a natural science that covers the elements that make up matter to the compounds composed of atoms, molecules and ions.','image':'../../assets/chemistry.jpg'},
    {'id':4,'name':'Life Sciences','description':'This list of life sciences comprises the branches of science that involve the scientific study of life, such as microorganisms, plants, and animals including human beings.','image':'../../assets/lifescience.jpg'},
    {'id':5,'name':'Accounting','description':'Accounting is the process of recording financial transactions pertaining to a business. The accounting process includes summarizing, analyzing, and reporting these transactions to oversight agencies, regulators, and tax collection entities.','image':'../../assets/accounting.jpg'},
    {'id':6,'name':'Computer Science','description':'Computer science is the study of computation, automation, and information. Computer science spans theoretical disciplines such as algorithms, theory of computation, and information theory to practical disciplines.','image':'../../assets/comscie.jpg'},
    {'id':7,'name':'Informatics','description':'Informatics is the study of computational systems, especially those for data storage and retrieval. According to ACM Europe and Informatics Europe, informatics is synonymous with computer science and computing as a profession, in which the central notion is transformation of information.','image':'../../assets/infotech.jpg'},
    {'id':8,'name':'Statistics','description':'Statistics is the discipline that concerns the collection, organization, analysis, interpretation, and presentation of data. In applying statistics to a scientific, industrial, or social problem, it is conventional to begin with a statistical population or a statistical model to be studied.','image':'../../assets/stats.jpg'}
  ]
}
