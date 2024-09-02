import mongoose from "mongoose";

const connection = {};

export const connectToDb = async () => {
    try {
        if (connection.isConnected) {
            console.log("Using existing connection");
            return;
        }

        const db = await mongoose.connect(process.env.MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        connection.isConnected = db.connections[0].readyState;
        console.log("MongoDB connected:", connection.isConnected);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw new Error(error);
    }
};

// Wiki Scraper
//  EXAMPLE Get today's featured article from English Wikipedia
//  EXAMPLE URL: https://api.wikimedia.org/core/v1/wikipedia/en/page/Earth/html



// let today = new Date();
// let year = today.getFullYear();
// let month = String(today.getMonth() + 1).padStart(2,'0');
// let day = String(today.getDate()).padStart(2,'0');
// let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/featured/${year}/${month}/${day}`;
//
// let response = await fetch( url,
//     {
//         headers: {
//             'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
//             'Api-User-Agent': 'YOUR_APP_NAME (YOUR_EMAIL_OR_CONTACT_PAGE)'
//         }
//     }
// );
// response.json()
//     .then(console.log).catch(console.error);