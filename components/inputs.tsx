"use client";

import { useEffect, useRef } from "react";
import IMask from "imask";

type PhoneInputProps = {
  onChange: Function;
  value: string;
};

export default function PhoneInput({ onChange, value }: PhoneInputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!inputRef.current) return;

    const mask = IMask(inputRef.current, {
      mask: "(00) 00000-0000",
    });

    mask.on("accept", () => {
      onChange(mask.value);
    });

    return () => mask.destroy();
  }, []);

  return (
    <input
      value={value}
      ref={inputRef}
      placeholder="(11) 99999-9999"
      className="w-full px-4 py-3 bg-card border border-border rounded-lg text-tertiary placeholder-tertiary/50 focus:outline-none focus:ring-2 focus:ring-secondary"
    />
  );
}