import {Schema, model} from 'mongoose'
export interface IPlaylist {
    username ?: string;
    playlistName ?: string;
    createDate ?: string;
}

const playlistSchema = new Schema<IPlaylist>({
    username: String,
    playlistName: String,
    createDate: String,
});

const Playlist = model<IPlaylist>("playlist", playlistSchema);
export {Playlist}