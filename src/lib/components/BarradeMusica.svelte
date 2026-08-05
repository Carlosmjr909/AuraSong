<script lang="ts">
    import Icon from "@iconify/svelte";

    import {
        tracksContext,
        siguienteCancion,
        anteriorCancion,
    } from "$lib/context/tracks.svelte";

    let htmlAudio: HTMLAudioElement | null = $state(null);
    let isPlaying = $state(false);
    let currentTime = $state(0);
    let duration = $state(0);
    let shouldAutoplay = $state(false);

    const handlerPlay = async () => {
        if (!htmlAudio) return;

        if (htmlAudio.paused) {
            try {
                await htmlAudio.play();
            } catch (error) {
                console.error("No se pudo reproducir la canción:", error);
            }
        } else {
            htmlAudio.pause();
        }
    };

    const reproducirSiguiente = () => {
        shouldAutoplay = true;
        siguienteCancion();
    };

    const reproducirAnterior = () => {
        shouldAutoplay = true;
        anteriorCancion();
    };

    const actualizarTiempo = () => {
        if (!htmlAudio) return;

        currentTime = htmlAudio.currentTime;
    };

    const cargarDuracion = () => {
        if (!htmlAudio) return;

        duration = Number.isFinite(htmlAudio.duration) ? htmlAudio.duration : 0;
    };

    const cambiarTiempo = (event: Event) => {
        if (!htmlAudio) return;

        const input = event.currentTarget as HTMLInputElement;
        const nuevoTiempo = Number(input.value);

        htmlAudio.currentTime = nuevoTiempo;
        currentTime = nuevoTiempo;
    };

    const formatearTiempo = (totalSegundos: number) => {
        if (!Number.isFinite(totalSegundos)) {
            return "0:00";
        }

        const minutos = Math.floor(totalSegundos / 60);
        const segundos = Math.floor(totalSegundos % 60);

        return `${minutos}:${segundos.toString().padStart(2, "0")}`;
    };

    const cancionTerminada = () => {
        isPlaying = false;
        shouldAutoplay = true;
        siguienteCancion();
    };

    $effect(() => {
        const audioActual = tracksContext.current?.audio;

        if (!audioActual || !htmlAudio) return;

        currentTime = 0;
        duration = 0;

        htmlAudio.load();

        if (shouldAutoplay) {
            htmlAudio
                .play()
                .then(() => {
                    isPlaying = true;
                })
                .catch((error) => {
                    console.error(
                        "No se pudo reproducir automáticamente:",
                        error,
                    );

                    isPlaying = false;
                });

            shouldAutoplay = false;
        }
    });
</script>

{#if tracksContext.current}
    <div
        class="fixed right-4 bottom-4 left-4 z-50 rounded-2xl border border-white/10 bg-zinc-900 px-5 py-3 shadow-2xl"
    >
        <!-- Barra de progreso arriba -->

        <div class="flex items-center justify-between gap-4">
            <div class="flex min-w-0 flex-1 items-center gap-3">
                <img
                    src={tracksContext.current.album.thumbnail}
                    alt={`Portada de ${tracksContext.current.title}`}
                    class="h-11 w-11 shrink-0 rounded-lg object-cover"
                />

                <div class="min-w-0">
                    <p class="truncate text-sm font-bold text-white">
                        {tracksContext.current.title}
                    </p>

                    <p class="truncate text-xs text-zinc-400">
                        {tracksContext.current.artist.name}
                    </p>
                </div>
            </div>

            <div class="flex flex-col items-center gap-4">
                <div class="flex gap-4">
                    <button
                        type="button"
                        onclick={reproducirAnterior}
                        aria-label="Canción anterior"
                        class="cursor-pointer text-zinc-300 transition hover:text-white"
                    >
                        <Icon icon="fluent:previous-20-filled" width="22" />
                    </button>
               
                
                    <button
                        type="button"
                        onclick={handlerPlay}
                        aria-label={isPlaying ? "Pausar" : "Reproducir"}
                        class="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-fuchsia-600 text-white transition hover:scale-105 hover:bg-fuchsia-500"
                    >
                        <Icon
                            icon={isPlaying ? "mdi:pause" : "mdi:play"}
                            width="27"
                        />
                    </button>
               
                
                    <button
                        type="button"
                        onclick={reproducirSiguiente}
                        aria-label="Siguiente canción"
                        class="cursor-pointer text-zinc-300 transition hover:text-white"
                    >
                        <Icon icon="fluent:next-20-filled" width="22" />
                    </button>
                </div>

                <div class="mb-2 flex items-center gap-3">
                   
                        <span class="w-10 text-right text-xs text-zinc-400">
                            {formatearTiempo(currentTime)}
                        </span>
                    
                        <input
                            type="range"
                            min="0"
                            max={duration || 0}
                            value={currentTime}
                            step="0.1"
                            oninput={cambiarTiempo}
                            aria-label="Progreso de la canción"
                            class="h-1 w-150 flex-1 cursor-pointer accent-fuchsia-500"
                        />
                    
                        <span class="w-10 text-xs text-zinc-400">
                            {formatearTiempo(duration)}
                        </span>
                    
                </div>
            </div>

            <div class="flex-1"></div>
        </div>

        <audio
            src={tracksContext.current.audio}
            bind:this={htmlAudio}
            onloadedmetadata={cargarDuracion}
            ondurationchange={cargarDuracion}
            ontimeupdate={actualizarTiempo}
            onplay={() => (isPlaying = true)}
            onpause={() => (isPlaying = false)}
            onended={cancionTerminada}
        ></audio>
    </div>
{/if}
