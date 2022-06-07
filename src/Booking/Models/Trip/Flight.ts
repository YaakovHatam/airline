
export class Flight {
   public aircraft: Aircraft;
   public arriveDate: Date;
   public arriveStation: string;
   public departureDate: Date;
   public departureStation: string;
   public flightKey: string;
   public number: string;
   public price: number;
}

export enum Aircraft {
   A320,
   A380,
   Boeing707,
   Boeing717,
   Boeing737
}
