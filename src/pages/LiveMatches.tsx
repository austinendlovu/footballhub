
import React from 'react';
import Navbar from '@/components/Navbar';

const sampleMatches = [
  {
    id: 1,
    teamA: "Liverpool",
    teamB: "Arsenal",
    scoreA: 2,
    scoreB: 2,
    status: "LIVE",
    minute: 78,
  },
  {
    id: 2,
    teamA: "Barcelona",
    teamB: "Atletico Madrid",
    scoreA: 1,
    scoreB: 0,
    status: "HT",
    minute: 45,
  },
  {
    id: 3,
    teamA: "Juventus",
    teamB: "Napoli",
    scoreA: 0,
    scoreB: 1,
    status: "FT",
    minute: 90,
  },
];

const LiveMatches = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      <div className="container mx-auto py-12 px-4 max-w-2xl">
        <h1 className="text-4xl font-bold mb-8">Live Football Matches</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-[#22223b] rounded-lg">
            <thead>
              <tr>
                <th className="py-3 px-6 text-left">Teams</th>
                <th className="py-3 px-4 text-center">Score</th>
                <th className="py-3 px-4 text-center">Status</th>
                <th className="py-3 px-4 text-center">Minute</th>
              </tr>
            </thead>
            <tbody>
              {sampleMatches.map(match => (
                <tr key={match.id} className="border-b border-gray-800">
                  <td className="py-2 px-6 font-medium">{match.teamA} <span className="text-gray-400">vs</span> {match.teamB}</td>
                  <td className="py-2 px-4 text-center">{match.scoreA} - {match.scoreB}</td>
                  <td className="py-2 px-4 text-center font-bold">
                    <span className={
                            match.status === "LIVE"
                              ? "text-green-400"
                              : match.status === "HT"
                              ? "text-yellow-400"
                              : "text-gray-400"
                          }
                    >{match.status}</span>
                  </td>
                  <td className="py-2 px-4 text-center">{match.minute}'</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LiveMatches;

