import { useCallback } from "react";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
const Navbar = () => {
  const router = useRouter();
  const { data: session } = useSession();
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
    <nav className=" flex justify-between items-center w-full h-auto py-6">
      <div className="cursor-pointer" onClick={onClickLogo}>
        <img
          className=" w-[213.91px] h-[55px] object-contain"
          alt="EaseAutoService Logo"
          src="/logo/easeautoservice_logo.png"
        />
      </div>
      <div className="  w-[448.21px] h-[55px] flex flex-row p-[0px_20px] box-border items-center justify-center gap-[70px]">
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
        <p className="m-[0] relative text-xs font-hind-kochi text-black text-left inline-block">
          Services
        </p>
      </div>
      <div className="cursor-pointer [border:none] p-[0] bg-[transparent]  w-[134.8px] h-[47px]">
        {session ? (
          <button
            className="cursor-pointer [border:none] whitespace-nowrap bg-indigo-200 rounded-xl p-[.8rem_4rem] text-xs font-hind-kochi text-white text-center flex items-center justify-center"
            onClick={() => signOut()}
          >
            Log Out
          </button>
        ) : (
          <button
            className="cursor-pointer [border:none] whitespace-nowrap bg-indigo-200 rounded-xl p-[.8rem_4rem] text-xs font-hind-kochi text-white text-center flex items-center justify-center"
            onClick={onSigninButton}
          >
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
