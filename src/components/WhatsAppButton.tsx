import { motion } from "framer-motion";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/918200613891"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-xl flex items-center justify-center"
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-green-500"
        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white" className="relative z-10">
        <path d="M17.6 6.32A8.86 8.86 0 0 0 12.05 4a8.94 8.94 0 0 0-7.74 13.4L3 21l3.7-1.3a8.9 8.9 0 0 0 5.34 1.78h0a8.94 8.94 0 0 0 6.3-15.27zm-5.55 13.7h0a7.4 7.4 0 0 1-3.78-1.04l-.27-.16-2.8.98.94-2.73-.18-.28a7.43 7.43 0 0 1 11.6-9.22 7.36 7.36 0 0 1 2.17 5.25 7.43 7.43 0 0 1-7.68 7.2zm4.08-5.56c-.22-.11-1.32-.65-1.53-.73-.2-.07-.36-.11-.5.11-.15.22-.58.73-.71.88-.13.15-.26.17-.48.06a6.07 6.07 0 0 1-1.79-1.1 6.7 6.7 0 0 1-1.24-1.54c-.13-.22 0-.34.1-.45.1-.1.22-.26.33-.4.1-.13.13-.22.2-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.2-.68-1.65-.18-.43-.36-.37-.5-.38h-.43a.82.82 0 0 0-.6.28 2.5 2.5 0 0 0-.78 1.86 4.34 4.34 0 0 0 .91 2.3 9.93 9.93 0 0 0 3.8 3.36c.53.23.94.36 1.27.47.53.17 1.01.14 1.4.09.43-.06 1.32-.54 1.5-1.06.19-.52.19-.96.13-1.06-.06-.1-.2-.15-.42-.26z"/>
      </svg>
    </motion.a>
  );
}
