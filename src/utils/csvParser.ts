import { Product, StoreId } from '../types';

export function parseCSV(text: string): Product[] {
  const lines = text.split(/\r?\n/).filter(line => line.trim().length > 0);
  if (lines.length < 2) return [];

  // Parse CSV line taking quotes into account
  const parseLine = (line: string): string[] => {
    const result: string[] = [];
    let cur = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"' || char === "'") {
        if (inQuotes && line[i + 1] === char) {
          cur += char;
          i++; // skip escaped quote
        } else {
          inQuotes = !inQuotes;
        }
      } else if (char === ',' && !inQuotes) {
        result.push(cur.trim());
        cur = '';
      } else {
        cur += char;
      }
    }
    result.push(cur.trim());
    return result;
  };

  const headers = parseLine(lines[0]).map(h => h.toLowerCase().replace(/[^a-z0-9]/g, ''));
  const products: Product[] = [];

  for (let i = 1; i < lines.length; i++) {
    const cols = parseLine(lines[i]);
    if (cols.length < 2 || !cols.some(c => c.length > 0)) continue;

    const row: Record<string, string> = {};
    headers.forEach((h, idx) => {
      row[h] = cols[idx] || '';
    });

    const rawStores = (row['stores'] || row['store'] || 'shop3').toLowerCase();
    const stores: StoreId[] = [];
    if (rawStores.includes('shop1') || rawStores.includes('1')) stores.push('shop1');
    if (rawStores.includes('shop2') || rawStores.includes('2')) stores.push('shop2');
    if (rawStores.includes('shop3') || rawStores.includes('3')) stores.push('shop3');
    if (stores.length === 0) stores.push('shop3');

    const cleanPrice = parseFloat((row['price'] || '990').replace(/[^0-9.]/g, '')) || 990;

    const category = row['category'] || 'Toys & Gifts';
    const subcategory = row['subcategory'] || 'General Collection';
    const id = row['id'] || `MS-${2100 + i}`;
    const name = row['name'] || `Curated Item ${i}`;

    products.push({
      id,
      name,
      category,
      subcategory,
      brand: row['brand'] || 'M.S. Showroom Selection',
      stores,
      price: cleanPrice,
      originalPrice: cleanPrice * 1.25,
      featured: row['featured']?.toLowerCase() === 'true' || row['featured'] === '1',
      newArrival: row['newarrival']?.toLowerCase() === 'true' || row['newarrival'] === '1',
      description: row['description'] || 'Authentic selection available at M.S. Toys & Gifts retail stores in Ahmedabad.',
      image: row['image'] || 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=700&q=80',
      rating: 4.8,
      inStock: true
    });
  }

  return products;
}

export function exportToCSV(products: Product[]): string {
  const headers = ['id', 'name', 'category', 'subcategory', 'brand', 'stores', 'price', 'featured', 'newArrival', 'description'];
  const rows = products.map(p => {
    return [
      `"${p.id}"`,
      `"${p.name.replace(/"/g, '""')}"`,
      `"${p.category.replace(/"/g, '""')}"`,
      `"${p.subcategory.replace(/"/g, '""')}"`,
      `"${p.brand.replace(/"/g, '""')}"`,
      `"${p.stores.join('|')}"`,
      `"₹${p.price}"`,
      `"${p.featured}"`,
      `"${p.newArrival}"`,
      `"${p.description.replace(/"/g, '""')}"`
    ].join(',');
  });

  return [headers.join(','), ...rows].join('\n');
}
