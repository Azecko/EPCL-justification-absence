import Image from "next/image"

export default function EPCLVaudSignature() {
    return (
        <div className="hidden etat-de-vaud-div md:flex flex-row items-center gap-4">
            <Image className="etat-de-vaud-logo" alt="Logo de l'état de vaud" src="/EPCL-justification-absence/etat_de_vaud_logo.webp" width="45" height="200"/>
            <div className="etat-de-vaud-separator bg-black w-[0.5px] h-40"></div>
            <p className="etat-de-vaud-text">
                <strong>Ecole professionnelle commerciale de Lausanne</strong><br />
                Chemin de la Prairie 11<br />
                Case postale 272<br />
                1000 Lausanne 16<br />
                Rue du Midi 13<br />
                1003 Lausanne<br />
            </p>
        </div>
    )
}