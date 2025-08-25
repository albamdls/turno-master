import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LogoComponent } from '../../components/logo/logo.component';
import { AuthService } from '../../services/auth.service';
import { ToolbarModule } from 'primeng/toolbar';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    LogoComponent,
    StyleClassModule,
    ButtonModule, 
    FloatLabelModule, 
    InputTextModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string ='';

  constructor(
    private fb: FormBuilder, // Para crear formularios reactivos
    private router: Router, // Para navegación
    private authService: AuthService // Servicio de autenticación
  ) {
    // Inicializamos el formulario en el constructor
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.authService.login(email, password).subscribe({
        next: (response) => {
          // Guardamos el token y el nombre recibido
          this.authService.saveToken(response.token);
          localStorage.setItem('userName', response.name); // <-- Añade esta línea
          const queryParams = !response.isAdmin ? { userId: response.userId } : {}
          this.router.navigate(['/adminpannel'], { queryParams });
        },
        error: (error) => { // Si las credenciales no son correctas muestra un mensaje de error
          this.errorMessage = "Error en el inicio de sesión. Por favor, verifica tus credenciales"
          console.error("Error: ", error);
          alert("Error en el inicio de sesión. Por favor, verifica tus credenciales")
        }
      })
    }
  }
}
