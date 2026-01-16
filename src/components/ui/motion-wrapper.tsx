"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { ReactNode } from "react";

type MotionWrapperProps = {
  children: ReactNode;
  className?: string;
  initial?: string | Record<string, any>;
  animate?: string | Record<string, any>;
  whileInView?: string | Record<string, any>;
  viewport?: { once?: boolean; amount?: number; margin?: string };
  transition?: Record<string, any>;
  whileHover?: Record<string, any>;
  variants?: Record<string, any>;
  style?: React.CSSProperties;
  href?: string;
  target?: string;
  rel?: string;
  "data-testid"?: string;
};

export function MotionDiv({
  children,
  className,
  initial,
  animate,
  whileInView,
  viewport = { once: true },
  transition,
  whileHover,
  variants,
  style,
  ...rest
}: MotionWrapperProps) {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      whileHover={whileHover}
      variants={variants}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function MotionH1({
  children,
  className,
  initial,
  animate,
  whileInView,
  viewport = { once: true },
  transition,
  variants,
  style,
}: MotionWrapperProps) {
  return (
    <motion.h1
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      variants={variants}
      className={className}
      style={style}
    >
      {children}
    </motion.h1>
  );
}

export function MotionH2({
  children,
  className,
  initial,
  animate,
  whileInView,
  viewport = { once: true },
  transition,
  variants,
  style,
}: MotionWrapperProps) {
  return (
    <motion.h2
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      variants={variants}
      className={className}
      style={style}
    >
      {children}
    </motion.h2>
  );
}

export function MotionH3({
  children,
  className,
  initial,
  animate,
  whileInView,
  viewport = { once: true },
  transition,
  variants,
  style,
}: MotionWrapperProps) {
  return (
    <motion.h3
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      variants={variants}
      className={className}
      style={style}
    >
      {children}
    </motion.h3>
  );
}

export function MotionP({
  children,
  className,
  initial,
  animate,
  whileInView,
  viewport = { once: true },
  transition,
  variants,
  style,
}: MotionWrapperProps) {
  return (
    <motion.p
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      variants={variants}
      className={className}
      style={style}
    >
      {children}
    </motion.p>
  );
}

export function MotionA({
  children,
  className,
  initial,
  animate,
  whileInView,
  viewport = { once: true },
  transition,
  whileHover,
  variants,
  style,
  href,
  target,
  rel,
  ...rest
}: MotionWrapperProps) {
  return (
    <motion.a
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      whileHover={whileHover}
      variants={variants}
      className={className}
      style={style}
      href={href}
      target={target}
      rel={rel}
      {...rest}
    >
      {children}
    </motion.a>
  );
}

export function MotionLi({
  children,
  className,
  initial,
  whileInView,
  viewport = { once: true },
  transition,
}: MotionWrapperProps) {
  return (
    <motion.li
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      className={className}
    >
      {children}
    </motion.li>
  );
}
