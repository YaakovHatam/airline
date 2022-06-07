import { Flight } from ".";

export class Journey {
   public arriveDate: Date;
   public arriveStation: string;
   public departureDate: Date;
   public departureStation: string;
   public description: string;
   public flight: Flight;
   public journeyKey: string;
}
