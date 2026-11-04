import test from 'node:test';
import assert from 'node:assert/strict';
import { parseCSV, exportToCSV } from './csvParser.ts';
import { Product } from '../types/index.ts';

test('parseCSV correctly handles standard CSV rows', () => {
  const csv = `id,name,category,subcategory,brand,stores,price,featured,newArrival,description
MS-2001,Montessori Rainbow Tower,Educational Toys,Wooden,M.S. Atelier,shop2|shop3,1250,true,true,Handcrafted rainbow arches.`;

  const products = parseCSV(csv);
  assert.equal(products.length, 1);
  assert.equal(products[0].id, 'MS-2001');
  assert.equal(products[0].name, 'Montessori Rainbow Tower');
  assert.equal(products[0].category, 'Educational Toys');
  assert.equal(products[0].price, 1250);
  assert.equal(products[0].featured, true);
  assert.deepEqual(products[0].stores, ['shop2', 'shop3']);
});

test('parseCSV handles commas inside quoted fields', () => {
  const csv = `id,name,category,subcategory,brand,stores,price,featured,newArrival,description
MS-2002,"Luxury Diffuser, Porcelain & Brass",Home Decoration,Lamps,Aura Living,shop1|shop3,"1,890",true,false,"Porcelain reed diffuser, and brass tray."`;

  const products = parseCSV(csv);
  assert.equal(products.length, 1);
  assert.equal(products[0].name, 'Luxury Diffuser, Porcelain & Brass');
  assert.equal(products[0].price, 1890);
  assert.equal(products[0].description, 'Porcelain reed diffuser, and brass tray.');
});

test('exportToCSV converts products back to valid CSV format', () => {
  const sampleProducts: Product[] = [
    {
      id: 'MS-2003',
      name: 'Plush Elephant Pillow',
      category: 'Soft Toys',
      subcategory: 'Plush',
      brand: 'CuddleCraft',
      stores: ['shop2'],
      price: 990,
      featured: false,
      newArrival: true,
      description: 'Hypoallergenic elephant pillow.',
      image: '',
      inStock: true
    }
  ];

  const exported = exportToCSV(sampleProducts);
  assert.ok(exported.includes('MS-2003'));
  assert.ok(exported.includes('Plush Elephant Pillow'));
  assert.ok(exported.includes('₹990'));
});
