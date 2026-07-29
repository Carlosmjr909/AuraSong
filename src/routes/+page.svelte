<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>AuraSong | Future of Sound</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;800&amp;family=JetBrains+Mono:wght@400;500&amp;family=Hanken+Grotesk:wght@400;500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
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
<style>
        body {
            background-color: #131318;
            overflow-x: hidden;
            color: #e4e1e9;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-panel {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(0, 219, 233, 0.2);
        }
        .neon-text {
            text-shadow: 0 0 10px rgba(0, 219, 233, 0.8), 0 0 20px rgba(0, 219, 233, 0.4);
        }
        .magenta-glow {
            box-shadow: 0 0 30px rgba(254, 0, 254, 0.3);
        }
        .cyan-glow {
            box-shadow: 0 0 30px rgba(0, 219, 233, 0.3);
        }
        .light-leak-cyan {
            background: radial-gradient(circle at center, rgba(0, 219, 233, 0.15) 0%, transparent 70%);
        }
        .light-leak-magenta {
            background: radial-gradient(circle at center, rgba(254, 0, 254, 0.15) 0%, transparent 70%);
        }
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
            height: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #00dbe9;
            border-radius: 10px;
        }
    </style>
</head>
<body class="font-body-md text-body-md selection:bg-primary-container selection:text-on-primary-container">
<!-- Ambient Background Layers -->
<div class="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
<div class="absolute top-[20%] left-[10%] w-[60%] h-[60%] light-leak-cyan animate-pulse"></div>
<div class="absolute bottom-[20%] right-[10%] w-[60%] h-[60%] light-leak-magenta animate-pulse" style="animation-delay: 2s;"></div>
<div class="absolute top-[30%] left-[40%] w-[40%] h-[40%] light-leak-cyan opacity-40"></div>
<!-- Simulated Dark Electronic Pattern -->
<div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#00dbe9 0.5px, transparent 0.5px); background-size: 24px 24px;"></div>
</div>
<!-- SideNavBar (Desktop Only) -->
<nav class="hidden lg:flex flex-col h-screen fixed left-0 top-0 pt-xl pb-lg w-64 bg-surface-container-lowest/80 backdrop-blur-2xl border-r border-primary/10 shadow-2xl z-50">
<div class="px-margin-desktop mb-lg">
<span class="font-headline-sm text-headline-sm font-bold text-primary italic tracking-tighter">AuraSong</span>
</div>
<div class="flex flex-col gap-xs px-base">
<a class="bg-primary/20 text-primary border-r-4 border-primary px-4 py-3 flex items-center gap-3 transition-colors" href="/">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">home</span>
<span class="font-label-md text-label-md">Home</span>
</a>
<a class="text-on-surface-variant hover:bg-surface-variant/30 px-4 py-3 flex items-center gap-3 transition-colors" data-sveltekit-reload href="trending">
<span class="material-symbols-outlined">bolt</span>
<span class="font-label-md text-label-md">trending</span>
</a>
<a class="text-on-surface-variant hover:bg-surface-variant/30 px-4 py-3 flex items-center gap-3 transition-colors" data-sveltekit-reload href="songs">
<span class="material-symbols-outlined">music_note</span>
<span class="font-label-md text-label-md">songs</span>
</a>
<a class="text-on-surface-variant hover:bg-surface-variant/30 px-4 py-3 flex items-center gap-3 transition-colors" data-sveltekit-reload href="browse_files">
<span class="material-symbols-outlined">folder_open</span>
<span class="font-label-md text-label-md">Browse Files</span>
</a>
<a class="text-on-surface-variant hover:bg-surface-variant/30 px-4 py-3 flex items-center gap-3 transition-colors" data-sveltekit-reload href="artists">
<span class="material-symbols-outlined">artist</span>
<span class="font-label-md text-label-md">Artists</span>
</a>
<a class="text-on-surface-variant hover:bg-surface-variant/30 px-4 py-3 flex items-center gap-3 transition-colors" data-sveltekit-reload href="settings">
<span class="material-symbols-outlined">settings</span>
<span class="font-label-md text-label-md">Settings</span>
</a>
</div>
<div class="mt-auto px-margin-desktop py-lg">
<div class="p-sm glass-panel rounded-xl flex items-cent gap-sm mb-md">
<div class="w-10 h-10 rounded-full bg-primary-container overflow-hidden">
<!-- svelte-ignore a11y_missing_attribute -->
<img class="w-full h-full object-cover" data-alt="A stylized portrait of a young futuristic music listener with glowing neon cybernetic implants and sleek chrome headphones, high-contrast dark warehouse rave setting with vibrant cyan and magenta backlighting, professional 8k digital photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRyIx9dC0ne8yOJEjxm6hSEm2qGGQI0klvTzVAayr_HDBdmcrNpGjQvCANXFUItCm2aAHY9dOZrbo_-zT9SCXNHoQiZuI76R8xvRfCfWkcJM2n0oYPwJJvmuac7g9MXGYSw-GXMctfNnCQvwDv7QXWURIZeU6c3xS3jTLKAk50zdR8firaR3EePByEevAOP7nv1Aeze52tHy1wjJTFVOuagPe7jADmA-Uvep5yoKWpqeaYxtqoWn-AFwwIBkDOphGnYLSB-ygmT58"/>
</div>
<div>
<p class="font-label-md text-label-md text-primary">AuraUser</p>
<p class="text-[10px] uppercase tracking-widest text-on-surface-variant">Pro Listener</p>
</div>
</div>
<button class="w-full py-3 rounded-lg bg-linear-to-r from-primary-fixed-dim to-secondary-container text-on-primary-fixed font-bold text-label-md shadow-lg active:scale-95 transition-transform">
                Upgrade to Premium
            </button>
</div>
</nav>
<!-- Main Content Area -->
<main class="lg:ml-64 pb-32">
<!-- TopNavBar (Mobile & Desktop) -->
<header class="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-sm bg-surface/10 backdrop-blur-xl border-b border-primary/20 shadow-[0_0_15px_rgba(0,219,233,0.3)] sticky top-0 z-40">
<div class="lg:hidden font-display-lg-mobile text-display-lg-mobile italic tracking-tighter text-primary-container">AuraSong</div>
<div class="hidden lg:flex items-center gap-lg">
<a class="text-primary font-bold border-b-2 border-primary pb-1 font-label-md text-label-md" href="/">Discover</a>
<a class="text-on-surface-variant/70 font-medium hover:text-primary transition-all font-label-md text-label-md" href="songs">Library</a>
</div>
<div class="flex items-center gap-md">
<div class="hidden md:flex items-center bg-surface-container-high/50 px-4 py-2 rounded-full border border-primary/10">
<span class="material-symbols-outlined text-on-surface-variant/70 text-sm">search</span>
<input class="bg-transparent border-none focus:ring-0 text-sm placeholder:text-on-surface-variant/50 w-48" placeholder="Search vibes..." type="text"/>
</div>
<a 
  data-sveltekit-reload href="login" 
  class="text-primary hover:drop-shadow-[0_0_8px_rgba(0,219,233,0.8)] transition-all inline-block">
  <span class="material-symbols-outlined text-3xl">account_circle</span>
</a>
</div>
</header>
<!-- Hero Section -->
<section class="relative px-margin-mobile md:px-margin-desktop py-xl overflow-hidden min-h-179 flex flex-col justify-center">
<div class="absolute inset-0 z-[-1]">
<div class="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent"></div>
<!-- svelte-ignore a11y_missing_attribute -->
<img class="w-full h-full object-cover opacity-60" data-alt="Dynamic abstract background for an electronic music app, featuring high-speed motion blurs of cyan and magenta neon lights, deep obsidian textures, and subtle geometric patterns of circuitry and sound waves, nocturnal futuristic rave aesthetic, high-energy cinematic lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn2o1hunxx_2jYqsdk1DEJCLefGIdWb5oblaRC0UtVk133dru8Wlt8LkJVEJaphY8v8BCCFDUl1p-U-mN_3T1BbXAtfWvg6ZTXn3OMIV2r4k2ibchVto-N0gXLaMoZDncipNjUPL6jyQv2QG0BM59LvT-oyjVBrZiHJJCLUSWmFANjIaENINHfuDDRlXjNVM3YZMtAtJ7paQ0y3pW95chc6rnKT7vcXIG-dYwzB0K0p8uEDh13mc7ppZc6Iqp8XmV2gxmskU3GLg4"/>
</div>
<div class="relative z-10 max-w-4xl">
<span class="inline-block px-3 py-1 bg-primary/10 text-primary-fixed-dim border border-primary/30 rounded-full font-label-sm text-label-sm mb-md uppercase tracking-widest">Live: Tokyo Underground</span>
<h1 class="font-display-lg-mobile md:font-display-lg md:text-display-lg text-primary italic tracking-tighter leading-tight mb-md neon-text">
                    AuraSong <br/>
<span class="text-secondary drop-shadow-[0_0_10px_#fe00fe]">The Pulse of Now.</span>
</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-lg">
                    Experience music like never before. Immerse yourself in high-fidelity electronic soundscapes curated for the digital avant-garde.
                </p>
<div class="flex flex-wrap gap-md">
<button class="px-8 py-4 rounded-xl bg-linear-to-r from-primary-fixed-dim to-secondary-container text-on-primary-fixed font-bold text-label-md flex items-center gap-base hover:scale-105 active:scale-95 transition-all">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
                        Start Listening
                    </button>
<button class="px-8 py-4 rounded-xl border border-primary/40 text-primary hover:bg-primary/10 backdrop-blur-md transition-all">
                        Explore Genres
                    </button>
</div>
</div>
</section>
<!-- Trending Now (Bento Grid) -->
<section class="px-margin-mobile md:px-margin-desktop py-lg">
<div class="flex items-center justify-between mb-lg">
<h2 class="font-headline-md text-headline-md text-primary">Trending Now</h2>
<a class="text-primary-fixed-dim font-label-md text-label-md hover:underline" href="trending">View All</a>
</div>
<div class="grid grid-cols-1 md:grid-cols-4 gap-md md:grid-rows-2 h-auto md:h-150">
<!-- Main Feature -->
<div class="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl glass-panel">
<!-- svelte-ignore a11y_missing_attribute -->
<img class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Cinematic high-angle shot of a DJ performing at a massive outdoor festival at night, towering LED walls displaying vibrant glitch art in cyan and magenta, dense crowds with glowing wristbands, smoke and lasers piercing the dark sky, futuristic electronic music vibe." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3f4PqMndZE1d9Kdji8nUxCDl55Rb9t807ZqpqqBIhe-I-mBvEN-x82WrnsohcBqTCneMP_pzZ1--UMUitO-Wm6SchFNQXbAIFovHuCB7SNHVrMzuorEwk3Hrwxraa89tH65QZV8mOJBuMkPpk1u0aW_kmqcCEQKxHFzfilACWUrFYMubbsvCX13zN_8uS9S6-u0Vuo5fpGapRrZ6fLKmjL6pbt9Ptc_zzSAZsVsqf5Xr2m_EBgZvdMpDEWWMy2Rg8Y8hUtTo0HJA"/>
<div class="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent"></div>
<div class="absolute bottom-0 left-0 p-lg w-full">
<div class="flex gap-base mb-sm">
<span class="bg-primary-container text-on-primary-container font-label-sm text-label-sm px-2 py-1 rounded">#TECHNO</span>
<span class="bg-surface-variant text-on-surface-variant font-label-sm text-label-sm px-2 py-1 rounded">24.5k Listening</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-white mb-xs">Subliminal Frequencies</h3>
<p class="text-on-surface-variant">Curated by NEON_VOID</p>
</div>
</div>
<!-- Secondary Trending -->
<div class="md:col-span-2 relative group overflow-hidden rounded-3xl glass-panel">
<!-- svelte-ignore a11y_missing_attribute -->
<img class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Close-up of high-tech headphones sitting on a glass surface reflecting neon lights, intricate details of chrome and synthetic leather, dark moody lighting with intense cyan highlights, high-fidelity music equipment aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT9VtubUpfkXNcGup9VioTPPtudxXwT62i08yYUvFoi6dznu_-OLMVxTQGbS_uu2o4w8AgDUdYzGvBSZ9ldOofLU3xCk9r1VgeAshmeD3-GSNYAAVmIgDnjSmdJ6FxDJ1upPFGYFTBr9tsfYExnRCwuKRctnL4WLvmkFkT0wTvHmJhk7lXjsxqKG03aZlRyQyGINfQh91tAcvvBiqQBpMzS8AaY7NmxV2nYfFjk8eVBpna8a0Ro0WQr0k-JtsoLgNxc95sYR1ouBY"/>
<div class="absolute inset-0 bg-linear-to-t from-background/80 to-transparent"></div>
<div class="absolute bottom-0 left-0 p-md">
<h3 class="font-label-md text-label-md text-white">Cyberpunk Anthems</h3>
<p class="text-sm text-on-surface-variant">The sound of 2077</p>
</div>
</div>
<!-- Live Stream Small -->
<div class="relative group overflow-hidden rounded-3xl glass-panel border-secondary/20">
<!-- svelte-ignore a11y_missing_attribute -->
<img class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Artistic abstract representation of digital sound waves visualized as glowing 3D ribbons of light weaving through a dark void, vibrant magenta and electric purple tones, high-energy retro-futurist electronic music theme." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ0q1Raczw-YN23g6tdg5o9JLeaAR87B_-RAerkEQiVw58BzbRIJFrFa6auE9iGNY1V5xlxPm2hMJPM-YvN5eKS7QwAfZfoa0NWk1B-nmzYx4scrKp46lJqnpsTZ_qstdqErBxCAEBZM6cVsap-WQQhwZxd3g4mtLVmmbqSZe5UIRe2ORSXgq0MFUjhahhQek-ri2sz34R-jDzmk1o6-1OPoGeRu53ONsBR1YG1ZZ7fG7BQCx5ZWf6amU2-T2KGjx6qggAHNiaIWg"/>
<div class="absolute inset-0 bg-linear-to-t from-secondary-container/60 to-transparent"></div>
<div class="absolute top-2 right-2 flex items-center gap-1 bg-error px-2 py-1 rounded-full animate-pulse">
<div class="w-2 h-2 bg-white rounded-full"></div>
<span class="text-[10px] font-bold text-white uppercase">Live</span>
</div>
<div class="absolute bottom-0 left-0 p-sm">
<h3 class="font-label-md text-label-md text-white">Midnight Sessions</h3>
</div>
</div>
<!-- Live Stream Small -->
<div class="relative group overflow-hidden rounded-3xl glass-panel border-primary/20">
<!-- svelte-ignore a11y_missing_attribute -->
<img class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Detailed macro shot of an analog synthesizer keyboard with glowing RGB buttons and sliders, nocturnal studio atmosphere, intense neon cyan lighting, focus on tactile technology and electronic music production." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpn9hi3mjoTNMAAm4JmCvGAL2gEiwqBLbHpCDDYwPgwPPGjXzu89bHcWwPh0SbFBcKySnIzLjyRhqh_75DtDLPyZn_tiiFDWovirEGs6yXQ5ktp9Ovn-yTBkke5ce8CIZVzXwfDjaWKMu6rQKxqhv7-jUaG1hNDBl4UnMKdGQ9YNcl7EfNKRA3UiX29UoqJnhn3-ECLC_X5y60I3utdbOYlbOzllfJXfOoZjNcE5-AUzpjmMrvDdU4Q4GJ6p7kjjh1u_-J544J2ys"/>
<div class="absolute inset-0 bg-linear-to-t from-primary-container/60 to-transparent"></div>
<div class="absolute bottom-0 left-0 p-sm">
<h3 class="font-label-md text-label-md text-white">Synthwave Pulse</h3>
</div>
</div>
</div>
</section>
<!-- New Releases -->
<section class="px-margin-mobile md:px-margin-desktop py-lg">
<div class="flex items-center justify-between mb-lg">
<h2 class="font-headline-md text-headline-md text-primary">New Releases</h2>
<div class="flex gap-base">
<button class="p-2 rounded-full glass-panel text-primary"><span class="material-symbols-outlined">chevron_left</span></button>
<button class="p-2 rounded-full glass-panel text-primary"><span class="material-symbols-outlined">chevron_right</span></button>
</div>
</div>
<div class="flex gap-md overflow-x-auto custom-scrollbar pb-md">
<!-- Album Card -->
<div class="flex-none w-48 group cursor-pointer">
<div class="relative aspect-square rounded-2xl overflow-hidden mb-sm glass-panel group-hover:scale-105 transition-all duration-300">
<!-- svelte-ignore a11y_missing_attribute -->
<img class="w-full h-full object-cover" data-alt="Minimalist album cover art featuring a lone astronaut walking towards a giant glowing portal in a desert landscape, surreal cosmic aesthetic, neon cyan and deep space black, digital illustration style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDInNyS249PlQ8CY8FQ6CZCKF7F8M8irSugyhtsYVq7QIwp7_kOFx9rjcOni_y-VdwvZO4i-oDaXDxEiqeQ6OI4RptSZjmvLltuP5C_om6rOlAf6UrEUJ1_H9qpvsZklw3Nr0kLcViTDBSkJp4ksBTOD4gVlbAQ_VXT924_vxkGkOMyy3su5AKRpG7ABV-8BQmMF0ZFofsK2qr8wEK-g4_7KlOwI3jJcYuJ2C3CfDB5Q413U5LdHzyUlb_bNxCE1Uh-G50g9a0biJk"/>
<div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
<div class="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-xl">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
</div>
</div>
</div>
<h4 class="font-label-md text-label-md text-primary truncate">Stellar Voyage</h4>
<p class="text-sm text-on-surface-variant">Nebula Drift</p>
</div>
<!-- Album Card -->
<div class="flex-none w-48 group cursor-pointer">
<div class="relative aspect-square rounded-2xl overflow-hidden mb-sm glass-panel group-hover:scale-105 transition-all duration-300">
<!-- svelte-ignore a11y_missing_attribute -->
<img class="w-full h-full object-cover" data-alt="High-concept abstract album art with shattered glass fragments reflecting a neon city skyline at night, glitch art aesthetic, vibrant magenta and electric blue, urban cyber-noir mood." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCAqfEBJQoUj2QBHO3UTA70ClTG3a6bAVO2OwKnkbaOGmYbbmiiD14D9RmpXTDxw9sAGktbWVBJHk9vqMTkTYmdslHyYPv9NcJ6GO3gnekuR0DktDUIfiApM4OUBeQ6y3ZGkCfzAwp6Wvql85QI5eXN2hnsDlkV_Uzyce04Be3aEvE8i1sRPTpf7HQ68KkMTZtnzUlMVkaIGRnEVe9q0ywpXgEVGUTFf3D8VB7IE5bJSJqEsiSVenZk5pP6lb5pgrsbPrxvtxz3WM"/>
<div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
<div class="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-xl">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
</div>
</div>
</div>
<h4 class="font-label-md text-label-md text-primary truncate">Shattered Neon</h4>
<p class="text-sm text-on-surface-variant">The Glitch</p>
</div>
<!-- Album Card -->
<div class="flex-none w-48 group cursor-pointer">
<div class="relative aspect-square rounded-2xl overflow-hidden mb-sm glass-panel group-hover:scale-105 transition-all duration-300">
<!-- svelte-ignore a11y_missing_attribute -->
<img class="w-full h-full object-cover" data-alt="Vibrant digital artwork of an eye where the iris is a rotating vinyl record, surrounded by cosmic dust and glowing geometric shapes, surrealist electronic music cover, neon cyan and gold accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWIZUcJePkHsy9D4g3YlGyAfkTjFgnB560kTL8ZzWw5LxmHDnHTL83dP8EkUyhve3jCe5As9HP_7xSXvHxv8m1AFrF8uOboYlh3lwFW2mmFxZT-sGCd_fdkKejPFqHRLTZGe4W3QqOjUNdJCbS-5u_Ua6DsiNUpxbA_Ew5XkDlTL-QL7ng3CYjvHTXGVRTXwSAms6dvcnK57yNmiFImyTTC9-mh3cOSaS-sLwqVu8rAeAVljkPo-3Qh01VKXlVl8GYrJqbloS04Pg"/>
<div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
<div class="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-xl">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
</div>
</div>
</div>
<h4 class="font-label-md text-label-md text-primary truncate">Visionary Sounds</h4>
<p class="text-sm text-on-surface-variant">Optical Audio</p>
</div>
<!-- More Album Cards... -->
<div class="flex-none w-48 group cursor-pointer">
<div class="relative aspect-square rounded-2xl overflow-hidden mb-sm glass-panel group-hover:scale-105 transition-all duration-300">
<!-- svelte-ignore a11y_missing_attribute -->
<img class="w-full h-full object-cover" data-alt="Cinematic shot of a futuristic sports car driving through a neon-lit rain-slicked city street, synthwave aesthetic, 80s retro-futurism style, vibrant pink and teal lighting, moody nocturnal vibes." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd3A1xFTykUAoDv-dcdZorgYQdy3_biAj5adPoT4Zay4H-35G23Slr-OUL5cZqxStmnhz6s5Xpsexix5xTTLifDI5ma5AcxiuJvNH-DMeIq6t4LVAprSdiRW552bBYywo0Jy6Qxrrt-c-g1ASyTuhSldwDEZZfdg-cCBsSxrW0g5PE8i4HWXErb6DJlOwd5Hbplx1YSBvzNs8__iFRvCf5lS8Qm_IH0VgnLqW7yGRMSxub2-G_UaYzYtu7cQsXePojgFCssY80Y5M"/>
<div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
<div class="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-xl">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
</div>
</div>
</div>
<h4 class="font-label-md text-label-md text-primary truncate">Retrowaves</h4>
<p class="text-sm text-on-surface-variant">Vapor Path</p>
</div>
<div class="flex-none w-48 group cursor-pointer">
<div class="relative aspect-square rounded-2xl overflow-hidden mb-sm glass-panel group-hover:scale-105 transition-all duration-300">
<!-- svelte-ignore a11y_missing_attribute -->
<img class="w-full h-full object-cover" data-alt="Abstract 3D render of melting metallic chrome spheres floating in a dark obsidian liquid, intense reflection of a singular cyan light source, sleek futuristic techno album cover." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0CWJRJRtw6pKkTetkFo4pF_B88Cg4wf952k5Ybb9Bzvpid9DlxlnZ2S3pZEhm_lMbAvjYygFCC7Wrf_uT0lx0PCHpvjcgiCGdud1UlFy-skti6vBtvRw8Mo7olVJve0M1CNO7jGrf562qiyRX8d6-SQNz-w0neOSf3pP5Wrh3M4nJ8ys3TAR38jN0hcvuMzLIr_ncVvpXpHK3CfbjgLB747QREcMv237SjbLxJX8HQaBoulFwmkL3DF8-hX-4OIOBl-tRA-y0wSo"/>
<div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
<div class="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-xl">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
</div>
</div>
</div>
<h4 class="font-label-md text-label-md text-primary truncate">Chrome Soul</h4>
<p class="text-sm text-on-surface-variant">Liquid Metal</p>
</div>
</div>
</section>
<!-- Live Streams & Featured Artists -->
<section class="px-margin-mobile md:px-margin-desktop py-lg">
<h2 class="font-headline-md text-headline-md text-primary mb-lg">Top Artists This Week</h2>
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-md">
<!-- Artist Card -->
<div class="flex flex-col items-center group cursor-pointer">
<div class="w-full aspect-square rounded-full p-1 border-2 border-primary/20 group-hover:border-primary transition-colors duration-500 mb-sm">
<!-- svelte-ignore a11y_missing_attribute -->
<img class="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Portrait of a female DJ with neon braided hair and iridescent clothing, looking confidently at the camera, blurred nightclub background with colorful bokeh, vibrant high-energy music artist style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCobMiGpH1xO6wqTGuKpEqb3v08h4_2P9tHOluzIKdNsGsVoAoVybJ9FZgGCGumQQkDdjH0ii-I72vS79n6bKr2QbqTlqSk-wr3omPgmkcq7_4xfU-zRpc5h0qko3Opfg3Rwsp2q9uZnQC97mWijVCthI7urdPaZomljY2USHIYAXwcZiggbTXIjnwBnQ4d1Tf4W3LHbTr4UYFuWTIOgeN6DOXIVKFb5ougueGTY_Wp-ojt2EVhGgcHew-y7MvH2X7T0njn1k5ZQno"/>
</div>
<p class="font-label-md text-label-md text-primary">LYRA_X</p>
<p class="text-xs text-on-surface-variant">#Techno</p>
</div>
<!-- Artist Card -->
<div class="flex flex-col items-center group cursor-pointer">
<div class="w-full aspect-square rounded-full p-1 border-2 border-primary/20 group-hover:border-primary transition-colors duration-500 mb-sm">
<!-- svelte-ignore a11y_missing_attribute -->
<img class="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Cool portrait of a male producer in a hooded reflective jacket, dark sunglasses reflecting a digital grid, moody studio lighting with magenta edge highlights, electronic music icon aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEp4ofVK-FcVI3eBn13nxGYxIILcak5CUvfWvgBJn0HJ9rLagC2ko-81duJIrtanm2HkksdTZjkhk2xzkFMvsF3TXPaHpO2oPoGvX11dKCbV75yg-XEJmzx5pkVtnmuE0WdeuxHAvjFGTexJSXqW2L5LtRkMQZZBSZkj9LhhFguD9I8_Kl9brNB1o7fZaO-PBJNXKLgDeLfLgw8hb6L7euCBN-lHx9uL2D2OQy0U5cq2TxmbWOTRP7GHa6lW0_QsIfufozIVwQlw4"/>
</div>
<p class="font-label-md text-label-md text-primary">K0DE_R</p>
<p class="text-xs text-on-surface-variant">#GlitchHop</p>
</div>
<!-- Artist Card -->
<div class="flex flex-col items-center group cursor-pointer">
<div class="w-full aspect-square rounded-full p-1 border-2 border-primary/20 group-hover:border-primary transition-colors duration-500 mb-sm">
<!-- svelte-ignore a11y_missing_attribute -->
<img class="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Artistic portrait of a non-binary vocalist with shimmering metallic makeup and bioluminescent face paint, close-up, high-key cyan lighting, ethereal and futuristic vibe." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVA7jg6-KJ2DQnHAH7rmUSHtKzb4qorTA2LoTqoYBWoAzZbZX1LJrIp7cRspPoBYndSpoYYLLSZA7ztr2rquNrigDg905oAdbAgp3wZeO24B1JSkWJ2c5t-I7mrgmk0fvyW3ydc8fToEg-A88nEQdF4utHmbT7wngr_I9k_Fw2QjzeTgX3xzgMhzAISh-HJbFcoeFKPuDAqBNvGGd-Ycz9TfbkVi4px4WQSCWc8mX-CWV2fsJwDqBRprPnMAv0U50DuA0NjPWvLCE"/>
</div>
<p class="font-label-md text-label-md text-primary">AETHER</p>
<p class="text-xs text-on-surface-variant">#Ambient</p>
</div>
<!-- Artist Card -->
<div class="flex flex-col items-center group cursor-pointer">
<div class="w-full aspect-square rounded-full p-1 border-2 border-primary/20 group-hover:border-primary transition-colors duration-500 mb-sm">
<!-- svelte-ignore a11y_missing_attribute -->
<img class="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="High-contrast black and white portrait of a musician wearing futuristic modular headgear, sharp cyan laser line across the eyes, sleek and aggressive electronic music aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXj5ryVLUYFSilEovWF2Zt69VFGARW8UC8wCbm24BGaRR6BxoB3NWcWbMD2HRF0JvIXkT2vxfiWN57NiyuEG5dlD0MEwZ-D0LATQvMsJ1yXSXmmd1SrcrR_yNvia9rqfeWydYAIqqshziROaRrJe8JSawZc1HC82RzlU1PhD6ym6PsI0J-Z2B2Khxfhf31DqlPSQFejVB83XJdjFK_qYkXoGpLi6PbMXhqJuVFPQ1ZiOCUAUsKOXShMfDbr-yFZXlNPnPBVEmOd3M"/>
</div>
<p class="font-label-md text-label-md text-primary">SYNTH_V</p>
<p class="text-xs text-on-surface-variant">#Industrial</p>
</div>
<!-- Artist Card -->
<div class="flex flex-col items-center group cursor-pointer">
<div class="w-full aspect-square rounded-full p-1 border-2 border-primary/20 group-hover:border-primary transition-colors duration-500 mb-sm">
<!-- svelte-ignore a11y_missing_attribute -->
<img class="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Candid shot of a vibrant young music producer working in a room filled with plants and glowing RGB electronics, morning light mixing with blue neon, modern digital creative lifestyle." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5jvpUGE3yx0PrWV7EKtYuSMJCPtJhPNr0SjUwjOlcl9gQBNCcawsRcb7PW3K54mTYq2sZmUkv_R_O_XpKJCuyYFbA4QFJFUHKDNA8H62y57UX-QtUw-94OpTj1IyrOfaJBXYOtjWcDNYam8KU97hyMUWe-qM9rbQ0QnOMGe1iPlrRw5czMTp2a5ADgyZJoFKT3tnlZyY6OcaQk-UR-icblWOoVDpKIGoM1Pgmhj_YwI38azE5qYv7S6ldantx0iXWMMUjSEvFlYs"/>
</div>
<p class="font-label-md text-label-md text-primary">FLORA_L</p>
<p class="text-xs text-on-surface-variant">#House</p>
</div>
<!-- Artist Card -->
<div class="flex flex-col items-center group cursor-pointer">
<div class="w-full aspect-square rounded-full p-1 border-2 border-primary/20 group-hover:border-primary transition-colors duration-500 mb-sm">
<!-- svelte-ignore a11y_missing_attribute -->
<img class="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Stylized portrait of an artist with digital glitch effects overlaying their face, vibrant multi-color neon palette, energetic and avant-garde electronic music vibe." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0dmQRZBS6l4tvwyPHznX5grZgk4iNEnNuOXNcaEh6VCUBjvSTQpH0SnEn4SfoGTnVmUX4Tzu7wceOs3hca6r1Z9nLn8hvfU-LEftSE-DLAOHQk7ml7KZ_lxbKPCBMwsK5ZjRx6lrwS42ncW2f6sogv5Gvt8sPCYutgnAU213_uLDMqfRj_kf5aTJ5aBaLqe9NqDJKTlYdm6H1sopj-A35enaZMZeie-wlr3KYlUXEtsfNhhNPwNpvhdXYa4ak9JL5r82IDG9awwI"/>
</div>
<p class="font-label-md text-label-md text-primary">D1STORT</p>
<p class="text-xs text-on-surface-variant">#Hardcore</p>
</div>
</div>
</section>
</main>
<!-- Persistent Music Player Bar (The "Core") -->
<div class="fixed bottom-0 left-0 w-full z-60 glass-panel border-t border-primary/20 h-24 px-margin-mobile md:px-margin-desktop flex items-center justify-between shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
<!-- Track Info -->
<div class="flex items-center gap-md w-1/3">
<div class="w-14 h-14 rounded-lg overflow-hidden shrink-0 cyan-glow border border-primary/30">
<!-- svelte-ignore a11y_missing_attribute -->
<img class="w-full h-full object-cover" data-alt="Small album art showing a futuristic city under a neon pink sun, synthwave style, high-contrast digital art." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj1EYmGTLKSYNKBlZMIJXM9y-GAhHRBsRP5zbpYvGWkzWzGdTzhcEh55-xKJvrWdwgUypI_kkMCbdJQUJ6qWEP1EZMn-NF_p3ZJFYqocTBrKg7dGiA0qBJPzx42RZPwlYPocAHNazvwGsoUIblDOxX5XLRXqCtDHqqHSRqDFVjTFkStiyhbTYPgzxC5F3Q30U3jTpnU9szVNh0l2hY1CgM6kpZYTCE0h8oQblCK6NWUV_KqFFkXB3rANJCyR_qPLJtpetQ4oboqrg"/>
</div>
<div class="hidden sm:block">
<p class="font-label-md text-label-md text-primary truncate">Hyper-Space Drive</p>
<p class="text-xs text-on-surface-variant">VEKTOR_ONE</p>
</div>
<button class="text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined">favorite</span>
</button>
</div>
<!-- Player Controls -->
<div class="flex flex-col items-center gap-xs w-1/3">
<div class="flex items-center gap-lg">
<button class="text-on-surface-variant hover:text-primary transition-all"><span class="material-symbols-outlined">shuffle</span></button>
<button class="text-on-surface-variant hover:text-primary transition-all scale-110"><span class="material-symbols-outlined">skip_previous</span></button>
<button class="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-[0_0_15px_#00dbe9] hover:scale-110 active:scale-95 transition-all">
<span class="material-symbols-outlined text-3xl" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
</button>
<button class="text-on-surface-variant hover:text-primary transition-all scale-110"><span class="material-symbols-outlined">skip_next</span></button>
<button class="text-on-surface-variant hover:text-primary transition-all"><span class="material-symbols-outlined">repeat</span></button>
</div>
<div class="w-full max-w-md flex items-center gap-sm group">
<span class="text-[10px] font-label-sm text-on-surface-variant">01:42</span>
<div class="flex-1 h-1 bg-surface-variant rounded-full relative overflow-hidden">
<div class="absolute left-0 top-0 h-full w-[40%] bg-primary shadow-[0_0_8px_#00dbe9]"></div>
</div>
<span class="text-[10px] font-label-sm text-on-surface-variant">03:55</span>
</div>
</div>
<!-- Volume/Queue Controls -->
<div class="hidden md:flex items-center justify-end gap-md w-1/3">
<button class="text-on-surface-variant hover:text-primary transition-all"><span class="material-symbols-outlined">playlist_play</span></button>
<div class="flex items-center gap-sm">
<span class="material-symbols-outlined text-on-surface-variant text-lg">volume_up</span>
<div class="w-24 h-1 bg-surface-variant rounded-full overflow-hidden">
<div class="h-full w-2/3 bg-primary/60"></div>
</div>
</div>
<button class="text-on-surface-variant hover:text-primary transition-all"><span class="material-symbols-outlined">fullscreen</span></button>
</div>
</div>
<!-- Mobile Bottom NavBar (Visible only on md:hidden) -->
<nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 bg-surface-container-low/90 backdrop-blur-lg border-t border-primary/20 lg:hidden pb-safe">
<a class="flex flex-col items-center justify-center text-primary drop-shadow-[0_0_5px_#00dbe9]" href="routes/+page.svelte">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">home</span>
<span class="font-label-sm text-label-sm">Home</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant/60 hover:text-primary transition-all" href="songs">
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
        // Micro-interaction for cards
        document.querySelectorAll('.group').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-4px)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0px)';
            });
        });

        // Simple Visualizer Animation
        const bars = [];
        const createVisualizer = () => {
            // This is just a UI placeholder to show high-energy vibe
            console.log("Music visualizer active");
        };
        createVisualizer();
    </script>
</body></html>