cat > pages/index.js << 'EOF'
import React, { useState } from 'react';
import { Search, ArrowUp, ArrowDown, Clock, Box, Activity, ArrowRight } from 'lucide-react';
import Head from 'next/head';

export default function DogeGoldExplorer() {
  return (
    <>
      <Head>
        <title>DogeGold Explorer</title>
        <meta name="description" content="DogeGold L2 Block Explorer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <span className="text-xl font-bold text-yellow-500">DogeGold Explorer</span>
              </div>
              <div className="flex items-center space-x-4">
                <button className="px-4 py-2 text-sm">Blockchain</button>
                <button className="px-4 py-2 text-sm">Tokens</button>
                <button className="px-4 py-2 text-sm">NFTs</button>
                <button className="px-4 py-2 text-sm">Resources</button>
              </div>
            </div>
          </div>
        </nav>

        {/* Search Section */}
        <div className="bg-blue-600 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <input 
                type="text"
                placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
                className="w-full p-4 pl-12 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-4 top-4 h-6 w-6 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">DGOLD Price</span>
                <Activity className="h-5 w-5 text-gray-400" />
              </div>
              <div className="mt-2 text-lg font-semibold">$0.0854</div>
              <div className="text-green-500 text-sm">+2.34%</div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Market Cap</span>
                <Box className="h-5 w-5 text-gray-400" />
              </div>
              <div className="mt-2 text-lg font-semibold">$1.2B</div>
              <div className="text-green-500 text-sm">+1.2%</div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Transactions</span>
                <ArrowUp className="h-5 w-5 text-gray-400" />
              </div>
              <div className="mt-2 text-lg font-semibold">2,543.25 TPS</div>
              <div className="text-gray-500 text-sm">Last 24h</div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Last Finalized</span>
                <Clock className="h-5 w-5 text-gray-400" />
              </div>
              <div className="mt-2 text-lg font-semibold">#12,345,678</div>
              <div className="text-gray-500 text-sm">2 secs ago</div>
            </div>
          </div>
        </div>

        {/* Latest Transactions & Blocks */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Latest Transactions */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b">
                <h2 className="text-lg font-semibold">Latest Transactions</h2>
              </div>
              <div className="divide-y">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <ArrowRight className="h-5 w-5 text-blue-500" />
                        </div>
                        <div>
                          <div className="text-blue-500 font-mono">0x3a2d...8e9f</div>
                          <div className="text-sm text-gray-500">2 mins ago</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm">123.45 DGOLD</div>
                        <div className="text-sm text-gray-500">$10.54</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Latest Blocks */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b">
                <h2 className="text-lg font-semibold">Latest Blocks</h2>
              </div>
              <div className="divide-y">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="bg-gray-100 p-2 rounded-lg">
                          <Box className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <div className="text-blue-500">#{12345678 - i}</div>
                          <div className="text-sm text-gray-500">1 min ago</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm">Validator: 0x1a2b...3c4d</div>
                        <div className="text-sm text-gray-500">128 txns</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
EOF
