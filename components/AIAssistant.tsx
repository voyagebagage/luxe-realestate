
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { properties } from '../data';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; text: string }[]>([
    { role: 'assistant', text: "Hello! I'm your LuxeRealty Virtual Concierge. I can help you find luxury homes or answer questions about our current listings. What are you looking for today?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const context = properties.map(p => 
        `${p.title} at ${p.address} (${p.location}): ${p.price}, ${p.beds} beds, ${p.baths} baths, ${p.sqft} sqft. Category: ${p.category}. Description: ${p.description}`
      ).join('\n---\n');

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `You are a helpful and professional real estate concierge for "LuxeRealty". 
          Use the following listing data to answer questions and make recommendations. 
          Be sophisticated, helpful, and brief. If the user asks for a recommendation, 
          choose the best match from the list and explain why.
          
          Our Properties:
          ${context}`,
          temperature: 0.7,
        },
      });

      const assistantText = response.text || "I'm sorry, I couldn't process that right now. How else can I help you with our luxury listings?";
      setMessages(prev => [...prev, { role: 'assistant', text: assistantText }]);
    } catch (error) {
      console.error('AI Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', text: "Pardon me, I'm experiencing a minor connection issue. Please feel free to browse our listings manually." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[2000] flex flex-col items-end">
      {isOpen && (
        <div className="w-[350px] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col mb-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-[#1a365d] text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#d4af37] flex items-center justify-center text-[#1a365d]">
                <i className="fas fa-robot"></i>
              </div>
              <div>
                <p className="font-bold text-sm">Luxe Concierge</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                  <p className="text-[10px] text-slate-300">Online & Ready</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 w-8 h-8 rounded-full">
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                  ? 'bg-[#1a365d] text-white rounded-tr-none' 
                  : 'bg-white text-slate-700 shadow-sm border border-slate-200 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-200 flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-slate-100 bg-white rounded-b-2xl">
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Ask about properties..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-grow text-sm border border-slate-200 rounded-full px-4 py-2 focus:outline-none focus:border-[#1a365d]"
              />
              <button 
                onClick={handleSendMessage}
                disabled={isTyping}
                className="w-10 h-10 bg-[#1a365d] text-white rounded-full flex items-center justify-center hover:bg-[#2d3748] transition-colors disabled:opacity-50"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-[#d4af37] text-[#1a365d] rounded-full shadow-2xl flex items-center justify-center text-2xl hover:scale-110 active:scale-95 transition-all group relative"
      >
        <i className={`fas ${isOpen ? 'fa-comment-slash' : 'fa-comments'} group-hover:rotate-12 transition-transform`}></i>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-bounce border-2 border-[#f8fafc]">
            1
          </span>
        )}
      </button>
    </div>
  );
};

export default AIAssistant;
