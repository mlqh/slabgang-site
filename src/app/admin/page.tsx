'use client';

import { useState } from 'react';

export default function AdminPage() {
  const [testing, setTesting] = useState(false);
  const [result, setResult] = useState<string>('');

  const testInstagramAPI = async () => {
    setTesting(true);
    setResult('Testing Instagram API...');

    try {
      const response = await fetch('/api/instagram');
      const data = await response.json();

      if (response.ok) {
        setResult(`✅ Success! Found ${data.posts?.length || 0} Instagram posts`);
      } else {
        setResult(`❌ Error: ${data.error || 'Unknown error'}`);
      }
    } catch (error) {
      setResult(`❌ Network Error: ${error}`);
    } finally {
      setTesting(false);
    }
  };

  const initiateAuth = () => {
    window.open('/api/instagram/auth', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Instagram API Setup</h1>

          <div className="space-y-8">
            {/* Setup Instructions */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">Setup Instructions</h2>
              <ol className="list-decimal list-inside space-y-2 text-blue-800">
                <li>Create a Facebook Developer account at <a href="https://developers.facebook.com" target="_blank" rel="noopener noreferrer" className="underline">developers.facebook.com</a></li>
                <li>Create a new app and add Instagram Basic Display product</li>
                <li>Configure OAuth redirect URI: <code className="bg-blue-100 px-2 py-1 rounded">http://localhost:3000/api/instagram/callback</code></li>
                <li>Get your App ID and App Secret from the app settings</li>
                <li>Add them to your <code className="bg-blue-100 px-2 py-1 rounded">.env.local</code> file</li>
                <li>Click &quot;Generate Access Token&quot; below to authenticate</li>
              </ol>
            </div>

            {/* Environment Variables */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-yellow-900 mb-4">Environment Variables</h2>
              <p className="text-yellow-800 mb-4">Add these to your <code className="bg-yellow-100 px-2 py-1 rounded">.env.local</code> file:</p>
              <pre className="bg-yellow-100 p-4 rounded text-sm overflow-x-auto">
                {`INSTAGRAM_APP_ID=your_app_id_here
INSTAGRAM_APP_SECRET=your_app_secret_here
INSTAGRAM_ACCESS_TOKEN=your_access_token_here
INSTAGRAM_REDIRECT_URI=http://localhost:3000/api/instagram/callback`}
              </pre>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <button
                  onClick={initiateAuth}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Generate Access Token
                </button>

                <button
                  onClick={testInstagramAPI}
                  disabled={testing}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50"
                >
                  {testing ? 'Testing...' : 'Test Instagram API'}
                </button>
              </div>

              {result && (
                <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
                  <pre className="whitespace-pre-wrap">{result}</pre>
                </div>
              )}
            </div>

            {/* Troubleshooting */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-red-900 mb-4">Common Issues</h2>
              <ul className="list-disc list-inside space-y-2 text-red-800">
                <li><strong>Invalid OAuth Redirect URI:</strong> Make sure the redirect URI in your Facebook app matches exactly</li>
                <li><strong>Access Token Invalid:</strong> Tokens expire after 60 days - you need to refresh them</li>
                <li><strong>App Not Live:</strong> Your Facebook app needs to be in &quot;Live&quot; mode for production</li>
                <li><strong>No Posts Found:</strong> Make sure your Instagram account has posts and they&apos;re public</li>
              </ul>
            </div>

            {/* Documentation Links */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Documentation</h2>
              <div className="space-y-2">
                <a
                  href="https://developers.facebook.com/docs/instagram-basic-display-api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:underline"
                >
                  📚 Instagram Basic Display API Documentation
                </a>
                <a
                  href="https://developers.facebook.com/tools/explorer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:underline"
                >
                  🔧 Facebook Graph API Explorer
                </a>
                <a
                  href="/INSTAGRAM_SETUP.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:underline"
                >
                  📖 Detailed Setup Guide
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
