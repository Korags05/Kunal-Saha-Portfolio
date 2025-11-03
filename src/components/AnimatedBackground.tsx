const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient base */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          background: 'radial-gradient(circle at 20% 50%, hsl(190 90% 55% / 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(270 70% 60% / 0.15) 0%, transparent 50%)',
        }}
      />
      
      {/* Animated gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30 animate-gradient-shift"
        style={{
          background: 'linear-gradient(135deg, hsl(190 90% 55% / 0.1), hsl(270 70% 60% / 0.1), hsl(200 100% 50% / 0.1))',
          backgroundSize: '200% 200%',
        }}
      />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(hsl(190 90% 55%) 1px, transparent 1px), linear-gradient(90deg, hsl(190 90% 55%) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s', animationDuration: '8s' }} />
      <div className="absolute bottom-32 right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s', animationDuration: '10s' }} />
      <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s', animationDuration: '12s' }} />
    </div>
  );
};

export default AnimatedBackground;
