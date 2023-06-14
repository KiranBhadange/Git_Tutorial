import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordValidator(control:AbstractControl) :ValidationErrors | null {
  const confirmPassword= control.value ;
  const password = control.root.get('password')?.value ;
  if(confirmPassword != '' && password != confirmPassword){
    return {isPasswordMisMatch:true}
  }else {
    return null ;
  }
  
}

export function Email(control:AbstractControl) :ValidationErrors | null {
   const InValidEmaile= control.value;
   const ValidEmail=control.root.get('ValidEmail')?.value;
  // get ValidEmail(){
  //   return this.ValidEmails.get('ValidEmail')
  //   }
  
  //   get InValidEmail(){
  //   return this.userEmails.get('InValidEmail')
  //   }

  if(InValidEmaile!= '' && ValidEmail!=InValidEmaile){
    return {isValidEmailMisMatch:true}
  }else {
    return null ;
  }

}


 export function ageShouldGreaterThan18(control:AbstractControl) :ValidationErrors | null {
     const age = control.value ;
      if(age && age < 18){
         return {"ageNotMatch":true}
      }else {
         return null ;
      }
}