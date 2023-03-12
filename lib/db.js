import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
    const client = await MongoClient.connect('mongodb+srv://cakeShop:151214@cakeshop.xegwv4a.mongodb.net/shopData?retryWrites=true&w=majority');
    return client;
}
