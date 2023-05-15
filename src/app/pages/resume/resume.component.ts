import { Component, Input } from '@angular/core';
import { Summary } from 'src/app/interfaces/summary';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  @Input() resumeCard: Summary;
}
