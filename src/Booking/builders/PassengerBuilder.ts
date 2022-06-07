import { Passenger, PassengerType } from "../Models";


export class PassengerBuilder {
   public CreatePassenger(): Passenger {
      return {
         name: "someOne",
         age: 12,
         email: "some@one.com",
         passengerType: PassengerType.Male
      } as Passenger;

   }
}
