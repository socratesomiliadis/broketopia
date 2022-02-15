import { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";

export default function Navigation() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme == "dark") {
      return (
        <SunIcon
          className='w-8 mix-blend-difference h-8 inline-flex'
          role='button'
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className='w-8 h-8 inline-flex fill-current text-black dark:text-white'
          role='button'
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <Fragment>
      <nav className='backdrop-blur-xl lg:backdrop-blur-none sticky top-0 z-50 flex flex-row justify-between items-center -mt-[100px] pl-4 pr-12'>
        <Image
          alt='broketopia'
          src='/static/images/BrokeTopiaLogo.svg'
          width='100'
          height='100'
        ></Image>
        <div className='ml-6 lg:ml-0 flex flex-row justify-center items-center gap-8'>
          <a
            href='https://opensea.io/assets/0xbd4455da5929d5639ee098abfaa3241e9ae111af/159'
            target='_blank'
            rel='noreferrer'
            className='lg:bg-white lg:dark:bg-black text-black dark:text-white mix-blend-difference font-Outfit font-medium text-lg border-[2px] px-[1.2rem] py-2 border-black dark:border-white hover:border-[#e606d4] dark:hover:border-[#e606d4] hover:text-[#e606d4] dark:hover:text-[#e606d4] rounded-full'
          >
            World
          </a>
          {renderThemeChanger()}
        </div>
      </nav>
    </Fragment>
  );
}
