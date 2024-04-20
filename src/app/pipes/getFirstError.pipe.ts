import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'onlyOneError'
})
export class onlyOneErrorPipe implements PipeTransform {
  transform(allErrors: any, errorsPriority: any[]) {
      if(!allErrors){
        return null;
      }

      const onlyOne: any ={};

      for ( let error of errorsPriority){
        if (allErrors[error]){
          onlyOne[error] = allErrors[error];
          break;
        }
      }
      console.log('pipe')
      return onlyOne;
  }
}
