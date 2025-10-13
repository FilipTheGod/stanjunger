'use client';

import { useState } from 'react';

export default function SendBulkPage() {
  const [emails, setEmails] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  const sendBulkEmails = async () => {  
    setLoading(true);
    setStatus('sending emails...');
    setResults([]);

    // Split emails by newline or comma
    const emailList = emails
      .split(/[\n,]/)
      .map(e => e.trim())
      .filter(e => e.length > 0);

    if (emailList.length === 0) {
      setStatus('❌ please enter at least one email address');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/send-bulk-invitations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ recipients: emailList }),
      });

      const data = await response.json();

      if (response.ok) {
        setResults(data.results);
        const successCount = data.results.filter((r: any) => r.success).length;
        setStatus(`✅ sent ${successCount} out of ${emailList.length} emails successfully!`);
      } else {
        setStatus(`❌ error: ${data.error}`);
      }
    } catch (error) {
      setStatus(`❌ error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-2xl w-full space-y-6">
        <h1 className="text-2xl text-gray-700 text-center lowercase">
          send bulk wedding invitations
        </h1>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-2 lowercase">
              enter email addresses (one per line or comma-separated):
            </label>
            <textarea
              value={emails}
              onChange={(e) => setEmails(e.target.value)}
              rows={10}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 font-mono text-sm"
              placeholder="email1@example.com&#10;email2@example.com&#10;email3@example.com"
            />
            <p className="text-xs text-gray-500 mt-1 lowercase">
              {emails.split(/[\n,]/).filter(e => e.trim().length > 0).length} email(s) to send
            </p>
          </div>

          <button
            onClick={sendBulkEmails}
            disabled={loading}
            className="w-full bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed lowercase"
          >
            {loading ? 'sending...' : 'send all invitations'}
          </button>

          {status && (
            <p className="text-center text-gray-600 lowercase">{status}</p>
          )}

          {results.length > 0 && (
            <div className="mt-6 border border-gray-200 rounded-lg p-4 max-h-96 overflow-y-auto">
              <h3 className="text-sm font-semibold text-gray-700 mb-3 lowercase">results:</h3>
              <div className="space-y-2">
                {results.map((result, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 font-mono">{result.email}</span>
                    <span className={result.success ? 'text-green-600' : 'text-red-600'}>
                      {result.success ? '✅ sent' : '❌ failed'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}