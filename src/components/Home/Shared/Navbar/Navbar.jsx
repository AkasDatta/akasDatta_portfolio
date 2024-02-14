import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { MdDownloadForOffline } from "react-icons/md";
import resumePdf from '../../../../assets/Resume Of Akas Datta';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Resume of Akas Datta.pdf';
    link.click();
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="px-12 mt-2">
      <header className="inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between sm:pt-6 md:pt-6 lg:pt-6 sm:pb-0 md:pb-0 lg:pb-6" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <h2 className="font-bold text-white text-4xl">Akas Datta</h2>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8 bg-[#0F0F0F]">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="font-semibold leading-6  transition text-white hover:text-white/75 text-xl">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button onClick={handleDownload} className="text-sm font-semibold leading-6 text-white btn btn-outline rounded-lg px-10">
            Resume <MdDownloadForOffline/>
          </button>

          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black text-white px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
               
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition text-white hover:text-white/75 hover:bg-[#272727]"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                    <button onClick={handleDownload} className="text-sm font-semibold leading-6 text-white btn btn-outline rounded-lg px-10">
                    Resume <MdDownloadForOffline/>
                  </button>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
};

export default Navbar;