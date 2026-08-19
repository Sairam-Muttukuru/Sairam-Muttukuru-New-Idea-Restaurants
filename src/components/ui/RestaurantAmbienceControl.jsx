import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Flame, Music, Sparkles, SlidersHorizontal, Radio, X } from 'lucide-react';

export default function RestaurantAmbienceControl({ externalPlayState, onToggleExternal }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.35);
  const [soundscape, setSoundscape] = useState('tandoor'); // 'tandoor', 'hearth', 'acoustic'
  const [expanded, setExpanded] = useState(false);

  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);
  const sizzleNodeRef = useRef(null);
  const droneNodeRef = useRef(null);

  // Initialize Web Audio API synthesized restaurant soundscape
  const startAmbience = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;

      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Master Gain
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(volume, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // 1. Synthesize Tandoor Sizzle / Crackle Noise
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Bandpass Filter for sizzling tandoor pan sound
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = soundscape === 'tandoor' ? 2400 : 1200;
      filter.Q.value = 1.8;

      const sizzleGain = ctx.createGain();
      sizzleGain.gain.setValueAtTime(0.08, ctx.currentTime);

      whiteNoise.connect(filter);
      filter.connect(sizzleGain);
      sizzleGain.connect(masterGain);
      whiteNoise.start();
      sizzleNodeRef.current = whiteNoise;

      // 2. Synthesize Warm Acoustic / Low Frequency Hearth Drone
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(soundscape === 'acoustic' ? 146.83 : 110.0, ctx.currentTime); // D3 / A2 warm chord

      const oscGain = ctx.createGain();
      oscGain.gain.setValueAtTime(0.04, ctx.currentTime);

      osc.connect(oscGain);
      oscGain.connect(masterGain);
      osc.start();
      droneNodeRef.current = osc;

      setIsPlaying(true);
    } catch (e) {
      console.warn('Web Audio Context not allowed until user interaction', e);
    }
  };

  const stopAmbience = () => {
    if (sizzleNodeRef.current) {
      try { sizzleNodeRef.current.stop(); } catch (e) {}
      sizzleNodeRef.current = null;
    }
    if (droneNodeRef.current) {
      try { droneNodeRef.current.stop(); } catch (e) {}
      droneNodeRef.current = null;
    }
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopAmbience();
    } else {
      startAmbience();
    }
  };

  useEffect(() => {
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(volume, audioCtxRef.current.currentTime);
    }
  }, [volume]);

  useEffect(() => {
    if (isPlaying) {
      stopAmbience();
      startAmbience();
    }
  }, [soundscape]);

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end">
      
      {/* Expanded Control Box */}
      {expanded && (
        <div className="mb-3 glass-dhaba border border-[#FFB300]/40 rounded-2xl p-4 w-72 shadow-2xl space-y-3 animate-in fade-in slide-in-from-bottom-3 duration-300">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-2 text-xs font-black text-[#FFB300] uppercase tracking-wider">
              <Flame className="w-4 h-4 text-[#FF5722] fill-current animate-pulse" />
              <span>Restaurant Soundscape</span>
            </div>
            <button 
              onClick={() => setExpanded(false)}
              className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-[11px] text-[#A89B8C]">
            Experience live kitchen hearth sizzles and warm acoustic dining ambiance while browsing.
          </p>

          {/* Soundscape Presets */}
          <div className="grid grid-cols-3 gap-1.5 pt-1">
            <button
              onClick={() => setSoundscape('tandoor')}
              className={`py-1.5 px-2 rounded-lg text-[10px] font-bold border transition-all flex items-center justify-center gap-1 ${
                soundscape === 'tandoor'
                  ? 'bg-[#E65100]/30 border-[#FFB300] text-[#FFB300]'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
              }`}
            >
              <Flame className="w-3 h-3" /> Tandoor
            </button>
            <button
              onClick={() => setSoundscape('hearth')}
              className={`py-1.5 px-2 rounded-lg text-[10px] font-bold border transition-all flex items-center justify-center gap-1 ${
                soundscape === 'hearth'
                  ? 'bg-[#E65100]/30 border-[#FFB300] text-[#FFB300]'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
              }`}
            >
              <Utensils className="w-3 h-3" /> Kitchen
            </button>
            <button
              onClick={() => setSoundscape('acoustic')}
              className={`py-1.5 px-2 rounded-lg text-[10px] font-bold border transition-all flex items-center justify-center gap-1 ${
                soundscape === 'acoustic'
                  ? 'bg-[#E65100]/30 border-[#FFB300] text-[#FFB300]'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
              }`}
            >
              <Music className="w-3 h-3" /> Dining
            </button>
          </div>

          {/* Volume Control Slider */}
          <div className="pt-2 flex items-center gap-3">
            <VolumeX className="w-3.5 h-3.5 text-gray-400" />
            <input 
              type="range" 
              min="0" 
              max="0.8" 
              step="0.02" 
              value={volume} 
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-full accent-[#FFB300] h-1.5 bg-gray-800 rounded-lg cursor-pointer"
            />
            <Volume2 className="w-3.5 h-3.5 text-[#FFB300]" />
          </div>
        </div>
      )}

      {/* Main Floating Trigger Pill */}
      <div className="flex items-center gap-2">
        <button
          onClick={togglePlay}
          className={`flex items-center gap-3 px-4 py-3 rounded-full font-bold text-xs shadow-2xl transition-all duration-300 border ${
            isPlaying
              ? 'bg-[#E65100] text-white border-[#FFB300] shadow-[#E65100]/40 scale-105'
              : 'glass-dhaba text-gray-200 border-[#D84315]/40 hover:border-[#FFB300]'
          }`}
        >
          {isPlaying ? (
            <>
              <div className="flex items-end gap-0.5 h-4 w-4">
                <span className="w-1 bg-white rounded-full animate-sound-bar-1" />
                <span className="w-1 bg-white rounded-full animate-sound-bar-2" />
                <span className="w-1 bg-white rounded-full animate-sound-bar-3" />
                <span className="w-1 bg-white rounded-full animate-sound-bar-4" />
              </div>
              <span>Restaurant Ambience ON</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-[#FFB300]" />
              <span>Play Restaurant Sound</span>
            </>
          )}
        </button>

        <button
          onClick={() => setExpanded(!expanded)}
          className="glass-dhaba p-3 rounded-full border border-white/10 text-gray-300 hover:text-[#FFB300] hover:border-[#FFB300]/40 transition-colors shadow-xl"
          title="Soundscape Settings"
        >
          <SlidersHorizontal className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
