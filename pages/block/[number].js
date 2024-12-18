import React from 'react';
import { Clock, ChevronRight, ChevronLeft } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function BlockDetails() {
  const router = useRouter();
  const { number } = router.query;

  return (
    <>
      <Head>
        <title>Block #{number} | DogeGold Explorer</title>
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
          {/* Navigation Buttons */}
          <div className="flex justify-between mb-4">
            <Link href={`/block/${Number(number) - 1}`} 
                  className="inline-flex items-center px-4 py-2 bg-white rounded-lg shadow hover:bg-gray-50">
              <ChevronLeft className="w-5 h-5 mr-2" />
              Previous Block
            </Link>
            <Link href={`/block/${Number(number) + 1}`}
                  className="inline-flex items-center px-4 py-2 bg-white rounded-lg shadow hover:bg-gray-50">
              Next Block
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h1 className="text-2xl font-semibold">Block #{number}</h1>
            </div>
            
            <div className="p-6">
              <div className="space-y-6">
                {/* Block Info */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-gray-600">Block Height:</div>
                  <div className="md:col-span-3">
                    {number}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-gray-600">Timestamp:</div>
                  <div className="md:col-span-3 flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-gray-500" />
                    <span>2 mins ago (Dec-18-2024 10:30:15 AM +UTC)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-gray-600">Transactions:</div>
                  <div className="md:col-span-3">
                    128 transactions
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-gray-600">Validator:</div>
                  <div className="md:col-span-3">
                    <Link href="/address/0x123" className="text-blue-500 hover:text-blue-600 font-mono">
                      0x1234...5678
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-gray-600">Block Hash:</div>
                  <div className="md:col-span-3 font-mono">
                    0xabcd...ef01
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-gray-600">Parent Hash:</div>
                  <div className="md:col-span-3">
                    <Link href={`/block/${Number(number) - 1}`} className="text-blue-500 hover:text-blue-600 font-mono">
                      0x9876...5432
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-gray-600">Gas Used:</div>
                  <div className="md:col-span-3">
                    1,234,567 (45.67%)
                  </div>
                </div>
              </div>

              {/* Transactions List */}
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Transactions</h2>
                <div className="divide-y">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="py-4">
                      <div className="flex items-center justify-between">
                        <Link href="/tx/0x123" className="text-blue-500 hover:text-blue-600 font-mono">
                          0x3a2d...8e9f
                        </Link>
                        <div className="text-gray-500">
                          2 mins ago
                        </div>
                        <div className="text-right">
                          <div className="text-sm">123.45 DGOLD</div>
                          <div className="text-sm text-gray-500">From: 0x1234...5678</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
