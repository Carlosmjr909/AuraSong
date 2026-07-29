<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>AuraSong - Trending</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;800&amp;family=Hanken+Grotesk:wght@400;500;700&amp;family=JetBrains+Mono:wght@500&amp;display=swap" rel="stylesheet"/>
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
        .neon-glow-cyan {
            box-shadow: 0 0 15px rgba(0, 219, 233, 0.3);
        }
        .neon-glow-magenta {
            box-shadow: 0 0 15px rgba(255, 0, 255, 0.3);
        }
        .cyan-border-glow:focus {
            box-shadow: 0 0 10px rgba(0, 219, 233, 0.5);
            border-bottom-width: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.1);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #00dbe9;
            border-radius: 10px;
        }
        @keyframes pulse-glow {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
        }
        .animate-pulse-glow {
            animation: pulse-glow 3s infinite ease-in-out;
        }
    </style>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "surface-container-lowest": "#0e0e13",
                        "on-primary": "#00363a",
                        "error-container": "#93000a",
                        "surface-variant": "#35343a",
                        "surface": "#131318",
                        "primary-container": "#00f0ff",
                        "secondary-fixed": "#ffd7f5",
                        "inverse-surface": "#e4e1e9",
                        "on-secondary-fixed": "#380038",
                        "on-secondary-fixed-variant": "#810081",
                        "surface-tint": "#00dbe9",
                        "on-tertiary": "#223600",
                        "outline": "#849495",
                        "primary-fixed-dim": "#00dbe9",
                        "on-error": "#690005",
                        "tertiary": "#e5ffba",
                        "on-tertiary-fixed": "#121f00",
                        "inverse-on-surface": "#303036",
                        "secondary-container": "#fe00fe",
                        "inverse-primary": "#006970",
                        "tertiary-fixed-dim": "#94db00",
                        "on-surface-variant": "#b9cacb",
                        "primary": "#dbfcff",
                        "on-primary-fixed": "#002022",
                        "tertiary-container": "#a2ef00",
                        "surface-bright": "#39383e",
                        "on-background": "#e4e1e9",
                        "on-secondary-container": "#500050",
                        "surface-container-low": "#1b1b20",
                        "on-surface": "#e4e1e9",
                        "on-primary-container": "#006970",
                        "on-secondary": "#5b005b",
                        "on-primary-fixed-variant": "#004f54",
                        "error": "#ffb4ab",
                        "surface-dim": "#131318",
                        "secondary-fixed-dim": "#ffabf3",
                        "background": "#131318",
                        "on-tertiary-fixed-variant": "#334f00",
                        "tertiary-fixed": "#a9f900",
                        "surface-container": "#1f1f25",
                        "outline-variant": "#3b494b",
                        "surface-container-highest": "#35343a",
                        "on-error-container": "#ffdad6",
                        "secondary": "#ffabf3",
                        "primary-fixed": "#7df4ff",
                        "surface-container-high": "#2a292f",
                        "on-tertiary-container": "#456900"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "xl": "80px",
                        "base": "8px",
                        "xs": "4px",
                        "margin-desktop": "40px",
                        "md": "24px",
                        "sm": "12px",
                        "gutter": "24px",
                        "margin-mobile": "16px",
                        "lg": "48px"
                    },
                    "fontFamily": {
                        "body-md": ["Hanken Grotesk"],
                        "label-sm": ["JetBrains Mono"],
                        "headline-sm": ["Sora"],
                        "headline-md": ["Sora"],
                        "display-lg-mobile": ["Sora"],
                        "label-md": ["JetBrains Mono"],
                        "display-lg": ["Sora"],
                        "body-lg": ["Hanken Grotesk"]
                    },
                    "fontSize": {
                        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                        "label-sm": ["12px", { "lineHeight": "16px", "letterSpacing": "0.1em", "fontWeight": "500" }],
                        "headline-sm": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
                        "headline-md": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "600" }],
                        "display-lg-mobile": ["40px", { "lineHeight": "44px", "letterSpacing": "-0.02em", "fontWeight": "800" }],
                        "label-md": ["14px", { "lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "500" }],
                        "display-lg": ["64px", { "lineHeight": "72px", "letterSpacing": "-0.04em", "fontWeight": "800" }],
                        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }]
                    }
                },
            },
        }
    </script>
</head>
<body class="bg-surface text-on-surface font-body-md overflow-x-hidden">
<!-- Background Shader Animation -->
<div class="fixed inset-0 z-0 pointer-events-none opacity-40">

</div>
<!-- Layout Container -->
<div class="relative z-10 flex min-h-screen">
<!-- SideNavBar -->
<aside class="hidden lg:flex flex-col h-screen fixed left-0 top-0 pt-xl pb-lg w-64 bg-surface-container-lowest/80 backdrop-blur-2xl border-r border-primary/10 shadow-2xl transition-transform duration-300 ease-in-out">
<div class="px-8 mb-12">
<span class="font-headline-sm text-headline-sm font-bold text-primary">AuraSong</span>
</div>
<nav class="flex-1 px-4 space-y-2">
<a class="text-on-surface-variant hover:bg-surface-variant/30 px-4 py-3 flex items-center gap-3 transition-colors rounded-lg" data-sveltekit-reload href="/">
<span class="material-symbols-outlined" data-icon="home">home</span>
<span class="font-label-md text-label-md">Home</span>
</a>
<a class="bg-primary/20 text-primary border-r-4 border-primary px-4 py-3 flex items-center gap-3 transition-colors rounded-lg" data-sveltekit-reload href="trending">
<span class="material-symbols-outlined" data-icon="bolt">bolt</span>
<span class="font-label-md text-label-md">Trending</span>
</a>
<a class="bg-primary/20 text-primary border-r-4 border-primary px-4 py-3 flex items-center gap-3 transition-colors rounded-lg" data-sveltekit-reload href="songs">
<span class="material-symbols-outlined" data-icon="music_note">music_note</span>
<span class="font-label-md text-label-md">Songs</span>
</a>
<a class="text-on-surface-variant hover:bg-surface-variant/30 px-4 py-3 flex items-center gap-3 transition-colors rounded-lg" data-sveltekit-reload href="browse_files">
<span class="material-symbols-outlined" data-icon="folder_open">folder_open</span>
<span class="font-label-md text-label-md">Browse Files</span>
</a>
<a class="text-on-surface-variant hover:bg-surface-variant/30 px-4 py-3 flex items-center gap-3 transition-colors rounded-lg" data-sveltekit-reload href="artists">
<span class="material-symbols-outlined" data-icon="mic_external_on">artist</span>
<span class="font-label-md text-label-md">Artists</span>
</a>
<a class="text-on-surface-variant hover:bg-surface-variant/30 px-4 py-3 flex items-center gap-3 transition-colors rounded-lg" data-sveltekit-reload href="settings">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
<span class="font-label-md text-label-md">Settings</span>
</a>
</nav>
<div class="px-6 py-6 border-t border-white/5">
<div class="flex items-center gap-3 mb-6">
<div class="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center overflow-hidden">
<!-- svelte-ignore a11y_missing_attribute -->
<img class="w-full h-full object-cover" data-alt="A futuristic professional music producer portrait, neon cyan lighting, sleek dark attire, high-tech electronic studio background, digital art style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhK4g-G4TtoxFDXt1Kt_RMARsX3h_7IuDwtkRnI-arUZhHxQ6GikBvRRYcR-FTm4YZdFIUE6fqByqAy8FusZzFtdzwM1KrZa9dlb4960hxcjvXTqD4XoieJ97LlFDRvRZ2YrFVOz5ZpUYFjXRxgq3gK2GHinEWyN6Ib7AA5MlrmZoLPhPROybBNtLammJKdrF10c4GmxxIRIEhi8a5wABHWkftlQhEdG5uZfMAhW9qF96a5jMdsbl_DSNo_Xs0jGUQZYnIz8NcKVg"/>
</div>
<div>
<p class="font-body-md text-body-md text-primary font-bold">AuraUser</p>
<p class="text-[10px] uppercase tracking-widest text-on-surface-variant/70">Pro Listener</p>
</div>
</div>
<button class="w-full py-3 rounded-xl bg-linear-to-r from-primary-container to-secondary-container text-on-primary font-bold text-label-md hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all">
                    Upgrade to Premium
                </button>
</div>
</aside>
<!-- Main Content Area -->
<main class="flex-1 lg:ml-64 pb-32">
<!-- TopNavBar (Mobile) / Header (Desktop) -->
<header class="sticky top-0 z-40 bg-surface/10 backdrop-blur-xl border-b border-primary/20 flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-sm shadow-[0_0_15px_rgba(0,219,233,0.3)]">
<div class="lg:hidden">
<span class="font-display-lg-mobile text-display-lg-mobile italic tracking-tighter text-primary-container dark:text-primary">AuraSong</span>
</div>
<div class="hidden lg:block">
<h1 class="font-headline-md text-headline-md text-primary">Trending</h1>
</div>
<div class="flex items-center gap-4">
<div class="relative group">
<input class="bg-surface-container-low border-b-2 border-primary/30 text-on-surface py-2 px-4 rounded-t-lg focus:outline-none focus:border-primary-container cyan-border-glow transition-all w-48 md:w-64" placeholder="Search vibes..." type="text"/>
<span class="material-symbols-outlined absolute right-3 top-2.5 text-on-surface-variant/50" data-icon="search">search</span>
</div>
<button class="material-symbols-outlined text-primary scale-95 active:scale-90 duration-200 hover:text-primary hover:drop-shadow-[0_0_8px_rgba(0,219,233,0.8)] transition-all" data-icon="account_circle">account_circle</button>
</div>
</header>
<!-- Viral Genres (Bento Grid) -->
<section class="mt-lg px-margin-mobile md:px-margin-desktop">
<div class="flex items-center justify-between mb-sm">
<h2 class="font-headline-sm text-headline-sm text-primary">Viral Genres</h2>
<a class="font-label-md text-label-md text-secondary hover:underline" href="trending">View All</a>
</div>
<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
<!-- Genre 1 -->
<div class="relative group overflow-hidden rounded-xl h-40 glass-panel cursor-pointer">
<div class="absolute inset-0 bg-linear-to-br from-primary-container/20 to-transparent"></div>
<div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/10"></div>
<div class="absolute bottom-4 left-4">
<span class="font-label-sm text-label-sm text-primary mb-1 block">#TECHNO</span>
<p class="font-headline-sm text-headline-sm text-white">Peak Time</p>
</div>
<div class="absolute -right-4 -top-4 opacity-20 group-hover:opacity-40 transition-all duration-700 group-hover:scale-125">
<span class="material-symbols-outlined text-[80px]" data-icon="equalizer">equalizer</span>
</div>
</div>
<!-- Genre 2 -->
<div class="relative group overflow-hidden rounded-xl h-40 glass-panel cursor-pointer">
<div class="absolute inset-0 bg-linear-to-br from-secondary-container/20 to-transparent"></div>
<div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-secondary/10"></div>
<div class="absolute bottom-4 left-4">
<span class="font-label-sm text-label-sm text-secondary mb-1 block">#PHONK</span>
<p class="font-headline-sm text-headline-sm text-white">Drift Wave</p>
</div>
<div class="absolute -right-4 -top-4 opacity-20 group-hover:opacity-40 transition-all duration-700 group-hover:scale-125">
<span class="material-symbols-outlined text-[80px]" data-icon="speed">speed</span>
</div>
</div>
<!-- Genre 3 -->
<div class="relative group overflow-hidden rounded-xl h-40 glass-panel cursor-pointer">
<div class="absolute inset-0 bg-linear-to-br from-tertiary-container/20 to-transparent"></div>
<div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-tertiary/10"></div>
<div class="absolute bottom-4 left-4">
<span class="font-label-sm text-label-sm text-tertiary mb-1 block">#AMBIENT</span>
<p class="font-headline-sm text-headline-sm text-white">Ethereal</p>
</div>
<div class="absolute -right-4 -top-4 opacity-20 group-hover:opacity-40 transition-all duration-700 group-hover:scale-125">
<span class="material-symbols-outlined text-[80px]" data-icon="filter_drama">filter_drama</span>
</div>
</div>
<!-- Genre 4 -->
<div class="relative group overflow-hidden rounded-xl h-40 glass-panel cursor-pointer">
<div class="absolute inset-0 bg-linear-to-br from-primary/20 to-transparent"></div>
<div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/10"></div>
<div class="absolute bottom-4 left-4">
<span class="font-label-sm text-label-sm text-primary mb-1 block">#CYBERPUNK</span>
<p class="font-headline-sm text-headline-sm text-white">Neon City</p>
</div>
<div class="absolute -right-4 -top-4 opacity-20 group-hover:opacity-40 transition-all duration-700 group-hover:scale-125">
<span class="material-symbols-outlined text-[80px]" data-icon="electric_bolt">electric_bolt</span>
</div>
</div>
</div>
</section>
<!-- Rising Stars Carousel -->
<section class="mt-lg px-margin-mobile md:px-margin-desktop">
<div class="flex items-center justify-between mb-sm">
<h2 class="font-headline-sm text-headline-sm text-primary">Rising Stars</h2>
<div class="flex gap-2">
<button class="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-primary/20 transition-all">
<span class="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
</button>
<button class="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-primary/20 transition-all">
<span class="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
<div class="flex gap-6 overflow-x-auto pb-4 custom-scrollbar">
<!-- Artist 1 -->
<div class="shrink-0 w-64 group">
<div class="relative h-64 rounded-2xl overflow-hidden mb-4">
<!-- svelte-ignore a11y_missing_attribute -->
<img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A portrait of a mysterious female DJ with glowing magenta glasses, vibrant pink and purple stage lighting, intense atmosphere, cyberpunk aesthetics, digital photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmCCwhEHWivU-39BcPkUhef7EIc7R9T52F4EOcVKm04QCi7UHTcEyzmgi9ysiVH1LXz4PwyCFne_KJEk5KzjylbM89c1FHJgZv6LFGuooDfwxejhwhr-LhA76wVnf0pycKJ9meW6T9FA4lO1sbNw8oRnmV9r9IOoErJXv9PsnnBMvVHVPNlGPsa29PNiND972uCNeW5oQR0o1c2eUhmJjtcCxCRfiuGK5B5SBXXUYH7RsEPT65YjSIHb6IZAuv3Ah_IIw1RgNeSYA"/>
<div class="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<button class="w-16 h-16 rounded-full bg-primary-container text-on-primary flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
<span class="material-symbols-outlined scale-150" data-icon="play_arrow" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
</button>
</div>
</div>
<p class="font-headline-sm text-[18px] text-primary group-hover:text-primary-container transition-colors">Luna Glitch</p>
<p class="text-on-surface-variant/70 font-label-md text-label-md uppercase tracking-tighter">1.2M Monthly Listeners</p>
</div>
<!-- Artist 2 -->
<div class="shrink-0 w-64 group">
<div class="relative h-64 rounded-2xl overflow-hidden mb-4">
<!-- svelte-ignore a11y_missing_attribute -->
<img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Close-up of a modern electronic artist wearing high-tech streetwear and a neon helmet, surrounded by holographic data displays, deep blue and electric cyan tones, dark futuristic warehouse setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1602Ctwu_2rNppPpevRR295ZprXCccXgmMpcniYkUmkx_yNceWWO4aBRxpsTCtmo5E9D9OLQ5I2Qot4nVoPJKChXgQmnqWtYXkRdRtj3f5fvaVQaHbjXKwa78TOohE79FJ133JoYCm6RidQ0pd8GD5NGoVo_TWuX9QK3VTfavLQTC5foR0fnZ2pdv2Ixwa7uFiJhLbS9MG4goWPggtbtY8kiHdM8P15XGWgqQP2STE_TzBmuRCQKy8JGOfj1UGlDF8I6BfV_Yx1M"/>
<div class="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<button class="w-16 h-16 rounded-full bg-primary-container text-on-primary flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
<span class="material-symbols-outlined scale-150" data-icon="play_arrow" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
</button>
</div>
</div>
<p class="font-headline-sm text-[18px] text-primary group-hover:text-primary-container transition-colors">K-Zero</p>
<p class="text-on-surface-variant/70 font-label-md text-label-md uppercase tracking-tighter">840K Monthly Listeners</p>
</div>
<!-- Artist 3 -->
<div class="shrink-0 w-64 group">
<div class="relative h-64 rounded-2xl overflow-hidden mb-4">
<!-- svelte-ignore a11y_missing_attribute -->
<img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Stylized artistic rendering of a synthwave producer in front of a giant retro-future sun backdrop, grid floor, palm trees in neon purple, cinematic composition, digital concept art." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMFAuvZEnfXfkp8wu55l7VLLz1nT7qU6RS4-mktzp37xvBVC5J-sgdbpqwQz8mSAshPim0YdPkozA8g0xgNLq6z6ne4oq6L3rWoPOs_c70U3wod68MTMl7O-3BGtX41w2NhcP1WbAbPUcVeO1DIi55js3--Y_HmkZYBq90kR-GXKkgziug5mvEkZDlUGB6Faz_K88vOOkkW1_rqTuvRlQl_7S19_PWnR68f34Lk0oOf_-sN27oGA_7dS_Xtio9eedQY_eynHlcpW4"/>
<div class="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<button class="w-16 h-16 rounded-full bg-primary-container text-on-primary flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
<span class="material-symbols-outlined scale-150" data-icon="play_arrow" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
</button>
</div>
</div>
<p class="font-headline-sm text-[18px] text-primary group-hover:text-primary-container transition-colors">Vector Void</p>
<p class="text-on-surface-variant/70 font-label-md text-label-md uppercase tracking-tighter">2.4M Monthly Listeners</p>
</div>
<!-- Artist 4 -->
<div class="shrink-0 w-64 group">
<div class="relative h-64 rounded-2xl overflow-hidden mb-4">
<!-- svelte-ignore a11y_missing_attribute -->
<img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Dynamic shot of an EDM duo performing at a massive rave, lasers cutting through fog, glowing DJ equipment, thousands of glowing wristbands in the crowd, high energy, wide angle, vivid electric colors." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVmpac8Ji3QeD6BctwKKhDLMTZjEFQeCwIIgigyhzSC2IoFN8zqZRS0uC9pzvaVv_rJPcNJhyFG_r6_MPVhq4OqG5WjEXX2b6TbK4xn0r9JeMo7uhREQFxBCfr3JtpNkKcKfR-u-dwmqIQA3lu3Wj3AZFESCjia12XMt4ponCr66cFxrcklM_3n1M5_g-bE9sPh52Sq7RcVHL2UbIakVKGFbvshCMRcIRyKvKn14AOUlAGv74waL7_rH6D_j_Vq3MGVWVouHu_Dbk"/>
<div class="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<button class="w-16 h-16 rounded-full bg-primary-container text-on-primary flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
<span class="material-symbols-outlined scale-150" data-icon="play_arrow" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
</button>
</div>
</div>
<p class="font-headline-sm text-[18px] text-primary group-hover:text-primary-container transition-colors">Pulse Division</p>
<p class="text-on-surface-variant/70 font-label-md text-label-md uppercase tracking-tighter">5.1M Monthly Listeners</p>
</div>
</div>
</section>
<!-- Global Top 50 List -->
<section class="mt-lg px-margin-mobile md:px-margin-desktop">
<div class="flex items-center justify-between mb-sm">
<h2 class="font-headline-sm text-headline-sm text-primary">Global Top 50</h2>
<button class="flex items-center gap-2 glass-panel px-4 py-2 rounded-full text-label-md text-primary hover:border-primary-container transition-all">
<span class="material-symbols-outlined" data-icon="filter_list">filter_list</span>
                        Filter
                    </button>
</div>
<div class="space-y-3">
<!-- Track 1 -->
<div class="flex items-center gap-4 p-4 glass-panel rounded-xl group cursor-pointer hover:bg-white/10 transition-all border-l-4 border-l-primary-container shadow-[0_0_10px_rgba(0,240,255,0.1)]">
<span class="font-label-md text-label-md text-primary-container w-6 text-center">01</span>
<div class="w-12 h-12 rounded-lg overflow-hidden shrink-0">
<!-- svelte-ignore a11y_missing_attribute -->
<img class="w-full h-full object-cover" data-alt="Minimalist abstract album cover with glowing geometric lines in cyan and magenta, deep black background, tech-noir aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQKFPoQstOEekoyXZcoiwD_skLp9yE6k0ziZ6Q8NPxoLXdpxUyI4csCEkP_iDVqbjItYNSr6K0Co8GmD_fA-OFuYvJmoNzpiEN57yiU6D7gucjrYqTH73xGJUSEfRHFW-13plWs5WSaRTTYbBQeuApHpM_iEqmqlaTsKzUklHRw8h7rHP0ZIJn04M-_XTNtXIlCSgDEBj0iu-0W4mVNuI7iII_9Q1QXmc_zd6g0xt3FFuWynrvqUIxnBBECijKNbVC5gjl6SjyS8Y"/>
</div>
<div class="flex-1">
<p class="font-body-md text-body-md text-white font-bold group-hover:text-primary-container transition-colors">Electric Dreams</p>
<p class="text-label-sm text-label-sm text-on-surface-variant/70">Neon Heart • 04:22</p>
</div>
<div class="hidden md:flex flex-col items-end mr-8">
<p class="text-label-sm text-label-sm text-primary font-bold">#1 TRENDING</p>
<p class="text-[10px] text-on-surface-variant/50">+12% this week</p>
</div>
<div class="flex items-center gap-4">
<button class="material-symbols-outlined text-on-surface-variant/70 hover:text-primary transition-all" data-icon="favorite">favorite</button>
<button class="material-symbols-outlined text-primary group-hover:scale-125 transition-transform" data-icon="play_circle" style="font-variation-settings: 'FILL' 1;">play_circle</button>
</div>
</div>
<!-- Track 2 -->
<div class="flex items-center gap-4 p-4 glass-panel rounded-xl group cursor-pointer hover:bg-white/10 transition-all border-l-4 border-l-transparent">
<span class="font-label-md text-label-md text-on-surface-variant w-6 text-center">02</span>
<div class="w-12 h-12 rounded-lg overflow-hidden shrink-0">
<!-- svelte-ignore a11y_missing_attribute -->
<img class="w-full h-full object-cover" data-alt="Futuristic landscape album art with a setting sun reflecting on a liquid-metal ocean, purple and orange hues, vaporwave vibe." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbdHymr8v8b3D-Wi4bsMLGy2ZQE1CG9UX_PKfa9ron-W1d2YzFYJYOWmSflPt5gVSTCHQcrAujyJ-HRq0HGQyg3geB0XzfaWCa_pwU9xH_8L-80b2wvsnO083Xk9m8-sMlHKFlsbmbA6wq7Elq5NW03BPBoaZRiCYDx1xJB_fSviq5yDtpUnk6sZR10H7WpTezjg3crYUO4GoYrM8SaYmX3jVYrIP7w4qcpYhEF6fI9krnJ8tVpFhSwwOODmGmerHwLrY_BIayHW8"/>
</div>
<div class="flex-1">
<p class="font-body-md text-body-md text-white font-bold group-hover:text-primary-container transition-colors">Cyber Pulse</p>
<p class="text-label-sm text-label-sm text-on-surface-variant/70">System Override • 03:45</p>
</div>
<div class="hidden md:flex flex-col items-end mr-8">
<p class="text-label-sm text-label-sm text-on-surface-variant font-bold">STABLE</p>
<p class="text-[10px] text-on-surface-variant/50">-1% this week</p>
</div>
<div class="flex items-center gap-4">
<button class="material-symbols-outlined text-on-surface-variant/70 hover:text-primary transition-all" data-icon="favorite">favorite</button>
<button class="material-symbols-outlined text-primary group-hover:scale-125 transition-transform" data-icon="play_circle">play_circle</button>
</div>
</div>
<!-- Track 3 -->
<div class="flex items-center gap-4 p-4 glass-panel rounded-xl group cursor-pointer hover:bg-white/10 transition-all border-l-4 border-l-transparent">
<span class="font-label-md text-label-md text-on-surface-variant w-6 text-center">03</span>
<div class="w-12 h-12 rounded-lg overflow-hidden shrink-0">
<!-- svelte-ignore a11y_missing_attribute -->
<img class="w-full h-full object-cover" data-alt="Macro photography of complex circuits glowing with magenta energy, bokeh lighting, technological art." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzu_iUss-lbOkcoqH_KyNQpZg4vwAu9UWR3T_9Cfs6kkvNo0npn8bCmMqXi3YIUp0dEyqz3PX6KbTZ1dMsyC85XJC67XmfXVpkr1hESoBJSlRFmv7La5q1FQUW6dbbRAe7k1rnnvZ2zBpoYPfOy8D7QdkVELqqoplRIGEyS6PrXhe-gqs-BPmS6Hf_H1zI1SjBIpLTtv4IOG-3wgVayP6mpmcurIX4w1JV8B1XfFnd6X0qFMtMGJFzVTjx1Hdk1bV7zTa_V41aIWI"/>
</div>
<div class="flex-1">
<p class="font-body-md text-body-md text-white font-bold group-hover:text-primary-container transition-colors">Afterglow</p>
<p class="text-label-sm text-label-sm text-on-surface-variant/70">Silicon Soul • 05:10</p>
</div>
<div class="hidden md:flex flex-col items-end mr-8">
<p class="text-label-sm text-label-sm text-secondary font-bold">RISING</p>
<p class="text-[10px] text-on-surface-variant/50">+42% this week</p>
</div>
<div class="flex items-center gap-4">
<button class="material-symbols-outlined text-on-surface-variant/70 hover:text-primary transition-all" data-icon="favorite">favorite</button>
<button class="material-symbols-outlined text-primary group-hover:scale-125 transition-transform" data-icon="play_circle">play_circle</button>
</div>
</div>
</div>
<div class="mt-8 text-center">
<button class="px-8 py-3 glass-panel rounded-full text-label-md text-primary font-bold hover:bg-primary/20 hover:neon-glow-cyan transition-all uppercase tracking-widest">
                        Load More Tracks
                    </button>
</div>
</section>
</main>
<!-- Player Bar -->
<footer class="fixed bottom-0 left-0 w-full z-50 bg-surface-container-low/90 backdrop-blur-lg border-t border-primary/20 h-24 lg:h-20 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
<div class="h-full px-4 lg:px-8 flex items-center justify-between gap-4">
<!-- Track Info -->
<div class="flex items-center gap-3 w-1/4 min-w-0">
<div class="w-12 h-12 rounded overflow-hidden shrink-0 neon-glow-cyan">
<!-- svelte-ignore a11y_missing_attribute -->
<img class="w-full h-full object-cover" data-alt="Album art with glowing cyan rings on dark glass, minimalist high-tech design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA854ii_VxgUMETDADFKrhfBQjyQvL2YENaMv78jdF5777dk5fjXgX18kgIGyfR6dqJuP9vcFwPDkf0b3PzuJ5848k57IoDIvCtnOWDmIFeCm0aI1Ck8uEj5vH_vYH1yyyT-yxEy82iSp9wX3MYB1JPhWfQlARMJKeRY0QTQ5-4gRn_JnJcvdDPyyrvo6jr1QYPdYEmUavW2hwzpoWUCdsaVJGzFTl3YwQLGTm9SJWfVOmoAGDTpwUlXQPqNPaCaGjAAJwIUeDozCE"/>
</div>
<div class="truncate">
<p class="font-body-md text-body-md text-primary font-bold truncate">Electric Dreams</p>
<p class="text-label-sm text-label-sm text-on-surface-variant/70 truncate">Neon Heart</p>
</div>
</div>
<!-- Controls -->
<div class="flex-1 flex flex-col items-center gap-2 max-w-2xl">
<div class="flex items-center gap-6">
<button class="material-symbols-outlined text-on-surface-variant/70 hover:text-primary transition-all" data-icon="shuffle">shuffle</button>
<button class="material-symbols-outlined text-primary scale-110" data-icon="skip_previous" style="font-variation-settings: 'FILL' 1;">skip_previous</button>
<button class="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center neon-glow-cyan hover:scale-105 transition-transform">
<span class="material-symbols-outlined fill" data-icon="pause" style="font-variation-settings: 'FILL' 1;">pause</span>
</button>
<button class="material-symbols-outlined text-primary scale-110" data-icon="skip_next" style="font-variation-settings: 'FILL' 1;">skip_next</button>
<button class="material-symbols-outlined text-on-surface-variant/70 hover:text-primary transition-all" data-icon="repeat">repeat</button>
</div>
<div class="w-full flex items-center gap-3">
<span class="text-[10px] text-on-surface-variant/50 font-label-sm">01:45</span>
<div class="flex-1 h-1 bg-white/10 rounded-full relative group cursor-pointer overflow-hidden">
<div class="absolute inset-y-0 left-0 bg-linear-to-r from-primary to-primary-container w-[40%] neon-glow-cyan"></div>
<div class="absolute top-1/2 left-[40%] w-3 h-3 bg-white rounded-full -translate-y-1/2 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<span class="text-[10px] text-on-surface-variant/50 font-label-sm">04:22</span>
</div>
</div>
<!-- Volume/Extra -->
<div class="hidden lg:flex items-center justify-end gap-4 w-1/4">
<button class="material-symbols-outlined text-on-surface-variant/70 hover:text-primary" data-icon="lyrics">lyrics</button>
<button class="material-symbols-outlined text-on-surface-variant/70 hover:text-primary" data-icon="queue_music">queue_music</button>
<div class="flex items-center gap-2 w-32">
<span class="material-symbols-outlined text-on-surface-variant/70" data-icon="volume_up">volume_up</span>
<div class="flex-1 h-1 bg-white/10 rounded-full">
<div class="h-full bg-primary-container w-2/3"></div>
</div>
</div>
</div>
</div>
</footer>
<!-- BottomNavBar (Mobile Only) -->
<nav class="fixed bottom-0 left-0 w-full z-60 flex justify-around items-center h-20 lg:hidden pb-safe bg-surface-container-low/90 backdrop-blur-lg border-t border-primary/20 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
<a class="flex flex-col items-center justify-center text-on-surface-variant/60 active:scale-110 duration-150 transition-all" data-sveltekit-reload href="/">
<span class="material-symbols-outlined" data-icon="home">home</span>
<span class="font-label-sm text-label-sm">Home</span>
</a>
<a class="flex flex-col items-center justify-center text-primary drop-shadow-[0_0_5px_#00dbe9] active:scale-110 duration-150 transition-all" data-sveltekit-reload href="songs">
<span class="material-symbols-outlined" data-icon="music_note">music_note</span>
<span class="font-label-sm text-label-sm">Songs</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant/60 active:scale-110 duration-150 transition-all" data-sveltekit-reload href="browse_files">
<span class="material-symbols-outlined" data-icon="folder">folder</span>
<span class="font-label-sm text-label-sm">Files</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant/60 active:scale-110 duration-150 transition-all" data-sveltekit-reload href="login">
<span class="material-symbols-outlined" data-icon="person">person</span>
<span class="font-label-sm text-label-sm">Profile</span>
</a>
</nav>
</div>
<!-- Micro-interaction Visualizer Script -->
<script>
        // Simple visualizer animation logic
        document.addEventListener('DOMContentLoaded', () => {
            const trackCards = document.querySelectorAll('.group');
            trackCards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateY(-4px)';
                });
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'translateY(0)';
                });
            });
        });
    </script>
</body></html>