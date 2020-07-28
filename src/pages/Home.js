// const Home = () => {
//   const view = `
//     <div class = "Characters">
//       <article class="character-item>
//         <a href="#/1/">
//           <img src="image" alt="name">
//           <h2>Name</h2>
//         </a>
//       </article>
//     </div>
//   `;
//   return view;
// };

// export default Home;

// //ADGR Code
// import getData from "../utils/getData";

// const Home = async () => {
//   const characters = await getData();
//   const view = `
//     <div class="Characters">
//       ${characters.results
//         .map(
//           (character) => `
//         <article class="Character-item">
//         <a href="#/${character.id}/">
//           <img src="${character.image}" alt="${character.name}">
//           <h2>${character.name}</h2>
//         </a>
//       </article>
//       `
//         )
//         .join("")}
//     </div>
//   `;
//   return view;
// };

// export default Home;

import getData from "../utils/getData";

const Home = async () => {
  const characters = await getData();
  const view = `
    <div class="Characters">
      ${characters.results
        .map(
          (character) => `
        <article class="Character-item">
          <a href="#/${character.id}/">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
          </a>
        </article>
      `
        )
        .join("")}
    </div>
  `;
  return view;
};

export default Home;
