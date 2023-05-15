import { Component, OnInit } from '@angular/core';
import { RESUMES, RESUMESECONDE, SERVICES} from 'src/app/data/data';
import { Service } from 'src/app/interfaces/service';
import { Summary } from 'src/app/interfaces/summary';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  service = {
    Image: '../../../assets/img/icon/1.png',
    headTitle: 'Web Designer',
    title: "Qualified web designs and attractive effects which catches visitor's eye."
  }

  services: Service[] = [];
  resume = {
    spanTitle: '2000 - 2003',
    headTitle: 'Computer Science',
    title: 'International University',
    info: 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'
  }
  resumes: Summary[] = [];

  resumeSeconde: Summary[] =[];

  ngOnInit() {
    setTimeout(() => {
      this.resumes = RESUMES;
      this.resumeSeconde = RESUMESECONDE;
      this.services = SERVICES;
    }, 2000);
  }
}
