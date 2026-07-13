import { MessageCircle } from "lucide-react";

export default function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/918867331128"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl"
    >
      <MessageCircle size={30} />
    </a>
  );
}