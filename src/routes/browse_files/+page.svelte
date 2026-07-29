<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>AuraSong | Browse Files</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;800&amp;family=JetBrains+Mono:wght@400;500;700&amp;family=Hanken+Grotesk:wght@400;500&amp;family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@100..900&amp;family=JetBrains+Mono:wght@100..900&amp;family=Sora:wght@100..900&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                "primary-fixed": "#7df4ff",
                "error": "#ffb4ab",
                "inverse-on-surface": "#303036",
                "error-container": "#93000a",
                "surface-container-lowest": "#0e0e13",
                "inverse-primary": "#006970",
                "surface-container-high": "#2a292f",
                "surface-tint": "#00dbe9",
                "surface": "#131318",
                "on-tertiary": "#223600",
                "tertiary-container": "#a2ef00",
                "surface-container": "#1f1f25",
                "on-primary": "#00363a",
                "on-primary-container": "#006970",
                "primary-container": "#00f0ff",
                "secondary-fixed": "#ffd7f5",
                "tertiary-fixed": "#a9f900",
                "inverse-surface": "#e4e1e9",
                "on-background": "#e4e1e9",
                "on-error-container": "#ffdad6",
                "outline": "#849495",
                "secondary-container": "#fe00fe",
                "on-tertiary-fixed-variant": "#334f00",
                "on-primary-fixed": "#002022",
                "surface-container-highest": "#35343a",
                "on-tertiary-fixed": "#121f00",
                "on-secondary-fixed-variant": "#810081",
                "background": "#131318",
                "tertiary": "#e5ffba",
                "surface-bright": "#39383e",
                "primary": "#dbfcff",
                "on-secondary-container": "#500050",
                "on-surface-variant": "#b9cacb",
                "surface-variant": "#35343a",
                "tertiary-fixed-dim": "#94db00",
                "secondary": "#ffabf3",
                "on-error": "#690005",
                "on-surface": "#e4e1e9",
                "outline-variant": "#3b494b",
                "surface-dim": "#131318",
                "on-tertiary-container": "#456900",
                "secondary-fixed-dim": "#ffabf3",
                "on-secondary-fixed": "#380038",
                "primary-fixed-dim": "#00dbe9",
                "surface-container-low": "#1b1b20",
                "on-secondary": "#5b005b",
                "on-primary-fixed-variant": "#004f54"
            },
            "spacing": {
                "base": "8px",
                "sm": "12px",
                "gutter": "24px",
                "xs": "4px",
                "margin-mobile": "16px",
                "lg": "48px",
                "margin-desktop": "40px",
                "md": "24px",
                "xl": "80px"
            },
            "fontFamily": {
                "headline-md": ["Sora"],
                "label-md": ["JetBrains Mono"],
                "display-lg": ["Sora"],
                "body-md": ["Hanken Grotesk"],
                "label-sm": ["JetBrains Mono"],
                "headline-sm": ["Sora"],
                "body-lg": ["Hanken Grotesk"]
            }
          }
        }
      }
    </script>
<style>
        .glass-panel {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(0, 219, 233, 0.2);
        }
        .neon-glow-primary {
            box-shadow: 0 0 15px rgba(0, 219, 233, 0.3);
        }
        .neon-glow-secondary {
            box-shadow: 0 0 15px rgba(254, 0, 254, 0.3);
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
        .file-card:hover .hover-overlay {
            transform: translateY(0);
        }
        .drag-zone-active {
            border-color: #00f0ff;
            background: rgba(0, 240, 255, 0.05);
        }
    </style>
</head>
<body class="bg-background text-on-background font-body-md selection:bg-primary-container selection:text-on-primary-container">
<!-- Ambient Visualizer Layer -->

<!-- Side Navigation (Shared Component Context) -->
<aside class="h-screen w-64 fixed left-0 top-0 bg-surface/80 dark:bg-surface/80 backdrop-blur-xl border-r border-primary/20 shadow-[0_0_15px_rgba(0,219,233,0.15)] flex flex-col p-md space-y-base z-50">
<div class="flex items-center space-x-sm mb-lg">
<div class="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-fixed to-secondary flex items-center justify-center neon-glow-primary">
<span class="material-symbols-outlined text-on-primary-fixed" style="font-variation-settings: 'FILL' 1;">music_note</span>
</div>
<div>
<h1 class="font-headline-sm text-headline-sm font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-fixed to-secondary leading-none">AuraSong</h1>
<p class="font-label-sm text-label-sm text-primary/60 tracking-widest uppercase">Premium Sync</p>
</div>
</div>
<nav class="flex-1 space-y-xs">
<a class="flex items-center space-x-md px-md py-base text-on-surface-variant hover:text-primary transition-colors hover:bg-primary/10 rounded-xl group" href="#">
<span class="material-symbols-outlined group-hover:scale-110 transition-transform">home</span>
<span class="font-label-md text-label-md">Home</span>
</a>
<a class="flex items-center space-x-md px-md py-base text-on-surface-variant hover:text-primary transition-colors hover:bg-primary/10 rounded-xl group" href="#">
<span class="material-symbols-outlined group-hover:scale-110 transition-transform">library_music</span>
<span class="font-label-md text-label-md">Library</span>
</a>
<a class="flex items-center space-x-md px-md py-base text-on-surface-variant hover:text-primary transition-colors hover:bg-primary/10 rounded-xl group" href="#">
<span class="material-symbols-outlined group-hover:scale-110 transition-transform">person</span>
<span class="font-label-md text-label-md">Artists</span>
</a>
<!-- Active Tab -->
<a class="flex items-center space-x-md px-md py-base text-primary font-bold bg-primary/10 rounded-xl shadow-[0_0_10px_rgba(0,219,233,0.3)]" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">folder_open</span>
<span class="font-label-md text-label-md">Files</span>
</a>
<a class="flex items-center space-x-md px-md py-base text-on-surface-variant hover:text-primary transition-colors hover:bg-primary/10 rounded-xl group" href="#">
<span class="material-symbols-outlined group-hover:scale-110 transition-transform">settings</span>
<span class="font-label-md text-label-md">Settings</span>
</a>
</nav>
<div class="mt-auto p-md glass-panel rounded-xl border-dashed border-primary/40 text-center">
<span class="material-symbols-outlined text-primary mb-xs">cloud_done</span>
<p class="font-label-sm text-label-sm text-on-surface-variant">Sync Active</p>
<div class="w-full bg-surface-container-high h-1 rounded-full mt-base overflow-hidden">
<div class="bg-primary-fixed h-full w-[64%] neon-glow-primary"></div>
</div>
</div>
</aside>
<!-- Top Navigation (Shared Component Context) -->
<header class="fixed top-0 right-0 left-64 h-16 bg-surface/40 backdrop-blur-md flex items-center justify-between px-md z-40">
<div class="flex items-center flex-1 max-w-xl">
<div class="relative w-full">
<span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input class="w-full bg-surface-container-lowest border-b-2 border-outline-variant focus:border-primary-fixed text-primary transition-all px-12 py-2 outline-none font-label-md text-label-md" placeholder="Search directory..." type="text"/>
</div>
</div>
<div class="flex items-center space-x-md ml-md">
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-opacity cursor-pointer">notifications</button>
<div class="flex items-center space-x-sm px-sm py-xs bg-surface-container rounded-full border border-primary/10">
<img class="w-8 h-8 rounded-full border border-primary-fixed" data-alt="A portrait of a futuristic music producer with neon cybernetic implants on their cheek, wearing reflective chrome goggles, bathed in deep magenta and cyan studio lighting. The background is a dark high-tech control room." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdDC0niMTl6MXIPV1ITYd7v4A_GSPA6mGDFWhMY9E5DxVT6jOIbxKWbVKgt9YiSH6HtbEpsRc0Szm2kmw5Ss9hJyv-nxP9Ptt__azvE6yj79BIiTNI2sZObnJYfwq5eEHTglMJ7kpkxOcfYEm23Y-3TqK2WMGuFD8KFH1za3RQCCvZPLxuyzzpdMrxckuMeJkxcPvd5K6OhMQmVFRa3hv0pL7D_JhjvQesVfBD4CzCv3sfsSepOEudIQJecgXuRQHmz-LEKOWwaGA"/>
<span class="font-label-md text-label-md text-primary hidden lg:block">Admin_01</span>
</div>
</div>
</header>
<!-- Main Content Area -->
<main class="pl-64 pt-16 min-h-screen relative z-10 flex">
<!-- Left Pane: Tree View -->
<aside class="w-80 border-r border-primary/10 p-md custom-scrollbar overflow-y-auto">
<div class="flex items-center justify-between mb-md">
<h3 class="font-headline-sm text-headline-sm font-bold text-primary">Explorer</h3>
<button class="material-symbols-outlined text-primary text-sm">create_new_folder</button>
</div>
<div class="space-y-sm">
<!-- Directory Item: Root -->
<details class="group" open="">
<summary class="flex items-center space-x-2 cursor-pointer list-none text-on-surface-variant hover:text-primary transition-colors font-label-md">
<span class="material-symbols-outlined transition-transform group-open:rotate-90">chevron_right</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">folder</span>
<span>Local Drives</span>
</summary>
<div class="pl-8 mt-2 space-y-2">
<div class="flex items-center space-x-2 text-primary font-bold border-l-2 border-primary pl-2">
<span class="material-symbols-outlined text-sm">folder_open</span>
<span class="text-label-md">Music_Production_2024</span>
</div>
<div class="flex items-center space-x-2 text-on-surface-variant hover:text-primary pl-2 cursor-pointer">
<span class="material-symbols-outlined text-sm">folder</span>
<span class="text-label-md text-sm">Samples &amp; Loops</span>
</div>
<div class="flex items-center space-x-2 text-on-surface-variant hover:text-primary pl-2 cursor-pointer">
<span class="material-symbols-outlined text-sm">folder</span>
<span class="text-label-md text-sm">Masters_WAV</span>
</div>
</div>
</details>
<!-- Directory Item: Cloud -->
<details class="group">
<summary class="flex items-center space-x-2 cursor-pointer list-none text-on-surface-variant hover:text-primary transition-colors font-label-md">
<span class="material-symbols-outlined transition-transform group-open:rotate-90">chevron_right</span>
<span class="material-symbols-outlined">cloud</span>
<span>AuraCloud Sync</span>
</summary>
<div class="pl-8 mt-2 space-y-2">
<div class="flex items-center space-x-2 text-on-surface-variant hover:text-primary pl-2 cursor-pointer">
<span class="material-symbols-outlined text-sm">folder</span>
<span class="text-label-md text-sm">Shared Projects</span>
</div>
</div>
</details>
<!-- Directory Item: Labels -->
<div class="pt-lg">
<p class="font-label-sm text-label-sm text-on-surface-variant/40 mb-md uppercase tracking-widest">Categories</p>
<div class="space-y-sm">
<div class="flex items-center justify-between group cursor-pointer">
<div class="flex items-center space-x-2">
<div class="w-2 h-2 rounded-full bg-primary-fixed"></div>
<span class="font-label-md text-label-md text-on-surface-variant group-hover:text-primary transition-colors">WAV / Lossless</span>
</div>
<span class="text-xs text-on-surface-variant/40">128</span>
</div>
<div class="flex items-center justify-between group cursor-pointer">
<div class="flex items-center space-x-2">
<div class="w-2 h-2 rounded-full bg-secondary"></div>
<span class="font-label-md text-label-md text-on-surface-variant group-hover:text-primary transition-colors">MP3 / Standard</span>
</div>
<span class="text-xs text-on-surface-variant/40">1,042</span>
</div>
<div class="flex items-center justify-between group cursor-pointer">
<div class="flex items-center space-x-2">
<div class="w-2 h-2 rounded-full bg-tertiary-fixed"></div>
<span class="font-label-md text-label-md text-on-surface-variant group-hover:text-primary transition-colors">FLAC / Master</span>
</div>
<span class="text-xs text-on-surface-variant/40">84</span>
</div>
</div>
</div>
</div>
</aside>
<!-- Right Pane: File Grid & Workspace -->
<section class="flex-1 p-md flex flex-col space-y-gutter">
<!-- Breadcrumbs & Actions -->
<div class="flex items-center justify-between">
<nav class="flex items-center space-x-2 text-on-surface-variant">
<span class="material-symbols-outlined text-sm">folder</span>
<span class="font-label-md text-label-md">Local</span>
<span class="material-symbols-outlined text-sm">chevron_right</span>
<span class="font-label-md text-label-md text-primary">Music_Production_2024</span>
</nav>
<div class="flex items-center space-x-md">
<div class="flex items-center bg-surface-container rounded-lg p-1">
<button class="p-2 rounded bg-primary/20 text-primary material-symbols-outlined">grid_view</button>
<button class="p-2 rounded text-on-surface-variant material-symbols-outlined">list</button>
</div>
<button class="bg-gradient-to-r from-primary-fixed to-secondary text-on-primary-fixed font-label-md text-label-md px-md py-2 rounded-lg flex items-center space-x-2 neon-glow-primary active:scale-95 transition-all">
<span class="material-symbols-outlined">upload</span>
<span>Import Tracks</span>
</button>
</div>
</div>
<!-- Bento File Grid -->
<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-md">
<!-- File Card 1: WAV -->
<div class="file-card group glass-panel rounded-2xl overflow-hidden relative transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,219,233,0.2)]">
<div class="h-32 w-full relative flex items-center justify-center overflow-hidden">
<img class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" data-alt="Abstract 3D soundwave rendering in neon cyan, against a pitch-black background with subtle bokeh particles. High-energy electronic music aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQy2riYJg948WLgyyuFQTFgkkkJyDbJoD7nDbFLQ-QcHVaG_n7ld09ix-DQodQzXrUNKIAetw7oB5B7le_lLBY5Q28G6vVOUMPmz9p_33rKINkVFUjyvcU3Y79sO965zTgqUOW1AcsEHViyUF-ePdVeDifhClw1pX4rLwjFtnGzDcYcO8KSUIGlRAXQXfyS3b2HZoI4nQffwWH92yKF0GNt8Ex6xhHyXAkGIXLpHSBj_Q8tPf1cGG7FubaHukIhEiIHG1Qq3s4Gaw"/>
<div class="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
<div class="z-10 w-16 h-16 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/40 group-hover:scale-125 transition-transform">
<span class="material-symbols-outlined text-primary text-3xl">play_arrow</span>
</div>
</div>
<div class="p-md relative">
<span class="font-label-sm text-[10px] uppercase text-primary border border-primary/30 px-2 py-0.5 rounded-full mb-xs inline-block">WAV</span>
<h4 class="font-label-md text-label-md truncate text-on-surface">Midnight_Pulse_Master.wav</h4>
<div class="flex items-center justify-between mt-sm text-on-surface-variant/60">
<span class="text-xs">48kHz / 24bit</span>
<span class="text-xs">42.5 MB</span>
</div>
</div>
</div>
<!-- File Card 2: MP3 -->
<div class="file-card group glass-panel rounded-2xl overflow-hidden relative transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(254,0,254,0.2)]">
<div class="h-32 w-full relative flex items-center justify-center overflow-hidden">
<img class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" data-alt="Vibrant magenta geometric patterns resembling a digital equalizer. Dark retro-futuristic vibes with glowing lines and sharp edges." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAg9KXSPwm_jw2F5LqGUoZZJJEOPMe-ZRxl8RukPhAuDPytV0biZO3s5D29odc2Gntg1pFM4AjzaT8tZreTVNNPpnZeMIL5mF3vjf5xLl7ZdFm-NcBgL5AvvSDWj6MCKvd9Fh9txbpNeugmwZzCWDbTFHYWGwHvunujbfeBGiXaEWDj7Mrs59zTceXtzydjbz30_NZKyO2nEZ4o8xfyrzskvOlZkvHBxRghDPqPS3zgyPP9WeVPtyRft3ETHBZ4o0W-1wSZa-t1Mk"/>
<div class="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
<div class="z-10 w-16 h-16 rounded-full bg-secondary/20 backdrop-blur-md flex items-center justify-center border border-secondary/40 group-hover:scale-125 transition-transform">
<span class="material-symbols-outlined text-secondary text-3xl">play_arrow</span>
</div>
</div>
<div class="p-md relative">
<span class="font-label-sm text-[10px] uppercase text-secondary border border-secondary/30 px-2 py-0.5 rounded-full mb-xs inline-block">MP3</span>
<h4 class="font-label-md text-label-md truncate text-on-surface">Warehouse_Rave_Demo.mp3</h4>
<div class="flex items-center justify-between mt-sm text-on-surface-variant/60">
<span class="text-xs">320kbps</span>
<span class="text-xs">12.8 MB</span>
</div>
</div>
</div>
<!-- File Card 3: FLAC -->
<div class="file-card group glass-panel rounded-2xl overflow-hidden relative transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(169,249,0,0.2)]">
<div class="h-32 w-full relative flex items-center justify-center overflow-hidden">
<img class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" data-alt="Lime green laser beams cutting through a dark smoky room. Cyberpunk club atmosphere with high-contrast lighting and futuristic textures." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOLpFjZQmjNYjCdlfeT8a53uS0tyIAWQy9k6oPGmnyP1h4Uk5uJCrH4JXyf0m2TJsnhd5_2hj5QVYHvr3uK_-FnGhnQqJFojxouxdZUWJhjck_SneF1r7GzuOlKy_x58vkXAw29_W3pFDCvAfrqGVep0Vm38WgAb-iORbfbsnqNCDRdJd_v3NpSWoPbAgA633CqGND7NWtBs7nLDFoBdwbRRh2Mg7WbsiTwf9BA18O0uBdQBuEW_CUff5cINwVsmgc5OBuiMyEbEo"/>
<div class="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
<div class="z-10 w-16 h-16 rounded-full bg-tertiary-fixed/20 backdrop-blur-md flex items-center justify-center border border-tertiary-fixed/40 group-hover:scale-125 transition-transform">
<span class="material-symbols-outlined text-tertiary-fixed text-3xl">play_arrow</span>
</div>
</div>
<div class="p-md relative">
<span class="font-label-sm text-[10px] uppercase text-tertiary-fixed border border-tertiary-fixed/30 px-2 py-0.5 rounded-full mb-xs inline-block">FLAC</span>
<h4 class="font-label-md text-label-md truncate text-on-surface">Organic_Textures_Final.flac</h4>
<div class="flex items-center justify-between mt-sm text-on-surface-variant/60">
<span class="text-xs">Lossless</span>
<span class="text-xs">88.2 MB</span>
</div>
</div>
</div>
<!-- Drag & Drop Zone -->
<div class="col-span-1 md:col-span-2 glass-panel rounded-2xl border-2 border-dashed border-primary/20 flex flex-col items-center justify-center p-md cursor-pointer hover:border-primary-fixed transition-all group overflow-hidden relative" id="drop-zone">
<div class="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span class="material-symbols-outlined text-4xl text-primary mb-sm animate-bounce">upload_file</span>
<h5 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary-fixed">Drop files to upload</h5>
<p class="font-label-sm text-label-sm text-on-surface-variant/60">Supports WAV, MP3, FLAC up to 500MB</p>
</div>
</div>
<!-- Recent Imports Section -->
<div class="pt-lg">
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface mb-md">Recent Imports</h3>
<div class="glass-panel rounded-2xl overflow-hidden">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-surface-container-high/50 border-b border-primary/10">
<th class="p-md font-label-md text-on-surface-variant">Name</th>
<th class="p-md font-label-md text-on-surface-variant">Date Added</th>
<th class="p-md font-label-md text-on-surface-variant">Size</th>
<th class="p-md font-label-md text-on-surface-variant">Status</th>
<th class="p-md font-label-md text-on-surface-variant text-right">Actions</th>
</tr>
</thead>
<tbody class="divide-y divide-primary/5">
<tr class="hover:bg-primary/5 transition-colors group">
<td class="p-md">
<div class="flex items-center space-x-md">
<div class="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
<span class="material-symbols-outlined text-primary text-sm">music_note</span>
</div>
<span class="font-label-md">Acid_Base_Arp.wav</span>
</div>
</td>
<td class="p-md text-on-surface-variant font-label-sm">Today, 14:22</td>
<td class="p-md text-on-surface-variant font-label-sm">18.4 MB</td>
<td class="p-md">
<span class="flex items-center space-x-2 text-tertiary-fixed text-xs font-label-md">
<span class="w-1.5 h-1.5 rounded-full bg-tertiary-fixed animate-pulse"></span>
<span>Synced</span>
</span>
</td>
<td class="p-md text-right">
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">more_vert</button>
</td>
</tr>
<tr class="hover:bg-primary/5 transition-colors group">
<td class="p-md">
<div class="flex items-center space-x-md">
<div class="w-8 h-8 rounded bg-secondary/20 flex items-center justify-center">
<span class="material-symbols-outlined text-secondary text-sm">music_note</span>
</div>
<span class="font-label-md">Vocal_Loop_04.mp3</span>
</div>
</td>
<td class="p-md text-on-surface-variant font-label-sm">Yesterday, 09:10</td>
<td class="p-md text-on-surface-variant font-label-sm">4.2 MB</td>
<td class="p-md">
<span class="flex items-center space-x-2 text-primary-fixed text-xs font-label-md">
<span class="w-1.5 h-1.5 rounded-full bg-primary-fixed"></span>
<span>Local Only</span>
</span>
</td>
<td class="p-md text-right">
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">more_vert</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
</main>
<!-- Music Player Persistent Bar -->
<div class="fixed bottom-0 left-0 right-0 h-20 bg-surface/80 backdrop-blur-2xl border-t border-primary/20 z-50 flex items-center px-md justify-between">
<div class="flex items-center space-x-md w-1/4">
<img class="w-12 h-12 rounded shadow-lg" data-alt="Minimalist abstract square art with glowing neon pink and cyan rings on a dark textured background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkzFC4ywqLetmk7BQa3PE1RcfY1_GmeyHCUOiFqKJAwax2BAFi4fEZTrliHXn1qznCKOmbWrl79kZUxEFy5CnIHs4ZkazdK47pIBZKuMM4w1rAaWTWCuzw0PeBTV8MPffWj8zPSiYd7EGoWap9kzlUewIWgI8Z24zUnVM5r4v5jR0kV7okBU6Xj6C9izfG9-miIWdzTJJIf-pEwAUloefO0FuYz6k3Mw7YTAkG4x5HxKebe_gD7rYL7aHzAzdpP03Y3rMqhsC5Wn4"/>
<div class="overflow-hidden">
<p class="font-label-md text-label-md text-on-surface truncate">Midnight_Pulse_Master.wav</p>
<p class="font-label-sm text-label-sm text-primary/60">AuraSong Studio</p>
</div>
</div>
<div class="flex flex-col items-center flex-1 space-y-xs">
<div class="flex items-center space-x-lg">
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">shuffle</button>
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">skip_previous</button>
<button class="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center neon-glow-primary active:scale-90 transition-all">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
</button>
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">skip_next</button>
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">repeat</button>
</div>
<div class="w-full max-w-xl flex items-center space-x-sm">
<span class="text-[10px] font-label-sm text-on-surface-variant/60">1:42</span>
<div class="flex-1 h-1 bg-surface-container-high rounded-full relative group cursor-pointer">
<div class="absolute inset-y-0 left-0 bg-primary-fixed w-[35%] rounded-full neon-glow-primary">
<div class="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 shadow-xl border-2 border-primary-fixed transition-opacity"></div>
</div>
</div>
<span class="text-[10px] font-label-sm text-on-surface-variant/60">4:55</span>
</div>
</div>
<div class="flex items-center justify-end space-x-md w-1/4">
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary">lyrics</button>
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary">queue_music</button>
<div class="flex items-center space-x-2 w-24">
<span class="material-symbols-outlined text-on-surface-variant text-sm">volume_up</span>
<div class="flex-1 h-1 bg-surface-container-high rounded-full">
<div class="h-full bg-on-surface-variant w-[70%] rounded-full"></div>
</div>
</div>
</div>
</div>
<script>
        // Simple drag and drop visual interaction
        const dropZone = document.getElementById('drop-zone');
        
        ['dragenter', 'dragover'].forEach(eventName => {
            dropZone.addEventListener(eventName, (e) => {
                e.preventDefault();
                dropZone.classList.add('drag-zone-active');
            }, false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
            dropZone.addEventListener(eventName, (e) => {
                e.preventDefault();
                dropZone.classList.remove('drag-zone-active');
            }, false);
        });

        dropZone.addEventListener('drop', (e) => {
            alert('File analysis complete. 4 tracks ready for import.');
        });

        // Toggle folder expansion
        document.querySelectorAll('details').forEach(detail => {
            detail.addEventListener('toggle', (e) => {
                // Animation or logic could go here
            });
        });
    </script>
</body></html>