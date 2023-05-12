export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: 'Alfonso',
};

const passenger2: Passenger = {
  name: 'Eduardo',
  children: ['Joan', 'Andrea'],
};

const returnChildrenNumber = (passenger: Passenger) => {
  const howManyChildren = passenger.children!.length;
  console.log(passenger.name, howManyChildren);
};

const printChildren = (passenger: Passenger) => {
  const howManyChildren = passenger.children?.length || 0;
  console.log(passenger.name, howManyChildren);
};

printChildren(passenger1);
returnChildrenNumber(passenger1);
