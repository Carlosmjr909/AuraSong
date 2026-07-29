<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>AuraSong - Songs</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;800&amp;family=JetBrains+Mono:wght@400;500&amp;family=Hanken+Grotesk:wght@400;500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-panel {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(0, 219, 233, 0.1);
        }
        .neon-border-focus:focus-within {
            border-bottom: 2px solid #00f0ff;
            box-shadow: 0 4px 12px -2px rgba(0, 240, 255, 0.3);
        }
        .song-row:hover {
            background: rgba(0, 219, 233, 0.08);
        }
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background: rgba(0, 219, 233, 0.2);
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: rgba(0, 219, 233, 0.4);
        }
        @keyframes scanline {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
        }
        .scanline {
            animation: scanline 8s linear infinite;
        }
    </style>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "primary": "#dbfcff",
                    "on-primary-fixed": "#002022",
                    "surface-container-low": "#1b1b20",
                    "on-tertiary": "#223600",
                    "on-primary": "#00363a",
                    "inverse-on-surface": "#303036",
                    "on-secondary-container": "#500050",
                    "tertiary": "#e5ffba",
                    "outline": "#849495",
                    "on-primary-fixed-variant": "#004f54",
                    "on-error": "#690005",
                    "secondary-fixed": "#ffd7f5",
                    "on-background": "#e4e1e9",
                    "inverse-surface": "#e4e1e9",
                    "primary-container": "#00f0ff",
                    "on-secondary": "#5b005b",
                    "error-container": "#93000a",
                    "on-secondary-fixed": "#380038",
                    "tertiary-fixed": "#a9f900",
                    "surface-container-high": "#2a292f",
                    "surface-variant": "#35343a",
                    "on-tertiary-fixed": "#121f00",
                    "surface-container": "#1f1f25",
                    "outline-variant": "#3b494b",
                    "tertiary-container": "#a2ef00",
                    "on-error-container": "#ffdad6",
                    "primary-fixed-dim": "#00dbe9",
                    "on-tertiary-fixed-variant": "#334f00",
                    "on-tertiary-container": "#456900",
                    "error": "#ffb4ab",
                    "background": "#131318",
                    "on-surface-variant": "#b9cacb",
                    "primary-fixed": "#7df4ff",
                    "surface-tint": "#00dbe9",
                    "surface-container-lowest": "#0e0e13",
                    "surface": "#131318",
                    "surface-container-highest": "#35343a",
                    "on-primary-container": "#006970",
                    "on-surface": "#e4e1e9",
                    "tertiary-fixed-dim": "#94db00",
                    "secondary-container": "#fe00fe",
                    "secondary": "#ffabf3",
                    "surface-dim": "#131318",
                    "on-secondary-fixed-variant": "#810081",
                    "inverse-primary": "#006970",
                    "surface-bright": "#39383e",
                    "secondary-fixed-dim": "#ffabf3"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "sm": "12px",
                    "xl": "80px",
                    "base": "8px",
                    "xs": "4px",
                    "lg": "48px",
                    "gutter": "24px",
                    "margin-mobile": "16px",
                    "margin-desktop": "40px",
                    "md": "24px"
            },
            "fontFamily": {
                    "headline-md": ["Sora"],
                    "label-sm": ["JetBrains Mono"],
                    "label-md": ["JetBrains Mono"],
                    "body-md": ["Hanken Grotesk"],
                    "headline-sm": ["Sora"],
                    "display-lg": ["Sora"],
                    "display-lg-mobile": ["Sora"],
                    "body-lg": ["Hanken Grotesk"]
            },
            "fontSize": {
                    "headline-md": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                    "label-sm": ["12px", {"lineHeight": "16px", "letterSpacing": "0.1em", "fontWeight": "500"}],
                    "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "500"}],
                    "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                    "headline-sm": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
                    "display-lg": ["64px", {"lineHeight": "72px", "letterSpacing": "-0.04em", "fontWeight": "800"}],
                    "display-lg-mobile": ["40px", {"lineHeight": "44px", "letterSpacing": "-0.02em", "fontWeight": "800"}],
                    "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}]
            }
          },
        },
      }
    </script>
</head>
<body class="bg-background text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container min-h-screen overflow-x-hidden">
<!-- Background Visual Layer -->
<div class="fixed inset-0 z-0 pointer-events-none opacity-40">

<div class="absolute inset-0 bg-linear-to-b from-background via-transparent to-background"></div>
</div>
<!-- SideNavBar (Desktop Anchor) -->
<aside class="hidden lg:flex flex-col h-screen fixed left-0 top-0 pt-xl pb-lg w-64 bg-surface-container-lowest/80 backdrop-blur-2xl border-r border-primary/10 shadow-2xl z-40">
<div class="px-margin-desktop mb-lg">
<h1 class="font-headline-sm text-headline-sm font-bold text-primary tracking-tighter">AuraSong</h1>
</div>
<nav class="flex-1 px-4 space-y-2">
<a class="text-on-surface-variant hover:bg-surface-variant/30 px-4 py-3 flex items-center gap-3 rounded-lg transition-colors" href="/">
<span class="material-symbols-outlined">home</span>
<span class="font-label-md text-label-md">Home</span>
</a>
<a class="bg-primary/20 text-primary border-r-4 border-primary px-4 py-3 flex items-center gap-3 transition-transform duration-300 ease-in-out" href="songs">
<span class="material-symbols-outlined">music_note</span>
<span class="font-label-md text-label-md">Songs</span>
</a>
<a class="text-on-surface-variant hover:bg-surface-variant/30 px-4 py-3 flex items-center gap-3 rounded-lg transition-colors" href="browse_files">
<span class="material-symbols-outlined">folder_open</span>
<span class="font-label-md text-label-md">Browse Files</span>
</a>
<a class="text-on-surface-variant hover:bg-surface-variant/30 px-4 py-3 flex items-center gap-3 rounded-lg transition-colors" href="artists">
<span class="material-symbols-outlined">artist</span>
<span class="font-label-md text-label-md">artist</span>
</a>
<a class="text-on-surface-variant hover:bg-surface-variant/30 px-4 py-3 flex items-center gap-3 rounded-lg transition-colors" href="settings">
<span class="material-symbols-outlined">settings</span>
<span class="font-label-md text-label-md">Settings</span>
</a>
</nav>
<div class="mt-auto px-6 py-6 border-t border-primary/10">
<div class="flex items-center gap-3 mb-4">
<div class="w-10 h-10 rounded-full bg-primary-container overflow-hidden">
<!-- svelte-ignore a11y_missing_attribute -->
<img class="w-full h-full object-cover" data-alt="A portrait of a futuristic music enthusiast with neon glowing tattoos on their neck, wearing iridescent headphones in a dark studio setting. The lighting is dominated by cyan and magenta highlights, reflecting a high-energy electronic music aesthetic. High detail, 8k resolution, cinematic lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXZYXUkxUVcG66WyfSBMwwyH63OSbeoLZXR-4ZYf0OWuPXhE6rreLlACo4yafP-Ukd87fXvrnOV6p2_ie_InMwqfLPurmfEJOyphlqd2DDR3jX7gceaZceO_gHttk4Q_T05HLJfiamMbo_OHGEXX2N9WK0fGduGKplfMZ1Pb21lcjaDprRO-Izwfw_V2PUuDMLwepWymRVkFS5tlZE9y6rPSKeQu3F10aFjp4076vDtJn9I91WoTuPlRljqZHcgf82OsNnyoDErdY"/>
</div>
<div>
<p class="font-label-md text-label-md text-primary">AuraUser</p>
<p class="text-[10px] uppercase tracking-widest text-on-surface-variant">Pro Listener</p>
</div>
</div>
<button class="w-full py-2 px-4 rounded-full bg-linear-to-r from-primary-fixed-dim to-secondary-container text-on-primary-fixed font-bold text-xs hover:scale-105 transition-transform">
                Upgrade to Premium
            </button>
</div>
</aside>
<!-- Top Navigation (Mobile/Tablet) -->
<header class="sticky top-0 z-50 w-full px-margin-mobile md:px-margin-desktop py-sm bg-surface/10 backdrop-blur-xl border-b border-primary/20 flex justify-between items-center lg:hidden">
<h1 class="font-display-lg-mobile text-display-lg-mobile italic tracking-tighter text-primary">AuraSong</h1>
<div class="flex gap-4 items-center">
<span class="material-symbols-outlined text-primary">search</span>
<span class="material-symbols-outlined text-primary">account_circle</span>
</div>
</header>
<!-- Main Content -->
<main class="relative z-10 lg:ml-64 pb-32">
<div class="px-margin-mobile md:px-margin-desktop pt-md md:pt-lg">
<!-- Page Header & Search -->
<div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-lg">
<div>
<h2 class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-2">My Library</h2>
<p class="text-on-surface-variant max-w-md">Manage your sonic universe. Your digital cockpit for synchronized local and cloud frequencies.</p>
</div>
<div class="w-full md:w-96">
<div class="relative group">
<input class="w-full bg-surface-container-low/50 border-b-2 border-primary/30 py-3 pl-12 pr-4 font-label-md text-label-md text-primary placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary transition-all duration-300 neon-border-focus" placeholder="SEARCH FREQUENCY..." type="text"/>
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary-fixed-dim drop-shadow-[0_0_8px_rgba(0,219,233,0.6)]">search</span>
<div class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500"></div>
</div>
</div>
</div>
<!-- Bento Layout for File Manager and Stats -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-lg">
<!-- Futuristic File Manager Section -->
<div class="md:col-span-2 glass-panel p-md rounded-xl relative overflow-hidden group">
<div class="absolute inset-0 scanline bg-linear-to-b from-transparent via-primary/5 to-transparent h-20 opacity-20 pointer-events-none"></div>
<div class="flex justify-between items-start mb-base">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary-fixed-dim">folder_managed</span>
<h3 class="font-label-md text-label-md uppercase tracking-widest text-primary">Local Storage Interface</h3>
</div>
<span class="text-[10px] font-label-sm text-primary/50">ENCRYPTED_VOLUME_01</span>
</div>
<div class="flex flex-col md:flex-row gap-md items-center py-sm">
<div class="relative w-full md:w-48 h-32 glass-panel border-dashed border-primary/30 flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-all group/upload">
<span class="material-symbols-outlined text-3xl text-primary/50 group-hover/upload:scale-125 transition-transform">cloud_upload</span>
<p class="font-label-sm text-[10px] mt-2 text-on-surface-variant">DRAG TRACKS HERE</p>
</div>
<div class="flex-1 space-y-3 w-full">
<div class="flex justify-between text-xs font-label-sm">
<span class="text-on-surface-variant">SYSTEM CAPACITY</span>
<span class="text-primary">78% UTILIZED</span>
</div>
<div class="h-1 bg-surface-container-highest rounded-full overflow-hidden">
<div class="h-full bg-linear-to-r from-primary to-secondary-container w-[78%] shadow-[0_0_10px_#00f0ff]"></div>
</div>
<button class="flex items-center gap-2 text-xs font-label-sm text-primary-fixed-dim hover:text-white transition-colors">
<span class="material-symbols-outlined text-sm">sync_alt</span>
<span>RESCAN LOCAL DIRECTORY</span>
</button>
</div>
</div>
</div>
<!-- Stats/Active Visualizer Card -->
<div class="glass-panel p-md rounded-xl flex flex-col justify-between border-secondary-container/20">
<div class="flex justify-between">
<span class="text-[10px] font-label-sm text-secondary tracking-widest">LIVE_SPECTRUM</span>
<div class="flex gap-1">
<div class="w-1 h-1 rounded-full bg-primary animate-pulse"></div>
<div class="w-1 h-1 rounded-full bg-primary animate-pulse" style="animation-delay: 0.2s"></div>
<div class="w-1 h-1 rounded-full bg-primary animate-pulse" style="animation-delay: 0.4s"></div>
</div>
</div>
<div class="h-24 flex items-end justify-around gap-1 px-2">
<div class="w-2 bg-primary rounded-t-sm animate-[bounce_1.2s_infinite]"></div>
<div class="w-2 bg-secondary rounded-t-sm animate-[bounce_0.8s_infinite]"></div>
<div class="w-2 bg-primary-container rounded-t-sm animate-[bounce_1.5s_infinite]"></div>
<div class="w-2 bg-primary rounded-t-sm animate-bounce"></div>
<div class="w-2 bg-secondary rounded-t-sm animate-[bounce_1.3s_infinite]"></div>
<div class="w-2 bg-primary rounded-t-sm animate-[bounce_0.9s_infinite]"></div>
</div>
<div class="mt-4">
<p class="text-2xl font-headline-sm text-primary">1,248</p>
<p class="text-[10px] font-label-sm text-on-surface-variant">TOTAL TRACKS IN SYNC</p>
</div>
</div>
</div>
<!-- Songs Table -->
<div class="glass-panel rounded-xl overflow-hidden mb-lg">
<div class="grid grid-cols-12 gap-4 px-md py-4 border-b border-primary/10 text-on-surface-variant font-label-md text-[11px] uppercase tracking-widest bg-surface-container-low/30">
<div class="col-span-1 text-center">#</div>
<div class="col-span-5 md:col-span-4">Title</div>
<div class="hidden md:block md:col-span-3">Album</div>
<div class="col-span-4 md:col-span-3">Artist</div>
<div class="col-span-2 md:col-span-1 text-right">
<span class="material-symbols-outlined text-sm">schedule</span>
</div>
</div>
<div class="divide-y divide-primary/5">
<!-- Row 1 -->
<div class="grid grid-cols-12 gap-4 px-md py-4 items-center song-row transition-all group cursor-pointer">
<div class="col-span-1 text-center font-label-sm text-on-surface-variant group-hover:hidden">01</div>
<div class="col-span-1 text-center hidden group-hover:flex justify-center text-primary">
<span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
</div>
<div class="col-span-5 md:col-span-4 flex items-center gap-3">
<div class="w-10 h-10 rounded bg-surface-variant shrink-0 overflow-hidden relative group-hover:scale-105 transition-transform">
<!-- svelte-ignore a11y_missing_attribute -->
<img class="w-full h-full object-cover" data-alt="Abstract 3D digital art of a pulsing electronic heart with cyan laser wires and magenta glowing veins. Dark background, sharp focus, cinematic lighting, futuristic music album cover style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7ZTfuCbqcHK2qaXZ1TMyHTmluNKBj5G06niyo2_EqeBqQpUNM1a1k27bePd-ipXEmlgucXtXVh42_RdxU3FAqxBbSOuiNNinyp_55dPZWSl4N0VJxdsYPzgajQTIsCXllqgyXXAkYi7W9wv8kjCA7ScKRymq32uhKXfPha6ACgebg6lSNfdrsJxOrR1NmtsbS4wCXaqfWw8DxYRYUVB9hM8carQSYwY9GhHZLhc1_3FYnpolQExBd1IGGPOVQmsSI___DfYocfc8"/>
</div>
<div class="truncate">
<p class="font-label-md text-primary truncate">Cybernetic Pulse</p>
<p class="text-[10px] text-on-surface-variant md:hidden">Vortex Theory</p>
</div>
</div>
<div class="hidden md:block md:col-span-3 text-sm text-on-surface-variant truncate">Neon Genesis</div>
<div class="col-span-4 md:col-span-3 text-sm text-on-surface-variant truncate">Vortex Theory</div>
<div class="col-span-2 md:col-span-1 text-right font-label-sm text-xs text-on-surface-variant">03:42</div>
</div>
<!-- Row 2 -->
<div class="grid grid-cols-12 gap-4 px-md py-4 items-center song-row transition-all group cursor-pointer bg-primary/5 border-l-2 border-primary">
<div class="col-span-1 text-center text-primary animate-pulse">
<span class="material-symbols-outlined text-sm">equalizer</span>
</div>
<div class="col-span-5 md:col-span-4 flex items-center gap-3">
<div class="w-10 h-10 rounded bg-surface-variant shrink-0 overflow-hidden relative">
<!-- svelte-ignore a11y_missing_attribute -->
<img class="w-full h-full object-cover" data-alt="A futuristic cityscape at night with glowing blue and pink skyscrapers, reflected in a wet asphalt ground. Cinematic synthwave aesthetic, dreamy atmosphere, digital art." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfZYFZEQHFQL17bTkTvSL5vD8j9cQqrp3qfYJgh1YfNXjMEgfB2gSTifYZkzSshHluwKCbz8LnZBGe29mpH9nOM1XeueaA7Spp-GS1R-8Pnwz_6I5sUImWLtYFavVqBe1roOM5vVMWy5pv9I3G1dUC1dj77_v44phmPA6oPKkYYV7E9yUnUbk1Ty0bDCML4OuEKuMD-FfqCrf145vS2bajRIrrM_z5G9-nExFQm7yzRo0dHYvPRAfhk66pnA2VWOM89Xr3KCLWl34"/>
</div>
<div class="truncate">
<p class="font-label-md text-primary truncate">Data Stream</p>
<p class="text-[10px] text-on-surface-variant md:hidden">LUMINA</p>
</div>
</div>
<div class="hidden md:block md:col-span-3 text-sm text-on-surface-variant truncate">Binary Sunset</div>
<div class="col-span-4 md:col-span-3 text-sm text-on-surface-variant truncate">LUMINA</div>
<div class="col-span-2 md:col-span-1 text-right font-label-sm text-xs text-primary">04:15</div>
</div>
<!-- Row 3 -->
<div class="grid grid-cols-12 gap-4 px-md py-4 items-center song-row transition-all group cursor-pointer">
<div class="col-span-1 text-center font-label-sm text-on-surface-variant group-hover:hidden">03</div>
<div class="col-span-1 text-center hidden group-hover:flex justify-center text-primary">
<span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
</div>
<div class="col-span-5 md:col-span-4 flex items-center gap-3">
<div class="w-10 h-10 rounded bg-surface-variant shrink-0 overflow-hidden relative">
<!-- svelte-ignore a11y_missing_attribute -->
<img class="w-full h-full object-cover" data-alt="Minimalist geometric shapes in motion, vibrant lime green and electric blue colors against a deep charcoal background. High contrast, sharp edges, motion blur, modern digital design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_xfaJOCo6AO_eP0xiu7tFOcHvH-3qBWdJoSGAQ1ZflTpv0gZmJgR9e5GbpXbsIKslF760ql65EvKVlwS0H43jrDD_61n9wHDKyGSbvX6qTRBJ5pNXpoZJnUhUvz3rmVibpZUUvze7-5yTki4XF8QT_uU5xTJ8zmcHiMETCqmnZxBHZhhvtYCgF5HJK5ArO1gD3526DfrRl52B0oWweSguPKFMcXPBmXSLX72bFYJOHLfJxePeQgLXYrTwiKOYcqPQQl-IY9aOz7Q"/>
</div>
<div class="truncate">
<p class="font-label-md text-primary truncate">Kinetic Motion</p>
<p class="text-[10px] text-on-surface-variant md:hidden">Rhythm Grid</p>
</div>
</div>
<div class="hidden md:block md:col-span-3 text-sm text-on-surface-variant truncate">Velocity One</div>
<div class="col-span-4 md:col-span-3 text-sm text-on-surface-variant truncate">Rhythm Grid</div>
<div class="col-span-2 md:col-span-1 text-right font-label-sm text-xs text-on-surface-variant">05:21</div>
</div>
<!-- Row 4 -->
<div class="grid grid-cols-12 gap-4 px-md py-4 items-center song-row transition-all group cursor-pointer">
<div class="col-span-1 text-center font-label-sm text-on-surface-variant group-hover:hidden">04</div>
<div class="col-span-1 text-center hidden group-hover:flex justify-center text-primary">
<span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
</div>
<div class="col-span-5 md:col-span-4 flex items-center gap-3">
<div class="w-10 h-10 rounded bg-surface-variant shrink-0 overflow-hidden relative">
<!-- svelte-ignore a11y_missing_attribute -->
<img class="w-full h-full object-cover" data-alt="Close up of a futuristic turntable with glowing holographic records. Deep violet and cyan lighting, intricate technical details, high-end audiophile equipment aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe3KrlzaWOtzLS6beQwHbT1xx2qbwgxiXOD_x5se-HZOJf4E83l68P9XbWCXrhvlPwMPQRRWL_7wlSaMCbL_iZD5fbiJtq3zVB3jObly4jDgoejnz8YBJcXAO7wKNCXY17ZeMYUjUGgx0gT5IBJD7yKCCa-ht67U_veiJB9RFHjzVgZFxjoY0Sy6js7apq_FvrIN-VhjezaXM9yzJQ2AEiZ3aN4PgoZXhImVJ0PTOVN7dYym7J9iOtpMrHlN4O_QmDQAkQY6jqED4"/>
</div>
<div class="truncate">
<p class="font-label-md text-primary truncate">Obsidian Soul</p>
<p class="text-[10px] text-on-surface-variant md:hidden">Nocturnal</p>
</div>
</div>
<div class="hidden md:block md:col-span-3 text-sm text-on-surface-variant truncate">Night Walker</div>
<div class="col-span-4 md:col-span-3 text-sm text-on-surface-variant truncate">Nocturnal</div>
<div class="col-span-2 md:col-span-1 text-right font-label-sm text-xs text-on-surface-variant">03:58</div>
</div>
</div>
<div class="p-md text-center">
<button class="text-on-surface-variant font-label-sm hover:text-primary transition-colors flex items-center gap-2 mx-auto">
<span class="material-symbols-outlined text-sm">expand_more</span>
                        LOAD MORE FREQUENCIES
                    </button>
</div>
</div>
</div>
</main>
<!-- Bottom Player Shell (Persistent) -->
<div class="fixed bottom-0 left-0 w-full z-50 bg-surface-container-low/90 backdrop-blur-lg border-t border-primary/20 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
<!-- Progress Bar -->
<div class="absolute top-0 left-0 w-full h-1 bg-surface-variant">
<div class="h-full bg-primary shadow-[0_0_10px_#00f0ff] relative" style="width: 45%;">
<div class="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_#fff]"></div>
</div>
</div>
<div class="flex items-center justify-between h-20 px-4 md:px-margin-desktop">
<!-- Song Info -->
<div class="flex items-center gap-4 w-1/3">
<div class="hidden md:block w-12 h-12 rounded overflow-hidden shadow-lg">
<!-- svelte-ignore a11y_missing_attribute -->
<img class="w-full h-full object-cover" data-alt="Close up of futuristic glowing neon structures in a dark environment. High-end electronic music aesthetic with blue and purple light beams. Cinematic, 8k resolution." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7gZ3Rw49kC_eGgRWxs6gYz_QjItfEvNE54hGsTqkPhSEUPNvB21WbHRmvTLNnQO__rJtvEfDiupWwKmIKCVdOizVm_W3605wGsk_nJAq77Q7WWTXcEJ49WofOxKS4YE2TmF0KF28RrWgPUflj_4aPq7M9xMF47Vw4Y9E9nawMHwp1hgOeX2Sd35M8Sl2fwcIDJZLg5m5f-CeQnpxTSiEUEfXRrsoon1RvVp8k4W9pJhfI65yEZwmDiT_p_15kRFQv0aOo0kEIQsw"/>
</div>
<div class="truncate">
<p class="font-label-md text-primary truncate">Data Stream</p>
<p class="text-[10px] text-on-surface-variant uppercase tracking-widest truncate">LUMINA</p>
</div>
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary">favorite</button>
</div>
<!-- Controls -->
<div class="flex flex-col items-center gap-1 w-1/3">
<div class="flex items-center gap-6">
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-all">shuffle</button>
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-all">skip_previous</button>
<button class="w-10 h-10 flex items-center justify-center bg-primary rounded-full text-on-primary shadow-[0_0_15px_rgba(0,219,233,0.5)] hover:scale-110 active:scale-95 transition-all">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">pause</span>
</button>
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-all">skip_next</button>
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-all">repeat</button>
</div>
<div class="hidden md:flex gap-4 text-[10px] font-label-sm text-on-surface-variant">
<span>01:52</span>
<span class="opacity-30">/</span>
<span>04:15</span>
</div>
</div>
<!-- Volume/Other -->
<div class="flex items-center justify-end gap-4 w-1/3">
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary hidden md:block">playlist_play</button>
<div class="hidden md:flex items-center gap-2 group">
<span class="material-symbols-outlined text-on-surface-variant text-sm group-hover:text-primary">volume_up</span>
<div class="w-24 h-1 bg-surface-variant rounded-full overflow-hidden">
<div class="h-full bg-primary-fixed-dim" style="width: 65%;"></div>
</div>
</div>
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary">fullscreen</button>
</div>
</div>
</div>
<!-- BottomNavBar (Mobile Layout) -->
<nav class="fixed bottom-0 left-0 w-full z-60 flex justify-around items-center h-20 lg:hidden bg-surface-container-low/90 backdrop-blur-lg border-t border-primary/20 pb-safe">
<a class="flex flex-col items-center justify-center text-on-surface-variant/60 hover:text-primary transition-all" href="/">
<span class="material-symbols-outlined">home</span>
<span class="font-label-sm text-label-sm">Home</span>
</a>
<a class="flex flex-col items-center justify-center text-primary drop-shadow-[0_0_5px_#00dbe9]" href="songs">
<span class="material-symbols-outlined">music_note</span>
<span class="font-label-sm text-label-sm">Songs</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant/60 hover:text-primary transition-all" href="browse_files">
<span class="material-symbols-outlined">folder</span>
<span class="font-label-sm text-label-sm">Files</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant/60 hover:text-primary transition-all" href="login">
<span class="material-symbols-outlined">person</span>
<span class="font-label-sm text-label-sm">Profile</span>
</a>
</nav>
<script>
        // Micro-interactions and subtle effects
        document.querySelectorAll('.song-row').forEach(row => {
            row.addEventListener('click', () => {
                // Simplified active row highlight
                document.querySelectorAll('.song-row').forEach(r => {
                    r.classList.remove('bg-primary/5', 'border-l-2', 'border-primary');
                });
                row.classList.add('bg-primary/5', 'border-l-2', 'border-primary');
            });
        });

        // Search neon glow on focus
        const searchInput = document.querySelector('input[type="text"]');
        searchInput.addEventListener('focus', () => {
            searchInput.parentElement.style.boxShadow = '0 0 20px rgba(0, 240, 255, 0.2)';
        });
        searchInput.addEventListener('blur', () => {
            searchInput.parentElement.style.boxShadow = 'none';
        });
    </script>
</body></html>