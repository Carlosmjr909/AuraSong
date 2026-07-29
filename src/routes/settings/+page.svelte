<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;800&amp;family=JetBrains+Mono:wght@500&amp;family=Hanken+Grotesk:wght@400;500&amp;family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
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
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
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
                    "display-lg-mobile": ["Sora"],
                    "label-md": ["JetBrains Mono"],
                    "display-lg": ["Sora"],
                    "body-md": ["Hanken Grotesk"],
                    "label-sm": ["JetBrains Mono"],
                    "headline-sm": ["Sora"],
                    "body-lg": ["Hanken Grotesk"]
            },
            "fontSize": {
                    "headline-md": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                    "display-lg-mobile": ["40px", {"lineHeight": "44px", "letterSpacing": "-0.02em", "fontWeight": "800"}],
                    "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "500"}],
                    "display-lg": ["64px", {"lineHeight": "72px", "letterSpacing": "-0.04em", "fontWeight": "800"}],
                    "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                    "label-sm": ["12px", {"lineHeight": "16px", "letterSpacing": "0.1em", "fontWeight": "500"}],
                    "headline-sm": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
                    "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-panel {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(0, 219, 233, 0.1);
        }
        .neon-glow {
            box-shadow: 0 0 15px rgba(0, 219, 233, 0.2);
        }
        .custom-slider {
            -webkit-appearance: none;
            width: 100%;
            height: 4px;
            background: #35343a;
            border-radius: 2px;
            outline: none;
        }
        .custom-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 16px;
            height: 16px;
            background: #00dbe9;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0 0 10px #00dbe9;
        }
        .toggle-switch:checked + .toggle-bg {
            background: #00dbe9;
            box-shadow: 0 0 10px #00dbe9;
        }
        .toggle-switch:checked + .toggle-bg .toggle-circle {
            transform: translateX(1.25rem);
        }
        body {
            background-color: #131318;
            color: #e4e1e9;
            overflow-x: hidden;
        }
    </style>
</head>
<body class="font-body-md text-body-md">
<!-- Sidebar Navigation -->
<aside class="h-screen w-64 fixed left-0 top-0 flex flex-col p-md space-y-base bg-surface/80 dark:bg-surface/80 backdrop-blur-xl border-r border-primary/20 shadow-[0_0_15px_rgba(0,219,233,0.15)] z-50">
<div class="flex items-center space-x-sm mb-lg">
<div class="w-8 h-8 rounded-full bg-linear-to-tr from-primary-fixed to-secondary"></div>
<div>
<h1 class="font-headline-sm text-headline-sm font-extrabold text-transparent bg-clip-text bg-linear-to-r from-primary-fixed to-secondary">AuraSong</h1>
<p class="font-label-sm text-label-sm text-on-surface-variant opacity-70">Premium Sync</p>
</div>
</div>
<nav class="flex-1 space-y-base">
<a class="flex items-center space-x-sm p-sm transition-all duration-300 ease-in-out active:scale-95 text-on-surface-variant hover:text-primary hover:bg-primary/10 hover:shadow-[0_0_10px_rgba(0,219,233,0.3)] rounded-xl" href="/">
<span class="material-symbols-outlined">home</span>
<span class="font-label-md text-label-md">Home</span>
</a>
<a class="flex items-center space-x-sm p-sm transition-all duration-300 ease-in-out active:scale-95 text-on-surface-variant hover:text-primary hover:bg-primary/10 hover:shadow-[0_0_10px_rgba(0,219,233,0.3)] rounded-xl" href="songs">
<span class="material-symbols-outlined">library_music</span>
<span class="font-label-md text-label-md">Library</span>
</a>
<a class="flex items-center space-x-sm p-sm transition-all duration-300 ease-in-out active:scale-95 text-on-surface-variant hover:text-primary hover:bg-primary/10 hover:shadow-[0_0_10px_rgba(0,219,233,0.3)] rounded-xl" href="artists">
<span class="material-symbols-outlined">person</span>
<span class="font-label-md text-label-md">Artists</span>
</a>
<a class="flex items-center space-x-sm p-sm transition-all duration-300 ease-in-out active:scale-95 text-on-surface-variant hover:text-primary hover:bg-primary/10 hover:shadow-[0_0_10px_rgba(0,219,233,0.3)] rounded-xl" href="browse_files">
<span class="material-symbols-outlined">folder_open</span>
<span class="font-label-md text-label-md">Files</span>
</a>
<a class="flex items-center space-x-sm p-sm transition-all duration-300 ease-in-out active:scale-95 text-primary font-bold bg-primary/10 rounded-xl shadow-[0_0_10px_rgba(0,219,233,0.3)]" href="settings">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">settings</span>
<span class="font-label-md text-label-md">Settings</span>
</a>
</nav>
<div class="mt-auto pt-md border-t border-primary/10 flex items-center space-x-sm">
<!-- svelte-ignore a11y_missing_attribute -->
<img class="w-10 h-10 rounded-full border border-primary/30" data-alt="A sleek profile avatar of a young music producer in a dark studio illuminated by neon cyan and magenta lights, wearing high-tech headphones, futuristic digital art style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJu1XNOOIFixWdTVw13LeBY3dRjHC9IpCxapBlzL0aqS6HfkkI8y9PqkmFFf50Ve39j2osBWU3UfXBkxbbXyFIIC2xXgjXOuNz535q7OnN5Hx6WG5EJjlAYlMlYD5KWVOF6vtty6g84cRDLz4xFGGBu8-MPzI0_UGizlYFjDIS9m8tHXJ2euuMryq6FjM9hM2SKMDFs0N3L4QN_kccknwoDS1UUAkdex90q5kC-04wFjuKgpjo1GNCj9c0qSplY5ndr0rcRTOp2SY"/>
<div>
<p class="font-label-md text-label-md text-primary-fixed">Kaelo_Sync</p>
<p class="font-label-sm text-label-sm text-on-surface-variant">Pro Plan</p>
</div>
</div>
</aside>
<!-- Top Navigation Bar -->
<header class="fixed top-0 right-0 left-64 h-16 flex items-center justify-between px-md w-full bg-surface/40 backdrop-blur-md z-40">
<h2 class="font-headline-sm text-headline-sm font-bold text-primary">Settings</h2>
<div class="flex items-center space-x-gutter">
<div class="relative group">
<span class="material-symbols-outlined text-primary cursor-pointer active:opacity-70">search</span>
</div>
<div class="relative">
<span class="material-symbols-outlined text-primary cursor-pointer active:opacity-70">notifications</span>
<span class="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full shadow-[0_0_5px_#fe00fe]"></span>
</div>
</div>
</header>
<!-- Main Content -->
<main class="ml-64 pt-20 px-margin-desktop min-h-screen pb-xl">
<!-- Bento Grid Layout for Settings -->
<div class="grid grid-cols-12 gap-gutter max-w-7xl mx-auto">
<!-- Header Section (Hero-ish) -->
<section class="col-span-12 glass-panel rounded-xl p-lg relative overflow-hidden group">

<div class="relative z-10">
<h3 class="font-headline-md text-headline-md text-primary-fixed mb-xs">System Configuration</h3>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Refine your auditory and visual experience. Optimize for high-fidelity playback or immersive reactive lighting.</p>
</div>
</section>
<!-- Audio Quality Section -->
<section class="col-span-12 lg:col-span-7 glass-panel rounded-xl p-md flex flex-col space-y-md">
<div class="flex items-center space-x-base">
<span class="material-symbols-outlined text-primary-fixed">graphic_eq</span>
<h4 class="font-headline-sm text-headline-sm">Audio Engine</h4>
</div>
<div class="space-y-gutter">
<div class="flex flex-col space-y-base">
<div class="flex justify-between">
<span class="font-label-md text-label-md text-on-surface">Streaming Bitrate</span>
<span class="font-label-md text-label-md text-primary-fixed">Lossless (24-bit/96kHz)</span>
</div>
<input class="custom-slider" max="100" min="0" type="range" value="90"/>
<div class="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>128kbps</span>
<span>320kbps</span>
<span>Lossless</span>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-md">
<div class="p-sm bg-surface-container rounded-lg border border-primary/10 flex flex-col justify-between h-32 hover:border-primary/40 transition-colors">
<span class="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Standard</span>
<div>
<h5 class="font-headline-sm text-headline-sm text-white">320kbps</h5>
<p class="font-label-sm text-label-sm text-on-surface-variant">Optimized for bandwidth</p>
</div>
</div>
<div class="p-sm bg-primary/10 rounded-lg border border-primary flex flex-col justify-between h-32 neon-glow transition-all">
<div class="flex justify-between items-start">
<span class="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed">Premium</span>
<span class="material-symbols-outlined text-primary-fixed" style="font-variation-settings: 'FILL' 1;">check_circle</span>
</div>
<div>
<h5 class="font-headline-sm text-headline-sm text-white">Lossless</h5>
<p class="font-label-sm text-label-sm text-primary-fixed">Pure studio fidelity</p>
</div>
</div>
</div>
</div>
</section>
<!-- Visuals Section -->
<section class="col-span-12 lg:col-span-5 glass-panel rounded-xl p-md flex flex-col space-y-md">
<div class="flex items-center space-x-base">
<span class="material-symbols-outlined text-secondary">flare</span>
<h4 class="font-headline-sm text-headline-sm">Reactive Visuals</h4>
</div>
<div class="space-y-gutter">
<div class="flex items-center justify-between">
<div>
<p class="font-label-md text-label-md text-on-surface">Neon Intensity</p>
<p class="font-label-sm text-label-sm text-on-surface-variant">Adjust global glow levels</p>
</div>
<input class="custom-slider w-32" type="range"/>
</div>
<div class="flex items-center justify-between">
<div>
<p class="font-label-md text-label-md text-on-surface">Pulse Effects</p>
<p class="font-label-sm text-label-sm text-on-surface-variant">Sync interface with kick drum</p>
</div>
<label class="relative inline-flex items-center cursor-pointer">
<input defaultChecked={true} class="sr-only toggle-switch" type="checkbox"/>
<div class="w-11 h-6 bg-surface-container-highest rounded-full toggle-bg transition-all duration-300">
<div class="toggle-circle absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300"></div>
</div>
</label>
</div>
<div class="flex items-center justify-between">
<div>
<p class="font-label-md text-label-md text-on-surface">Frequency Visualizer</p>
<p class="font-label-sm text-label-sm text-on-surface-variant">Real-time background spectral art</p>
</div>
<label class="relative inline-flex items-center cursor-pointer">
<input class="sr-only toggle-switch" type="checkbox"/>
<div class="w-11 h-6 bg-surface-container-highest rounded-full toggle-bg transition-all duration-300">
<div class="toggle-circle absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300"></div>
</div>
</label>
</div>
<div class="mt-md p-sm bg-surface-container-low rounded-xl border border-secondary/20 h-24 overflow-hidden relative">

<p class="relative z-10 font-label-sm text-label-sm text-secondary-fixed text-center mt-6">PREVIEW: CYBER_PHONK THEME</p>
</div>
</div>
</section>
<!-- Sync Directories & Account -->
<section class="col-span-12 md:col-span-6 glass-panel rounded-xl p-md flex flex-col space-y-md">
<div class="flex items-center justify-between">
<div class="flex items-center space-x-base">
<span class="material-symbols-outlined text-primary-fixed">cloud_sync</span>
<h4 class="font-headline-sm text-headline-sm">Sync Directories</h4>
</div>
<button class="font-label-sm text-label-sm bg-primary-container text-on-primary-container px-base py-xs rounded-full hover:scale-105 transition-transform">+ Add Path</button>
</div>
<div class="space-y-sm">
<div class="flex items-center justify-between p-sm bg-surface-container rounded-lg border border-primary/5">
<div class="flex items-center space-x-base">
<span class="material-symbols-outlined text-on-surface-variant">folder</span>
<span class="font-label-md text-label-md">/Users/Kaelo/Music/Demos</span>
</div>
<span class="material-symbols-outlined text-error cursor-pointer">delete</span>
</div>
<div class="flex items-center justify-between p-sm bg-surface-container rounded-lg border border-primary/5">
<div class="flex items-center space-x-base">
<span class="material-symbols-outlined text-on-surface-variant">folder</span>
<span class="font-label-md text-label-md">/Volumes/SSD_RED/Aura_Library</span>
</div>
<span class="material-symbols-outlined text-error cursor-pointer">delete</span>
</div>
</div>
</section>
<section class="col-span-12 md:col-span-6 glass-panel rounded-xl p-md flex flex-col space-y-md">
<div class="flex items-center space-x-base">
<span class="material-symbols-outlined text-tertiary-fixed-dim">account_circle</span>
<h4 class="font-headline-sm text-headline-sm">Account Matrix</h4>
</div>
<div class="flex items-center p-sm bg-surface-container-high rounded-xl space-x-md">
<!-- svelte-ignore a11y_missing_attribute -->
<img class="w-16 h-16 rounded-full border-2 border-secondary" data-alt="Close up high quality portrait of a music interface designer with glowing tattoos, wearing digital gear, dark futuristic cyberpunk lighting, neon blue highlights." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhHp2aJiPVYwPY0aeBYLA0DiBpXECkaJqRxWytboLIz5lAVPzOSsrI4PjFVccfbAVyesJ6f0uY7nM9sXRNFCm-yUUx-NqsJFFez2cSu4tMttUvBTC50QTi_5xt5nLkCCMgZzWRKu--UsBKE-KtqRC7V31PQemOBNBtNmE3GnKAZvFn9r_ANOQxnvi3dUtZjqk9DyTGd0KO3EEF192vgDOBbhF5lz7GUKvHE_NT5BrKjRcQ-5kXW9pgDZqGnVs0DflczGApM2bwO7o"/>
<div class="flex-1">
<h5 class="font-headline-sm text-headline-sm">Kaelo Sync</h5>
<p class="font-label-md text-label-md text-on-surface-variant">Premium Resident since 2024</p>
</div>
<button class="material-symbols-outlined text-primary p-base bg-primary/10 rounded-full hover:bg-primary/20 transition-all">edit</button>
</div>
<div class="grid grid-cols-2 gap-base">
<button class="border border-outline-variant rounded-xl p-sm font-label-md text-label-md hover:bg-surface-container transition-colors">Manage Subscription</button>
<button class="border border-error/50 text-error rounded-xl p-sm font-label-md text-label-md hover:bg-error/10 transition-colors">Logout Device</button>
</div>
</section>
</div>
</main>
<!-- Music Player Persistent Bar -->
<footer class="fixed bottom-0 left-0 right-0 h-20 glass-panel border-t-0 z-50 flex items-center px-margin-desktop space-x-xl shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
<div class="flex items-center space-x-md w-64">
<div class="w-12 h-12 rounded bg-surface-container relative overflow-hidden">
<!-- svelte-ignore a11y_missing_attribute -->
<img class="object-cover w-full h-full" data-alt="Album art for a futuristic techno track, featuring neon geometry, crystalline structures, deep purples and electric cyans, hyper-realistic digital render." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBROgOHU4apBpmSywY-fEQ-F8MRc0Qrdj-VtKHxaoQssTD9SNjPWxC5xKpdYqIXs27lAZ_bp0k3NHe_PC8g1fXr4cCmUXkUIRZcXKMGe0mP7Mwnwylb87VivDlgNWzjbJam_zDglGhaxFX0ccZFMyihI2BBTjbOOkUKriWm_SXBZmdaLEnl9f_hdX-ySFo7wVf0dWovAh4lqM5YXvNQ5wkL1OnYpCdOxv2o9ZXVH4hA-vFE9FnlN9aJL_uCGxpkJ5kzK0AzQN11ewE"/>
</div>
<div>
<p class="font-label-md text-label-md text-white">NEON_DRIFT.flac</p>
<p class="font-label-sm text-label-sm text-primary-fixed">System Overload</p>
</div>
</div>
<div class="flex-1 flex flex-col items-center justify-center space-y-xs">
<div class="flex items-center space-x-lg">
<span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-white transition-colors">shuffle</span>
<span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-white transition-colors">skip_previous</span>
<div class="w-10 h-10 bg-primary-container rounded-full flex items-center justify-center text-on-primary-container shadow-[0_0_15px_rgba(0,219,233,0.5)] cursor-pointer hover:scale-110 transition-transform">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">pause</span>
</div>
<span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-white transition-colors">skip_next</span>
<span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-white transition-colors">repeat</span>
</div>
<div class="w-full max-w-xl flex items-center space-x-base">
<span class="font-label-sm text-label-sm text-on-surface-variant">02:45</span>
<div class="flex-1 h-1 bg-surface-container-highest rounded-full overflow-hidden relative">
<div class="absolute inset-y-0 left-0 bg-primary-fixed w-3/4 shadow-[0_0_10px_#00dbe9]"></div>
</div>
<span class="font-label-sm text-label-sm text-on-surface-variant">04:12</span>
</div>
</div>
<div class="flex items-center space-x-md w-64 justify-end">
<span class="material-symbols-outlined text-on-surface-variant">volume_up</span>
<div class="w-24 h-1 bg-surface-container-highest rounded-full overflow-hidden">
<div class="h-full bg-on-surface w-1/2"></div>
</div>
<span class="material-symbols-outlined text-primary-fixed cursor-pointer">open_in_full</span>
</div>
</footer>
<script>
        // Micro-interaction for toggles and sliders
        document.querySelectorAll('.toggle-switch').forEach(toggle => {
            toggle.addEventListener('change', function() {
                if(this.checked) {
                    console.log('Pulse Effects Enabled');
                }
            });
        });

        // Dynamic Glow based on mouse position for glass panels
        document.querySelectorAll('.glass-panel').forEach(panel => {
            panel.addEventListener('mousemove', (e) => {
                const rect = panel.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                panel.style.setProperty('--mouse-x', `${x}px`);
                panel.style.setProperty('--mouse-y', `${y}px`);
            });
        });
    </script>
</body></html>