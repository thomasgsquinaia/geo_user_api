import mongoose from "mongoose";

const init = async function () {
    try {
        console.log('Connecting database');
        await mongoose.connect("mongodb+srv://root:root@clusterozmap.q6natw5.mongodb.net/");
        console.log('Database connected');
    } 
    catch (err) {
        throw(err);
    }
}

export default init();