
export class Passenger {
   public age: number;
   public email: string;
   public name: string;
   public passengerKey: string;
   public passengerType: PassengerType;
   public UpdateName(newName: string): void {
      // PassengerNameUpdateSpecification
      // PassengerNameValidationSpecification
      // PassengerValidationSpecification
      this.name = newName;
   }
}

export enum PassengerType {
   Male,
   Female,
   Infant,
   Unknown
}
