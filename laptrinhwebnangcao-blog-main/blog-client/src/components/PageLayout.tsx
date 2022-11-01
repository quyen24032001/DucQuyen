import ROUTES from "constants/routes";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import Button from "./utilities/Button";
import { IoNotificationsOutline } from "react-icons/io5";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiOutlineGlobal,
} from "react-icons/ai";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = (props: PageLayoutProps) => {
  const { children } = props;
  const router = useRouter();

  function onClickLogin() {
    router.push({
      pathname: ROUTES.login,
      query: { from: router.asPath },
    });
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 flex flex-row justify-between items-center h-12 bg-white drop-shadow-md">
        <ul className="flex flex-row items-center text-slate-900 font-semibold">
          <li className="mr-4">Home</li>
          <li className="mr-4">Profile</li>
        </ul>
        <ul className="flex flex-row items-center">
          <li className="ml-2">
            <Button title="Login" onClick={onClickLogin} />
          </li>
          <li className="ml-2">
            <IoNotificationsOutline size={24} />
          </li>
        </ul>
      </header>
      <main className="flex-1 container p-4">{children}</main>
      <footer className="drop-shadow-md">
        <div className="p-4 flex flex-row justify-between items-center bg-slate-900 text-slate-100">
          <ul>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
          <ul className="flex">
            <li className="ml-2">
              <AiFillGithub size={24} />
            </li>
            <li className="ml-2">
              <AiFillLinkedin size={24} />
            </li>
            <li className="ml-2">
              <AiFillFacebook size={24} />
            </li>
            <li className="ml-2">
              <AiOutlineGlobal size={24} />
            </li>
          </ul>
        </div>
        <div className="text-sm text-center py-1 bg-slate-300">
          Copyright 2022
        </div>
      </footer>
    </div>
  );
};

export default PageLayout;
