import { GithubIcon, TwitterIcon, CommandIcon, ArrowUpRight, Linkedin } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { SheetClose } from "@/components/ui/sheet";
import Image from "next/image";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";

export const NAVLINKS = [
  {
    title: "Sign Up",
    href: `/sign-up`,
    class: `text-white bg-blue-600`
  },
  {
    title: "Log In",
    href: "/sign-in",
    class: `text-blue-600 bg-white`
  },
];

export const LOGGEDLINKS = [
  {
    title: "Dashboard",
    href: `/dashboard`,
    class: `text-white bg-blue-600`
  }
];

export const SCROLLLINKS = [
  {
    title: "Send Money",
    href: `/#sendmoney`,
  },
  {
    title: "Banks",
    href: "/#banks",
  },
];

export async function Navbar() {
  
  const loggedIn = await getLoggedInUser();
  return (
    <nav className="w-full border-b h-24 top-0 z-50 bg-white">
      <div className="mx-auto w-[90vw] lg:w-[80vw] h-full flex items-center justify-between md:gap-2">
        <div className="flex items-center gap-5 bg-white">
          <div className="flex items-center gap-12">
            <div className="flex">
              <Logo />
            </div>
            <div className="lg:flex hidden me-6 items-center gap-6 text-sm font-medium text-muted-foreground">
                <ScrollMenu />
              </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
              <div className="flex me-0 md:me-6 items-center gap-3 md:gap-6 text-sm font-medium text-muted-foreground">
                {
                  loggedIn?
                  <>
                  <LoggedMenu/>
                  </>
                  :
                  <NavMenu />
                }
                
              </div>
            <div className="sm:flex hidden ml-2.5 sm:ml-0">
            
              <Link
                href="https://x.com/codewithgurjot"
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })}
                target="_blank"
              >
                <TwitterIcon className="h-[1.1rem] w-[1.1rem]" />
              </Link>
              <Link
                href="https://linkedin.com/in/gurjot-singh-js"
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })}
                target="_blank"
              >
                <Linkedin className="h-[1.1rem] w-[1.1rem]" />
              </Link>
              <Link
                href="https://github.com/gurjotsingh22022"
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })}
                target="_blank"
              >
                <GithubIcon className="h-[1.1rem] w-[1.1rem]" />
              </Link>
            </div>
            <SheetLeftbar />
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1.5">
      <Image src={'/icons/webners.png'} width={40} height={40} alt="WePay" unoptimized />
      <h2 className="font-bold text-3xl text-slate-800">WePay</h2>
    </Link>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="!text-primary dark:font-medium font-semibold"
            absolute
            className={`flex items-center justify-center text-base px-4 py-1 md:px-8 md:py-2 font-bold border-blue-600  border-2 rounded-full relative ${item.class}`}
            href={item.href}
          >
            {item.title}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}

export function LoggedMenu({ isSheet = false }) {
  return (
    <>
      {LOGGEDLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="!text-primary dark:font-medium font-semibold"
            absolute
            className={`flex items-center justify-center text-base px-4 py-1 md:px-8 md:py-2 font-bold border-blue-600  border-2 rounded-full relative ${item.class}`}
            href={item.href}
          >
            {item.title}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}

export function ScrollMenu({ isSheet = false }) {
  return (
    <>
      {SCROLLLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="!text-primary dark:font-medium font-semibold"
            absolute
            className="flex items-center text-lg font-semibold dark:text-stone-300/85 text-stone-800 relative"
            href={item.href}
          >
            {item.title}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}