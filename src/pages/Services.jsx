import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

import JasaTugasIllustration from "../assets/jasa_tugas_illustration.svg";
import ParafraseIllustration from "../assets/parafrase_illustration.svg";
import CekPlagiarismeIllustration from "../assets/cek_plagiarisme_illustration.svg";
import InstallAppsIllustration from "../assets/install_apps_illustration.svg";
import RentAppsIllustration from "../assets/rent_apps_illustration.svg";
import DiamondStoreIllustration from "../assets/diamond_store_illustration.svg";

export default function Services() {
  const services = [
    {
      name: "Jasa Tugas",
      list: ["Joki Makalah", "Artikel", "Proposal", "PPT", "dll"],
      color: "bg-[#EED7FF]",
      illustration: JasaTugasIllustration,
    },
    {
      name: "Parafrase",
      list: [],
      color: "bg-[#DBF5FF]",
      title: "Mengubah Kata-kata dengan Kreativitas",
      description:
        "Ketika Anda membutuhkan konten yang segar, orisinal, dan unik, jasa parafrase hadir sebagai solusi yang tepat. Parafrase adalah seni mengubah kata-kata dari sumber yang ada ke dalam bentuk yang baru, dengan tetap mempertahankan esensi dan makna yang sama.",
      illustration: ParafraseIllustration,
    },
    {
      name: "Cek Plagiarisme",
      list: [],
      color: "bg-[#D9FFE4]",
      title: "Memastikan Keaslian dan Keunggulan Konten Anda",
      description:
        "Ketika kreativitas dan orisinalitas menjadi kunci dalam dunia tulisan, jasa cek plagiarisme hadir sebagai penjaga integritas konten Anda. Dengan teknologi canggih dan tim ahli yang berpengalaman, kami menyediakan layanan cek plagiarisme yang akurat dan handal.",
      illustration: CekPlagiarismeIllustration,
    },
    {
      name: "Install Aplikasi",
      list: [
        "Install Windows",
        "Microsoft Office (Word, Excel, PPT, dll)",
        "IBM SPSS",
        "Mendeley",
        "Antivirus",
        "Game",
        "dll",
      ],
      color: "bg-[#FFDDF4]",
      illustration: InstallAppsIllustration,
    },
    {
      name: "Rent Aplikasi",
      list: [
        "Spotify Premium",
        "Netflix Premium",
        "Youtube Premium",
        "Joox Premium",
        "Vidio Premium",
        "We TV Premium",
        "Alight Motion Premium",
        "dll",
      ],
      color: "bg-[#DADADA]",
      illustration: RentAppsIllustration,
    },
    {
      name: "Diamond Mobile Legend",
      list: [],
      color: "bg-[#FFFCCE]",
      title: "Meningkatkan Kekuatan dan Keunggulan dalam Pertempuran",
      description:
        "Apakah Anda mencari cara untuk meningkatkan kekuatan dan keunggulan Anda dalam Mobile Legend dengan harga terjangkau? Kami hadir dengan jasa penjualan diamond Mobile Legend yang murah, aman, dan terpercaya untuk membantu Anda meraih kemenangan dengan lebih mudah.",
      illustration: DiamondStoreIllustration,
    },
  ];

  const [activeService, setActiveService] = useState("Jasa Tugas");

  const wrapperVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <main id="Layanan" className="my-10">
      <h1 className="text-2xl font-semibold">Layanan</h1>
      <hr className="bg-primary h-[2px] mt-3" />
      <motion.section
        variants={wrapperVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex md:flex-row flex-col gap-3 mt-5"
      >
        {services.map((service, i) => {
          return (
            <motion.div
              key={i}
              variants={itemVariants}
              transition={{ type: "spring", stiffness: 100 }}
              className={`relative h-[28rem] ${service.color} ${
                activeService === service.name
                  ? "w-full"
                  : "md:w-[14rem] md:h-auto h-[4rem]"
              }  flex justify-center items-center rounded-2xl border border-primary cursor-pointer transition-all duration-700 ease-out`}
              onClick={() => setActiveService(service.name)}
            >
              <div
                className={`${
                  activeService === service.name
                    ? "static"
                    : "absolute flex justify-center items-center"
                } h-full w-full md:p-10 p-5`}
              >
                <h1
                  className={`font-bold text-2xl uppercase ${
                    activeService === service.name
                      ? "rotate-0"
                      : "md:-rotate-90"
                  } md:whitespace-nowrap`}
                >
                  {service.name}
                </h1>

                {activeService === service.name && (
                  <>
                    <motion.img
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      src={service.illustration}
                      alt="Illustration"
                      className="absolute right-3 bottom-3 md:w-72 w-52"
                      width="300"
                    />
                    <div className="mt-5">
                      {service.list.length > 0 ? (
                        <ul className="flex flex-col gap-y-1 text-xl font-medium z-10">
                          {service.list.map((item) => {
                            return (
                              <li
                                key={item}
                                className="flex gap-x-3 items-center"
                              >
                                <span>
                                  <FaCheckCircle />
                                </span>
                                {item}
                                <span></span>
                              </li>
                            );
                          })}
                        </ul>
                      ) : (
                        <div>
                          <h1 className="font-semibold mb-2">
                            {service.title}
                          </h1>
                          <p>{service.description}</p>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.section>
    </main>
  );
}
