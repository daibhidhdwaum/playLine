// player images are in Public Assets for ease of import
const playerImages = [
  { id: 1, src: "assets/headshots/Lebron-James-PLP59D7092A6F6CEv2.png" },
  { id: 2, src: "assets/headshots/Anthony-Davis-PLP59D70938C0B3Ev2.png" },
  { id: 3, src: "assets/headshots/Aaron-Gordon-PLP59D7092156491v2.png" },
  { id: 4, src: "assets/headshots/Pascal-Siakam-PLP59D70927CC6DD.png" },
  { id: 5, src: "assets/headshots/Kawhi-Leonard-PLP59D7093A107E7v2.png" },
  { id: 6, src: "assets/headshots/Kyle-Lowry-PLP59D70927DF104.png" },
  { id: 7, src: "assets/headshots/Dangelo-Russell-PLP59D709255D994v4.png" },
];

const PlayerImage = () => {
  const playerHeadshot = playerImages.map((player) => {
    const { id, src } = player;
    return (
      // The stacking order of the player images is different from the provided image. This way it stacks in the same order as the word "lotto" in the playline sports lotto logo.
      <div className="playerImage" key={id}>
        <div className="playerImage__outerContainer">
          <div className="playerImage__innerContainer">
            <img src={src} alt="player" className="playerImage__image" />
          </div>
        </div>
      </div>
    );
  });
  return playerHeadshot;
};

export default PlayerImage;
