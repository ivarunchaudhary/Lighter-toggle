"use client";

import { useMemo } from "react";
import clsx from "clsx";

import { useTheme } from "../../hooks/useTheme";

import styles from "./lighter-toggle.module.css";

export const LighterToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isOpen = theme === "light";

  const ariaLabel = useMemo(
    () => (isOpen ? "Switch to dark mode" : "Switch to light mode"),
    [isOpen]
  );

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      aria-pressed={isOpen}
      className={clsx(styles.lighter, isOpen ? styles.isOpen : styles.isClosed)}
      onClick={toggleTheme}
    >
      <span className={styles.shadow} aria-hidden />
      <span className={styles.case} aria-hidden>
        <span className={styles.window} />
        <span className={styles.wheel} />
        <span className={styles.fuel} />
      </span>
      <span className={styles.body} aria-hidden>
        <span className={styles.insert} aria-hidden />
      </span>
      <span className={styles.hinge} aria-hidden />
      <span className={styles.sparkWheel} aria-hidden />
      <span className={styles.lid} aria-hidden>
        <span className={styles.lidEdge} />
      </span>
      <span className={styles.glow} aria-hidden />
      <span className={styles.flame} aria-hidden>
        <span className={styles.outerFlame} />
        <span className={styles.innerFlame} />
        <span className={styles.coreFlame} />
      </span>
    </button>
  );
};
