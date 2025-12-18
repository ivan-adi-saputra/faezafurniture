import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const phone = "628123456789";
const whatsappMessage =
  "Halo Admin Faeza Furniture, saya tertarik dengan produk Anda.";
const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
  whatsappMessage
)}`;

export const contactConfigs = {
  owner: {
    phone,
    whatsappMessage,
    whatsappLink,
    socials: [
      //   {
      //     name: "Tiktok",
      //     account: "@faeza.tiktok",
      //     link: "",
      //     icon: <FaTiktok />,
      //   },
      {
        name: `WhatsApp`,
        account: phone,
        link: whatsappLink,
        icon: <FaWhatsapp />,
        color: "#25D366",
      },
      {
        name: "Facebook",
        account: "Faeza Furniture",
        link: "",
        icon: <FaFacebook />,
        color: "#1877F2",
      },
      {
        name: `Instagram`,
        account: "faezafurniture",
        link: "",
        icon: <FaInstagram />,
        color: "#c1558b",
      },
    ],
  },

  developer: {
    phone: "08123455678",
    get whatsappLink() {
      const message = encodeURIComponent(
        "Halo Ivan, saya butuh konsultasi pembuatan website."
      );
      return `https://wa.me/${this.phone}?text=${message}`;
    },
    portfolioLink: "https://ivansaputradev.vercel.app",
  },
};
