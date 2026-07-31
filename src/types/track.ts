export interface Track {
    id: string
    title: string
    artist: {
        id: string
        name: string
        image: string
        thumbnail: string
    }
    album: {
        id: string
        title: string
        image: string
        thumbnail: string
    }
    audio: string
}