import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  Dialog,
  //  Disclosure,
  Popover,
  //  Transition
} from "@headlessui/react";
import {
  // ArrowPathIcon,
  Bars3Icon,
  // ChartPieIcon,
  // CursorArrowRaysIcon,
  // FingerPrintIcon,
  // SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
// import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
// import { PiCheckLight } from "react-icons/pi";

// const products = [
//     { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
//     { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
//     { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
//     { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
//     { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
//   ]
// const callsToAction = [
//   { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
//   { name: 'Contact sales', href: '#', icon: PhoneIcon },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

const Header = () => {
  const { t } = useTranslation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className=" shadow-md bg-light400 ">
      <header className="bg-light400   shadow-md relative p-0 m-0 top-0 z-10">
        <nav
          className="mx-auto  flex items-center justify-between p-6 max-laptop:py-1 lg:px-8  "
          aria-label="Global"
        >
          <div className="flex lg:flex-1  ">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">{t("header.companyname")}</span>
              {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> */}
              {/* <img className="h-8 w-auto" src="./log.png" alt="" /> */}
              <img
                className="w-[230px]  max-md:[200px] "
                src="/company.png"
                alt=""
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-dark100"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">{t("header.openmainmenu")}</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:items-center lg:gap-x-12 ">
            <Link
              to="/product"
              className="text-sm max-laptop:text-[14px] font-[Outfit-Regular] leading-6 text-headerText"
            >
              {t("header.menus.1")}
            </Link>
            <Link
              to="/case-studies"
              className="text-sm max-laptop:text-[14px] font-[Outfit-Regular] leading-6 text-headerText"
            >
              {t("header.menus.2")}
            </Link>
            <Link
              to="/about-us"
              className="text-sm max-laptop:text-[14px] font-[Outfit-Regular] leading-6 text-headerText"
            >
              {t("header.menus.3")}
            </Link>
            <Link
              to="/contact"
              className="text-sm max-laptop:text-[14px] font-[Outfit-Regular] leading-6 text-headerText"
            >
              {t("header.menus.4")}
            </Link>
            <Link
              to="faq"
              className="text-sm max-laptop:text-[14px] font-[Outfit-Regular] leading-6 text-headerText"
            >
              {t("header.menus.5")}
            </Link>
            <button className=" bg-blue-700 font-[Outfit-Bold] py-[10px] px-[12px] rounded-[5px] text-light400 text-sm max-laptop:text-[14px]">
              {t("header.buttontext")}
            </button>
          </Popover.Group>
          {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-[Outfit-Regular] leading-6 text-headerText">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div> */}
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-[1000] w-full overflow-y-auto bg-light400 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="" className="-m-1.5 p-1.5">
                {/* <span className="sr-only">{t("header.companyname")}</span> */}
                {/* <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              /> */}
                <img className="h-20 w-auto" src="/company.png" alt="" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-dark100"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">{t("header.closemenu")}</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {/* <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-[Outfit-Regular] leading-7 text-headerText hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-[Outfit-Regular] leading-7 text-headerText hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure> */}
                  {/* <link
                    to="/product"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-[Outfit-Regular] leading-7 text-headerText hover:bg-gray-50"
                  >
                    {t("header.menus.1")}
                  </link> */}
                  <Link
                    to="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-[Outfit-Regular] leading-7 text-headerText hover:bg-gray-50"
                  >
                    {t("header.menus.2")}
                  </Link>
                  <Link
                    to="about-us"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-[Outfit-Regular] leading-7 text-headerText hover:bg-gray-50"
                  >
                    {t("header.menus.3")}
                  </Link>
                  <Link
                    to="contact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-[Outfit-Regular] leading-7 text-headerText hover:bg-gray-50"
                  >
                    {t("header.menus.4")}
                  </Link>
                  <Link
                    to="/faq"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-[Outfit-Regular] leading-7 text-headerText hover:bg-gray-50"
                  >
                    {t("header.menus.5")}
                  </Link>
                  <button className=" bg-primary py-[10px] px-[12px] rounded-[5px] text-light100">
                    {t("header.buttontext")}
                  </button>
                </div>
                {/* <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-[Outfit-Regular] leading-7 text-headerText hover:bg-gray-50"
                >
                  Log in
                </a>
              </div> */}
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
};

export default Header;
