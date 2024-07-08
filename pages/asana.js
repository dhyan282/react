/* eslint-disable react/no-unescaped-entities */ /* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Popover } from "@headlessui/react";
import "../src/app/asana.css";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { Tab } from "@headlessui/react";

export default function Home() {
  return (
    <div>
      <div className="  bg-rose-pink  ">
        <div className=" w-full flex justify-between items-center py-3.5 fixed top-0 z-50    px-10  bg-rose-pink">
          <div>
            <svg
              width="112"
              height="22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-labelledby="asana-logo-title"
            >
              <title id="asana-logo-title">Asana Home</title>
              <path
                d="M108.202 16.703c.067.765.679 1.739 1.74 1.739h.62a.44.44 0 0 0 .438-.438V4.359h-.003a.437.437 0 0 0-.435-.414h-1.922a.437.437 0 0 0-.435.414h-.003v1.109c-1.178-1.452-3.035-2.055-4.897-2.055a7.667 7.667 0 0 0-7.665 7.67 7.668 7.668 0 0 0 7.665 7.672c1.862 0 3.892-.723 4.897-2.054v.002Zm-4.89-.633c-2.692 0-4.874-2.232-4.874-4.986 0-2.754 2.182-4.986 4.874-4.986 2.693 0 4.875 2.232 4.875 4.986 0 2.754-2.182 4.986-4.875 4.986ZM93.21 17.172v-7.06c0-3.981-2.51-6.666-6.51-6.666-1.91 0-3.476 1.105-4.029 2.055-.12-.743-.513-1.523-1.735-1.523h-.622a.439.439 0 0 0-.438.438v13.646h.003c.012.23.203.414.435.414h1.923c.029 0 .058-.004.086-.009.013-.002.024-.008.037-.011l.043-.013c.017-.008.032-.017.048-.026l.024-.013a.44.44 0 0 0 .053-.043l.01-.007a.434.434 0 0 0 .134-.292h.002v-8.06a3.87 3.87 0 0 1 3.868-3.871 3.87 3.87 0 0 1 3.868 3.87l.001 6.738v-.002l.002.018v1.307h.002c.013.23.203.414.435.414h1.923a.45.45 0 0 0 .086-.009c.011-.002.022-.007.033-.01.016-.004.032-.008.047-.014.016-.007.03-.016.045-.024l.027-.015a.49.49 0 0 0 .05-.04l.013-.01a.452.452 0 0 0 .049-.057l.003-.004a.434.434 0 0 0 .082-.23h.003v-.891ZM73.188 16.703c.067.765.68 1.739 1.74 1.739h.62c.24 0 .437-.197.437-.438V4.359h-.002a.438.438 0 0 0-.435-.414h-1.923a.438.438 0 0 0-.435.414h-.002v1.109c-1.178-1.452-3.035-2.055-4.898-2.055a7.667 7.667 0 0 0-7.664 7.67c0 4.237 3.431 7.672 7.664 7.672 1.863 0 3.892-.723 4.898-2.054v.002Zm-4.89-.633c-2.692 0-4.875-2.232-4.875-4.986 0-2.754 2.183-4.986 4.875-4.986s4.874 2.232 4.874 4.986c0 2.754-2.182 4.986-4.874 4.986ZM49.257 14.748c1.283.89 2.684 1.322 4.03 1.322 1.283 0 2.609-.665 2.609-1.823 0-1.546-2.89-1.787-4.705-2.405-1.815-.617-3.379-1.893-3.379-3.96 0-3.163 2.816-4.47 5.444-4.47 1.665 0 3.383.55 4.497 1.338.384.29.15.625.15.625l-1.063 1.52c-.12.17-.328.318-.628.133s-1.352-.93-2.956-.93c-1.603 0-2.57.74-2.57 1.66 0 1.1 1.256 1.447 2.727 1.823 2.562.691 5.357 1.522 5.357 4.666 0 2.786-2.604 4.508-5.483 4.508-2.181 0-4.038-.622-5.596-1.766-.324-.325-.098-.627-.098-.627l1.058-1.512c.216-.282.487-.184.606-.102ZM41.866 16.703c.068.765.68 1.739 1.74 1.739h.62a.44.44 0 0 0 .438-.438V4.359h-.003a.437.437 0 0 0-.435-.414h-1.922a.438.438 0 0 0-.435.414h-.003v1.109c-1.178-1.452-3.035-2.055-4.897-2.055a7.668 7.668 0 0 0-7.665 7.67c0 4.237 3.432 7.672 7.665 7.672 1.862 0 3.892-.723 4.897-2.054v.002Zm-4.89-.633c-2.692 0-4.874-2.232-4.874-4.986 0-2.754 2.182-4.986 4.875-4.986 2.692 0 4.874 2.232 4.874 4.986 0 2.754-2.182 4.986-4.874 4.986Z"
                fill="#0D0E10"
              ></path>
              <path
                d="M18.559 11.605a5.158 5.158 0 1 0 0 10.317 5.158 5.158 0 0 0 0-10.317Zm-13.401.001a5.158 5.158 0 1 0 0 10.315 5.158 5.158 0 0 0 0-10.315Zm11.858-6.448a5.158 5.158 0 1 1-10.316 0 5.158 5.158 0 0 1 10.316 0Z"
                fill="#F06A6A"
              ></path>
            </svg>
          </div>
          <div className="flex gap-10">
            <Popover className="relative">
              <Popover.Button>Why Anasa?</Popover.Button>

              <Popover.Panel className=" overflow-y-scroll h-80 absolute z-10 ml-22 bg-blue-500 mt-26">
                <div className="flex gap-4 w-20 ml-10 mr-10">
                  <div className="flex gap-20">
                    <div className="grid  justify-center gap-2 mt-12 ">
                      <p className=" font-bold ">WHY ASANA</p>
                      <hr className="  w-36 h-0.5 bg-zinc-700  " />
                      <div className=" mt-4 grid justify-center gap-6 w-48">
                        <div className=" grid gap-2">
                          <p className=" font-bold ">Overview</p>
                          <p className=" text-zinc-600 text-xs">
                            Build project plans, coordinate tasks, and hit
                            deadlines
                          </p>
                        </div>
                        <div className=" grid gap-2">
                          <p className=" font-bold ">Overview</p>
                          <p className=" text-zinc-600 text-xs">
                            Build project plans, coordinate tasks, and hit
                            deadlines
                          </p>
                        </div>
                        <div className=" grid gap-2">
                          <p className=" font-bold ">Overview</p>
                          <p className=" text-zinc-600 text-xs">
                            Build project plans, coordinate tasks, and hit
                            deadlines
                          </p>
                        </div>
                        <div className=" grid gap-2 ">
                          <p className=" font-bold ">For Marketing</p>
                          <p className=" text-zinc-600 text-xs">
                            Plan and track campaigns, launches, and more
                          </p>
                        </div>
                        <div className=" grid gap-2">
                          <p className=" font-bold ">Overview</p>
                          <p className=" text-zinc-600 text-xs">
                            Build project plans, coordinate tasks, and hit
                            deadlines
                          </p>
                        </div>
                        <div className=" grid gap-2">
                          <div className="flex gap-1 ">
                            <p className=" font-bold ">Overview</p>
                            <button className="py-px px-2.5 bg-purple rounded-md text-white">
                              New
                            </button>
                          </div>
                          <p className=" text-zinc-600 text-xs">
                            Build project plans, coordinate tasks, and hit
                            deadlines
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="  justify-center gap-2 mt-12 ">
                      <p className=" mt-0.5 font-bold ">WHY ASANA</p>
                      <hr className=" mt-2 w-96 h-0.5 bg-zinc-700  " />
                      <div className="flex gap-20 mt-40">
                        <div className="  grid justify-center gap-6 w-48">
                          <div className=" grid gap-2">
                            <p className=" font-bold ">Overview</p>
                            <p className=" text-zinc-600 text-xs">
                              Build project plans, coordinate tasks, and hit
                              deadlines
                            </p>
                          </div>
                          <div className=" grid gap-2">
                            <p className=" font-bold ">For Marketing</p>
                            <p className=" text-zinc-600 text-xs">
                              Plan and track campaigns, launches, and more
                            </p>
                          </div>
                          <div className=" grid gap-2">
                            <p className=" font-bold ">Overview</p>
                            <p className=" text-zinc-600 text-xs">
                              Build project plans, coordinate tasks, and hit
                              deadlines
                            </p>
                          </div>
                          <div className=" grid gap-2">
                            <div className="flex gap-1 ">
                              <p className=" font-bold ">Overview</p>
                              <button className="py-px px-2.5 bg-purple rounded-md text-white">
                                New
                              </button>
                            </div>
                            <p className=" text-zinc-600 text-xs">
                              Build project plans, coordinate tasks, and hit
                              deadlines
                            </p>
                          </div>
                        </div>
                        <div className=" grid justify-center gap-6 w-48">
                          <div className=" grid gap-2">
                            <p className=" font-bold ">Overview</p>
                            <p className=" text-zinc-600 text-xs">
                              Build project plans, coordinate tasks, and hit
                              deadlines
                            </p>
                          </div>
                          <div className=" grid gap-2">
                            <p className=" font-bold ">For Marketing</p>
                            <p className=" text-zinc-600 text-xs">
                              Plan and track campaigns, launches, and more
                            </p>
                          </div>
                          <div className=" grid gap-2">
                            <p className=" font-bold ">Overview</p>
                            <p className=" text-zinc-600 text-xs">
                              Build project plans, coordinate tasks, and hit
                              deadlines
                            </p>
                          </div>
                          <div className=" grid gap-2">
                            <div className="flex gap-1 ">
                              <p className=" font-bold ">Overview</p>
                              <button className="py-px px-2.5 bg-purple rounded-md text-white">
                                New
                              </button>
                            </div>
                            <p className=" text-zinc-600 text-xs">
                              Build project plans, coordinate tasks, and hit
                              deadlines
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-x"></div>
                  <div></div>
                </div>
              </Popover.Panel>
            </Popover>
            <div>features</div>
            <div>Resources</div>
            <div>Enterprise</div>
            <div>pricing</div>
          </div>
          <div className="flex gap-6 items-center">
            <svg className=" w-5 h-5">
              <path
                d="M9.5,0 C4.275,0 0,4.275 0,9.5 C0,14.725 4.275,19 9.5,19 C14.725,19 19,14.725 19,9.5 C19,4.275 14.725,0 9.5,0 Z M16.98125,5.9375 L13.359375,5.9375 C13.0625,4.096875 12.528125,2.553125 11.815625,1.54375 C14.13125,2.196875 15.971875,3.8 16.98125,5.9375 Z M12.46875,9.5 C12.46875,10.33125 12.409375,11.103125 12.35,11.875 L6.65,11.875 C6.590625,11.103125 6.53125,10.33125 6.53125,9.5 C6.53125,8.66875 6.590625,7.896875 6.65,7.125 L12.35,7.125 C12.409375,7.896875 12.46875,8.66875 12.46875,9.5 Z M9.5,17.8125 C8.490625,17.8125 7.3625,15.971875 6.828125,13.0625 L12.171875,13.0625 C11.6375,15.971875 10.509375,17.8125 9.5,17.8125 Z M6.828125,5.9375 C7.3625,3.028125 8.490625,1.1875 9.5,1.1875 C10.509375,1.1875 11.6375,3.028125 12.171875,5.9375 L6.828125,5.9375 Z M7.184375,1.54375 C6.471875,2.553125 5.9375,4.096875 5.640625,5.9375 L2.01875,5.9375 C3.028125,3.8 4.86875,2.196875 7.184375,1.54375 Z M1.54375,7.125 L5.4625,7.125 C5.403125,7.896875 5.34375,8.66875 5.34375,9.5 C5.34375,10.33125 5.403125,11.103125 5.4625,11.875 L1.54375,11.875 C1.30625,11.103125 1.1875,10.33125 1.1875,9.5 C1.1875,8.66875 1.30625,7.896875 1.54375,7.125 Z M2.01875,13.0625 L5.640625,13.0625 C5.9375,14.903125 6.471875,16.446875 7.184375,17.45625 C4.86875,16.803125 3.028125,15.2 2.01875,13.0625 Z M11.815625,17.45625 C12.528125,16.3875 13.0625,14.903125 13.359375,13.0625 L16.98125,13.0625 C15.971875,15.2 14.13125,16.803125 11.815625,17.45625 Z M17.45625,11.875 L13.5375,11.875 C13.596875,11.103125 13.65625,10.33125 13.65625,9.5 C13.65625,8.66875 13.596875,7.896875 13.5375,7.125 L17.45625,7.125 C17.69375,7.896875 17.8125,8.66875 17.8125,9.5 C17.8125,10.33125 17.69375,11.103125 17.45625,11.875 Z"
                id="Shape"
              ></path>
            </svg>
            <div className="border-x h-10"></div>
            <div>Contact Sales</div>
            <div>Log In</div>
            <div>
              <button className=" transition duration-300 font-bold hover:bg-pink-700 bg-black text-white p-3 rounded-md">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className=" pt-28 grid justify-center gap-11">
          <div className=" text-5xl">
            <h1 className=" flex justify-center font-bold">
              The best platform for cross-
            </h1>
            <h1 className="flex justify-center font-bold">functional work</h1>
          </div>
          <div className=" text-lg grid justify-center">
            <h4 className=" flex justify-center">
              Want more efficiency in your organization? Asana is easy
            </h4>
            <h4 className=" flex justify-center">
              for all teams to use, so you can deliver quality work, faster.
            </h4>
          </div>
          <div className="flex justify-evenly">
            <button className=" transition duration-300 font-bold hover:bg-pink-700 bg-black text-white py-3.5 px-9 rounded-sm">
              Get Started
            </button>
            <button className=" transition duration-300  font-bold hover:bg-pink-700 bg-white text-black border-black border-1 py-3.5 px-9 rounded-sm">
              See How It Works
            </button>
          </div>
        </div>
        <div className="flex  overflow-hidden h-37 mt-122">
          <div>
            <div className="drop-shadow-2xl w-full ml-83">
              <img src="https://assets.asana.biz/transform/e9d20aa3-342c-4083-8933-c3e551ea2f2e/homepage-hero-goals-en-3x" />
            </div>
            <div className="flex gap-10 w-3/5 ml-170 mt-5">
              <img
                className="drop-shadow-2xl"
                src="https://assets.asana.biz/transform/09d5854c-f381-4e44-8365-1ea2b6c56b47/homepage-hero-integration-en-3x"
              />
              <img
                className="drop-shadow-2xl"
                src="https://assets.asana.biz/transform/db3a7a2c-7bbf-4b63-bb0a-b80c129fe40f/homepage-hero-tasks-en-3x"
              />
            </div>
          </div>
          <div>
            <img
              className="drop-shadow-2xl h-79 w-200"
              src="https://assets.asana.biz/transform/f51e97ab-7043-452c-9d1d-1a8dbe194c4c/homepage-hero2-timeline-en-3x"
            />
          </div>
          <div>
            <div className="flex w-3/5 mr-170  gap-10">
              <img
                className="drop-shadow-2xl ml-14"
                src="https://assets.asana.biz/transform/3f01d755-8aa3-4cca-8ba2-9c912b38f3f6/homepage-hero-automation-en-3x"
              />
              <img
                className="drop-shadow-2xl"
                src="https://assets.asana.biz/transform/0d635d0f-5c55-4edc-8421-8960e45ca80c/homepage-hero-piechart-en-3x"
              />
            </div>
            <div className="mt-5 w-11/12 ml-14">
              <img
                className="drop-shadow-2xl"
                src="https://assets.asana.biz/transform/002bcc20-5320-49fb-9998-d99c55f282cf/homepage-hero-approval-en-3x"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex  ml-36 mt-16 gap-24">
        <div className="grid">
          <p className=" font-bold">80% of Fortune 100 companies use Asana</p>
          <p className=" hover:text-pink-500">See how customers use Asana</p>
        </div>
        <div className="flex w-32 gap-14">
          <img src="https://assets.asana.biz/transform/df6ee403-72f9-477a-ae8a-6dac8fd97495/logo-ratio-amazon" />
          <img src="https://assets.asana.biz/transform/2f897541-793e-464d-bfe8-beafde701782/logo-ratio-Procter-and-Gamble" />
          <img src="https://assets.asana.biz/transform/b97c5fdb-f8a9-4a70-ba74-e16ddb3b25f9/logo-ratio-Johnson-Johnson" />
          <img src="https://assets.asana.biz/transform/8482da82-d937-4371-95c4-d555d610899e/logo-ratio-McKesson" />
        </div>
      </div>
      <hr className=" bg-zinc-600 h-0.5 ml-36 mr-36  mt-12 mb-36" />
      <div className="grid justify-center">
        <p className=" from-stone-950 font-normal text-6xl">
          See how teams use Asana
        </p>
      </div>
      <div className=" grid justify-center mt-9 ">
        <Tab.Group>
          <Tab.List className="flex   ">
            <Tab className="  link focus:outline-0  text-stone-600 hover:text-black focus:text-black text-2xl w-4/12	">
              <div className="  ">
                {" "}
                <p>Marketing teams </p>
              </div>
            </Tab>
            <Tab className=" link text-2xl w-4/12 text-stone-600  focus:outline-0 hover:text-black focus:text-black">
              <div>IT teams</div>
            </Tab>
            <Tab className="link text-stone-600  hover:text-black  focus:outline-0 text-2xl w-4/12 focus:text-black">
              <div>Operations teams</div>
            </Tab>
            <Tab className="link text-stone-600  hover:text-black  focus:outline-0 text-2xl w-4/12 focus:text-black">
              <div>Project management</div>
            </Tab>
            <Tab className="link text-stone-600  hover:text-black  focus:outline-0 text-2xl w-4/12 focus:text-black">
              <div>Strategic planning</div>
            </Tab>
          </Tab.List>
          <hr className="mt-5" />
          <Tab.Panels className="mt-2">
            <Tab.Panel>
              <div className="flex justify-center w-125 ml-107">
                <div className="bg-light-pink w-1/2 grid gap-6 pb-24 rounded-s-2xl">
                  <div className="py-6 text-3xl grid justify-center">
                    <p>Deliver impactful marketing </p>
                    <p>strategies</p>
                  </div>

                  <hr className="w-5/12 ml-120 h-0.5 bg-black" />
                  <div className="grid justify-center ml-11 gap-4 ">
                    <p>Collaborate on cross-team work for campaigns</p>
                    <p>
                      Help teams quickly refocus around shifting business needs
                    </p>
                    <p>Automate processes for approvals</p>
                  </div>
                  <div className="ml-116">
                    <button className=" transition duration-300 font-bold hover:bg-pink-700 bg-black text-white p-3 rounded-md">
                    Explore marketing
                    </button>
                  </div>
                </div>
                <div className=" bg-tab-img w-1/2 overflow-hidden relative rounded-e-2xl	">
                <img  className=" absolute m-8 " src="https://assets.asana.biz/transform/2eb89cc5-ff48-4956-b541-7050c0949a6c/homepage-product-marketing-en-3x" />
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div>dhyan2</div>
            </Tab.Panel>
            <Tab.Panel>
              <div>dhyan3</div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>

      <div className=" bg-green-dark text-white  px-10 grid gap-y-14 pb-28 mb-36 mt-36 pt-28">
        <h1 className=" text-5xl ">Why companies choose Asana</h1>
        <hr className=" bg-white h-0.5 " />
        <div className="flex gap-20">
          <div className=" text-2xl">
            <p>The only platform</p>
            <p>with goals built in</p>
          </div>
          <div className=" w-5/12">
            <p>
              See related tasks, collaborators and progress{" "}
              <a className=" hover:underline">
                {" "}
                to quickly achieve business goals.{" "}
              </a>
            </p>
          </div>
        </div>
        <hr className=" bg-white h-0.5 " />
        <div className="flex gap-20">
          <div className=" text-2xl">
            <p>The only platform</p>
            <p>with goals built in</p>
          </div>
          <div className=" w-5/12">
            <p>
              See related tasks, collaborators and progress{" "}
              <a className=" hover:underline">
                {" "}
                to quickly achieve business goals.{" "}
              </a>
            </p>
          </div>
        </div>
        <hr className=" bg-white h-0.5 " />
        <div className="flex gap-20">
          <div className=" text-2xl">
            <p>The only platform</p>
            <p>with goals built in</p>
          </div>
          <div className=" w-5/12">
            <p>
              See related tasks, collaborators and progress{" "}
              <a className=" hover:underline">
                {" "}
                to quickly achieve business goals.{" "}
              </a>
            </p>
          </div>
        </div>
        <hr className=" bg-white h-0.5 " />
        <div>
          <button className=" transition duration-300 hover:bg-pink-500 bg-white p-11 text-black py-4 px-8 rounded-md font-semibold">
            See how it works
          </button>
        </div>
      </div>
      <div className="grid px-10 gap-y-3.5 ">
        <p className=" font-normal">DRIVE EFFICIENCY ACROSS TEAMS</p>
        <p className=" font-semibold text-3xl">Manage complex work easily</p>
        <p className=" text-neutral-500 font-normal text-lg ">
          Connect what needs to get done, who's doing it, and by when.
        </p>
      </div>
      <div className="px-10 mt-28">
        <div className=" flex w-10/12 justify-between items-center">
          <div className="grid sticky top-0">
            <div>
              <div>
                <p className=" text-xl font-semibold mb-6">planning</p>
              </div>
              <hr className=" bg-neutral-700" />
              <div className="flex gap-2.5 items-center text-stone-600">
                <div className="flex justify-between my-1.5 items-center">
                  <p> Develop messaging framework </p>
                  <img
                    className="w-1/12"
                    src="https://luna1.co/new-branding-hp-exp/faces/hailey.png"
                  />
                </div>
                <div className=" w-px bg-neutral-700 h-11"></div>
                <p> Mar 1-10</p>
                <div className=" w-px bg-neutral-700 h-11"></div>
                <div className=" py-2.5 bg-purple px-7 rounded-full "> </div>
                <div className=" w-px bg-neutral-700 h-11"></div>
                <div className=" py-2.5 bg-purple px-7 rounded-full "> </div>
              </div>
              <hr className=" bg-neutral-700" />
              <div className="flex gap-2.5 items-center  text-stone-600">
                <div className="flex justify-between my-1.5 items-center">
                  <p> Develop messaging framework </p>
                  <img
                    className="w-1/12"
                    src="https://luna1.co/new-branding-hp-exp/faces/hailey.png"
                  />
                </div>
                <div className=" w-px bg-neutral-700 h-11"></div>
                <p> Mar 1-10</p>
                <div className=" w-px bg-neutral-700 h-11"></div>
                <div className=" py-2.5 bg-purple px-7 rounded-full "> </div>
                <div className=" w-px bg-neutral-700 h-11"></div>
                <div className=" py-2.5 bg-purple px-7 rounded-full "> </div>
              </div>
              <hr className=" bg-neutral-700" />
              <div className="flex gap-2.5 items-center  text-stone-600">
                <div className="flex justify-between my-1.5 items-center">
                  <p> Develop messaging framework </p>
                  <img
                    className="w-1/12"
                    src="https://luna1.co/new-branding-hp-exp/faces/hailey.png"
                  />
                </div>
                <div className=" w-px bg-neutral-700 h-11"></div>

                <p> Mar 1-10</p>
                <div className=" w-px bg-neutral-700 h-11"></div>
                <div className=" py-2.5 bg-purple px-7 rounded-full "> </div>
                <div className=" w-px bg-neutral-700 h-11"></div>
                <div className=" py-2.5 bg-purple px-7 rounded-full "> </div>
              </div>
            </div>
            <div className=" mt-16">
              <div>
                <p className=" text-xl font-semibold mb-6">planning</p>
              </div>
              <hr className=" bg-neutral-700" />
              <div className="flex gap-2.5 items-center text-stone-600">
                <div className="flex justify-between my-1.5 items-center">
                  <p> Develop messaging framework </p>
                  <img
                    className="w-1/12"
                    src="https://luna1.co/new-branding-hp-exp/faces/hailey.png"
                  />
                </div>
                <div className=" w-px bg-neutral-700 h-11"></div>
                <p> Mar 1-10</p>
                <div className=" w-px bg-neutral-700 h-11"></div>
                <div className=" py-2.5 bg-purple px-7 rounded-full "> </div>
                <div className=" w-px bg-neutral-700 h-11"></div>
                <div className=" py-2.5 bg-purple px-7 rounded-full "> </div>
              </div>
              <hr className=" bg-neutral-700" />
              <div className="flex gap-2.5 items-center  text-stone-600">
                <div className="flex justify-between my-1.5 items-center">
                  <p> Develop messaging framework </p>
                  <img
                    className="w-1/12"
                    src="https://luna1.co/new-branding-hp-exp/faces/hailey.png"
                  />
                </div>
                <div className=" w-px bg-neutral-700 h-11"></div>
                <p> Mar 1-10</p>
                <div className=" w-px bg-neutral-700 h-11"></div>
                <div className=" py-2.5 bg-purple px-7 rounded-full "> </div>
                <div className=" w-px bg-neutral-700 h-11"></div>
                <div className=" py-2.5 bg-purple px-7 rounded-full "> </div>
              </div>
              <hr className=" bg-neutral-700" />
              <div className="flex gap-2.5 items-center  text-stone-600">
                <div className="flex justify-between my-1.5 items-center">
                  <p> Develop messaging framework </p>
                  <img
                    className="w-1/12"
                    src="https://luna1.co/new-branding-hp-exp/faces/hailey.png"
                  />
                </div>
                <div className=" w-px bg-neutral-700 h-11"></div>

                <p> Mar 1-10</p>
                <div className=" w-px bg-neutral-700 h-11"></div>
                <div className=" py-2.5 bg-purple px-7 rounded-full "> </div>
                <div className=" w-px bg-neutral-700 h-11"></div>
                <div className=" py-2.5 bg-purple px-7 rounded-full "> </div>
              </div>
            </div>
          </div>
          <div className="gap-y-5 grid">
            <div>
              <p className=" font-semibold text-xl ">List view</p>
            </div>
            <div>
              <p>Organize and assign tasks. With lists, teams </p>
              <p> see immediately what they need to do, which tasks</p>
              <p>are a priority, and when work is due.</p>
            </div>
            <div>
              <a className=" hover:text-pink-600  text-xl font-semibold">
                {" "}
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-4 pt-16">
        <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>What is your refund policy?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  If you're unhappy with your purchase for any reason, email us
                  within 90 days and we'll refund you in full, no questions
                  asked.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Do you offer technical support?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  No.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
}
