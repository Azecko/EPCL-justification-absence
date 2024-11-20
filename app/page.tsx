import EPCLVaudSignature from "./components/EPCLVaudSignature";

export default function Home() {
  return (
    <div>
      <div className="px-24 flex items-end justify-between">
          <EPCLVaudSignature />
        <span className="text-white bg-gray-400 font-semibold text-7xl pt-48 px-2">S16</span>
      </div>
      <div className="flex flex-col items-center mt-12 mb-4">
        <h3 id="main-title" className="font-bold text-xl">Justification d&apos;absence à transmettre via le formulaire en ligne</h3>
        <h4 id="main-description">pour élèves <span className="font-semibold underline">AVEC</span> contrat d&apos;apprentissage</h4>
      </div>
      <div className="flex flex-col w-fit mx-auto">
        <h3 id="EPCL-reserves-right" 
        className="
          text-center
          text-lg font-bold
          px-48
          border
          border-black
          italic"
        >
          L&apos;EPCL se réserve le droit de demander un certificat médical.
        </h3>
        {/* "Elève" section */}
        <div className="mt-16 border border-black">
          <div className="px-2 bg-gray-300">
            <span className="section-title">Elève</span>
          </div>
          <div className="mt-4 px-2">
            <label className="labels" htmlFor="student-name">Nom : </label>
            <input placeholder={".".repeat(500)} type="text" id="student-name" />
            <label className="labels" htmlFor="student-firstname">Prénom : </label>
            <input placeholder={".".repeat(500)} type="text" id="student-firstname" />
            <label className="labels" htmlFor="student-class">Classe : </label>
            <input className="w-24" placeholder={".".repeat(500)} type="text" id="student-class" />
          </div>
        </div>
        {/* "Absence" section */}
        <div className="mt-8 border border-black">
          <div className="px-2 bg-gray-300">
            <span className="section-title">Absence</span>
          </div>
          <div className="flex flex-col gap-2 mt-4 px-2">
            <div>
              <label className="labels" htmlFor="absence-from">Du (début de l&apos;absence) : date : </label>
              <input placeholder={".".repeat(500)} type="text" id="absence-from" />
              <label className="labels" htmlFor="absence-from-hour">, heure : </label>
              <input className="w-12" placeholder={".".repeat(500)} type="text" id="absence-from-hour" />
            </div>
            <div>
              <label className="labels" htmlFor="absence-to">Au (fin de l&apos;absence) : date :</label>
              <input placeholder={".".repeat(500)} type="text" id="absence-to" />
              <label className="labels" htmlFor="absence-to-hour">, heure : </label>
              <input className="w-12" placeholder={".".repeat(500)} type="text" id="absence-to-hour" />
            </div>
          </div>
        </div>
        {/* "Tests manqués" section */}
        <div className="mt-8 border border-black">
          <div className="px-2 bg-gray-300">
            <span className="section-title">Test(s) manqué(s) dans la/les branche(s) suivante(s)</span>
          </div>
          <div className="mt-4 px-2">
            <textarea className="w-full resize-none" rows={4} name="missed-subjects" id="missed-subjects"></textarea>
          </div>
        </div>
        {/* "Motif de l'absence" section */}
        <div className="mt-8 border border-black">
          <div className="px-2 bg-gray-300">
            <span className="section-title">Motif de l&apos;absence <span className="italic text-xs">(obligatoire)</span></span>
          </div>
          <div className="mt-4 px-2">
            <textarea className="w-full resize-none" rows={4} name="absence-reason" id="absence-reason"></textarea>
          </div>
        </div>
        {/* "Validations" section */}
        <div className="mt-4">
          <h4 className="font-semibold underline validations-title">Validations</h4>
          <div className="mt-4 border border-black">
            <div className="px-2 bg-gray-300">
              <span className="section-title">Responsable de formation</span>
            </div>
            <div className="mt-4 px-2">
              <label className="labels" htmlFor="responsible-name">Nom : </label>
              <input placeholder={".".repeat(500)} type="text" id="responsible-name" />
              <label className="labels" htmlFor="responsible-firstname">Prénom : </label>
              <input placeholder={".".repeat(500)} type="text" id="responsible-firstname" />
              <label className="labels" htmlFor="responsible-phone">No tél : </label>
              <input placeholder={".".repeat(500)} type="text" id="responsible-phone" />
            </div>
          </div>
        </div>
        {/* "Signatures" section */}
        <div className="flex flex-col gap-6 mt-24 px-2">
          <div className="flex justify-between">
            <span className="certifications italic">Certifié conforme par l&apos;employeur</span>
            <div className="flex flex-col w-3/5">
              <input className="w-full" placeholder={".".repeat(500)} type="text" />
              <span className="text-sm italic">Lieu, date et signature du responsable de formation (obligatoire)</span>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="certifications italic">Certifié conforme par l&apos;élève :</span>
              <span className="certifications italic">Ou son représentant légal si mineur</span>
            </div>
            <div className="flex flex-col w-3/5">
              <input className="w-full" placeholder={".".repeat(500)} type="text" />
              <span className="text-sm italic">Signature de l’élève ou du représentant légal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
