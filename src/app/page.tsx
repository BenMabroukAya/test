import Link from 'next/link';
//import '../pumping-system-calculator/';

const Page = () => {
  return (
    <div>
      <header style={{ textAlign: 'center', padding: '20px 0' }}>
        <img src="/image.png" alt="Logo Énergie Solaire" style={{ width: '150px', height: 'auto' }} />
      </header>
      <main>
        <center>
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
        </center>

        <center>
          <h2>Rôle de l'énergie Solaire</h2>
          <p>
            Les panneaux solaires produisent ce qu'on appelle une énergie verte. Une énergie bénéfique pour notre 
            environnement car elle ne rejette aucun produit polluant comme le CO2 et donc réduit notre empreinte 
            carbone. De plus, elle ralentit considérablement le réchauffement climatique.
          </p>
        </center>

        <center>
          <h2>Types de l'énergie Solaire</h2>
          <p>
            <ul>
              <li>Energie thermique :</li>
              L’énergie solaire thermique est une technologie qui consiste à capter les rayons solaires pour 
              produire de la chaleur ou de l’eau chaude.
              <br />
              <br />
              <li>Energie thermique :</li>
              L’énergie solaire photovoltaïque est une énergie électrique renouvelable et inépuisable à 
              l’échelle humaine, qui ne produit pas de CO2.
              Celle-ci utilise des panneaux solaires ou des centrales photovoltaïques, composés de cellules 
              photovoltaïques qui vont capter les rayons solaires.
            </ul>
          </p>
        </center>

        <center>
          <h2>Où se trouve l'énergie solaire?</h2>
          <p>
            L'énergie solaire est utilisée essentiellement pour deux usages : la production d'électricité (énergie 
            solaire photovoltaïque ou énergie solaire thermodynamique) ou la production de chaleur (énergie solaire thermique).
          </p>
        </center>

        {/* Lien vers la page du calculateur de système de pompage solaire */}
        <center>
          <Link href="../pumping-system-calculator/">
            Calculateur de Système de Pompage Solaire
          </Link>
        </center>

        {/* Ligne de droits d'auteur */}
        <center>
          <p>
            © {new Date().getFullYear()} Solar Energie. Tous les droits sont réservés.
          </p>
        </center>
      </main>
    </div>
  );
};

export default Page;
