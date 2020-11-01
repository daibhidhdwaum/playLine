const playerImages = [
  "assets/headshots/Aaron-Gordon-PLP59D7092156491v2.png",
  "assets/headshots/Anthony-Davis-PLP59D70938C0B3Ev2.png",
  "assets/headshots/Dangelo-Russell-PLP59D709255D994v4.png",
  "assets/headshots/Kawhi-Leonard-PLP59D7093A107E7v2.png",
  "assets/headshots/Kyle-Lowry-PLP59D70927DF104.png",
  "assets/headshots/Lebron-James-PLP59D7092A6F6CEv2.png",
  "assets/headshots/Pascal-Siakam-PLP59D70927CC6DD.png",
];

const playerHeadshot = playerImages.map((player) => {
  console.log(player);
  return <img src={player} alt="player" />;
});

// const playerStats =

const PlayerCard = () => {
  return (
    <div className="card">
      <div className="card__imageContainer">{playerHeadshot}</div>
      <p>Player Name</p>
      <div>
        <div>
          <p>A Number</p>
        </div>
        <p>pts</p>
      </div>
    </div>
  );
};

export default PlayerCard;
