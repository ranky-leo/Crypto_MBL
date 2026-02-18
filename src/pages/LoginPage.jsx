
export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md border border-slate-800 bg-black/40 backdrop-blur p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-cyan-400">Login</h2>
        <input placeholder="Email" className="w-full mb-4 p-3 bg-slate-900 border border-slate-700 rounded" />
        <input placeholder="Password" type="password" className="w-full mb-6 p-3 bg-slate-900 border border-slate-700 rounded" />
        <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold">
          Sign In
        </button>
      </div>
    </div>
  );
}
