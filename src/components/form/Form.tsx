"use client";
import React, { useState, useId } from "react";
import { motion } from "framer-motion";

import { sendEmail } from "@/app/actions";

export const Form = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Укажите ваше имя";
    if (!formData.company.trim()) newErrors.company = "Укажите вашу компанию";
    if (!formData.email.trim()) newErrors.email = "Укажите email";
    if (!formData.phone.trim()) newErrors.phone = "Укажите номер телефона";
    if (!formData.message.trim()) newErrors.message = "Опишите ваш проект";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isFormValid = Object.values(formData).every(
    (value) => value.trim() !== ""
  );

  const handleFieldChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSending(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      company: formData.get("company") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    try {
      const result = await sendEmail(data);
      if (result.success) {
        setSent(true);
        const form = e.currentTarget;
        if (form instanceof HTMLFormElement) {
          form.reset();
        }
      }
    } catch (error) {
      console.error("Failed to submit form:", error);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="w-full font-cygre" id="form">
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full max-w-[1210px] px-4 sm:px-6 lg:px-8 py-10"
      >
        <h2 className="text-center text-black dark:text-white font-cygre leading-tight text-[clamp(1.75rem,6vw,6rem)]">
          хотите обсудить проект?
        </h2>

        <div className="mt-10 space-y-8">
          <FloatingField
            label="как вас зовут?"
            type="text"
            name="name"
            error={errors.name}
            onValueChange={handleFieldChange}
          />
          <FloatingField
            label="от лица какой компании вы пишете?"
            type="text"
            name="company"
            error={errors.company}
            onValueChange={handleFieldChange}
          />
          <FloatingField
            label="email"
            type="email"
            name="email"
            mask="email"
            error={errors.email}
            onValueChange={handleFieldChange}
          />
          <FloatingField
            label="номер телефона"
            type="tel"
            name="phone"
            mask="phone"
            error={errors.phone}
            onValueChange={handleFieldChange}
          />
          <FloatingTextArea
            label="опишите идею или проект"
            name="message"
            error={errors.message}
            onValueChange={handleFieldChange}
          />
        </div>

        <button
          type="submit"
          disabled={sending || sent || !isFormValid}
          className={`mt-12 w-full h-16 text-white dark:text-black text-base font-cygre leading-none transition-all duration-300 
            ${
              sent
                ? "bg-green-600 hover:bg-green-700"
                : sending
                ? "bg-neutral-600"
                : "bg-black hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200"
            } 
            transform hover:scale-[0.99] active:scale-95 cursor-pointer disabled:cursor-not-allowed`}
        >
          {sent ? "отправлено" : sending ? "отправка..." : "отправить"}
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
  error?: string;
  onValueChange?: (name: string, value: string) => void;
};

const FloatingField = ({
  label,
  name,
  type = "text",
  mask,
  error,
  onValueChange,
}: FloatingFieldProps) => {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const id = useId();
  const isActive = focused || value.length > 0;

  return (
    <div className="relative">
      <motion.label
        htmlFor={`${name}-${id}`}
        className="absolute left-0 font-cygre text-black dark:text-white origin-left"
        initial={false}
        animate={{
          y: isActive ? -22 : 10,
          scale: isActive ? 0.85 : 1,
          color: "currentColor",
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
          let processedValue;
          if (mask === "phone") {
            processedValue = formatPhone(raw);
          } else if (mask === "email") {
            processedValue = sanitizeEmail(raw);
          } else {
            processedValue = raw;
          }
          setValue(processedValue);
          onValueChange?.(name, processedValue);
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`block w-full border-b ${
          error ? "border-red-500" : "border-black dark:border-white"
        } bg-transparent outline-none pt-6 pb-2 text-black dark:text-white placeholder:transparent`}
        placeholder=" "
        autoComplete="off"
        inputMode={
          mask === "phone" ? "tel" : mask === "email" ? "email" : undefined
        }
      />
      {error && (
        <div className="absolute left-0 top-full mt-1 text-red-500 text-sm font-cygre">
          {error}
        </div>
      )}
    </div>
  );
};

type FloatingTextAreaProps = {
  label: string;
  name: string;
  error?: string;
  onValueChange?: (name: string, value: string) => void;
};

const FloatingTextArea = ({
  label,
  name,
  error,
  onValueChange,
}: FloatingTextAreaProps) => {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const id = useId();
  const isActive = focused || value.length > 0;

  return (
    <div className="relative">
      <motion.label
        htmlFor={`${name}-${id}`}
        className="absolute left-0 font-cygre text-black dark:text-white origin-left"
        initial={false}
        animate={{
          y: isActive ? -22 : 10,
          scale: isActive ? 0.85 : 1,
          color: "currentColor",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {label}
      </motion.label>
      <textarea
        id={`${name}-${id}`}
        name={name}
        value={value}
        onChange={(e) => {
          const value = e.target.value;
          setValue(value);
          onValueChange?.(name, value);
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`block w-full border-b ${
          error ? "border-red-500" : "border-black dark:border-white"
        } bg-transparent outline-none pt-6 pb-2 min-h-[120px] resize-y text-black dark:text-white placeholder:transparent`}
        placeholder=" "
      />
      {error && (
        <div className="absolute left-0 top-full mt-1 text-red-500 text-sm font-cygre">
          {error}
        </div>
      )}
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
