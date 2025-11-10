export default function Home() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: 'linear-gradient(135deg, #c31432 0%, #240b36 100%)'
      }}
    >
      <div className="text-center max-w-md mx-auto bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
        {/* Main Message */}
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            CampusConnect Team H
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            We&apos;re Building Something Amazing
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Connect with your University community, share ideas, and build lasting relationships.
            Our platform is under construction and will be launching soon.
          </p>
        </div>
        <div className="text-xs text-gray-500">
          © 2025 CampusConnect.
        </div>
      </div>
    </div>
  );
}
