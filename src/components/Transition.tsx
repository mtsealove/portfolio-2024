'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
    children?: ReactNode;
}

export default function Transition({ children }:Props) {
  return (
        <motion.div initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease: 'easeInOut', duration: 0.3 }}>
            {children}
        </motion.div>
  );
}
