import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  readonly aipurl='https://localhost:7223/WeatherForecast'
  constructor(private HttpClient: HttpClient) { }


 async Getdata(){
    return await this.HttpClient.get(`${this.aipurl}/GetRegister`);
  }

  async AddData(data:any){
    return await this.HttpClient.post(`${this.aipurl}/AddRegister`,data);
  }
}
