import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterTestingHarness } from '@angular/router/testing';
import { APIService } from 'src/Services/api.service';


@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css']
})
export class AddComponentComponent implements OnInit {
  Submitted = false;
  formdata: FormGroup;
  dataStudentDetails: any
  constructor(private APISerive: APIService, private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.formdata = this.fb.group({
      firstname: new FormControl("", [Validators.required, Validators.minLength(5)]),
      lastname: new FormControl("", [Validators.required]),
      mobile: new FormControl("", [Validators.required, Validators.minLength(10), Validators.pattern(/^[0-9]\d{9}$/)]),
      email: new FormControl("", [Validators.required, Validators.pattern(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/)]),
      password: new FormControl("", [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]),
      gender: new FormControl("", [Validators.required]),
      address: new FormControl("", [Validators.required])
    });
  }

  async SaveData() {
    debugger
    this.Submitted = true;
    if (this.formdata.invalid) {
      this.formdata.markAllAsTouched();
      return;
    }
    (await this.APISerive.AddData(this.formdata.value)).subscribe((data: any) => {
      this.dataStudentDetails = data;
      console.log(this.dataStudentDetails);
    });
  }

  AddressList: any = [
    { id: 'Ariyalur', name: 'Ariyalur' },
    { id: "Chennai", name: "Chennai" },
    { id: "Coimbatore", name: "Coimbatore" },
    { id: "Cuddalore", name: "Cuddalore" },
    { id: "Dharmapuri", name: "Dharmapuri" },
    { id: "Dindigul", name: "Dindigul" },
    { id: "Erode", name: "Erode" },
    { id: "Kanchipuram", name: "Kanchipuram" },
    { id: "Kanyakumari", name: "Kanyakumari" },
    { id: "Karur", name: "Karur" },
    { id: "Krishnagiri", name: "Krishnagiri" },
    { id: "Madurai", name: "Madurai" },
    { id: "Nagapattinam", name: "Nagapattinam" },
    { id: "Namakkal", name: "Namakkal" },
    { id: "Nilgiris", name: "Nilgiris" },
    { id: "Perambalur", name: "Perambalur" },
    { id: "Pudukkottai", name: "Pudukkottai" },
    { id: "Ramanathapuram", name: "Ramanathapuram" },
    { id: "Salem", name: "Salem" },
    { id: "Sivaganga", name: "Sivaganga" },
    { id: "Thanjavur", name: "Thanjavur" },
    { id: "Theni", name: "Theni" },
    { id: "Thoothukudi", name: "Thoothukudi" },
    { id: "Tiruchirappalli", name: "Tiruchirappalli" },
    { id: "Tirunelveli", name: "Tirunelveli" },
    { id: "Tiruppur", name: "Tiruppur" },
    { id: "Tiruvallur", name: "Tiruvallur" },
    { id: "Tiruvannamalai", name: "Tiruvannamalai" },
    { id: "Tiruvarur", name: "Tiruvarur" },
    { id: "Vellore", name: "Vellore" },
    { id: "Viluppuram", name: "Viluppuram" },
    { id: "Virudhunagar", name: "Virudhunagar" }
  ]
}
