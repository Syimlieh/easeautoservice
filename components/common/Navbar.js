import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState();

  const { data: session } = useSession();
  const onHomeClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onAboutClick = useCallback(() => {
    router.push("/about_us");
  }, [router]);

  const onContactClick = useCallback(() => {
    router.push("/contact_us");
  }, [router]);

  const onClickLogo = useCallback(() => {
    router.push("/");
  }, [router]);

  const onSigninButton = useCallback(() => {
    router.push("/auth/signin");
  }, [router]);

  return (
    <nav className="flex justify-between items-center w-full h-auto py-6">
      <div
        className={
          open
            ? "overlay h-screen lg:hidden w-screen bg-indigo-200 fixed top-0 right-0 opacity-60 z-10  transition-all ease-in-out delay-150"
            : "fixed top-0 right-[-200%]  "
        }
      ></div>
      <div className="cursor-pointer" onClick={onClickLogo}>
        <Image
          unoptimized
          onClick={onClickLogo}
          className="w-[213.91px] h-[55px] cursor-pointer"
          alt="EaseAutoService Logo"
          src="/logo/easeautoservice_logo.webp"
          width={220}
          height={50}
          objectFit="contain"
        />
      </div>
      <div className={open ? `nav-menu active` : "nav-menu "}>
        <div
          className="absolute right-0 top-0 m-6 text-xl"
          onClick={() => setOpen(!open)}
        >
          <IoMdClose className="lg:hidden" />
        </div>

        <div className="menu-list  h-auto lg:h-[55px] flex flex-col lg:flex-row p-[0px_20px] box-border items-center justify-center gap-[40px] lg:gap-[70px]">
          <p
            className="m-[0] relative text-xs font-hind-kochi text-black text-left inline-block cursor-pointer"
            onClick={onHomeClick}
          >
            Home
          </p>
          <p
            className="m-[0] relative text-xs font-hind-kochi text-black text-left inline-block cursor-pointer"
            onClick={onAboutClick}
          >
            About Us
          </p>
          <p
            className="m-[0] relative text-xs font-hind-kochi text-black text-left inline-block cursor-pointer"
            onClick={onContactClick}
          >
            Contact
          </p>
          {/* <p className="m-[0] relative text-xs font-hind-kochi text-black text-left inline-block">
            Services
          </p> */}
        </div>
        <div className="cursor-pointer flex [border:none] p-[0] bg-[transparent] w-[134.8px]">
          {session ? (
            <button
              className="cursor-pointer [border:none] whitespace-nowrap bg-indigo-200 rounded-xl p-[.8rem_4rem] text-xs font-hind-kochi text-white text-center self-center flex items-center justify-center"
              onClick={() => signOut()}
            >
              Log Out
            </button>
          ) : (
            <button
              className="cursor-pointer [border:none] whitespace-nowrap bg-indigo-200 rounded-xl p-[.8rem_4rem] text-xs font-hind-kochi text-white text-center self-center flex items-center justify-center"
              onClick={onSigninButton}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
      <div
        className="hamburger-btn text-xl flex"
        onClick={() => setOpen(!open)}
      >
        <RxHamburgerMenu className="lg:hidden" />
      </div>
      <style jsx>{`
        .nav-menu {
          display: flex;
          gap: 6rem;
        }
        @media (max-width: 1024px) {
          .nav-menu {
            display: flex;

            flex-direction: column;
            justify-content: flex-start;
            align-items: center;

            height: 100vh;
            position: fixed;
            right: -200%;
            top: 0;
            z-index: 10;
            background-color: #fff;
            padding: 6rem 0 4rem;
            will-change: position;
            transition: 0.3s ease-in-out;
            transition-property: all;
            width: 39rem;
          }
          .nav-menu.active {
            right: 0;
          }
        }
        @media (max-width: 400px) {
          .nav-menu {
            width: 100%;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
