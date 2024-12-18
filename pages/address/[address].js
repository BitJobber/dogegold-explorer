import React, { useState } from 'react';
import { Wallet, Clock, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function AddressDetails() {
  const router = useRouter();
  const { address } = router.query;
  const [activeTab, setActiveTab] = useState('transactions');

  return (
    <>
      <Head>
        <title>Address {address} | DogeGold Explorer</title>
      </Head>

      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <Link href="/" className="text-xl font-bold text-yellow-500">
              DogeGold Explorer
            </Link>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <div className="flex items-center space-x-3">
                <Wallet className="h-8 w-8 text-gray-400" />
                <div>
                  <h1 className="text-2xl font-semibold">Address</h1>
                  <p className="text-gray-500 font-mono">{address}</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-gray-500 text-sm">Balance</div>
                  <div className="font-semibold text-lg">1,234.56 DGOLD</div>
                  <div className="text-gray-500 text-sm">$12,345.67</div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-gray-500 text-sm">Transactions</div>
                  <div className="font-semibold text-lg">1,234</div>
                  <div className="text-gray-500 text-sm">Last 24h: 42</div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-gray-500 text-sm">Validator Status</div>
                  <div className="font-semibold text-lg">Active</div>
                  <div className="text-gray-500 text-sm">Staked: 50,000 DGOLD</div>
                </div>
              </div>

              {/* Tabs */}
              <div className="border-b mb-6">
                <div className="flex space-x-6">
                  <button
                    onClick={() => setActiveTab('transactions')}
                    className={`pb-4 px-2 ${
                      activeTab === 'transactions'
                        ? 'border-b-2 border-blue-500 text-blue-600'
                        : 'text-gray-500'
                    }`}
                  >
                    Transactions
                  </button>
                  <button
                    onClick={() => setActiveTab('validations')}
                    className={`pb-4 px-2 ${
                      activeTab === 'validations'
                        ? 'border-b-2 border-blue-500 text-blue-600'
                        : 'text-gray-500'
                    }`}
                  >
                    Validated Blocks
                  </button>
                </div>
              </div>

              {/* Transactions List */}
              {activeTab === 'transactions' && (
                <div className="divide-y">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          {i % 2 === 0 ? (
                            <ArrowUpRight className="h-5 w-5 text-red-500" />
                          ) : (
                            <ArrowDownRight className="h-5 w-5 text-green-500" />
                          )}
                          <div>
                            <Link href="/tx/0x123" className="text-blue-500 hover:text-blue-600 font-mono">
                              0x3a2d...8e9f
                            </Link>
                            <div className="text-sm text-gray-500">
                              <Clock className="w-4 h-4 inline mr-1" />
                              2 mins ago
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm">
                            {i % 2 === 0 ? '-' : '+'} 123.45 DGOLD
                          </div>
                          <div className="text-sm text-gray-500">$1,234.56</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Validated Blocks */}
              {activeTab === 'validations' && (
                <div className="divide-y">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="py-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Link href={`/block/${12345678 - i}`} className="text-blue-500 hover:text-blue-600">
                            Block #{12345678 - i}
                          </Link>
                          <div className="text-sm text-gray-500">
                            <Clock className="w-4 h-4 inline mr-1" />
                            {i * 5} mins ago
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm">128 transactions</div>
                          <div className="text-sm text-gray-500">0.5 DGOLD rewards</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
