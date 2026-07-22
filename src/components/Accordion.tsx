"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./Accordion.module.css";

interface AccordionItemProps {
  title: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  hideIcon?: boolean;
}

export function AccordionItem({ title, children, defaultOpen = false, hideIcon = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | "auto">(defaultOpen ? "auto" : 0);

  useEffect(() => {
    if (!contentRef.current) return;
    if (isOpen) {
      const h = contentRef.current.scrollHeight;
      setHeight(h);
      const timer = setTimeout(() => setHeight("auto"), 350);
      return () => clearTimeout(timer);
    } else {
      setHeight(contentRef.current.scrollHeight);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setHeight(0));
      });
    }
  }, [isOpen]);

  const id = React.useId();
  const panelId = `accordion-panel-${id}`;
  const buttonId = `accordion-btn-${id}`;

  return (
    <div className={styles.item}>
      <button
        id={buttonId}
        className={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className={styles.triggerTitle}>{title}</span>
        {!hideIcon && (
          <span className={styles.icon} aria-hidden="true">
            {isOpen ? "−" : "+"}
          </span>
        )}
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={styles.panel}
        style={{
          height: height === "auto" ? "auto" : `${height}px`,
          overflow: height === "auto" ? "visible" : "hidden",
        }}
      >
        <div ref={contentRef} className={styles.panelInner}>
          {children}
        </div>
      </div>
    </div>
  );
}

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

export function Accordion({ children, className = "" }: AccordionProps) {
  return <div className={`${styles.accordion} ${className}`}>{children}</div>;
}
