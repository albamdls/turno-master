import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectDatesPanelComponent } from '../select-dates-panel/select-dates-panel.component';
import { LogoComponent } from '../../components/logo/logo.component';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormControl,
  FormGroupName,
} from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarComponent } from '../../components/calendar/calendar.component';
import { Calendar } from '@fullcalendar/core/index.js';
import { AddCalendarEventComponent } from '../../components/add-calendar-event/add-calendar-event.component';

@Component({
  selector: 'app-create-quadrant',
  imports: [
    LogoComponent,
    DialogModule,
    ButtonModule,
    StyleClassModule,
    InputTextModule,
    CalendarComponent,
    ButtonModule,
    AddCalendarEventComponent,
  ],
  templateUrl: './create-quadrant.component.html',
  styleUrl: './create-quadrant.component.css',
})
export class CreateQuadrantComponent {
  @ViewChild(AddCalendarEventComponent)
  addCalendarEventComp!: AddCalendarEventComponent;

initDate: any = null;
endDate: any = null;

  onDateSelected(selectInfo: any) {
    console.log('Fecha seleccionada: ', selectInfo);
    this.addCalendarEventComp.showDialog();
  }

  loading: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Obtenemos las fechas introducidas en el select-dates-panel
    this.initDate = this.route.snapshot.paramMap.get('initDate');
    this.endDate = this.route.snapshot.paramMap.get('endDate');
    console.log('Fechas recibidas: ', this.initDate, this.endDate);
  }

  confirmQuadrant() {
    if (confirm('Vas a generar un nuevo cuadrante, ¿estás seguro?') == true) {
      this.load();
    } else {
      alert('No se ha generado ningún cuadrante');
    }
  }

  load() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
