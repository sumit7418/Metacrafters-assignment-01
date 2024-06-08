/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1.
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name)).
4. For good measure, getTotalSupply() should return the number of NFT's you have created.
*/

// 1. Create a variable to hold your NFTs
let NFTCollection = [];

// 2. Create a function to mint an NFT
function mintNFT(name, artist, year, medium, dimensions, tokenID) {
    let NFT = {
        name: name,
        artist: artist,
        year: year,
        medium: medium,
        dimensions: dimensions,
        tokenID: tokenIDs
    };
    NFTCollection.push(NFT);
}

// 3. Create a function to list all NFTs
function listNFTs() {
    for (let i = 0; i < NFTCollection.length; i++) {
        console.log("_____________________ NFT Metadata _________________________" );
        console.log("Name: " + NFTCollection[i].name);
        console.log("Artist: " + NFTCollection[i].artist);
        console.log("Year: " + NFTCollection[i].year);
        console.log("Medium: " + NFTCollection[i].medium);
        console.log("Dimensions: " + NFTCollection[i].dimensions);
        console.log("Token ID: " + NFTCollection[i].tokenID);
        console.log("___________________________________________________________" );
    }
}

// 4. Create a function to get the total number of NFTs minted
function getTotalSupply() {
    return NFTCollection.length;
}

// Call your functions below this line
mintNFT("Starry Night", "Vincent van Gogh", 1889, "Oil on canvas", "73.7 cm × 92.1 cm", "12345");
mintNFT("Mona Lisa", "Leonardo da Vinci", 1503, "Oil on poplar panel", "77 cm × 53 cm", "67890");
mintNFT("The Persistence of Memory", "Salvador Dalí", 1931, "Oil on canvas", "24 cm × 33 cm", "11223");
mintNFT("The Scream", "Edvard Munch", 1893, "Oil, tempera, and pastel on cardboard", "91 cm × 73.5 cm", "44556");

listNFTs();

console.log("Total NFTs Minted: " + getTotalSupply());
