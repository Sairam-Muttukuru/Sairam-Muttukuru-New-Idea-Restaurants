import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, Database, Server, Check, Plus, Edit2, Trash2, Box, Sparkles, Layers } from 'lucide-react';
import { menuItems } from '../../data/menuScanData';

export default function AdminMenuDashboard({ isOpen, onClose, onSaveDish }) {
  const [activeTab, setActiveTab] = useState('items'); // 'items', 'architecture', 'upload'
  const [items, setItems] = useState(menuItems);
  const [selectedItem, setSelectedItem] = useState(null);

  // Form State
  const [formName, setFormName] = useState('');
  const [formPrice, setFormPrice] = useState('');
  const [formCategory, setFormCategory] = useState('chicken');
  const [formDesc, setFormDesc] = useState('');
  const [formImage, setFormImage] = useState('');
  const [formModel3d, setFormModel3d] = useState('');
  const [formAvailable, setFormAvailable] = useState(true);

  if (!isOpen) return null;

  const handleEditItem = (item) => {
    setSelectedItem(item);
    setFormName(item.name);
    setFormPrice(item.price);
    setFormCategory(item.category || 'chicken');
    setFormDesc(item.description);
    setFormImage(item.image || '');
    setFormModel3d(item.model3dUrl || `${item.id}.glb`);
    setFormAvailable(item.available !== false);
    setActiveTab('upload');
  };

  const handleSaveForm = (e) => {
    e.preventDefault();
    const updatedDish = {
      id: selectedItem ? selectedItem.id : `dish_${Date.now()}`,
      name: formName,
      price: formPrice,
      category: formCategory,
      description: formDesc,
      image: formImage || 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800',
      model3dUrl: formModel3d,
      available: formAvailable,
      rating: '4.8',
      reviewsCount: 120,
      tag: 'NEW 3D DISH'
    };

    if (selectedItem) {
      setItems(items.map((i) => (i.id === selectedItem.id ? updatedDish : i)));
    } else {
      setItems([updatedDish, ...items]);
    }

    if (onSaveDish) onSaveDish(updatedDish);
    setSelectedItem(null);
    setActiveTab('items');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[1200] flex items-center justify-center p-4 bg-[#0C0908]/95 backdrop-blur-2xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-5xl h-[85vh] glass-dhaba border border-[#FFB300]/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        >
          {/* Header */}
          <div className="p-6 bg-[#17120F] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E65100]/20 border border-[#FFB300]/40 flex items-center justify-center text-[#FFB300]">
                <Box className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif-title font-extrabold text-xl text-white">
                  Restaurant Owner 3D Menu Dashboard
                </h3>
                <p className="text-xs text-[#A89B8C]">
                  Manage dishes, upload GLB 3D models, edit pricing, and inspect Spring Boot & PostgreSQL architecture.
                </p>
              </div>
            </div>

            <button onClick={onClose} className="p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white border border-white/10">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="px-6 py-3 bg-[#120D0A] border-b border-white/10 flex items-center gap-4 text-xs font-extrabold">
            <button
              onClick={() => setActiveTab('items')}
              className={`px-4 py-2 rounded-xl flex items-center gap-2 border transition-all ${
                activeTab === 'items' ? 'bg-[#E65100]/30 border-[#FFB300] text-[#FFB300]' : 'border-white/5 text-gray-400 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" /> Menu Items ({items.length})
            </button>

            <button
              onClick={() => {
                setSelectedItem(null);
                setFormName('');
                setFormPrice('₹220');
                setFormDesc('');
                setFormModel3d('');
                setActiveTab('upload');
              }}
              className={`px-4 py-2 rounded-xl flex items-center gap-2 border transition-all ${
                activeTab === 'upload' ? 'bg-[#E65100]/30 border-[#FFB300] text-[#FFB300]' : 'border-white/5 text-gray-400 hover:text-white'
              }`}
            >
              <Upload className="w-4 h-4" /> Upload 3D Model / Add Dish
            </button>

            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-4 py-2 rounded-xl flex items-center gap-2 border transition-all ${
                activeTab === 'architecture' ? 'bg-[#E65100]/30 border-[#FFB300] text-[#FFB300]' : 'border-white/5 text-gray-400 hover:text-[#FFB300]'
              }`}
            >
              <Database className="w-4 h-4" /> Spring Boot + PostgreSQL Architecture
            </button>
          </div>

          {/* Tab Contents */}
          <div className="p-6 overflow-y-auto flex-1 bg-[#17120F]">
            
            {/* TAB 1: Menu Items List */}
            {activeTab === 'items' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-extrabold text-white">Live Dhaba Menu Database</h4>
                  <button
                    onClick={() => {
                      setSelectedItem(null);
                      setActiveTab('upload');
                    }}
                    className="btn-dhaba-gold text-xs py-2 px-4 font-bold flex items-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" /> Add New Dish with 3D Model
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {items.map((item) => (
                    <div key={item.id} className="glass-dhaba p-4 rounded-2xl border border-white/10 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <img src={item.image} alt={item.name} className="w-14 h-14 rounded-xl object-cover border border-white/10" />
                        <div>
                          <h5 className="font-extrabold text-white text-sm">{item.name}</h5>
                          <span className="text-xs text-[#FFB300] font-bold block">{item.price}</span>
                          <span className="text-[10px] text-gray-400 block mt-0.5">3D Model: {item.model3dUrl || 'pepper-chicken.glb'}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleEditItem(item)}
                          className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#FFB300] hover:bg-white/10"
                          title="Edit Dish & 3D Model"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: Upload / Edit Form */}
            {activeTab === 'upload' && (
              <form onSubmit={handleSaveForm} className="max-w-2xl mx-auto space-y-5">
                <h4 className="text-base font-extrabold text-white border-b border-white/10 pb-3">
                  {selectedItem ? `Edit 3D Model: ${selectedItem.name}` : 'Upload New Dish & 3D Model'}
                </h4>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-300 block mb-1">Dish Name</label>
                    <input 
                      type="text" 
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      required
                      placeholder="e.g. Pepper Chicken"
                      className="w-full bg-[#0C0908] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FFB300]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-300 block mb-1">Price (INR)</label>
                    <input 
                      type="text" 
                      value={formPrice}
                      onChange={(e) => setFormPrice(e.target.value)}
                      required
                      placeholder="e.g. ₹280"
                      className="w-full bg-[#0C0908] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FFB300]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1">Category</label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    className="w-full bg-[#0C0908] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FFB300]"
                  >
                    <option value="chicken">Chicken Delights</option>
                    <option value="mutton">Mutton Specials</option>
                    <option value="starters">Starters & Tandoori</option>
                    <option value="veg">Veg & Paneer</option>
                    <option value="tiffins">Tiffins & Rice</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1">Upload 3D Model File (.GLB / .GLTF)</label>
                  <div className="p-4 border-2 border-dashed border-[#FFB300]/40 rounded-2xl bg-white/5 text-center space-y-2">
                    <Box className="w-8 h-8 text-[#FFB300] mx-auto" />
                    <p className="text-xs font-bold text-white">Drag & Drop 3D Model (.glb) file here or specify URL</p>
                    <input 
                      type="text"
                      value={formModel3d}
                      onChange={(e) => setFormModel3d(e.target.value)}
                      placeholder="https://cdn.simhapuridhaba.com/models/pepper-chicken.glb"
                      className="w-full bg-[#0C0908] border border-white/10 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-[#FFB300]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1">Food Image Photograph URL</label>
                  <input 
                    type="text" 
                    value={formImage}
                    onChange={(e) => setFormImage(e.target.value)}
                    placeholder="https://images.unsplash.com/photo-..."
                    className="w-full bg-[#0C0908] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FFB300]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1">Description & Spices</label>
                  <textarea 
                    rows={3}
                    value={formDesc}
                    onChange={(e) => setFormDesc(e.target.value)}
                    placeholder="Enter dish preparation details..."
                    className="w-full bg-[#0C0908] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FFB300]"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button type="button" onClick={() => setActiveTab('items')} className="btn-dhaba-outline text-xs py-3 px-6 font-bold">
                    Cancel
                  </button>
                  <button type="submit" className="btn-dhaba-primary text-xs py-3 px-6 font-extrabold flex items-center gap-1.5">
                    <Check className="w-4 h-4" /> Save & Sync 3D Dish
                  </button>
                </div>
              </form>
            )}

            {/* TAB 3: Spring Boot + PostgreSQL Architecture Integration */}
            {activeTab === 'architecture' && (
              <div className="space-y-6 text-xs text-gray-300">
                <div className="glass-dhaba p-5 rounded-2xl border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 font-bold text-white text-sm">
                    <Server className="w-4 h-4 text-[#FFB300]" /> Real Data Architecture Architecture
                  </div>
                  <p className="text-xs text-[#A89B8C] leading-relaxed">
                    The 3D model files are NOT stored inside PostgreSQL directly. They are stored in S3/CDN object storage while PostgreSQL stores the <code className="text-[#FFB300]">model_3d_url</code> reference string for zero-delay loading.
                  </p>
                </div>

                {/* Database Schema */}
                <div className="space-y-2">
                  <h5 className="font-extrabold text-white text-xs uppercase tracking-wider flex items-center gap-2">
                    <Database className="w-3.5 h-3.5 text-[#FF5722]" /> PostgreSQL Table Schema
                  </h5>
                  <pre className="p-4 rounded-xl bg-black border border-white/10 text-[11px] text-emerald-400 font-mono overflow-x-auto leading-relaxed">
{`CREATE TABLE menu_items (
    id BIGSERIAL PRIMARY KEY,
    restaurant_id BIGINT NOT NULL,
    category_id VARCHAR(50) NOT NULL,
    name VARCHAR(150) NOT NULL,
    description TEXT,
    price VARCHAR(30) NOT NULL,
    vegetarian BOOLEAN DEFAULT FALSE,
    image_url VARCHAR(500),
    model_3d_url VARCHAR(500), -- S3/CDN URL to .glb file
    available BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`}
                  </pre>
                </div>

                {/* Spring Boot Entity */}
                <div className="space-y-2">
                  <h5 className="font-extrabold text-white text-xs uppercase tracking-wider flex items-center gap-2">
                    <Server className="w-3.5 h-3.5 text-[#FFB300]" /> Spring Boot JPA Entity (MenuItem.java)
                  </h5>
                  <pre className="p-4 rounded-xl bg-black border border-white/10 text-[11px] text-amber-300 font-mono overflow-x-auto leading-relaxed">
{`@Entity
@Table(name = "menu_items")
public class MenuItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private String price;
    private String imageUrl;
    
    @Column(name = "model_3d_url")
    private String model3dUrl; // GLB reference
    
    private Boolean available = true;

    // Getters and Setters...
}`}
                  </pre>
                </div>
              </div>
            )}

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
