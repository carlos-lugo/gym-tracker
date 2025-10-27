import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'

type Session = {
  session_type: string;
  created_at: string;
};

function App() {
  const [latestSession, setLatestSession] = useState<Session | null>(null);
  const [isAddingSession, setIsAddingSession] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLatestSession = async () => {
      const { data, error } = await supabase
        .from('training_sessions')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (error) {
        setError(error.message);
      } else {
        setLatestSession(data);
      }
    };

    fetchLatestSession();
  }, []);

  const handleRegisterClick = () => {
    setIsAddingSession(true);
    setError(null);
  };

  const handleSessionTypeClick = async (sessionType: string) => {
    const { data, error } = await supabase
      .from('training_sessions')
      .insert([{ session_type: sessionType }])
      .select()
      .single();

    if (error) {
      setError(error.message);
    } else {
      setLatestSession(data);
      setIsAddingSession(false);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-xs text-center">
        {error && <p className="text-red-500">{error}</p>}
        {isAddingSession ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">New Session</h2>
            <div className="flex flex-col space-y-4">
              <button onClick={() => handleSessionTypeClick('legs')} className="bg-gray-800 text-white font-bold py-4 px-4 rounded-lg text-xl">
                Legs
              </button>
              <button onClick={() => handleSessionTypeClick('back')} className="bg-gray-800 text-white font-bold py-4 px-4 rounded-lg text-xl">
                Back
              </button>
              <button onClick={() => handleSessionTypeClick('chest')} className="bg-gray-800 text-white font-bold py-4 px-4 rounded-lg text-xl">
                Chest
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4">Latest Session</h2>
            {latestSession ? (
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-xl font-bold">{latestSession.session_type}</p>
                <p className="text-gray-400">{new Date(latestSession.created_at).toLocaleDateString()}</p>
              </div>
            ) : (
              <p>No sessions yet.</p>
            )}
            <button onClick={handleRegisterClick} className="mt-8 bg-blue-600 text-white font-bold py-4 px-4 rounded-full text-xl">
              Register New Session
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
