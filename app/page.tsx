'use client';

import { useState, useEffect, useRef } from 'react';

import ReactMarkdown from 'react-markdown';

import remarkGfm from 'remark-gfm';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import {
  X,
  MessageCircle,
  Send,
  Loader2,
  ArrowDownCircleIcon,
} from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';

import { useChat } from '@ai-sdk/react';

import LandingSections from '@/components/LandingSections';

export default function Chat() {
  return (
    <div className='flex flex-col min-h-screen'>
      <LandingSections />
    </div>
  );
}
