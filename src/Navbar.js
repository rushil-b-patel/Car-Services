import { useState } from 'react'
import { Dialog, Disclosure, Popover} from '@headlessui/react'
import {  Bars3Icon, XMarkIcon,} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'


export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-gray-900">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
        <Link to='/' className="-m-1.5 p-1.5 justify-content flex">
            <span className="sr-only">Your Company</span>
            <img className="h-8 mr-3 w-auto" src="https://www.codenticsoftware.com/img/logo.png" alt="" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Codentic Car Spa</span>
          </Link>
          </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 "
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Link to='/' className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              Home
            </Link>

          <Link to='/Services' className="text-sm font-semibold leading-6 text-white">
            Services
          </Link>
          <Link to='/Product' className="text-sm font-semibold leading-6 text-white">
            Product
          </Link>
          <Link to='/Form' className="text-sm font-semibold leading-6 text-white">
            Appointment
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to='/Contact' className="text-sm font-semibold leading-6 text-white">
            Contact <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to='/' className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://www.codenticsoftware.com/img/logo.png"
                alt="Logo"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                      <Link to='/' className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        Home
                      </Link>
                  )}
                </Disclosure>
                <Link to='/Services'
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Services
                </Link>
                <Link to='/Product'
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Product
                </Link>
                <Link to='/Form'
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Appointment
                </Link>
              </div>
              <div className="py-6">
                <Link to='Contact'
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
