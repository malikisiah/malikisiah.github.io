import Header from "./HeroHeader";

export default function Hero() {
  return (
    <div
      className='hero min-h-screen border-b-2 border-accent'
      style={{
        backgroundImage: `url("/wallhaven-4geyge.jpg")`,
      }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <Header />
      </div>
    </div>
  );
}
