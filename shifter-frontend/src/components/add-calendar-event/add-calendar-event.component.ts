import { Component, inject } from '@angular/core';
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
import { DropDownGroupsComponent } from '../drop-down-groups/drop-down-groups.component';
import { DropDownTurnsComponent } from '../drop-down-turns/drop-down-turns.component';
import { UserDropDownComponent } from '../user-drop-down/user-drop-down.component';

@Component({
  selector: 'app-add-calendar-event',
  imports: [
    DialogModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    FloatLabelModule,
    DropDownGroupsComponent,
    DropDownTurnsComponent,
    UserDropDownComponent,
  ],
  templateUrl: './add-calendar-event.component.html',
  styleUrl: './add-calendar-event.component.css',
})
export class AddCalendarEventComponent {
  visible = false;
  showModal = false;
  private http = inject(HttpClient);
  private authService = inject(AuthService);

  private initForm() {
    console.log('entrando');
  }

  open() {
    this.showModal = true;
  }

  showDialog() {
    this.visible = true;
    this.open();
  }

  /** Opcional: cerrar desde TS */
  hideDialog() {
    this.visible = false;
    this.showModal = false;
  }

  saveEvent() {
    alert("Evento guardado")
    this.hideDialog()
  }
}
