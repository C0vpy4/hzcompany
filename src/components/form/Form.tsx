"use client";
import React, { useState, useId } from "react";
import { motion } from "framer-motion";

export const Form = () => {
  return (
    <div className="w-full">
      <form className="mx-auto w-full max-w-[1210px] px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-black font-['Cygre_Book'] leading-tight text-[clamp(1.75rem,6vw,6rem)]">
          хотите обсудить проект?
        </h2>

        <div className="mt-10 space-y-8">
          <FloatingField label="как вас зовут?" type="text" name="name" />
          <FloatingField
            label="от лица какой компании вы пишете?"
            type="text"
            name="company"
          />
          <FloatingField label="email" type="email" name="email" mask="email" />
          <FloatingField
            label="+7 (000) 000 - 0000"
            type="tel"
            name="phone"
            mask="phone"
          />
          <FloatingTextArea label="опишите идею или проект" name="message" />
        </div>

        <button
          type="submit"
          className="mt-12 w-full h-16 bg-black text-white text-base font-['Cygre_Book'] leading-none"
        >
          отправить
        </button>
      </form>
    </div>
  );
};

type FloatingFieldProps = {
  label: string;
  name: string;
  type?: string;
  mask?: "phone" | "email";
};

const FloatingField = ({
  label,
  name,
  type = "text",
  mask,
}: FloatingFieldProps) => {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const id = useId();
  const isActive = focused || value.length > 0;

  return (
    <div className="relative">
      <motion.label
        htmlFor={`${name}-${id}`}
        className="absolute left-0 font-['Cygre_Book'] text-black origin-left"
        initial={false}
        animate={{
          y: isActive ? -22 : 10,
          scale: isActive ? 0.85 : 1,
          color: "#000000",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {label}
      </motion.label>
      <input
        id={`${name}-${id}`}
        name={name}
        type={type}
        value={value}
        onChange={(e) => {
          const raw = e.target.value;
          if (mask === "phone") {
            setValue(formatPhone(raw));
          } else if (mask === "email") {
            setValue(sanitizeEmail(raw));
          } else {
            setValue(raw);
          }
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="block w-full border-b border-black bg-transparent outline-none pt-6 pb-2 text-black placeholder:transparent"
        placeholder=" "
        autoComplete="off"
        inputMode={
          mask === "phone" ? "tel" : mask === "email" ? "email" : undefined
        }
      />
    </div>
  );
};

type FloatingTextAreaProps = {
  label: string;
  name: string;
};

const FloatingTextArea = ({ label, name }: FloatingTextAreaProps) => {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const id = useId();
  const isActive = focused || value.length > 0;

  return (
    <div className="relative">
      <motion.label
        htmlFor={`${name}-${id}`}
        className="absolute left-0 font-['Cygre_Book'] text-black origin-left"
        initial={false}
        animate={{
          y: isActive ? -22 : 10,
          scale: isActive ? 0.85 : 1,
          color: "#000000",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {label}
      </motion.label>
      <textarea
        id={`${name}-${id}`}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="block w-full border-b border-black bg-transparent outline-none pt-6 pb-2 min-h-[120px] resize-y text-black placeholder:transparent"
        placeholder=" "
      />
    </div>
  );
};

// Helpers
function formatPhone(input: string): string {
  // Keep digits only
  let digits = input.replace(/\D/g, "");
  if (digits.length === 0) return "";
  // Normalize to Russian +7
  if (digits[0] === "8") digits = "7" + digits.slice(1);
  if (digits[0] !== "7") digits = "7" + digits;
  digits = digits.slice(0, 11);

  const p1 = digits.slice(1, 4);
  const p2 = digits.slice(4, 7);
  const p3 = digits.slice(7, 11);

  let out = "+7";
  if (p1) out += ` (${p1}` + (p1.length === 3 ? ")" : "");
  if (p2) out += (p1 ? " " : " ") + p2;
  if (p3) out += " - " + (p3.length > 3 ? p3.slice(0, 4) : p3);
  return out;
}

function sanitizeEmail(input: string): string {
  // Lowercase, allow common email characters only
  let v = input.toLowerCase().replace(/[^a-z0-9._%+\-@]/g, "");
  // Ensure only one '@'
  const at = v.indexOf("@");
  if (at !== -1) {
    const before = v.slice(0, at);
    const after = v.slice(at + 1).replace(/@+/g, "");
    v = before + "@" + after;
  }
  return v;
}
