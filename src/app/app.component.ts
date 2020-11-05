import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AnimaliaService } from './animalia.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	titulo:String = "Registro de especies";
	arrAnimalesCreados:Array<String> = [];
	respuesta:String = "";
	codigo:Number = 0;

	constructor(private servicioAnimal:AnimaliaService){ }

	ngOnInit(){
		this.obtenerAnimalia();
	}

	procesarDatos(form:NgForm):void{
		this.servicioAnimal.registrarAnimal(form.value.nombre, form.value.reino, Number(form.value.cantidad_extremidades)).subscribe(res => {
			this.respuesta = res.mensaje;
			this.codigo = res.codigo;
			this.obtenerAnimalia();
		});
	}

	obtenerAnimalia(){
		this.arrAnimalesCreados = [];
		this.servicioAnimal.getListaAnimales().subscribe(resp => {
			resp.forEach( cd => this.agregarAnimalia(cd) );
		});
	}

	agregarAnimalia(descripcion: String){
		this.arrAnimalesCreados.push(descripcion);
	}
}
