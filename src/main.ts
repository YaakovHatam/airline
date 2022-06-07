import { Booking } from "./Booking/Models";
import { PassengerBuilder, JourneysBuilder } from "./Booking/builders";

const passengerBuilder = new PassengerBuilder();
const journeysBuilder = new JourneysBuilder();

const passenger1 = passengerBuilder.CreatePassenger();
const journeys1 = journeysBuilder.BuildJourneys();

const booking1 = new Booking();
booking1.AddPassenger(booking1.id, passenger1);
booking1.SelectJourneys(journeys1);