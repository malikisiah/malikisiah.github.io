type project = {
  link: string;
  background: string;
  heading: string;
  description: string;
};
export default function Project({
  link,
  background,
  heading,
  description,
}: project) {
  return (
    <a
      className='block rounded-xl  p-8 shadow-xl transition hover:scale-105 hero border-2 border-black'
      href={link}
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <h2 className='mt-8 text-xl font-bold text-white'>{heading}</h2>

      <p className='mt-1 text-sm text-gray-300'>{description}</p>
    </a>
  );
}
