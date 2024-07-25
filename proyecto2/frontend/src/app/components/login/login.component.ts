import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  // num : numero
  // text : ""
  @Input() toggleRegister: () => void = () => {};

  // @Input -> recibir algo | nombre a lo que entra, en este caso una función : tipo () => void = inicializar la función
}

// () => para que reconozca que es una función -> función flecha
// void -> función que no retorna nada