// @ts-nocheck
'use client'

import React, { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { X, Search, ShoppingBasket, Menu, ChevronDown } from 'lucide-react';


import { useCartStore } from '@/_store/Cart';
import { getUserCartRequest } from "@/API/cart";


import useAuth from "@/hooks/useAuth";
import UserAvatar from "@/components/UserAvatar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productCountBadge, setproductCountBadge] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const { isAuthenticated, user, logout } = useAuth();



  const { data } = useQuery({
    queryFn: async () => getUserCartRequest(),
    queryKey: ["cart"], //Array according to Documentation
  });




  const cart = useCartStore(state => state.cart);


  useEffect(() => {
    if (data?.cartItem) {
      setproductCountBadge(data?.cartItem?.length || 0);
    } else if (data?.length === 0) {
      setproductCountBadge(0);
    } else if (cart) {
      if (Array.isArray(cart) && cart.length !== 0) {
        // @ts-ignore
        setproductCountBadge(cart.length ? cart.length : 0);
      }
    }
  }, [data]);


  /**
   * @type {string | number | NodeJS.Timeout | undefined}
   */
  let dropdownTimeout;

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  const handleSearchToggle = () => {
    setIsSearching(!isSearching);
  };

  return (
    <nav className="bg-white text-gray-700 w-full border-b">
      <div className="container mx-auto py-5 px-6 ">
        {/* Search Mode */}
          <div className="flex justify-between items-center">
            {/* Left Side: Buttons */}
           
            {isAuthenticated ? (
          <>
            <UserAvatar user={user} logOut={logout} />
          </>
        ) : (
          <Link className="text-sm" href='/sign-in'>
              ورود | ثبت‌نام
          </Link>
        )}

            {/* Right Side: Logo and Menu */}
            <div className="flex items-center">


              {/* Desktop Menu */}
              <ul className="flex space-x-3 md:space-x-6 relative text-[11px] md:text-sm cursor-pointer">
                <li className="hover:text-gray-500">تماس با ما</li>
                
                <li className="hover:text-gray-500">دوره های آموزشی</li>
                <li className="hover:text-gray-500">مشاوره</li>
                <li className="hover:text-gray-500">خانه</li>

              </ul>


              {/* Hamburger Icon */}
              {/* <button
                className="md:hidden ml-4"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="material-icons">
                  <Menu />
                </span>
              </button> */}
            </div>
          </div>
        
      </div>

      {/* Mobile Drawer */}
      {!isSearching && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      {!isSearching && (
        <div
          className={`fixed top-0 right-0 h-full bg-gray-800 text-white w-64 transform ${isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 z-50`}
        >
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsOpen(false)}
          >
            <span className=""><X /></span>
          </button>
          <ul className="mt-12 space-y-6 px-6 pt-9 text-sm text-right">
            <li className="hover:text-gray-300">خانه</li>
            <li
              className="hover:text-gray-300 cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              خدمات
              {/* Nested Menu for Mobile */}
              <ul
                className={`pl-4 mt-2 space-y-2 text-sm ${dropdownOpen ? "block" : "hidden"
                  }`}
              >
                <li className="hover:text-gray-400">خدمات</li>
                <li className="hover:text-gray-400">خدمات</li>
              </ul>
            </li>
            <li className="hover:text-gray-300">آکادمی آموزشی</li>
            <li className="hover:text-gray-300">تماس با ما</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
