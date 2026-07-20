"use client";
import { useState, useEffect } from "react";
import styles from "./CountdownTimer.module.css";

interface CountdownTimerProps {
  targetDate: string; // ISO 8601
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calcTimeLeft(targetDate: string): TimeLeft | null {
  const target = new Date(targetDate).getTime();
  const now = Date.now();
  const diff = target - now;
  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () => setTimeLeft(calcTimeLeft(targetDate));
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) return null;
  if (!timeLeft) return null;

  return (
    <div className={styles.container} aria-label="募集開始まで">
      <div className={styles.unit}>
        <span className={styles.number}>{timeLeft.days}</span>
        <span className={styles.label}>日</span>
      </div>
      <span className={styles.sep}>:</span>
      <div className={styles.unit}>
        <span className={styles.number}>{pad(timeLeft.hours)}</span>
        <span className={styles.label}>時間</span>
      </div>
      <span className={styles.sep}>:</span>
      <div className={styles.unit}>
        <span className={styles.number}>{pad(timeLeft.minutes)}</span>
        <span className={styles.label}>分</span>
      </div>
      <span className={styles.sep}>:</span>
      <div className={styles.unit}>
        <span className={styles.number}>{pad(timeLeft.seconds)}</span>
        <span className={styles.label}>秒</span>
      </div>
    </div>
  );
}
