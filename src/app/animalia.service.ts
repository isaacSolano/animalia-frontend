import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AnimaliaService {

	constructor(private http:HttpClient) { }
	private httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

	public registrarAnimal(nombre:String, reino:String, cantExtremidades:Number): Observable<any>{
		return this.http.post<any>(`/api/addAnimal`, {'nombre': nombre, 'reino': reino, 'cantExtremidades': cantExtremidades});
	}

	public getListaAnimales():Observable<any>{
		return this.http.get<any>(`/api/getAllAnimalia`);
	}
}
