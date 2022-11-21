import {Schema, model} from 'mongoose'
import {IUser} from "./user";

interface ISong {
    User?: IUser;
    name?: string;
    artist?: string;
    image?: string;
    file?: string;
    date?: string;
    description?: string;
    composer?: string
}

const songSchema = new Schema<ISong>({
    User: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    name:String,
    artist: String,
    image: String,
    file: String,
    date: String,
    description: String,
    composer: String
});

const Song = model<ISong>('Song', songSchema);
export {Song};