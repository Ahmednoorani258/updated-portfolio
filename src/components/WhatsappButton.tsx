import Link from "next/link";
import Image from "next/image";

export default function WhatsappButton() {
  return (
    <Link
      href={"https://wa.me/923353791610?text=Hi%20Muhammad%20Ahmed%20Noorani!"}
      target="_blank"
      className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
    >
      <Image
        src="/whatsappicon.jpg"
        width={32}
        height={32}
        alt="whatsapp"
        className="w-8 h-8"
      />
    </Link>
  );
}
