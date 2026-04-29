import Button from "../components/Button";

export default function Seminar() {
  return (
    <div>
      <section
        id="Seminar"
        className="max-w-7xl mx-auto py-16 flex gap-10 justify-between items-center px-4"
      >
        <div className="w-2/3 flex flex-col gap-6">
          <h1 data-aos="fade-right" data-aos-delay="300" className="text-4xl font-bold text-red-900">
            IT Seminar <br />
            </h1>
            <h1 data-aos="fade-right" data-aos-delay="450" className="text-2xl text-red-900">
              “Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif”
            </h1>
          <p className="text-lg text-black-700">
            Seminar nasional yang membahas strategi dan arsitektur teknologi untuk menciptakan
            sistem di mana manusia dan AI bekerja sebagai mitra yang sinergis.Yang bertujuan mengubah 
            paradigma dari persaingan menjadi kolaborasi, serta meningkatkan pengetahuan peserta dalam 
            merancang teknologi AI yang berpusat pada manusia.
          </p>
          <div className="flex gap-4 mt-6">
            <Button label="Daftar Sekarang" variant="primary" />
          </div>
        </div>
        <div className="w-1/3">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png"
            alt="Maskot Seminar"
            className="w-full max-w-xs"
          />
        </div>
      </section>
    </div>
  );
}