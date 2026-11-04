import React, { useState } from 'react';
import { Product } from '../types';
import { parseCSV, exportToCSV } from '../utils/csvParser';
import { X, Upload, Download, FileSpreadsheet, Check, AlertCircle } from 'lucide-react';

interface CsvImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onImportProducts: (newProducts: Product[], mode: 'append' | 'replace') => void;
}

export const CsvImportModal: React.FC<CsvImportModalProps> = ({
  isOpen,
  onClose,
  products,
  onImportProducts
}) => {
  const [csvText, setCsvText] = useState('');
  const [importMode, setImportMode] = useState<'append' | 'replace'>('append');
  const [feedback, setFeedback] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      const content = evt.target?.result as string;
      setCsvText(content || '');
    };
    reader.readAsText(file);
  };

  const handleRunImport = () => {
    if (!csvText.trim()) {
      setFeedback({ message: 'Please paste or upload CSV data first.', type: 'error' });
      return;
    }

    try {
      const parsed = parseCSV(csvText);
      if (parsed.length === 0) {
        setFeedback({ message: 'No valid product rows found. Check your CSV format.', type: 'error' });
        return;
      }

      onImportProducts(parsed, importMode);
      setFeedback({ message: `Successfully imported ${parsed.length} showroom items!`, type: 'success' });
      setTimeout(() => {
        setFeedback(null);
        onClose();
      }, 1400);
    } catch {
      setFeedback({ message: 'Error parsing CSV file. Please verify columns.', type: 'error' });
    }
  };

  const handleDownloadCurrentCSV = () => {
    const csv = exportToCSV(products);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `ms-toys-gifts-catalogue-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLoadSampleCSV = () => {
    const sample = `id,name,category,subcategory,brand,stores,price,featured,newArrival,description
MS-2001,Montessori Rainbow Stacking Tower,Educational Toys,Wooden & Montessori,M.S. Atelier Woodworks,shop2|shop3,₹1250,true,true,Handcrafted wooden rainbow arches in brand pastel tones.
MS-2002,Luxury Housewarming Ceramic Diffuser Set,Home Decoration,Tabletop & Lamps,Aura Living Décor,shop1|shop3,₹1890,true,false,Fluted porcelain reed diffuser and brass tray in gift box.
MS-2003,Plush Pastel Elephant Nursery Cushion,Soft Toys,Plush Companions,CuddleCraft Studio,shop2|shop3,₹990,false,true,Hypoallergenic ultra-soft baby elephant cuddle pillow.
MS-2004,Artist 48-Piece Pastel Acrylic & Easel Box,Stationery & School Supplies,Art & School Kits,PaperLoom India,shop3,₹2150,true,true,Beechwood tabletop easel with 48 studio pigments and brushes.`;
    setCsvText(sample);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-[#18365B]/15 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#F7F0E5] text-[#18365B] hover:bg-[#E9787B] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-1">
          <FileSpreadsheet className="w-5 h-5 text-[#E9787B]" />
          <h3 className="font-heading font-black text-2xl text-[#18365B]">
            Catalogue CSV Manager
          </h3>
        </div>
        <p className="text-xs text-[#26384B]/70 mb-6">
          Import new stock directly from Excel/CSV or export current showroom inventory.
        </p>

        {feedback && (
          <div
            className={`p-3 rounded-xl mb-4 text-xs font-bold flex items-center gap-2 ${feedback.type === 'success' ? 'bg-[#D9F5E6] text-[#25D366]' : 'bg-[#FCEEEF] text-[#E9787B]'}`}
          >
            {feedback.type === 'success' ? <Check className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
            <span>{feedback.message}</span>
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#18365B] mb-1.5">
              Paste CSV or Drag &amp; Drop (.csv file):
            </label>
            <textarea
              rows={6}
              value={csvText}
              onChange={(e) => setCsvText(e.target.value)}
              placeholder="id,name,category,subcategory,brand,stores,price,featured,newArrival,description..."
              className="w-full p-3 font-mono text-xs rounded-xl bg-[#FFF9F0] border border-[#18365B]/20 text-[#18365B] focus:outline-none focus:border-[#E9787B]"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            <label className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F7F0E5] hover:bg-[#EAF5FA] cursor-pointer text-[#18365B] font-bold border border-[#18365B]/10 transition-colors">
              <Upload className="w-3.5 h-3.5" />
              <span>Choose CSV File</span>
              <input
                type="file"
                accept=".csv"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>

            <button
              type="button"
              onClick={handleLoadSampleCSV}
              className="text-[#69B6D6] hover:underline font-bold"
            >
              Fill Sample Data
            </button>
          </div>

          {/* Mode */}
          <div className="pt-2 border-t border-[#18365B]/10 flex items-center gap-4 text-xs font-semibold text-[#18365B]">
            <span className="font-bold">Import Action:</span>
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="radio"
                name="importMode"
                checked={importMode === 'append'}
                onChange={() => setImportMode('append')}
                className="text-[#E9787B] focus:ring-[#E9787B]"
              />
              <span>Append to existing</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="radio"
                name="importMode"
                checked={importMode === 'replace'}
                onChange={() => setImportMode('replace')}
                className="text-[#E9787B] focus:ring-[#E9787B]"
              />
              <span>Replace entire catalogue</span>
            </label>
          </div>

          {/* Action buttons */}
          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handleRunImport}
              className="flex-1 py-3 px-4 rounded-xl bg-[#18365B] text-white text-xs font-bold hover:bg-[#26384B] transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <Upload className="w-4 h-4" />
              <span>Process CSV Import</span>
            </button>

            <button
              type="button"
              onClick={handleDownloadCurrentCSV}
              className="py-3 px-4 rounded-xl bg-[#F7F0E5] text-[#18365B] text-xs font-bold hover:bg-[#EAF5FA] transition-colors flex items-center justify-center gap-2 border border-[#18365B]/15"
            >
              <Download className="w-4 h-4" />
              <span>Download Live CSV</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
