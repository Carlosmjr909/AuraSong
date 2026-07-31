export const tracksContext = $state({
    current: null
})

export const actualizarCancionActual = (newTrack) => {
    tracksContext.current = newTrack;
}
