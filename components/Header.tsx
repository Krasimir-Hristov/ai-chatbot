'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, BookOpen } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm'>
      <div className='container flex h-16 items-center justify-between'>
        <div className='mr-4 flex items-center'>
          <Link className='mr-6 flex items-center space-x-2' href='/'>
            <BookOpen className='h-6 w-6 text-primary' />
            <span className='font-bold text-lg text-primary'>NoteWorthy</span>
          </Link>
          <nav className='hidden md:flex items-center space-x-8 text-sm font-medium'>
            <Link
              href='#features'
              className='hover:text-primary transition-colors'
            >
              Features
            </Link>
            <Link
              href='#pricing'
              className='hover:text-primary transition-colors'
            >
              Pricing
            </Link>
            <Link href='#faq' className='hover:text-primary transition-colors'>
              FAQ
            </Link>
          </nav>
        </div>

        <button
          className='inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 hover:text-primary h-10 w-10 px-0 md:hidden'
          onClick={toggleMenu}
          aria-label='Toggle Menu'
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X className='h-6 w-6' />
          ) : (
            <Menu className='h-6 w-6' />
          )}
          <span className='sr-only'>Toggle Menu</span>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='absolute top-16 left-0 right-0 bg-background border-b shadow-md md:hidden'>
            <nav className='flex flex-col p-4 space-y-3 text-sm font-medium'>
              <Link
                href='#features'
                className='hover:text-primary transition-colors py-2'
              >
                Features
              </Link>
              <Link
                href='#pricing'
                className='hover:text-primary transition-colors py-2'
              >
                Pricing
              </Link>
              <Link
                href='#faq'
                className='hover:text-primary transition-colors py-2'
              >
                FAQ
              </Link>
            </nav>
          </div>
        )}

        <div className='flex items-center space-x-3'>
          <nav className='flex items-center space-x-2'>
            <Button variant='ghost' asChild className='hover:text-primary'>
              <Link href='/login'>Log in</Link>
            </Button>
            <Button asChild className='bg-primary hover:bg-primary/90'>
              <Link href='/signup'>Sign up</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
