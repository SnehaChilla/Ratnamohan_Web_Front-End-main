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
  Casepaper1={drIc:"",ipdNO:"",contactNo:"", name:"",age:"",sex:"",admission:"",advance:"",address:"",date:"",time:"",
    dischargeDate:"",total:"",referredBy:"",weight:"",dignosisProvisionFinal:"",complaints:"",
    pastHistory:"",personalHistory:"",onExaminationPhysiognomy:"",};
  
    Casepaper2={disease:"",regdNo:"",date:"",clinicalNotes:"",o2:"",lp:"",venti:"",picu:"",ward:""};
    patientDetails:any;
   
    image:any;
    imageDetails:any;
    tempImage:any;
    isSecondPageVisible:boolean=false;
    isThirdPageVisible:boolean=false;
    isExtraPageAdd:boolean=false;
    
  
    
   
    
    constructor()
    {
    
    }
  
  
    Continue(casepaper1Details:any)
    {
      
      console.log("patientDetails",casepaper1Details);
     localStorage.setItem("patientDetails",JSON.stringify(casepaper1Details));  
    this.isSecondPageVisible=true;
    }
  
  Page2_Continue_btn(caseppaper1Name:any,casepaper2Details:any)
  {
    console.log("Patient Name : ",caseppaper1Name);
    console.log("casePaper2Details",casepaper2Details);
    this.isThirdPageVisible=true;
  }
  
  Page3_Add_btn(paetientName:any,casepaper3Details:any)
  {
  this.isExtraPageAdd=true;
  console.log("Patient name : ",paetientName)
  console.log("casePaper3Details",casepaper3Details);
  }
  
  Page3_Submit_btn(patientDetails:any,healthDetails:any)
  {
   alert("Casepapper Submitted Sucessfully")
   console.log("Patient Details : ",patientDetails)
   console.log("Health Details : ",healthDetails);
  }
}
