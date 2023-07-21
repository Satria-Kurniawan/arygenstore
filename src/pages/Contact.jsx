import {
  IoLogoWhatsapp,
  IoLogoFacebook,
  IoLogoInstagram,
} from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

export default function Contact() {
  const contacts = [
    {
      name: "What'sApp",
      link: "https://api.whatsapp.com/send/?phone=6281339969492&text&type=phone_number&app_absent=0",
      icon: <IoLogoWhatsapp size={40} />,
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/kadek.aryana.75",
      icon: <IoLogoFacebook size={40} />,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/ariyanamd_/",
      icon: <IoLogoInstagram size={40} />,
    },
    { name: "Email", link: "", icon: <MdEmail size={40} /> },
  ];

  const wrapperVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <main id="Kontak" className="my-5 dark:text-white">
      <h1 className="text-2xl font-semibold">Kontak</h1>
      <hr className="bg-primary h-[2px] mt-3" />
      <motion.section
        variants={wrapperVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-4 grid-cols-2 gap-5 mt-5"
      >
        {contacts.map((contact, i) => {
          return (
            <motion.a
              key={i}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              href={contact.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className="border border-primary rounded-xl p-5 cursor-pointer hover:bg-black/5 dark:hover:bg-white/90 dark:hover:text-black duration-300">
                {contact.name}
                <div>{contact.icon}</div>
              </div>
            </motion.a>
          );
        })}
      </motion.section>
    </main>
  );
}
