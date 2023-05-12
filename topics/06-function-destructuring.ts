export interface Product {
  description: string;
  price: number;
}

interface taxCalculationOptions {
  tax: number;
  products: Product[];
}

const phone: Product = {
  description: 'Nokia A1',
  price: 150,
};

const tablet: Product = {
  description: 'Ipad Air',
  price: 250,
};

export function taxCalculation(options: taxCalculationOptions): [number, number] {
  const { tax, products } = options;
  let total = 0;
  options.products.forEach(({ price }) => {
    total += price;
  });
  return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxTotal] = taxCalculation({
  products: shoppingCart,
  tax: tax,
});
console.log('Total: ', total);
console.log('Tax: ', taxTotal);
export {};
