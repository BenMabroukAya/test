// app/page.jsx
const Page = () => {
  return (
    <div>
      <header style={{ textAlign: 'center', padding: '20px 0' }}>
        <img src="/image.png" alt="Logo Énergie Solaire" style={{ width: '150px', height: 'auto' }} />
      </header>
      <main>
        <center><h1>Énergie Solaire</h1></center>
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
      </main>
    </div>
  );
};

export default Page;
