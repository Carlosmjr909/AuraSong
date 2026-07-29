<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>AuraSong | Artists</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;800&amp;family=JetBrains+Mono:wght@500&amp;family=Hanken+Grotesk:wght@400&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>
        :root {
            --primary-glow: rgba(0, 219, 233, 0.3);
            --secondary-glow: rgba(254, 0, 254, 0.3);
        }
        body {
            background-color: #131318;
            color: #e4e1e9;
            overflow-x: hidden;
        }
        .glass-panel {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(125, 244, 255, 0.1);
        }
        .neon-border-primary {
            box-shadow: 0 0 15px var(--primary-glow);
            border: 2px solid #7df4ff;
        }
        .neon-border-secondary {
            box-shadow: 0 0 15px var(--secondary-glow);
            border: 2px solid #fe00fe;
        }
        .artist-card:hover .artist-image {
            transform: scale(1.05);
        }
        .scroll-hide::-webkit-scrollbar {
            display: none;
        }
        .animate-pulse-slow {
            animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }
    </style>
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
                        "label-md": ["JetBrains Mono"],
                        "headline-sm": ["Sora"],
                        "body-md": ["Hanken Grotesk"]
                    }
                }
            }
        }
    </script>
</head>
<body class="font-body-md text-on-surface bg-surface">
<!-- Global Background Shaders -->

<!-- Side Navigation Shell -->
<aside class="h-screen w-64 fixed left-0 top-0 bg-surface/80 dark:bg-surface/80 backdrop-blur-xl border-r border-primary/20 shadow-[0_0_15px_rgba(0,219,233,0.15)] flex flex-col p-md space-y-base z-50">
<div class="mb-lg">
<h1 class="font-headline-sm text-headline-sm font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-fixed to-secondary">AuraSong</h1>
<p class="font-label-sm text-label-sm text-primary/60 tracking-widest uppercase">Premium Sync</p>
</div>
<nav class="flex-grow space-y-2">
<a class="flex items-center gap-4 p-3 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors hover:bg-primary/10 rounded-xl transition-all duration-300 ease-in-out active:scale-95" href="#">
<span class="material-symbols-outlined">home</span>
<span>Home</span>
</a>
<a class="flex items-center gap-4 p-3 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors hover:bg-primary/10 rounded-xl transition-all duration-300 ease-in-out active:scale-95" href="#">
<span class="material-symbols-outlined">library_music</span>
<span>Library</span>
</a>
<a class="flex items-center gap-4 p-3 font-label-md text-label-md text-primary font-bold bg-primary/10 rounded-xl transition-all duration-300 ease-in-out active:scale-95" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">person</span>
<span>Artists</span>
</a>
<a class="flex items-center gap-4 p-3 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors hover:bg-primary/10 rounded-xl transition-all duration-300 ease-in-out active:scale-95" href="#">
<span class="material-symbols-outlined">folder_open</span>
<span>Files</span>
</a>
<a class="flex items-center gap-4 p-3 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors hover:bg-primary/10 rounded-xl transition-all duration-300 ease-in-out active:scale-95" href="#">
<span class="material-symbols-outlined">settings</span>
<span>Settings</span>
</a>
</nav>
<div class="pt-base border-t border-primary/10">
<div class="flex items-center gap-3 p-2">
<div class="w-10 h-10 rounded-full border border-primary-fixed overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A cinematic close-up of a stylish user with neon-reflecting glasses in a dark music studio setting. The lighting is dominated by electric cyan and deep magenta hues, creating a high-energy electronic music vibe. The image is crisp, modern, and perfectly fits a futuristic music platform." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJgDuxVyvGckKS7tuBt0eGTw9RhKU16st9mPfDkP0kXHUzr6AcSAG3zT3KGvL0l9jlRh5opWUHOvPmTieaApZJ-9BKcV_KJ01mf7bY9BICcGSkc1zfcWSdblcIr3OdMEx6FvBHMKhnnwpJUm4aTTEgjgguSJZUE-Qfqls6LqHht580co2xc4t4_hhZgmupZ4riDI64JUi8g7_C4P5GUs1XoB4O-7tr7jRDwXQIaQa2nkHw8NQBPoFI5W3IXn_HEolEY2gr12-CLmA"/>
</div>
<div>
<p class="font-label-md text-label-md text-primary">DJ_Aether</p>
<p class="text-[10px] text-on-surface-variant uppercase tracking-tighter font-bold">Pro Member</p>
</div>
</div>
</div>
</aside>
<!-- Main Content Canvas -->
<main class="ml-64 p-margin-desktop min-h-screen relative z-10">
<!-- Header -->
<header class="flex justify-between items-center mb-xl">
<div>
<h2 class="font-headline-md text-headline-md text-primary-fixed mb-xs">Pulse Makers</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant">The architects of the digital sonic landscape.</p>
</div>
<div class="flex items-center gap-base">
<div class="relative">
<input class="bg-surface-container-high border-b-2 border-primary/30 focus:border-primary-fixed text-primary px-4 py-2 pr-10 outline-none transition-all font-label-md" placeholder="Search Artists..." type="text"/>
<span class="material-symbols-outlined absolute right-3 top-2.5 text-primary-fixed/50">search</span>
</div>
<button class="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-primary-fixed hover:shadow-[0_0_15px_rgba(0,219,233,0.5)] transition-all">
<span class="material-symbols-outlined">notifications</span>
</button>
</div>
</header>
<!-- Bento Layout Artists -->
<section class="mb-xl">
<h3 class="font-label-md text-label-md text-secondary mb-md flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                TRENDING NOW
            </h3>
<div class="grid grid-cols-1 md:grid-cols-4 gap-gutter">
<!-- Artist Card 1 (Large) -->
<div class="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-xl glass-panel artist-card cursor-pointer">
<div class="absolute inset-0 z-0">
<img class="w-full h-full object-cover artist-image transition-transform duration-700" data-alt="A vibrant, high-energy profile portrait of a female techno producer with holographic face paint. She is positioned against a backdrop of glowing neon laser arrays in cyan and magenta. The aesthetic is retro-futuristic and electric, capturing the intensity of a dark warehouse rave. Soft bokeh and sharp refractive lighting elements enhance the depth." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFHiEn6qGD78IEoeb3cPoVWR_4MpcM2NaFjoLAoFntvfrySV_rq-Q3DcGULnLrV1M60Cqnf9f2w8Azz2iCM0FBHM-U-N9vRP9gAYj_Q4T1qkdZf-0boivRBmW4iI_FshfFvLY4YnC3VoabOC5ibV_KOBuhqtKIZ7eLZV9qTWL08W99HG2vewwjunmRNkxOFooGBSUcKlxUoAnh3s1A5wNSLAIGHnNvN6XXkncL5HwUJK6VdprchxLNupOG2KN3y5MaRgzMWUhAVw4"/>
</div>
<div class="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent"></div>
<div class="absolute bottom-0 left-0 p-md w-full">
<span class="inline-block px-3 py-1 mb-base rounded-full bg-primary/20 border border-primary/40 text-primary-fixed font-label-sm text-label-sm">#TECHNO</span>
<h4 class="font-headline-md text-headline-md text-primary-fixed">VØID_WALKER</h4>
<p class="font-body-md text-on-surface-variant mb-md">Berlin, DE • 1.2M Monthly Listeners</p>
<button class="px-gutter py-base bg-gradient-to-r from-primary-fixed to-secondary rounded-full font-label-md text-on-primary-fixed hover:scale-105 transition-transform active:scale-95 shadow-[0_0_20px_rgba(0,219,233,0.4)]">
                            FOLLOW ARTIST
                        </button>
</div>
</div>
<!-- Artist Card 2 -->
<div class="group glass-panel rounded-xl p-md flex flex-col items-center text-center artist-card cursor-pointer">
<div class="w-32 h-32 rounded-full p-1 neon-border-secondary mb-md">
<img class="w-full h-full rounded-full object-cover" data-alt="A sleek circular profile photo of a digital music artist with silver hair and glowing neon magenta headphones. The background is a dark, abstract digital landscape with geometric fractals. The lighting is moody and intense, emphasizing a futuristic electronic music persona. Vibrant magenta highlights shimmer across the metallic surfaces." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeMUdBTynkqS_wlYMukrCOGeVYW2h_p8SQqnhcEltTMvICIlRlZ1AgmLwzDXryhwdXgEbZzAuJovIW_RBLZkHWFPywY4XwZFoTQV9tQzIIcV0hicZRI44UKNlMJiZ4ytEGMN80TAPVdU6Srl9DnG9q4ZQvxLlOd7xRYbQlLS1nNvkAOtGqyycixKt9E3-wAPGbusGeip5dUWqUl15rRopfsW1NVjno1iblHm-VN4JtpWP68wAky7gRkRKAnhVOnyb10I9JaGOTHRg"/>
</div>
<span class="font-label-sm text-label-sm text-secondary mb-xs">GLITCH-HOP</span>
<h5 class="font-headline-sm text-headline-sm text-on-surface">CYBER_PHUNK</h5>
<p class="font-label-sm text-on-surface-variant mt-base">840K Listeners</p>
</div>
<!-- Artist Card 3 -->
<div class="group glass-panel rounded-xl p-md flex flex-col items-center text-center artist-card cursor-pointer">
<div class="w-32 h-32 rounded-full p-1 neon-border-primary mb-md">
<img class="w-full h-full rounded-full object-cover" data-alt="A mysterious electronic music artist obscured by a high-tech LED mask that displays pulsating equalizer patterns in cyan. The artist is wearing a dark, reflective streetwear jacket. The scene is set in a dimly lit, high-contrast studio environment with sharp blue accent lighting. The mood is avant-garde and technologically sophisticated." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmrKk17EhahEBCKxYF8YZcDbneDVz613NHjX0ihMlQWyCiSZHSrpvNE2M_Pzz4Tbl4VHKkjDKKKS4tntmoUQkjOLT8iGx1y0W7v-NWWpuRMZhP3RQuMG_5PkqQeCZdBkhzooEKV1NoiZQNIlMRXmD-SUVWs8f47l8184C1hEdDBHg3JKPNIsxeu7zZrIYdb-NHIg_gXTZeAIgqLu_Sr1K_3EMw3iP6KEMccHqzXD-Y2m3G-rlHdd9ZI4stAYZNeKjudYd--wqqaVU"/>
</div>
<span class="font-label-sm text-label-sm text-primary mb-xs">DRUM &amp; BASS</span>
<h5 class="font-headline-sm text-headline-sm text-on-surface">NEON_PULSE</h5>
<p class="font-label-sm text-on-surface-variant mt-base">1.5M Listeners</p>
</div>
<!-- Artist Card 4 -->
<div class="group glass-panel rounded-xl p-md flex flex-col items-center text-center artist-card cursor-pointer">
<div class="w-32 h-32 rounded-full p-1 neon-border-primary mb-md">
<img class="w-full h-full rounded-full object-cover" data-alt="A portrait of an experimental music producer surrounded by floating holographic sound wave visualizations. The artist has a calm expression, with electric blue light reflecting off their skin. The background is a pitch-black void filled with tiny, glittering particles like a digital galaxy. The overall style is clean, modern, and immersive." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZIv7H0Q8C15jPUyVk2d_XOOGIi2Y3byIf52AarPia32zSC-MAlZ7o6atKvLCca7SGgEDazzImKxa4r8-NfVR835mtc9j8Zz-uzSA_qo5jcnE3AfubmcdgNYYjH2XR0SJff3JxX55CWLcgyCueSecIoncpKwIi_xggi5CcJgHSq5ui-bVOjJL9AfG5R0ekFtoAp4kHopQFvQaPbZemT9kx6U35H5loYNsFSrF5L_2oj9fxKUhkI9ewCtMnM7wEM9JgDD4yLOJ9wfQ"/>
</div>
<span class="font-label-sm text-label-sm text-primary mb-xs">AMBIENT</span>
<h5 class="font-headline-sm text-headline-sm text-on-surface">ETHER_FLOW</h5>
<p class="font-label-sm text-on-surface-variant mt-base">620K Listeners</p>
</div>
<!-- Artist Card 5 -->
<div class="group glass-panel rounded-xl p-md flex flex-col items-center text-center artist-card cursor-pointer">
<div class="w-32 h-32 rounded-full p-1 neon-border-secondary mb-md">
<img class="w-full h-full rounded-full object-cover" data-alt="A dynamic shot of a DJ performing at a futuristic console with glowing touch-sensitive interfaces. The lighting is a chaotic but beautiful mix of magenta and violet. Blurred crowds and laser beams in the background create a sense of scale and movement. The artist is focused, their silhouette defined by a vibrant magenta rim light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOyAWLMdxWFp--N_mQb_lB9ShyPSVqFULi2KXCUcvIRrdfsgBdGLvKAXk__OmFcu_q1V8Ig3231vi-Jec6xAuEnASzudVY-gNGBJItYpcMoxi9zHXUmopEKQGhBvpk5FsefBFy_wrziRhpwiqqjSIXoJWiaRzZlJ_PbFDcNF9SfojdfeWAWu3QE7vOS0YBMubapBcyT45EQh8s_0r9hpkvgaRR5ctxvD93Po7BfdhEksmWKBqLxg0GCGKqcd5JMu79xejByA7weBM"/>
</div>
<span class="font-label-sm text-label-sm text-secondary mb-xs">HARDSTYLE</span>
<h5 class="font-headline-sm text-headline-sm text-on-surface">CORE_DUMP</h5>
<p class="font-label-sm text-on-surface-variant mt-base">2.1M Listeners</p>
</div>
</div>
</section>
<!-- Secondary Sections Split -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-xl">
<!-- Following Section -->
<section class="lg:col-span-2">
<div class="flex justify-between items-end mb-md">
<h3 class="font-headline-sm text-headline-sm text-primary-fixed">Your Circle</h3>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors underline" href="#">VIEW ALL</a>
</div>
<div class="flex gap-gutter overflow-x-auto pb-4 scroll-hide">
<!-- Following Card 1 -->
<div class="min-w-[140px] flex flex-col items-center group cursor-pointer">
<div class="w-24 h-24 rounded-full border-2 border-primary/20 group-hover:border-primary-fixed transition-all p-1 mb-base">
<img class="w-full h-full rounded-full object-cover" data-alt="A minimalist circular profile image of a digital artist with a bright cyan light strip across their eyes. The background is a soft, dark gradient. The style is very clean and focused, using high-intensity cyan accents against a deep neutral backdrop, following the glassmorphism and retro-futuristic theme." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbcV5Gaqx4Ge6jOMDAKEJOz0X2vtsxCXvEOQ7vHS-5jw8K_4dM78P-7Xhte3FxIRS9mbS2oLI7tTXk_EYpmjDHWVTkFXp42zj3jtrzY6FT_RExL0zqehVM2CFChNcRNvqyteod6PoAB50WYQAhlin_VJC5HTqOgqEI_43AFHpWw7C05jYSxRGd0xoDV1mrpKLiVVb9P9e76IlAjD4dKTG0bdNSud5xk_7P7ijXLjHrmj6a6nSgJBjLgxz8Kz91BUOhyiDpB8Wk6SQ"/>
</div>
<p class="font-label-md text-label-md text-on-surface group-hover:text-primary-fixed transition-colors text-center">Sync_Error</p>
<p class="text-[10px] text-on-surface-variant tracking-widest">LIVE NOW</p>
</div>
<!-- Following Card 2 -->
<div class="min-w-[140px] flex flex-col items-center group cursor-pointer">
<div class="w-24 h-24 rounded-full border-2 border-primary/20 group-hover:border-primary-fixed transition-all p-1 mb-base">
<img class="w-full h-full rounded-full object-cover" data-alt="A portrait of a male electronic music artist in a high-collar jacket with magenta glowing zippers. He is standing in a rainy cyberpunk alleyway illuminated by pink neon signs. The image is atmospheric, nocturnal, and highly detailed, fitting a premium music ecosystem's avant-garde personality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi0Bx3HZVi-aSsO0ca1udmWE6hGg9eRaQgC7oa7gLvh-kiHz2DXhU9SnCjsxu1MI8OgXxJ0--OOiI9mSc5nxPX2B4DriywEir5L_KmTnQae0uWJDF30rleVm6powRkzSCEUHEcejAreIyzP09rP0rUQAe43lhTCAAVa4ykjTf7Y5KUqNgQHxpjv-CfwJPZvwwyCsW5b4MwMrMoAhJ52LEcoOvbaw157sKln3l9Ep2I4DtWsJVrdyoP4vLdNIDVr-_pMi0OA3RYGu0"/>
</div>
<p class="font-label-md text-label-md text-on-surface group-hover:text-primary-fixed transition-colors text-center">Bit_Racer</p>
<p class="text-[10px] text-on-surface-variant tracking-widest">POSTED 2h AGO</p>
</div>
<!-- Following Card 3 -->
<div class="min-w-[140px] flex flex-col items-center group cursor-pointer">
<div class="w-24 h-24 rounded-full border-2 border-primary/20 group-hover:border-primary-fixed transition-all p-1 mb-base">
<img class="w-full h-full rounded-full object-cover" data-alt="A close-up of an artist's hands manipulating a glowing transparent glass touch interface that displays complex waveforms in neon green and cyan. The lighting is dark and focused, with sharp highlights on the skin and the glass edges. It evokes a sense of cutting-edge technological sophistication and creative flow." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtxzzGa6Qo4fhZ-2r5uxGRZB-O-WTG9ViSiu5im82WYt1tEjrMFJJ2o2Tx931oy6mNR33vercgxxoMqtNMTkO4MX9S6NCwHNnkVfEM3MThOmzcotxIFEZ1hbCjO6tAf3fWHfR6LyRmcI2DHxC7HjZPEfl0FquZ3c0taOIUa6vdEnDw_whiK-fUfXZrbZbuVfoHpegEA5KBLADnJpCUIocZeoC8W7Pk6_PUSQECpRYzn9NJw_M_1i9Af1N9-pitPCwAhlgC4_1jM44"/>
</div>
<p class="font-label-md text-label-md text-on-surface group-hover:text-primary-fixed transition-colors text-center">Wave_Form</p>
<p class="text-[10px] text-on-surface-variant tracking-widest">ACTIVE</p>
</div>
<!-- Following Card 4 -->
<div class="min-w-[140px] flex flex-col items-center group cursor-pointer">
<div class="w-24 h-24 rounded-full border-2 border-primary/20 group-hover:border-primary-fixed transition-all p-1 mb-base">
<img class="w-full h-full rounded-full object-cover" data-alt="A futuristic portrait of an artist wearing a semi-transparent hooded jacket with internal fiber-optic lighting in magenta. The face is partially shadowed, creating a mysterious nocturnal vibe. The background is a blurred cityscape of glowing skyscrapers. The aesthetic is high-energy, digital, and youth-centric." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM6swBuW95bFQXZyYfkNogsNfvcAXUoLA33y-3OC5nvOvYpyYnXVah8XbEGRkTBrDabJt6aZ7GKcj9-dOJQkO5JchKVo1NDY7ehXP5pa6uJ9G8liQk3bR4l55hqE2HecYtg-gYVuF6Tv2qMNOHIMmbb03MOLxjpBHu8fyutmEekx9dGMzfQKg8MUZiR0oAyvxh6mKhnd_C5wY94acsvWt_KrfXG74ugw6w1dAfDKg6OBPY0BUTIfzA2Brta_HgAIJXe2ABvCqj1cM"/>
</div>
<p class="font-label-md text-label-md text-on-surface group-hover:text-primary-fixed transition-colors text-center">Data_Drift</p>
<p class="text-[10px] text-on-surface-variant tracking-widest">IDLE</p>
</div>
</div>
</section>
<!-- Global Top Leaderboard -->
<section>
<div class="flex justify-between items-end mb-md">
<h3 class="font-headline-sm text-headline-sm text-secondary">Global Top</h3>
<span class="font-label-sm text-label-sm text-on-surface-variant">WEEKLY</span>
</div>
<div class="space-y-base">
<!-- Rank 1 -->
<div class="glass-panel p-base flex items-center gap-md group hover:bg-white/10 transition-colors cursor-pointer rounded-lg border-l-4 border-primary">
<span class="font-label-md text-label-md text-primary w-4">01</span>
<div class="w-12 h-12 rounded-full overflow-hidden border border-primary/30">
<img class="w-full h-full object-cover" data-alt="A small, sharp circular avatar of an artist against a bright cyan background. The artist is wearing reflective shades that mirror a digital audio visualizer. The style is ultra-modern, crisp, and high-contrast, designed for a leaderboard component in a music application." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfr-TTg2E_dGTlxgrCpQkMvWYvc4nkSLmrSXxXgtvFqEXPDJWydWLvpHXuxzgOvdzB5B8LwAt8sdhs4DQlPJ9BII0ZHSoUyGr3ycnny8hTYyUxqYMoWV8Ho7lXbOgx9ssY04FA3IBhmrgNUbZdPWVo2x_XUE7DMXnM0B2yW94ITKoYfi31GylAooenxeSxqEwRyQPgD-20865HJxP1IdKsE9VPmWBlGBpqdueitB_xC2F_DNbZoJrkEDv8xsouEivrWOmDsBeWZ3U"/>
</div>
<div class="flex-grow">
<p class="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">VØID_WALKER</p>
<p class="text-[10px] text-on-surface-variant">Techno</p>
</div>
<span class="material-symbols-outlined text-primary text-sm">trending_up</span>
</div>
<!-- Rank 2 -->
<div class="glass-panel p-base flex items-center gap-md group hover:bg-white/10 transition-colors cursor-pointer rounded-lg">
<span class="font-label-md text-label-md text-on-surface-variant w-4">02</span>
<div class="w-12 h-12 rounded-full overflow-hidden border border-secondary/30">
<img class="w-full h-full object-cover" data-alt="A small, vivid circular avatar of a DJ with bright magenta hair and a minimalist white headset. The lighting is high-key and electric, fitting the high-energy rave culture aesthetic. The image is clean and optimized for small UI elements, maintaining strong brand colors of cyan and magenta." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0jrFvmSGegj_41NuSaODMufGEcT_p4JXhXpA5mMX4rIndCBXAqV53pGccJOpvoKSaQUOADXIrJ7abeOsIo-cUK40jixM1qVyMy-sKwPJcpH2C-aAUofEGD9nbZlNFdBPHKriMTVSwzLJnRFYyRnS7yTwak5u_ZiQxuqIVWzGuHxH8hFBNwA7Q4dJ5n_SpA34_202_USN9OBhGPEt-7uY_qU954HJGZy5R5y21PZg9Au2DgBla6ycjiBSvTt8zv0OIFYFlD1ZOX_k"/>
</div>
<div class="flex-grow">
<p class="font-label-md text-label-md text-on-surface group-hover:text-secondary transition-colors">CORE_DUMP</p>
<p class="text-[10px] text-on-surface-variant">Hardstyle</p>
</div>
<span class="material-symbols-outlined text-secondary text-sm">trending_up</span>
</div>
<!-- Rank 3 -->
<div class="glass-panel p-base flex items-center gap-md group hover:bg-white/10 transition-colors cursor-pointer rounded-lg">
<span class="font-label-md text-label-md text-on-surface-variant w-4">03</span>
<div class="w-12 h-12 rounded-full overflow-hidden border border-primary/30">
<img class="w-full h-full object-cover" data-alt="A small circular avatar of an artist in a high-tech studio with glowing blue screens reflected on their face. The composition is tight and focused, emphasizing the digital cockpit layer and nocturnal theme of the music platform. Colors are deep neutrals with vibrant cyan highlights." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC93gSmZfuA0wSPUVsT6GvlC5CcP32vQMP7jxOM1dgvKpPh2_RF3cYmfhLUihUDSJjJ1KXG3Tz2whIvaX1lWHGdhnQxDWdupNjJoulFKgynguFFI7qj6OsJ6vs7wlmbBkfpBSzViGikgdPI4ocVqq654O2HRv5Uxk8xLk2IfEOWshx_ldRdCKbgEDR_HlDs5bSmmO14zMqKyRD_AdxFnavlyxYiEntBW1o-0v05RfdfwOoD8EJWzUiMjORj6NjhPhJp2u6yaZboP9Q"/>
</div>
<div class="flex-grow">
<p class="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">NEON_PULSE</p>
<p class="text-[10px] text-on-surface-variant">Drum &amp; Bass</p>
</div>
<span class="material-symbols-outlined text-on-surface-variant text-sm">horizontal_rule</span>
</div>
</div>
</section>
</div>
</main>
<!-- Music Player persistent glass bar -->
<div class="fixed bottom-0 left-64 right-0 h-20 glass-panel border-t border-primary/10 px-md flex items-center justify-between z-50">
<div class="flex items-center gap-md w-1/4">
<div class="w-12 h-12 rounded bg-surface-container-high overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A square album artwork showing an abstract 3D landscape of chrome mountains under a neon cyan sky. The style is retro-futuristic and hyper-clean, with high-intensity luminance and refractive textures that suggest a sophisticated digital world. The artwork is small but visually striking." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo-qGuDKVB67vlNbfyCcPZfdRLchNfR6j92kz0EQv0OMls159eRGKaIuXCaTMXWVAzNEtkC0sdZ9GhF-xBu1FQ-qzjnXKjIyWpg1pHJaWi4xG4sYJrkhPXAIk-bSqP_bjcEgDSZTUdTgVxytNYA0wCSMOyIRiC74KvvN5wgZ0VTyGDxspudMIBe2BFfrBzRhVOHNlT9QjapfE12Hox5aQP56rPRY_tzz027RnL3IbVvn3XS7kLFqR_KE4g9iPvF3RqrpjztLOvpng"/>
</div>
<div>
<p class="font-label-md text-label-md text-primary truncate">Cybernetic Dawn</p>
<p class="font-label-sm text-label-sm text-on-surface-variant">VØID_WALKER</p>
</div>
</div>
<div class="flex flex-col items-center gap-xs flex-grow max-w-xl">
<div class="flex items-center gap-gutter">
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">shuffle</button>
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">skip_previous</button>
<button class="w-10 h-10 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-[0_0_15px_rgba(0,219,233,0.6)]">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
</button>
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">skip_next</button>
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">repeat</button>
</div>
<div class="w-full flex items-center gap-base">
<span class="text-[10px] font-label-sm text-on-surface-variant">2:14</span>
<div class="flex-grow h-[3px] bg-surface-container-highest rounded-full relative overflow-hidden">
<div class="absolute left-0 top-0 h-full w-1/3 bg-primary-fixed shadow-[0_0_8px_#7df4ff]"></div>
</div>
<span class="text-[10px] font-label-sm text-on-surface-variant">5:42</span>
</div>
</div>
<div class="flex items-center justify-end gap-md w-1/4">
<span class="material-symbols-outlined text-on-surface-variant">volume_up</span>
<div class="w-24 h-[3px] bg-surface-container-highest rounded-full relative">
<div class="absolute left-0 top-0 h-full w-3/4 bg-primary-fixed"></div>
</div>
<span class="material-symbols-outlined text-on-surface-variant">queue_music</span>
</div>
</div>
<!-- Micro-interactions Script -->
<script>
        document.querySelectorAll('.artist-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transition = 'all 0.4s ease';
                card.style.boxShadow = '0 0 30px rgba(0, 219, 233, 0.2)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.boxShadow = 'none';
            });
        });

        // Add visualizer bars behind the player
        const visualizer = document.createElement('div');
        visualizer.className = "fixed bottom-0 left-64 right-0 h-24 pointer-events-none flex items-end justify-center gap-1 opacity-20 z-40";
        for(let i=0; i<60; i++) {
            const bar = document.createElement('div');
            bar.className = "w-1 bg-primary rounded-t-full transition-all duration-300";
            bar.style.height = Math.random() * 80 + "%";
            visualizer.appendChild(bar);
        }
        document.body.appendChild(visualizer);

        setInterval(() => {
            visualizer.childNodes.forEach(bar => {
                bar.style.height = Math.random() * 80 + "%";
            });
        }, 150);
    </script>
</body></html>