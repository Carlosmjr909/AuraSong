import type { Track } from "$lib/types/track";

export const tracksContext = $state<{
    current: Track | null;
    tracks: Track[];
    currentIndex: number;
}>({
    current: null,
    tracks: [],
    currentIndex: -1
});

$effect.root(() => {
    const ultimaCancionGuardada = localStorage.getItem("runadelol");

    if (!ultimaCancionGuardada) return;

    try {
        tracksContext.current = JSON.parse(ultimaCancionGuardada);
    } catch (error) {
        console.error("No se pudo recuperar la canción guardada:", error);
        localStorage.removeItem("runadelol");
    }
});

export const guardarListaCanciones = (tracks: Track[]) => {
    tracksContext.tracks = tracks;

    if (!tracksContext.current) return;

    const index = tracks.findIndex(
        (track) => track.audio === tracksContext.current?.audio
    );

    tracksContext.currentIndex = index;
};

export const actualizarCancionActual = (
    newTrack: Track,
    index?: number
) => {
    tracksContext.current = newTrack;

    if (typeof index === "number") {
        tracksContext.currentIndex = index;
    } else {
        tracksContext.currentIndex = tracksContext.tracks.findIndex(
            (track) => track.audio === newTrack.audio
        );
    }

    localStorage.setItem("runadelol", JSON.stringify(newTrack));
};

export const siguienteCancion = () => {
    const lista = tracksContext.tracks;

    if (lista.length === 0) return;

    let siguienteIndex = tracksContext.currentIndex + 1;

    if (
        tracksContext.currentIndex < 0 ||
        siguienteIndex >= lista.length
    ) {
        siguienteIndex = 0;
    }

    actualizarCancionActual(lista[siguienteIndex], siguienteIndex);
};

export const anteriorCancion = () => {
    const lista = tracksContext.tracks;

    if (lista.length === 0) return;

    let anteriorIndex = tracksContext.currentIndex - 1;

    if (
        tracksContext.currentIndex < 0 ||
        anteriorIndex < 0
    ) {
        anteriorIndex = lista.length - 1;
    }

    actualizarCancionActual(lista[anteriorIndex], anteriorIndex);
};