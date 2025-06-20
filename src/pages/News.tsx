
import React from 'react';
import Navbar from '@/components/Navbar';

const sampleNews = [
  {
    id: 1,
    title: "Champions League Final: Manchester City vs Real Madrid",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    snippet: "The Champions League final will feature Manchester City taking on Real Madrid in Istanbul. Both teams are in top form and fans expect a thrilling encounter under the lights.",
    date: "2024-05-18",
  },
  {
    id: 2,
    title: "Lionel Messi Reaches 800 Career Goals",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
    snippet: "Messi continues to break football records, scoring his 800th career goal in last night's victory over Atletico.",
    date: "2024-05-16",
  },
  {
    id: 3,
    title: "Women’s World Cup: Historic Viewership",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80",
    snippet: "The Women’s World Cup drew historic audiences this season, showcasing the growing popularity of women’s football worldwide.",
    date: "2024-05-10",
  },
];

const News = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      <div className="container mx-auto py-12 px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Football News</h1>
        <div className="space-y-8">
          {sampleNews.map(article => (
            <article key={article.id} className="flex flex-col md:flex-row bg-[#22223b] rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
              <img src={article.image} alt={article.title} className="w-full md:w-48 h-48 object-cover" />
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
                  <p className="text-gray-300">{article.snippet}</p>
                </div>
                <time className="block mt-4 text-sm text-gray-400">{new Date(article.date).toLocaleDateString()}</time>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;

