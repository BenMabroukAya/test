'use client';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

const Page: FC = () => {


  const router = useRouter();
  
  const [puissancePompe, setPuissancePompe] = useState(2.2);
  const [dureeFonctionnement, setDureeFonctionnement] = useState(8);
  const [rendementGlobal, setRendementGlobal] = useState(0.85);
  const [irradiationJournaliere, setIrradiationJournaliere] = useState(7.56);
  const [puissanceModule, setPuissanceModule] = useState(0.3);
  const [result, setResult] = useState<any>(null); // Initialiser result à null

  useEffect(() => {
    const calculate = () => {
      const besoinsElectriquesJournaliers = puissancePompe * dureeFonctionnement;
      const puissanceCreteGenerateur = besoinsElectriquesJournaliers / (rendementGlobal * irradiationJournaliere);
      const nombreDeModules = Math.ceil(puissanceCreteGenerateur / puissanceModule);

      setResult({
        besoinsElectriquesJournaliers,
        puissanceCreteGenerateur: puissanceCreteGenerateur.toFixed(2), // Arrondi à deux décimales
        nombreDeModules,
      });
    };

    calculate();
  }, [puissancePompe, dureeFonctionnement, rendementGlobal, irradiationJournaliere, puissanceModule]);

  return (

    

    <div className="container">

      <Head>
      <img src="/image.png" alt="Logo Énergie Solaire" className="logo" />
        <title>Énergie Solaire et Calculateur</title>
        <meta name="description" content="Informations sur l'énergie solaire et calculateur de système de pompage solaire" />
      </Head>

      <header className="header">
        <img src="/image.png" alt="Logo Énergie Solaire" className="logo" />
      </header>

      <main className="main-content">

        <section className="section">

          <h1>Énergie Solaire</h1>

          <p>
            L'énergie solaire est une source d'énergie renouvelable qui provient du rayonnement du soleil. 
            Elle peut être captée et convertie en chaleur ou en électricité à l'aide de technologies comme 
            les panneaux photovoltaïques ou les capteurs solaires thermiques.
          </p>
          <p>
            Les avantages de l'énergie solaire incluent une réduction des émissions de gaz à effet de serre, 
            une dépendance énergétique réduite, et une ressource inépuisable et gratuite. Cependant, 
            l'intermittence et le coût initial d'installation sont des défis à considérer.
          </p>

        </section>

        <section className="section">

          <h2>Rôle de l'énergie Solaire</h2>

          <p>
            Les panneaux solaires produisent ce qu'on appelle une énergie verte. Une énergie bénéfique pour notre 
            environnement car elle ne rejette aucun produit polluant comme le CO2 et donc réduit notre empreinte 
            carbone. De plus, elle ralentit considérablement le réchauffement climatique.
          </p>

        </section>

        <section className="section">

          <h2>Types de l'énergie Solaire</h2>

          <ul>
            <li>
              <strong>Energie thermique :</strong>
              <p>
                L’énergie solaire thermique est une technologie qui consiste à capter les rayons solaires pour 
                produire de la chaleur ou de l’eau chaude.
              </p>
            </li>
            <li>
              <strong>Energie photovoltaïque :</strong>
              <p>
                L’énergie solaire photovoltaïque est une énergie électrique renouvelable et inépuisable à 
                l’échelle humaine, qui ne produit pas de CO2.
                Celle-ci utilise des panneaux solaires ou des centrales photovoltaïques, composés de cellules 
                photovoltaïques qui vont capter les rayons solaires.
              </p>
            </li>
          </ul>

        </section>


        <section className="section">

          <h2>Où se trouve l'énergie solaire?</h2>

          <p>
            L'énergie solaire est utilisée essentiellement pour deux usages : la production d'électricité (énergie 
            solaire photovoltaïque ou énergie solaire thermodynamique) ou la production de chaleur (énergie solaire thermique).
          </p>

        </section>


        <section className="section">

          <h2>Calculateur de Système de Pompage Solaire</h2>

          <div>
            <label>
              Puissance de la pompe (kW):
              <input type="number" value={puissancePompe} onChange={(e) => setPuissancePompe(parseFloat(e.target.value))} />
            </label>
          </div>

          <div>
            <label>
              Durée de fonctionnement (heures/jour):
              <input type="number" value={dureeFonctionnement} onChange={(e) => setDureeFonctionnement(parseFloat(e.target.value))} />
            </label>
          </div>

          <div>
            <label>
              Rendement global:
              <input type="number" value={rendementGlobal} onChange={(e) => setRendementGlobal(parseFloat(e.target.value))} />
            </label>
          </div>

          <div>
            <label>
              Irradiation journalière (kWh/m²/jour):
              <input type="number" value={irradiationJournaliere} onChange={(e) => setIrradiationJournaliere(parseFloat(e.target.value))} />
            </label>
          </div>

          <div>
            <label>
              Puissance d’un module (kW):
              <input type="number" value={puissanceModule} onChange={(e) => setPuissanceModule(parseFloat(e.target.value))} />
            </label>
          </div>

          {result && (
            <div>
              <h2>Résultats</h2>
              <p>Besoins électriques journaliers: {result.besoinsElectriquesJournaliers} kWh/jour</p>
              <p>Puissance crête nécessaire du champ photovoltaïque: {result.puissanceCreteGenerateur} kW</p>
              <p>Nombre de modules nécessaires: {result.nombreDeModules}</p>
            </div>
          )}

        </section>



        <footer className="footer">
          <p>© {new Date().getFullYear()} Énergie Solaire. Tous les droits sont réservés.</p>
        </footer>
      </main>
    </div>
  );
};

export default Page;
