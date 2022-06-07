

test('CashRegister functions test', () => {

   const passengerBuilder = new PassengerBuilder();
   const journeysBuilder = new JourneysBuilder();

   const passenger1 = passengerBuilder.CreatePassenger();
   const journeys1 = journeysBuilder.BuildJourneys();

   const booking1 = new Airline.Booking.Booking();
   booking1.AddPassenger(booking1.id, passenger1);
   booking1.SelectJourneys(journeys1);

   expect(() => stands[0].startNewPurchase()).toThrow('ERROR!!! In the middle of another bill');
});


/*
stands[0].changeWorker(cashiers[1]);
stands[1].changeWorker(cashiers[0]);

stands[0].startNewPurchase();

stands[0].addProduct(products[1]);
stands[0].addProduct(products[1]);
stands[0].addProduct(products[0]);


const consumer = new Consumer(true);
const bill = stands[0].endPurchase(consumer);
console.log(bill) //114


*/
