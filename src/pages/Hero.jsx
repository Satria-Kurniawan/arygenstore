import { FaClock, FaMoneyBillWave, FaUserAlt } from "react-icons/fa";
import Button from "../components/Button";
import LogoOVO from "../assets/logo-ovo.png";
import LogoDana from "../assets/logo-dana.png";
import HeroIllustration from "../assets/hero.svg";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Hero() {
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
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const title = "Menghilangkan beban, menghadirkan kemudahan.";

  return (
    <main id="Hero" className="my-10">
      <div className="flex md:flex-row flex-col gap-5">
        <motion.section
          variants={wrapperVariants}
          initial="hidden"
          animate={"visible"}
          className="md:w-[70%] dark:text-white"
        >
          <div className="flex flex-wrap gap-x-3">
            {title.split(" ").map((char) => {
              return (
                <motion.h1
                  key={char}
                  variants={itemVariants}
                  className="font-semibold md:text-7xl text-4xl"
                >
                  {char}
                </motion.h1>
              );
            })}
          </div>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-medium mt-5 text-label"
          >
            Jasa tugas dan aplikasi terpercaya, kepercayaan pelanggan adalah
            prioritas utama kami. <br /> Kami tidak hanya memberikan hasil yang
            memuaskan, tetapi juga menjaga kualitas, <br /> keamanan, dan
            kerahasiaan data Anda.
          </motion.p>
          <div className="w-fit">
            <div className="flex gap-x-3 mt-5">
              <Link to="Layanan" smooth={true} offset={-100}>
                <Button
                  variant="contained"
                  color="primary"
                  text="Jasa"
                  custom="py-3 px-8 min-w-[8rem] text-xl"
                />
              </Link>
              <Link to="Kontak" smooth={true} offset={-100}>
                <Button
                  variant="contained"
                  color="secondary"
                  text="Hubungi"
                  custom="py-3 px-8 min-w-[8rem] text-xl"
                />
              </Link>
            </div>
          </div>
          <motion.img
            initial={{ rotate: -360, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.5,
              stiffness: 100,
            }}
            src={HeroIllustration}
            alt="Hero"
            className="md:absolute static md:right-64 bottom-0 md:mt-0 my-7"
            width="400"
          />
        </motion.section>
        <section className="md:w-[30%]">
          <motion.div
            initial={{ x: 100, scale: 0 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full rounded-3xl px-5 py-3 bg-secondary border border-primary mb-5"
          >
            <label className="text-label text-xs">READY</label>
            <h1 className="font-semibold mb-3">Jam Kerja</h1>
            <div className="flex gap-x-5 items-center">
              <FaClock size={50} />
              <div className="font-bold">
                <span className="text-4xl">08.00</span>{" "}
                <span className="text-2xl">- Ngantuk</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 100, scale: 0 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="w-full rounded-3xl px-5 py-3 bg-tertiary border border-primary"
          >
            <label className="text-label text-xs">TRUSTED</label>
            <h1 className="font-semibold mb-3">Total Pelanggan</h1>
            <div className="flex gap-x-5 items-center">
              <FaUserAlt size={50} />
              <div className="font-bold">
                <h1 className="text-4xl">3000+</h1>
                <h2 className="text-2xl">Pelanggan</h2>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      <div className="mt-10 dark:text-white">
        <h1 className="font-semibold text-2xl">Payment</h1>
        <hr className="bg-primary h-[2px] mt-3" />
        <div className="flex flex-wrap gap-x-3 items-center mt-3">
          <h1 className="font-extrabold flex gap-x-3 items-center text-2xl">
            <FaMoneyBillWave size={40} />
            CASH
          </h1>
          <img src={LogoOVO} alt="OVO" width="120" />
          <img src={LogoDana} alt="OVO" width="120" />
        </div>
      </div>
    </main>
  );
}
