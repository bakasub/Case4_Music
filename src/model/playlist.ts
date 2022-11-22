import {Schema, model} from 'mongoose'
import {IUser} from "./user";


export interface IPlaylist {
    user ?: IUser;
    playlistName ?: string;
    createDate ?: string;
}

const playlistSchema = new Schema<IPlaylist>({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    playlistName: String,
    createDate: String,
});

const Playlist = model<IPlaylist>("playlist", playlistSchema);
export {Playlist}