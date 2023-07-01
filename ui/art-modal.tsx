import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'

export const ArtModal = ({ 
    isOpen, setIsOpen, src, alt
}: { 
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void
    src: string,
    alt: string
}) => {
    
  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10">
          <div className="flex h-full w-full justify-center items-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="h-5/6 w-9/12 rounded-lg pointer-events-none shadow-xl transition-all">
                <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  {/* <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                    {alt}
                  </Dialog.Title> */}
                  <Image 
                    src={src}
                    alt={alt}
                    // className="object-cover object-center w-full h-full"
                    className='object-contain'
                    fill
                  />
                </div>
                {/* Buttons */}
                {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-akairosu-orange px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-akairosu-blue sm:ml-3 sm:w-auto"
                    onClick={() => setIsOpen(false)}
                  >
                    View Post
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setIsOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Go Back
                  </button>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
