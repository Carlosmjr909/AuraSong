import type { Track } from "$lib/types/track"

export const tracksContext = $state<{
    current: null | Track
}>({
    current: null
})

$effect.root(() => {
    const ultimaCancionActual = localStorage.getItem('runadelol')
    tracksContext.current = JSON.parse(ultimaCancionActual)
})

export const actualizarCancionActual = (newTrack: Track) => {
    tracksContext.current = newTrack
    localStorage.setItem('runadelol', JSON.stringify(newTrack))
}
