
export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/bg.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full h-full opacity-80" style={{
          background: 'linear-gradient(0deg, rgba(0, 0, 250, 0.5), rgba(0, 0, 0, 0.9))',
        }}></div>
      <div className="relative z-10 flex pt-5 items-center gap-4 justify-center">
        <img src="/logo1.svg" alt="Logo" className="w-32 h-32 mb-4" />
        <h1 className="text-white text-xl tracking-wide font-black uppercase">Luiz Almeida</h1>
      </div>
      <div className="relative z-10 pt-5 flex items-center justify-center gap-8">
        <img src="/pixel.png" alt="Pixel Art" className="w-24" />
        <div className="text-white max-w-lg">
          <h2 className="text-3xl font-bold mb-4">Hello, my name is Luiz Henrique.</h2>
          <p className="text-lg">
            a.k.a. <a href="https://github.com/lhas-dev" className="underline" target="_blank">@lhas-dev</a>. I am a <strong>Senior Front-end Engineer</strong> with 14 years of experience in web development. I'm passionate about creating beautiful and functional interfaces. I'm also a gamer, a pixel artist, and a music lover.
          </p>
        </div>
      </div>
    </div>
  );
}
