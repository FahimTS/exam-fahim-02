import { Component, Input } from '@angular/core';
import { Service } from 'src/app/interfaces/service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  @Input() serviceCard: Service;
}
