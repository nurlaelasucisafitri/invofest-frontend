import Button from "../components/Button";

export default function Talkshow() {
  return (
    <div>
      <section
        id="Talkshow"
        className="max-w-7xl mx-auto py-16 flex gap-10 justify-between items-center px-4"
      >
        <div className="w-2/3 flex flex-col gap-6">
          <h1 data-aos="fade-right" data-aos-delay="300" className="text-4xl font-bold text-red-900">
            IT Talkshow <br />
            </h1>
            <h1 data-aos="fade-right" data-aos-delay="450" className="text-2xl text-red-900">
              “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan”
            </h1>
          <p className="text-lg text-black-700">
            Talkshow “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan” Sebuah diskusi interaktif 
            yang mengeksplorasi cara mengintegrasikan nilai-nilai kemanusiaan seperti etika, empati, dan kreativitas 
            ke dalam pengembangan kecerdasan buatan. yang bertujuan menginspirasi audiens untuk membangun dan memanfaatkan 
            AI sebagai alat kolaboratif yang memperkuat potensi unik manusia, bukan sebagai penggantinya.
          </p>
          <div className="flex gap-4 mt-6">
            <Button label="Daftar Sekarang" variant="primary" />
          </div>
        </div>
        <div className="w-1/3">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Talkshow.png"
            alt="Maskot Seminar"
            className="w-full max-w-xs"
          />
        </div>
      </section>
    </div>
  );
}