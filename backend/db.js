const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://anni8sept:EDkuZUWeOyCfUUWS@cluster0.3ftokbk.mongodb.net/Cafe-des-juit?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(mongoURI, {useNewUrlParser: true},(err, result)=>{
        if(err)
        {
            console.log("---", err);
        }
        else 
        {
            console.log("Connected to Mongo Successfully!");
            const fetched_data = mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray( async function(err, data) {

              const foodCategory = await mongoose.connection.db.collection("foodCategory");
              foodCategory.find({}).toArray(function(err, catData){

                if(err) console.log(err);
                else 
                {
                  global.food_items = data;
                  global.foodCategory = catData;
                }

              })
            })
        }

    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = mongoDB;
