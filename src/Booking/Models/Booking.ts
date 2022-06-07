import { Passenger } from ".";
import { JourneyValidations, PassengerValidations } from "../Validations";
import { Journey } from "./Trip";


export class Booking {

   public id: string; // KEY
   public passengers: Passenger[];
   public journeys: Journey[];

   /**
    * iniatlize `passengers` and `journeys` to empty arrays
    */
   constructor() {
      this.passengers = new Array();
      this.journeys = new Array();
   }

   SelectJourneys(journeys: Journey[]) {
      JourneyValidations.JourneyValidation(journeys[0]);
      this.journeys = journeys;
   }

   AddPassenger(BookingId: string, passenger: Passenger): void {
      PassengerValidations.PassengerValidation(passenger);
      this.passengers.push(passenger);
   }

   UpdatePassengerName(passengerKey: string, name: string): void {
      PassengerValidations.PassengerNameValidation(name);
      // update name in array
   }
}
