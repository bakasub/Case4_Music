import {Schema, model} from 'mongoose';
import {IPlaylist} from "./playlist";
import {ISong} from "./song";

interface IPlaylistSongs {
    playlist?: IPlaylist;
    song?: ISong;
}

const playlistSongsSchema = new Schema<IPlaylistSongs>({
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