import { Component } from '@angular/core';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  nombre = '';
  apellido = '';
  edad = 0;
  esMayor = false;

  users = [
    { nombre: 'Juan', apellido: 'Perez', edad: 20},
    { nombre: 'Maria', apellido: 'Gomez', edad: 15},
  ];

  constructor() {}

  addUser(name:string, lastName:string, age:string){
    event?.preventDefault();
    console.log(name, lastName, age);
    this.nombre = name;
    this.apellido = lastName;
    this.edad = parseInt(age);
    this.users.push({nombre: this.nombre, apellido: this.apellido, edad: this.edad});
  }
}
