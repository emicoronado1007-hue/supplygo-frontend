import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">🚀 SUPPLY GO</h1>
          <p className="text-xl mb-8">Plataforma B2B para gestión de pedidos y servicios</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
            Comenzar
          </button>
        </div>
      </div>
    </div>
  );
}
