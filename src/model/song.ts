import {Schema, model} from 'mongoose'
import {IUser} from "./user";

export interface ISong {
    user?: IUser;
    name: string
    artist?: string;
    image?: string;
    file?: string;
    date?: string;
    description?: string;
    composer?: string
}

const songSchema = new Schema<ISong>({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    name: String,
    artist: String,
    image: String,
    file: String,
    date: String,
    description: String,
    composer: String
});

const Song = model<ISong>("song", songSchema);
export {Song};