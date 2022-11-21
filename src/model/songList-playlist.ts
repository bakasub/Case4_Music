import {Schema, model} from 'mongoose';
import {IPlaylist} from "./playlist";
import {ISong} from "./song";
import {IUser} from "./user";

interface IPlaylistSongs {
    user?: IUser;
    playlist?: IPlaylist;
    song?: ISong;
}

const playlistSongsSchema = new Schema<IPlaylistSongs>({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    playlist: {
        type: Schema.Types.ObjectId,
        ref: "playlist"
    },
    song: {
        type: Schema.Types.ObjectId,
        ref: "song",
    }
});

const PlaylistSongs = model<IPlaylistSongs>("playlistSongs",playlistSongsSchema);
export {PlaylistSongs};