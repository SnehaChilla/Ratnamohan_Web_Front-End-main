import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-casepaper',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './add-casepaper.component.html',
  styleUrl: './add-casepaper.component.css'
})
export class AddCasepaperComponent {
  Casepaper1!:any;
  // Casepaper2!:any;
  patientDetails:any;
  // casePaper2Details:any;
  image:any;
  imageDetails:any;
  tempImage:any;
  isSecondPageVisible:boolean=false;
  isThirdPageVisible:boolean=false;
  isExtraPageAdd:boolean=false;
  

  
  // img="D:\Project Code Original\ProjectImage";
  
  constructor(private casepaper:FormBuilder,private route:Router)
  {
    this.Casepaper1 = this.casepaper.group({
      drIC:['',Validators.required],
      ipdNO:['',[Validators.required]],
      contactNo:['',Validators.required],
        name:['',Validators.required],
        age:['',Validators.required],
        sex:['',Validators.required],
        admission:['',Validators.required],
        advance:['',Validators.required],
        
        
    });

    // this.Casepaper2 = this.casepaper.group({
    //   disease:['',Validators.required],
    //   regdNo:['',Validators.required],
    //   date:['',Validators.required],
    // });

  }


  Continue()
  {
    this.patientDetails=this.Casepaper1.value
    console.log("patientDetails",this.patientDetails);
   localStorage.setItem("patientDetails",JSON.stringify(this.patientDetails));  
  this.isSecondPageVisible=true;
  }

Page2_Continue_btn()
{
  // this.casePaper2Details=this.Casepaper2.value
  // console.log("casePaper@Details",this.casePaper2Details);
  this.isThirdPageVisible=true;
}

Page3_Add_btn()
{
this.isExtraPageAdd=true;
  
}

Page3_Submit_btn()
{
 alert("Casepapper Submitted Sucessfully")
}
}
