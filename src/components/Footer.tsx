import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { Fasthand } from "next/font/google";
const fh = Fasthand({ subsets: ["latin"], weight: "400" });
export default function Footer() {
  return (
    <footer className='footer p-10 bg-neutral text-neutral-content border-t border-accent'>
      <div className='pl-6'>
        <h1 className={`pt-3 text-xl ${fh.className}`}>
          {" "}
          Malik Jordan Isiah Teague
        </h1>

        <p>Keeping it real since 96&apos;</p>
      </div>
      <div>
        <span className='footer-title'>Social</span>
        <div className='grid grid-flow-col gap-4'>
          <a
            href='https://github.com/malikisiah'
            className='hover:scale-105 transition'
          >
            <AiFillGithub className='h-8 w-8' />
          </a>
          <a
            href='https://www.linkedin.com/in/malikjordanteague/'
            className='hover:scale-105 transition'
          >
            <AiFillLinkedin className='h-8 w-8' />
          </a>
          <a
            href='https://www.youtube.com/channel/UCqt-uXIqtjTMBFD3-SiyeHA'
            className='hover:scale-105 transition'
          >
            <AiFillYoutube className='h-8 w-8' />
          </a>
        </div>
      </div>
    </footer>
  );
}
