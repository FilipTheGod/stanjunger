'use client';

import { useState } from 'react';

export default function SendTestPage() {
  const [email, setEmail] = useState('filip.stan.318@gmail.com');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const sendTestEmail = async () => {
    setLoading(true);
    setStatus('sending...');

    try {
      const response = await fetch('/api/send-invitation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ to: email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('✅ email sent successfully!');
      } else {
        setStatus(`❌ error: ${data.error.message}`);
      }
    } catch (error) {
      setStatus(`❌ error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-md w-full space-y-6">
        <h1 className="text-2xl text-gray-700 text-center lowercase">
          test wedding invitation email
        </h1>

        <div className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="enter email address"
          />

          <button
            onClick={sendTestEmail}
            disabled={loading}
            className="w-full bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed lowercase"
          >
            {loading ? 'sending...' : 'send test email'}
          </button>

          {status && (
            <p className="text-center text-gray-600 lowercase">{status}</p>
          )}
        </div>
      </div>
    </main>
  );
}
