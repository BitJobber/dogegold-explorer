import React from 'react';
import { ArrowLeft, ArrowRight, Clock, CheckCircle } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function TransactionDetails() {
  const router = useRouter();
  const { hash } = router.query;

  return (
    <>
      <Head>
        <title>Transaction Details | DogeGold Explorer</title>
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
              <h1 className="text-2xl font-semibold">Transaction Details</h1>
            </div>
            
            <div className="p-6">
              <div className="space-y-6">
                {/* Transaction Hash */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-gray-600">Transaction Hash:</div>
                  <div className="md:col-span-3 font-mono">{hash}</div>
                </div>

                {/* Status */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-gray-600">Status:</div>
                  <div className="md:col-span-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Success
                    </span>
                  </div>
                </div>

                {/* Block */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-gray-600">Block:</div>
                  <div className="md:col-span-3">
                    <Link href="/block/12345678" className="text-blue-500 hover:text-blue-600">
                      12345678
                    </Link>
                    <span className="text-gray-500 ml-2">(573 block confirmations)</span>
                  </div>
                </div>

                {/* Timestamp */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-gray-600">Timestamp:</div>
                  <div className="md:col-span-3 flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-gray-500" />
                    <span>2 mins ago (Dec-18-2024 10:30:15 AM +UTC)</span>
                  </div>
                </div>

                {/* From/To */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-gray-600">From:</div>
                  <div className="md:col-span-3">
                    <Link href="/address/0x123" className="text-blue-500 hover:text-blue-600 font-mono">
                      0x1234...5678
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-gray-600">To:</div>
                  <div className="md:col-span-3">
                    <Link href="/address/0x456" className="text-blue-500 hover:text-blue-600 font-mono">
                      0x9abc...def0
                    </Link>
                  </div>
                </div>

                {/* Value */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-gray-600">Value:</div>
                  <div className="md:col-span-3">
                    <div className="font-semibold">123.45 DGOLD</div>
                    <div className="text-gray-500">($1,234.56)</div>
                  </div>
                </div>

                {/* Transaction Fee */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-gray-600">Transaction Fee:</div>
                  <div className="md:col-span-3">
                    <div>0.000042 DGOLD</div>
                    <div className="text-gray-500">($0.12)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
