import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent {
  empFrom: FormGroup;
  education: string[]=[
    'Matric',
    'Diploma',
    'intermediate',
    'Graduate',
    'Post Graduate',
    'Other',
  ]
  constructor(private _fb:FormBuilder, private _empService: EmployeeService,private _dialogRef: DialogRef<EmpAddEditComponent>){
    this.empFrom=this._fb.group({
      firstName:'',
      lastname:'',
      email:'',
      dob:'',
      gender:'',
      education:'',
      company:'',
      experience:'',
      package:'',
    })

  }
  onFormSubmit(){
    if(this.empFrom.valid){
      this._empService.addEmployee(this.empFrom.value).subscribe({
        next:(val:any)=>{
          alert('Empolyee added Successfully')
          this._dialogRef.close();
        },
        error:(err:any)=>{
          console.error(err);
        },
      })
      // console.log(this.empFrom.value);
    }
  }
}
