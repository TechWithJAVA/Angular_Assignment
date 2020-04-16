import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormGroup ,FormArray } from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';
import { PasswordValidator } from './shared/password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  registrationForm: FormGroup;
  get userName() {
    return this.registrationForm.get('userName');
  }

  get email(){
    return this.registrationForm.get('email');
  }
  
  get alternateEmails(){
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail(){
    this.alternateEmails.push(this.fb.control(''));
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)]],
      email: [''],
      subscribe: [false],
      password: [''],
      confirmPassword: [''],
      dob: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
        pin: ['']
      }),
      alternateEmails: this.fb.array([])
    }, { validator: PasswordValidator });
    this.registrationForm.get('subscribe').valueChanges
    .subscribe(checkedValue => {
      const email =this.registrationForm.get('email');
      if(checkedValue){
        email.setValidators(Validators.required);
      }else {
        email.clearValidators();
      }
      email.updateValueAndValidity();
    });
  }

  //   registrationForm= new FormGroup({
  //    userName: new FormControl(''),
  //    password: new FormControl(''),
  //    confirmPassword: new FormControl(''),
  //    address: new FormGroup({
  //      city: new FormControl(''),
  //      state: new FormControl(''),
  //      pin: new FormControl('')
  //    })
  //  });

  loadApiData() {
    this.registrationForm.setValue(
      {
        userName: 'Saroj',
        password: 'test',
        confirmPassword: 'test',
        dob: '1988-04-02',
        address: {
          city: 'City',
          state: 'State',
          pin: '1234'
        }
      }
    );
  }

  onSubmit(){
    console.log(this.registrationForm.value);
   
  }
}
