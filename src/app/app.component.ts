import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
import { Empleado } from './models/empleado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-faztCode';
  nombre= ""
  empleadoArray:Empleado[]=
  [
    {id:1, name:"rian",country: "USA"},
    {id:2, name:"ana",country: "ECU"},
    {id:3, name:"juan",country: "BRA"},
  ];

  seleccionarEmpleado:Empleado = new Empleado();

  abrirParaEditar(empleado:Empleado){
    this.seleccionarEmpleado = empleado;
  }
  agregarEditar(){
    if (this.seleccionarEmpleado.id == 0 && this.seleccionarEmpleado.name != "" && this.seleccionarEmpleado.country != "" ) {
      this.seleccionarEmpleado.id = this.empleadoArray.length+1;
      this.empleadoArray.push(this.seleccionarEmpleado)
      console.log( this.seleccionarEmpleado.name);
      console.log(this.seleccionarEmpleado.country);
      console.log("agrego empleado");

    } else {
      this.seleccionarEmpleado = new Empleado();
      alert("debe ingresar un nombre y pais")

    }
  }
  eliminarEmpleado(){
  if (confirm('¿Estas seguro de querer elimarlo? ') ) {
    this.empleadoArray = this.empleadoArray.filter(x => x!=this.seleccionarEmpleado)
    this.seleccionarEmpleado = new Empleado();
  } else {
    alert("no fue posible eliminarlo")
  }


  }
}
